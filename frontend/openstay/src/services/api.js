export const MakePayment = async (paymentData) => {
    try {
        //envio de solicitud al backend para iniciar el pago
        const response = await fetch('http://localhost:5000/api/payments/start', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData),
        });
        //verificacion de respuesta
        if(!response.ok) {
            throw new Error('Failed to initiate payment');
        }
        //obtencion de datos de la respuesta
        const data = await response.json();
        //retorno de datos
        return {
            redirectUrl: data.redirectUrl,
            
        }

    } catch (error) {
        console.error('Error making payment:', error);
        throw error;
    }
};
