import styled from "styled-components";
import AnnouncementsIndex from "./Components/AnnouncementsIndex";
import FilterIndex from "./Components/FilterIndex";
import TopBarIndex from "./Components/TopBarIndex";
import ProductListIndex from "./Components/ProductListIndex";
import NewsletterIndex from "./Components/NewsletterIndex";
import FooterIndex from "./Components/FooterIndex";

//<---------------------------------------Start of CSS - styling------------------------------------------------>

const Container = styled.div`
  /* ... */
`;

const Title = styled.h1`
  margin: 20px;
`;

//<---------------------------------------End of CSS - styling------------------------------------------------>

//<---------------------------------------Start of HTML - coding---------------------------------------------->

export default function ProductsListIndex() {
  return (
    <Container>
      <TopBarIndex />
      <AnnouncementsIndex />
      <Title>Dresses</Title>
      <FilterIndex />
      <ProductListIndex />
      <NewsletterIndex />
      <FooterIndex />
    </Container>
  );
}

//<---------------------------------------End of HTML - coding----------------------------------------------->
