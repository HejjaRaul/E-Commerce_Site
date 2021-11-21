import styled from "styled-components";
import AnnouncementsIndex from "./Components/AnnouncementsIndex";
import TopBarIndex from "./Components/TopBarIndex";
import {Add, Remove} from "@mui/icons-material";

//<---------------------------------------Start of CSS - styling------------------------------------------------>

const Container = styled.div`
  /* ... */
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props => props.type === "filled" ? "black" : "transparent"};
  color: ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div``

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
  margin-top: 20px;
  border: 2px #e72e61 ridge;
`

const Product = styled.div`
  margin: 20px 10px;
  display: flex;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
  height: 300px;
`
const Details = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span`
  font-size: 20px;
`
const ProductId = styled.span`
  font-size: 20px;
`
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`
const ProductSize = styled.span`
  font-size: 20px;
`
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`
const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 300;
`

const Hr = styled.hr`
  background-color: #e72e61;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
`

//<---------------------------------------End of CSS - styling------------------------------------------------>

//<---------------------------------------Start of HTML - coding---------------------------------------------->

export default function ShoppingCartPageIndex() {
    return (
        <Container>
            <TopBarIndex/>
            <AnnouncementsIndex/>
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Cart(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image
                                    src="https://i.pinimg.com/originals/35/1c/76/351c76792125bf3dd0820bcf5828e9c0.jpg"/>
                                <Details>
                                    <ProductName><b>Product:</b> BLACK JEANS</ProductName>
                                    <ProductId><b>ID:</b> 9042152</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove/>
                                    <ProductAmount>2</ProductAmount>
                                    <Add/>
                                </ProductAmountContainer>
                                <ProductPrice>30 €</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image
                                    src="https://i.pinimg.com/originals/35/1c/76/351c76792125bf3dd0820bcf5828e9c0.jpg"/>
                                <Details>
                                    <ProductName><b>Product:</b> BLACK JEANS</ProductName>
                                    <ProductId><b>ID:</b> 9042152</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove/>
                                    <ProductAmount>2</ProductAmount>
                                    <Add/>
                                </ProductAmountContainer>
                                <ProductPrice>30 €</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>summary</Summary>
                </Bottom>
            </Wrapper>
        </Container>
    );
}

//<---------------------------------------End of HTML - coding---------------------------------------------->
