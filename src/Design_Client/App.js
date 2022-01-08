import HomePageIndex from "./Pages/Home/HomePageIndex";
import LoginPageIndex from "./Pages/Login/LoginPageIndex";
import ProductsListPageIndex from "./Pages/ProductsList/ProductsListPageIndex";
import RegisterPageIndex from "./Pages/Register/RegisterPageIndex";
import ShoppingCartPageIndex from "./Pages/ShoppingCart/ShoppingCartPageIndex";
import ProductPageIndex from "./Pages/SingleProduct/ProductPageIndex";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

function App() {
    const user = true;
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePageIndex/>
                </Route>
                <Route path="/products/:category">
                    <ProductsListPageIndex/>
                </Route>
                <Route path="/product/:id">
                    <ProductPageIndex/>
                </Route>
                <Route path="/cart">
                    <ShoppingCartPageIndex/>
                </Route>
                <Route path="/login">
                    {user ? <Redirect to="/"/> : <LoginPageIndex/>}
                </Route>
                <Route path="/register">
                    {user ? <Redirect to="/"/> : <RegisterPageIndex/>}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
