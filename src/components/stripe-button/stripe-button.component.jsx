import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100 // stripe recebe o valor em centavos
  const publishableKey = 'pk_test_pvLCnrPbcNVSRfKyvpUluBg100voKiMQGi'
  // vazio pois não tenho bak para processar o pagamento
  const onToken = token => {
    console.log(token)
    window.alert('Pago com sucesso!')
  }

  // https://github.com/garouxl/react-stripe-checkout para todos os atribs:
  return (
    <StripeCheckout
      label='Paga lá'
      name='Coroa Rouparia Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Seu total é ${price}`}
      amount={priceForStripe}
      panelLabel='Paga lá'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
