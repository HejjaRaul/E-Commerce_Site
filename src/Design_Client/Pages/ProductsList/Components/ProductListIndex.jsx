import styled from "styled-components";
import ProductItemIndex from "./ProductItemIndex";
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

export default function ProductsListIndex({category, filters, sort}) {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(category ? `http://localhost:3000/api/products?category=${category}` : "http://localhost:3000/api/products");
                setProducts(res.data);
            } catch (err) {

            }
        };
        getProducts();
    }, [category]);

    useEffect(() => {
        if (category) {
            setFilteredProducts(
                products.filter(item => Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            )
        }
    }, [category, filters, products]);

    useEffect(() => {
        if (sort === "Newest") {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "PriceASC") {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort])

    return (
        <Container>
            {filteredProducts.map((item) => (
                <ProductItemIndex item={item} key={item.id}/>
            ))}
        </Container>
    );
}

//<---------------------------------------End of HTML - coding---------------------------------------------->
