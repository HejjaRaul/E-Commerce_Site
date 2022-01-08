import AnnouncementsIndex from "./Components/AnnouncementsIndex";
import CategoriesIndex from "./Components/CategoriesIndex";
import SliderIndex from "./Components/SliderIndex";
import TopBarIndex from "./Components/TopBarIndex";
import PopularProductsListIndex from "./Components/PopularProductsListIndex";
import NewsletterIndex from "./Components/NewsletterIndex";
import FooterIndex from "./Components/FooterIndex";

export default function HomePageIndex() {
    return (
        <div>
            <TopBarIndex/>
            <AnnouncementsIndex/>
            <SliderIndex/>
            <CategoriesIndex/>
            <PopularProductsListIndex/>
            <NewsletterIndex/>
            <FooterIndex/>
        </div>
    );
}
