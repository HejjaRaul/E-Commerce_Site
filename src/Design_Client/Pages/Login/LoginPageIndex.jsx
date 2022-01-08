import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.5)),
  url(https://i.ibb.co/CbtcKtN/photo-1483985988355-763728e1935b-1-1.jpg) center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #ffffff;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 350;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #ffe6e6;
  color: black;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 10px 0;
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
`;

export default function LoginPageIndex() {
    return (
        <Container>
            <Wrapper>
                <Title>Log in</Title>
                <Form>
                    <Input placeholder="email"></Input>
                    <Input placeholder="password"></Input>
                    <Button>Login</Button>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    );
}
