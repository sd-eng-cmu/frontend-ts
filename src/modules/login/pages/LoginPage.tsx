import { config } from "core/config";
import styled from "styled-components";

function LoginPage() {
  return (
    <Container>
      <Login>
        <img
          className="object-scale-down w-[20em] mx-auto mt-[-2em]"
          src="/images/logoFaculty.png"
        />
        <div className="topic-container">
          <p className="topic-text text-2xl md:text-3xl">
            ระบบจัดการข้อมูลใบคำขอทั่วไป
          </p>
          <p className="topic-text-faculty text-base md:text-[1.35em]">
            คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่
          </p>
        </div>
        <div className="login-text mt-16">ลงชื่อเข้าสู่ระบบ</div>
        <a className="login-button" href={config.cmuOAuthUrl} target="_self">
          <img
            src="/images/emblemcmu.png"
            alt="emblem"
            className="object-scale-down w-8"
          />
          <p>Login with CMU Account</p>
        </a>
      </Login>
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = styled.div`
  width: 90%;
  height: 70%;
  border-radius: 1.5em;
  background: #fff;
  filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.25));

  .topic-container {
    text-align: center;
    color: #68010e;
    margin-top: -3em;
  }

  .topic-text {
    font-weight: 600;
  }

  .topic-text-faculty {
    font-weight: 400;
  }

  .login-text {
    text-align: center;
    color: #000000;
    font-size: 1.5em;
  }

  .login-button {
    margin: 0 auto;
    margin-top: 1.25em;
    padding: 0.8em 1.1em;
    max-width: max-content;
    border-radius: 5px;
    background: linear-gradient(
        90deg,
        rgba(237, 242, 248, 0.35) 1.83%,
        rgba(237, 242, 248, 0) 76.08%
      ),
      var(--purple-5-purple, #6869ac);
    align-self: center;
    justify-content: center;
    align-items: center;
    color: white;
    display: flex;
    gap: 0.5em;
    font-size: 1.3em;
  }
`;
