import {
    Email,
    Facebook,
    Instagram,
    MapsHomeWork,
    Phone,
    Pinterest,
    Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

//<---------------------------------------Start of CSS - styling------------------------------------------------>

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  /* ... */
`;

const Description = styled.p`
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 25px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
  font-size: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const Payment = styled.img`
  width: 80%;
`;

//<---------------------------------------End of CSS - styling------------------------------------------------>

//<---------------------------------------Start of HTML - coding---------------------------------------------->

export default function FooterIndex() {
    return (
        <Container>
            <Left>
                <Logo>Fashion Times</Logo>
                <Description>
                    Fashion Times is your one-stop online shop for today's most daring,
                    exciting and edgy fashion apparel. Our affordable collections are all
                    about redefining trends, design excellence and exceptional quality to
                    satisfy the needs of every aspiring fashionista.
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="D21404">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contacts</Title>
                <ContactItem>
                    <MapsHomeWork style={{marginRight: "15px"}}/>2 Aleea Stundetiilor,
                    345200
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "15px"}}/>
                    +40 712 345 678
                </ContactItem>
                <ContactItem>
                    <Email style={{marginRight: "15px"}}/>
                    contact@fashiontime.com
                </ContactItem>
                <Payment
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWA5kqwZR63rkyAF90ccKk4VAB28WG96VVmvwXnq2o5660x9VjUet0uxOfC4yeY87-w&usqp=CAU"/>
            </Right>
        </Container>
    );
}

//<---------------------------------------End of HTML - coding----------------------------------------------->
