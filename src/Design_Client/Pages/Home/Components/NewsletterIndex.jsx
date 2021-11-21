import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

//<---------------------------------------Start of CSS - styling------------------------------------------------>

const Container = styled.div`
  height: 60vh;
  background-color: #ffe6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 30%;
  height: 40px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightblue;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 10px;
`;

const Button = styled.button`
  flex: 1;
  cursor: pointer;
  border: none;
  background-color: #77d2ff;
  color: #ffffff;
`;

//<---------------------------------------End of CSS - styling------------------------------------------------>

//<---------------------------------------Start of HTML - coding---------------------------------------------->

export default function NewsletterIndex() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates for your favorite products</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

//<---------------------------------------End of HTML - coding----------------------------------------------->
