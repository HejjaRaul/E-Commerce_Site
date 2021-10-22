import styled from "styled-components";
import ProductItemIndex from "./ProductItemIndex";
import { popularProducts } from "./ProductsListData";

//<---------------------------------------Start of CSS - styling------------------------------------------------>

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

//<---------------------------------------End of CSS - styling------------------------------------------------>

//<---------------------------------------Start of HTML - coding---------------------------------------------->

export default function ProductsListIndex() {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItemIndex item={item} key={item.id} />
      ))}
    </Container>
  );
}

//<---------------------------------------End of HTML - coding---------------------------------------------->
