import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { email, password} = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (error) {
      alert(`There was an error: ${error}`)
    }
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render () {
    return (
      <div className='sign-in'>
        <h2 className='title'>Eu já tenho uma conta</h2>
        <span>Entrem com seu e-mail e sua senha</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='email'
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required='required'
          />
          <FormInput
            label='senha'
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required='required'
          />
          <div className="buttons">
            <CustomButton type='submit' > Entre </CustomButton>
            <CustomButton
            onClick={ signInWithGoogle } isGoogleSignIn
            >
            Entre com Google ID
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
