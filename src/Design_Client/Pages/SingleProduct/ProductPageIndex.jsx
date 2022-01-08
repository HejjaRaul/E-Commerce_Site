import {Add, Remove} from "@mui/icons-material";
import styled from "styled-components";
import AnnouncementsIndex from "../ProductsList/Components/AnnouncementsIndex";
import FooterIndex from "../ProductsList/Components/FooterIndex";
import NewsletterIndex from "../ProductsList/Components/NewsletterIndex";
import TopBarIndex from "../ProductsList/Components/TopBarIndex";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

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
  padding: 0 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  margin: 30px 0;
  font-size: 20px;
`;

const Price = styled.span`
  margin-top: 20px;
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 40%;
  margin: 40px 0;
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
  margin: 0 8px;
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

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/products/find/" + id);
                setProduct(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        getProduct();
    });

    const handleQuantity = (type) => {
        if (type === "dec") {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        } else {
            setQuantity(quantity + 1);
        }
    };

    return (
        <Container>
            <TopBarIndex/>
            <AnnouncementsIndex/>
            <Wrapper>
                <ImageContainer>
                    <Image src={product.image}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Description>
                        {product.description}
                    </Description>
                    <Price>{product.price}€</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map((c) => (
                                <FilterColor color={c} key={c} onClick={() => setColor(c)}/>
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(event) => setSize(event.target.value)}>
                                {product.size?.map((s) => (
                                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")}/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsletterIndex/>
            <FooterIndex/>
        </Container>
    );
}

//<---------------------------------------End of HTML - coding----------------------------------------------->
