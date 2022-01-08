import styled from "styled-components";
import AnnouncementsIndex from "./Components/AnnouncementsIndex";
import TopBarIndex from "./Components/TopBarIndex";
import ProductListIndex from "./Components/ProductListIndex";
import NewsletterIndex from "./Components/NewsletterIndex";
import FooterIndex from "./Components/FooterIndex";
import {useLocation} from "react-router-dom";
import {useState} from "react";

//<---------------------------------------Start of CSS - styling------------------------------------------------>

const Container = styled.div`
  /* ... */
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

//<---------------------------------------End of CSS - styling------------------------------------------------>

//<---------------------------------------Start of HTML - coding---------------------------------------------->

export default function ProductsListPageIndex() {
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (event) => {
        const value = event.target.value;
        setFilters({
            ...filters,
            [event.target.name]: value,
        });
    };

    return (
        <Container>
            <TopBarIndex/>
            <AnnouncementsIndex/>
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled>
                            Color
                        </Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>green</Option>
                        <Option>yellow</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(event) => setSort(event.target.value)}>
                        <Option value={"Newest"}>Newest</Option>
                        <Option value={"PriceASC"}>Price ascending</Option>
                        <Option value={"PriceDESC"}>Price descending</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <ProductListIndex category={category} filters={filters} sort={sort}/>
            <NewsletterIndex/>
            <FooterIndex/>
        </Container>
    );
}

//<---------------------------------------End of HTML - coding----------------------------------------------->
