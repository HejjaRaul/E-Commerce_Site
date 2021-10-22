import AnnouncementsIndex from "./Components/AnnouncementsIndex";
import CategoriesIndex from "./Components/CategoriesIndex";
import SliderIndex from "./Components/SliderIndex";
import TopBarIndex from "./Components/TopBarIndex";
import ProductsListIndex from "./Components/ProductsListIndex";

export default function HomePageIndex() {
  return (
    <div>
      <TopBarIndex />
      <AnnouncementsIndex />
      <SliderIndex />
      <CategoriesIndex />
      <ProductsListIndex />
    </div>
  );
}
