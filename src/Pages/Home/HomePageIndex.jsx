import AnnouncementsIndex from "./Components/AnnouncementsIndex";
import CategoriesIndex from "./Components/CategoriesIndex";
import SliderIndex from "./Components/SliderIndex";
import TopBarIndex from "./Components/TopBarIndex";
import ProductsListIndex from "./Components/ProductsListIndex";
import NewsletterIndex from "./Components/NewsletterIndex";

export default function HomePageIndex() {
  return (
    <div>
      <TopBarIndex />
      <AnnouncementsIndex />
      <SliderIndex />
      <CategoriesIndex />
      <ProductsListIndex />
      <NewsletterIndex />
    </div>
  );
}
