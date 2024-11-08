/* eslint-disable no-console */
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
// import axios from "axios";
import {
  LoginContainer,
  ButtonContainer,
  BottomContainer,
  InputContainer,
  ErrorMessageContainer
} from 'styles/views/auth/changeEmail'

const ChangeEmailView: React.FC = () => {
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
      router.push('/auth/magic_link_register')
    } catch (error) {
      console.error('API Error:', error)
      setError('An error occurred. Please try again.')
    }
  }

  return (
    <LoginContainer>
      <div>
        <h1>
          Change Email <br />
          Address
        </h1>
        <h5>Please enter your new email address to receive the magic link</h5>
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
          Send Magic Link
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

export default ChangeEmailView
