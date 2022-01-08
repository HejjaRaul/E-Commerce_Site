import styled from "styled-components";

//<---------------------------------------Start of CSS - styling------------------------------------------------>

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
  width: 40%;
  padding: 20px;
  background-color: #ffffff;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 350;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 10px 0;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 18px;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #ffe6e6;
  color: black;
  cursor: pointer;
`;

//<---------------------------------------End of CSS - styling------------------------------------------------>

//<---------------------------------------Start of HTML - coding---------------------------------------------->

export default function RegisterPageIndex() {
    return (
        <Container>
            <Wrapper>
                <Title>Create an account</Title>
                <Form>
                    <Input placeholder="name"></Input>
                    <Input placeholder="last name"></Input>
                    <Input placeholder="email"></Input>
                    <Input placeholder="username"></Input>
                    <Input placeholder="password"></Input>
                    <Input placeholder="confirm password"></Input>
                    <Agreement>
                        By creating an account, I conset to the proccessing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    );
}

//<---------------------------------------End of HTML - coding----------------------------------------------->
