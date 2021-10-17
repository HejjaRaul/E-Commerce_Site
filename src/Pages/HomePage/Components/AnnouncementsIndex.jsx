import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #ff6962;
  color: #ffffff;
  display: flex;
  align-text: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500px;
`;

export default function AnnouncementsIndex() {
  return <Container>Super Deal! Free Shipping at Orders Over 40€</Container>;
}
