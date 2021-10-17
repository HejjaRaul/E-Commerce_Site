import React from "react";
import styled from "styled-components";

//<---------------------------------------Start of CSS - styling------------------------------------------------>

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

//<---------------------------------------End of CSS - styling------------------------------------------------>

//<---------------------------------------Start of HTML - coding---------------------------------------------->

export default function AnnouncementsIndex() {
  return <Container>Super Deal! Free Shipping on Orders Over 40€</Container>;
}

//<---------------------------------------End of HTML - coding---------------------------------------------->
