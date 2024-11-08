/* eslint-disable no-console */
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {
  InputContainer,
  LoginContainer,
  ErrorMessageContainer,
  ButtonContainer,
  BottomContainer
} from 'styles/views/auth/register'

const RegisterView: React.FC = () => {
  const router = useRouter()
  const [inputValues, setInputValues] = useState({
    name: '',
    mobile: '',
    org: '',
    email: ''
  })
  const [error, setError] = useState({
    name: '',
    mobile: '',
    org: '',
    email: ''
  })

  const handleSubmit = async () => {
    // Clear previous errors
    setError({
      name: '',
      mobile: '',
      org: '',
      email: ''
    })

    // Validate name input
    if (!inputValues.name) {
      setError(prev => ({ ...prev, name: 'Name is required' }))
      return // Stop the function execution
    }

    if (!inputValues.mobile || !/^\d{10}$/.test(inputValues.mobile)) {
      setError(prev => ({
        ...prev,
        mobile: 'Please enter a valid mobile number'
      }))
      return // Stop the function execution
    }

    if (!inputValues.org) {
      setError(prev => ({
        ...prev,
        org: 'Please enter organisation name'
      }))
      return // Stop the function execution
    }

    if (!inputValues.email) {
      setError(prev => ({ ...prev, email: 'Please enter a valid email id' }))
      return // Stop the function execution
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
      //   setError("An error occurred. Please try again.");
    }
  }

  return (
    <LoginContainer>
      <div>
        <h3>Sign Up</h3>
        <p>
          Already have an account ?{' '}
          <b
            style={{ marginLeft: '3px', cursor: 'pointer' }}
            onClick={() => router.push('/auth/login')}
          >
            Login{' '}
          </b>
        </p>
        <InputContainer
          type="text"
          placeholder="Name*"
          value={inputValues.name}
          onChange={e =>
            setInputValues({ ...inputValues, name: e.target.value })
          }
        />
        {error && <ErrorMessageContainer>{error.name}</ErrorMessageContainer>}
        <InputContainer
          type="tel"
          placeholder="Mobile*"
          value={inputValues.mobile}
          onChange={e =>
            setInputValues({ ...inputValues, mobile: e.target.value })
          }
        />
        {error && <ErrorMessageContainer>{error.mobile}</ErrorMessageContainer>}
        <InputContainer
          type="text"
          placeholder="Organisation Name*"
          value={inputValues.org}
          onChange={e =>
            setInputValues({ ...inputValues, org: e.target.value })
          }
        />
        {error && <ErrorMessageContainer>{error.org}</ErrorMessageContainer>}
        <InputContainer
          type="email"
          placeholder="Email*"
          value={inputValues.email}
          onChange={e =>
            setInputValues({ ...inputValues, email: e.target.value })
          }
        />
        {error && <ErrorMessageContainer>{error.email}</ErrorMessageContainer>}
        <p>
          By signing up, I agree with{' '}
          <a href="" style={{ color: 'white', marginLeft: '5px' }}>
            <u>Terms & Conditions</u>
          </a>
        </p>
      </div>
      <BottomContainer>
        <ButtonContainer onClick={handleSubmit}>
          Create Account
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

export default RegisterView
