import styled from "styled-components";
import AnnouncementsIndex from "../ProductsList/Components/AnnouncementsIndex";
import TopBarIndex from "../ProductsList/Components/TopBarIndex";

const Container = styled.div`
  /* ... */
`;

export default function ProductPageIndex() {
  return (
    <Container>
      <TopBarIndex />
      <AnnouncementsIndex />
    </Container>
  );
}
