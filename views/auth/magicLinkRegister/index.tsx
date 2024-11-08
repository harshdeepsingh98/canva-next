// import axios from "axios";
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  LoginContainer,
  ButtonContainer,
  BottomContainer
} from 'styles/views/auth/magicLinkRegister'

const MagicLinkRegisterView: React.FC = () => {
  const router = useRouter()
  return (
    <LoginContainer>
      <div>
        <h1>
          Magic link on <br />
          its way!
        </h1>
        <h5>
          An activation email has been sent to <span>a@gmail.com</span>. <br />
          To securely activate your account, please click on the provided link
          within the next 24 hours.
        </h5>
        <h5 onClick={() => router.push('/auth/change_email')}>
          <Image
            src="https://studio.proteanx.io/static/media/pen.22b22ce0a7b67c43fc5a61916f05ab13.svg"
            alt="Arrow icon"
            width={10}
            height={10}
            style={{ marginRight: '5px' }}
          />
          Edit Email Address
        </h5>
      </div>
      <BottomContainer>
        <ButtonContainer onClick={() => router.push('/auth/change_email')}>
          Haven’t received a link, resend
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

export default MagicLinkRegisterView
