import styled from "styled-components";
import {Link} from "react-router-dom";

//<---------------------------------------Start of CSS - styling------------------------------------------------>

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: #ffffff;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #ffffff;
  color: gray;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: antiquewhite;
  }
`;

//<---------------------------------------End of CSS - styling------------------------------------------------>

//<---------------------------------------Start of HTML - coding---------------------------------------------->

export default function CategoryItem({item}) {
    return (
        <Container>
            <Link to={`/products/${item.category}`}>
                <Image src={item.image}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    );
}

//<---------------------------------------End of HTML - coding---------------------------------------------->
