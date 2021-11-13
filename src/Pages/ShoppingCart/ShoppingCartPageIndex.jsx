import styled from "styled-components";
import AnnouncementsIndex from "./Components/AnnouncementsIndex";
import TopBarIndex from "./Components/TopBarIndex";

const Container = styled.div`
  /* ... */
`;

export default function ShoppingCartPageIndex() {
  return (
    <Container>
      <TopBarIndex />
      <AnnouncementsIndex />
    </Container>
  );
}
