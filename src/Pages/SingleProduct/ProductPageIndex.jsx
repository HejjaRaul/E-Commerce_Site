import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import AnnouncementsIndex from "../ProductsList/Components/AnnouncementsIndex";
import FooterIndex from "../ProductsList/Components/FooterIndex";
import NewsletterIndex from "../ProductsList/Components/NewsletterIndex";
import TopBarIndex from "../ProductsList/Components/TopBarIndex";

//<---------------------------------------Start of CSS - styling------------------------------------------------>

const Container = styled.div`
  /* ... */
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 700px;
  height: 700px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  margin: 30px 0px;
  font-size: 20px;
`;

const Price = styled.span`
  margin-top: 20px;
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 40%;
  margin: 40px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 10px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 4px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 8px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: #ffffff;
  cursor: pointer;
  font-weight: 500;

  &hover {
    background-color: lightblue;
  }
`;

//<---------------------------------------End of CSS - styling------------------------------------------------>

//<---------------------------------------Start of HTML - coding---------------------------------------------->

export default function ProductPageIndex() {
  return (
    <Container>
      <TopBarIndex />
      <AnnouncementsIndex />
      <Wrapper>
        <ImageContainer>
          <Image src="https://static.footshop.com/381706-full_product/80530.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Nike T-Shirt</Title>
          <Description>
            T-shirt made of soft ecological cotton jersey, with round neckline
            and embroidered border, with print on the chest. Straight cut at the
            base.
          </Description>
          <Price>20€</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsletterIndex />
      <FooterIndex />
    </Container>
  );
}

//<---------------------------------------End of HTML - coding----------------------------------------------->
