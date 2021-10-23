import styled from "styled-components";
import AnnouncementsIndex from "./Components/AnnouncementsIndex";
import TopBarIndex from "./Components/TopBarIndex";

//<---------------------------------------Start of CSS - styling------------------------------------------------>

const Container = styled.div`
  /* ... */
`;

//<---------------------------------------End of CSS - styling------------------------------------------------>

//<---------------------------------------Start of HTML - coding---------------------------------------------->

export default function ProductsListIndex() {
  return (
    <Container>
      <TopBarIndex />
      <AnnouncementsIndex />
    </Container>
  );
}

//<---------------------------------------End of HTML - coding----------------------------------------------->
