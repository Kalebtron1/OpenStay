import { createAuthenticatedClient, isFinalizedGrant } from "@interledger/open-payments";
import fs from "fs";
import crypto from "crypto"

export const startPayment = async (req, res) => {
    
    try {
        const {amount} = req.body;
        const amountNumber = Number(amount);
        const amountRenter = Math.round(amountNumber * 100 * 0.9).toString();
        const amountPlatform = Math.round(amountNumber * 100 * 0.1).toString();
        console.log(amountNumber,amountPlatform,amountRenter);

        const privateKey = fs.readFileSync('private.key', 'utf8');
        const client = await createAuthenticatedClient({
            walletAddressUrl: "https://ilp.interledger-test.dev/openstayclient",
            privateKey: privateKey,
            keyId:"ca806e0d-db95-4698-a961-4642261d4c79"
        });
        //usuario
        const customerAddress = await client.walletAddress.get({
            url: "https://ilp.interledger-test.dev/pesosalan"
        });
        //arrendador
        const renterAddress = await client.walletAddress.get({
            url: "https://ilp.interledger-test.dev/renter"
        });
        //plataforma
        const platformAddress = await client.walletAddress.get({
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
        if(!isFinalizedGrant(renterIncomingPaymentGrant)){
            throw new Error("Se espera finalice la concesion")
        }
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
        if(!isFinalizedGrant(platformIncomingPaymentGrant)){
        throw new Error("Se espera finalice la consesion");
        }
        
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
                    assetCode: "USD",
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
                    assetCode: "USD",
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
        const NumbercombinedQuoteAmount = Number(renterQuote.debitAmount.value) + 
                                    Number(platformQuote.debitAmount.value)
        const combinedQuoteAmount  = NumbercombinedQuoteAmount.toString()
        console.log(renterQuote,platformQuote)
        console.log(combinedQuoteAmount);

        const NONCE = crypto.randomUUID();
        //concesion de pago saliente en el usuario
        const customerOutgoingPaymentGrant =  await client.grant.request(
            {
                url: customerAddress.authServer
            },
            {
                access_token: {
                    access: [
                        {
                            type:'outgoing-payment',
                            actions: ['create'],
                            limits: {
                                debitAmount: {
                                    assetCode: "MXN",
                                    assetScale: 2,
                                    value: combinedQuoteAmount
                                }
                            },
                            identifier: customerAddress.id
                        }                        
                    ]
                },
                interact: {
                    start: ['redirect'],
                    finish:{
                        method : 'redirect',
                        uri: '',
                        nonce : NONCE
                    }
                }
            }
        )
        



        res.json({
            outgoingPaymentGrant : customerOutgoingPaymentGrant,
            platformQuote: platformQuote,
            renterQuote: renterQuote,
            combinedQuoteAmount: combinedQuoteAmount,
            redirectUrl: customerOutgoingPaymentGrant.interact.redirect, 
            renterAddress: renterAddress,
            platformAddress: platformAddress
        });
    



    }catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }

};


export const finishPayment = async (req,res) => {
    try{    
        const {interact_ref,hash} = req.body;
        const privateKey = fs.readFileSync('private.key', 'utf8');
        const client = await createAuthenticatedClient({
            walletAddressUrl: "https://ilp.interledger-test.dev/openstayclient",
            privateKey: privateKey,
            keyId:"ca806e0d-db95-4698-a961-4642261d4c79"
        });
        const customerOutgoingPaymentGrant = await client.grant.continue(
            {
                url: pendingCustomerOutgoingPaymentGrant.continue.uri,
                accessToken: pendingCustomerOutgoingPaymentGrant.continue.access_token.value
            },
            {
                interact_ref: interactRef
            }
        )
    }catch (error){
        console.error(error);
        res.status(500).json({error:error.message});
    }

};