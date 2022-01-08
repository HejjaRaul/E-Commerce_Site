import styled from "styled-components";
import PopularProductItemIndex from "./PopularProductItemIndex";
import {useEffect, useState} from "react";
import axios from "axios";

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

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/products");
                setProducts(res.data);
            } catch (err) {

            }
        };
        getProducts();
    });

    return (
        <Container>
            {products.slice(0, 8).map((item) => (
                <PopularProductItemIndex item={item} key={item.id}/>
            ))}
        </Container>
    );
}

//<---------------------------------------End of HTML - coding---------------------------------------------->
