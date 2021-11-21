import styled from "styled-components";
import { categories } from "./CategoriesData";
import CategoryItem from "./CategoryItemIndex";

//<---------------------------------------Start of CSS - styling------------------------------------------------>

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

//<---------------------------------------End of CSS - styling------------------------------------------------>

//<---------------------------------------Start of HTML - coding---------------------------------------------->

export default function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
}

//<---------------------------------------End of HTML - coding---------------------------------------------->
