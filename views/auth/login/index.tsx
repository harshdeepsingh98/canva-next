/* eslint-disable no-console */
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
// import axios from "axios";
import {
  InputContainer,
  LoginContainer,
  ErrorMessageContainer,
  ButtonContainer,
  BottomContainer
} from 'styles/views/auth/login'

const LoginView: React.FC = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async () => {
    // Clear previous errors
    setError('')

    // Validate email field
    if (!email) {
      setError('Email is required.')
      return
    }

    try {
      // Dummy API call
      // const response = await axios.post("https://dummyapi.io/auth/login", {
      //   email,
      // });

      // Process response
      // console.log("API Response:", response.data);

      router.push('/auth/magic_link_login')
    } catch (error) {
      console.error('API Error:', error)
      setError('An error occurred. Please try again.')
    }
  }

  return (
    <LoginContainer>
      <div>
        <h3>Login</h3>
        <p style={{ cursor: 'pointer' }}>
          New user ?{' '}
          <b
            style={{ marginLeft: '3px' }}
            onClick={() => router.push('/auth/register')}
          >
            Create an account
          </b>{' '}
        </p>
        <InputContainer
          type="email"
          placeholder="Email Address*"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {error && <ErrorMessageContainer>{error}</ErrorMessageContainer>}
      </div>
      <BottomContainer>
        <ButtonContainer onClick={handleSubmit}>
          Login
          <Image
            src="https://studio.proteanx.io/static/media/arrow_protean.36858cb62c52a21590b7ef023dfa1357.svg"
            alt="Arrow icon"
            width={15}
            height={15}
          />
        </ButtonContainer>
        <Image
          src="https://studio.proteanx.io/static/media/brand_logo_xstudio.b9f6914043c5ebf85522fbe305bc8a47.svg"
          alt="Brand logo"
          width={100}
          height={50}
        />
      </BottomContainer>
    </LoginContainer>
  )
}

export default LoginView
