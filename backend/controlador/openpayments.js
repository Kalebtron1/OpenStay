import { createAuthenticatedClient, isFinalizedGrant } from "@interledger/open-payments";
import fs from "fs";

export const startPayment = async (req, res) => {
    
    try {

        const amount = req.body;
        const amountRenter = (amount)*.95 ;
        const amountPlatform = (amount)*.05;
        
        const privateKey = fs.readFileSync('private.key', 'utf8');
        const client = await createAuthenticatedClient({
            walletAddressUrl: "https://ilp.interledger-test.dev/openstayclient",
            privateKey: privateKey,
        });
        //usuario
        const customerAddress = await client.walletAddress.get({
            url: "https://ilp.interledger-test.dev/pesosalan"
        });
        //arrendador
        const renterAddress = await client.walletAddress.get({
            url: "https://ilp.interledger-test.dev/c3e0e360"
        });
        //plataforma
        const platformAddress = await ClientRequest.walletAddress.get({
            url: "https://ilp.interledger-test.dev/openstayclient"
        });

        // concesion pago entrante en arrendador
        const renterIncomingPaymentGrant = await client.grant.request(
            {
            url: renterAddress.authServer
            },
            {
                access_token: {
                    access: [
                        {
                        type: "incoming-payment",
                        actions: ["create"],
                        },
                    ],
                },
            },
        )
        // concesion pago entrante en plataforma
        const platformIncomingPaymentGrant = await client.grant.request(
            {
                url: platformAddress.authServer
            },
            {
                access_token: {
                    access: [
                        {
                        type: "incoming-payment",
                        actions: ["create"],
                        },
                    ],
                },
            },
        );

        //pago entrante en arrendador
        const renterIncomingPayment = await client.incomingPayment.create(
            {
                url: renterAddress.resourceServer,
                accessToken: renterIncomingPaymentGrant.access_token.value
            },
            {
                walletAddress: renterAddress.id,
                incomingAmount: {
                    value: amountRenter,
                    assetCode: EUR,
                    assetScale: 2
                },
            },
        )
        //pago entrante en plataforma
        const platformIncomingPayment = await client.incomingPayment.create(
            {
                url: platformAddress.resourceServer,
                accessToken: platformIncomingPaymentGrant.access_token.value
            },
            {
                walletAddress: platformAddress.id,
                incomingAmount: {
                    value: amountPlatform,
                    assetCode: USD,
                    assetScale: 2
                },

            }
        )
        //concesion de cuota de usuario
        const customerQuouteGrant = await client.grant.request(
            {
                url: customerAddress.authServer
            },
            {
                access_token: {
                    access: [
                        {
                            type: 'quote',
                            actions: ['create']
                        }
                    ]
                }
            }
        )
        //cuota del arrendador
        const renterQuote = await client.quote.create(
            {
                url: customerAddress.resourceServer,
                accessToken: customerQuouteGrant.access_token.value
            },
            {
               method: 'ilp',
               walletAddress: customerAddress.id,
               receiver: renterIncomingPayment.id,
            }
        )
        //cuota de la plataforma
        const platformQuote = await client.quote.create(
            {
                url: customerAddress.resourceServer,
                accessToken: customerQuouteGrant.access_token.value
            },
            {
               method: 'ilp',
               walletAddress: customerAddress.id,
               receiver: platformIncomingPayment.id,
            }
        )
        //cuota combinada
        const combinedQuoteAmount = renterQuote.debitAmount.value + platformQuote.debitAmount.value
        //concesion de pago saliente en el usuario
        const customerOutgoingPaymentGrant =  await client.grant.request(
            {
                url: customerAddress.authServer
            },
            {
                access_token: {
                    access: [
                        {
                            identifier: customerAddress.id,
                            type:'outgoing-payment',
                            actions: ['create'],
                            limits: {
                                debitAmount: {
                                    assetCode: MXN,
                                    assetScale: 2,
                                    value: combinedQuoteAmount,
                                }
                            }
                        }                        
                    ]
                },
                interact: {
                    start: ['redirect']
                }
            }
        )




    }catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }

};

export const finishPayment = async (req,res) => {

};