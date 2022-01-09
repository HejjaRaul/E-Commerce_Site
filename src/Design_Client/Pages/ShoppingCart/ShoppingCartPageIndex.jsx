import styled from "styled-components";
import AnnouncementsIndex from "./Components/AnnouncementsIndex";
import TopBarIndex from "./Components/TopBarIndex";
import {Add, Remove} from "@mui/icons-material";
import FooterIndex from "./Components/FooterIndex";
import {useSelector} from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {useEffect, useState} from "react";
import {userRequest} from "../../../requestMethods";
import {useHistory} from "react-router-dom";

const KEY = "pk_test_51KFzPXCv63UO9T4zHC6vdubc2pGeHBQRhSogpmFk5b0m0KDQjRhF754grli1m6c8SmuojxwSfv2flThBG2n2uDPT00Mge2lDm8";

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
  padding: 20px;
  height: 32vh;
  margin-top: 20px;
  margin-left: 10px;
  background-color: rgba(104, 180, 243, 0.26);
`

const SummaryTitle = styled.h1`
  display: flex;
  font-weight: 300;
  font-size: 30px;
  justify-content: center;
`
const SummaryItem = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  margin: 30px 0;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryHr = styled.hr`
  background-color: #000000;
  border: none;
  height: 1px;
`
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000000;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`
const ProductWithLine = styled.div``

//<---------------------------------------End of CSS - styling------------------------------------------------>

//<---------------------------------------Start of HTML - coding---------------------------------------------->


export default function ShoppingCartPageIndex() {

    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("http://localhost:3000/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: (cart.total + 5) * 100,
                });
                history.push("/success", {data: res.data});
            } catch (err) {

            }
        };
        if (stripeToken && cart.total >= 1) {
            makeRequest();
        }
    }, [stripeToken, cart.total, history]);

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
                        {cart.products.map(product => (
                            <ProductWithLine>
                                <Product>
                                    <ProductDetail>
                                        <Image src={product.image}/>
                                        <Details>
                                            <ProductName><b>Product:</b> {product.title}</ProductName>
                                            <ProductId><b>ID:</b> {product._id}</ProductId>
                                            <ProductColor color={product.color}/>
                                            <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductAmountContainer>
                                            <Remove/>
                                            <ProductAmount>{product.quantity}</ProductAmount>
                                            <Add/>
                                        </ProductAmountContainer>
                                        <ProductPrice>{product.price * product.quantity} €</ProductPrice>
                                    </PriceDetail>
                                </Product>
                                <Hr/>
                            </ProductWithLine>
                        ))}

                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>{cart.total} €</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Cost</SummaryItemText>
                            <SummaryItemPrice>5 €</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryHr/>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>{cart.total + 5} €</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name={"Fashion Times"}
                            billingAddress
                            shippingAddress
                            description={`Your total is ${cart.total + 5} €`}
                            amount={(cart.total + 5) * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <SummaryButton>CHECKOUT NOW</SummaryButton>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <FooterIndex/>
        </Container>
    );
}

//<---------------------------------------End of HTML - coding---------------------------------------------->
