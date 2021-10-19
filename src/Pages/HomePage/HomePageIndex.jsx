import AnnouncementsIndex from "./Components/AnnouncementsIndex";
import CategoriesIndex from "./Components/CategoriesIndex";
import SliderIndex from "./Components/SliderIndex";
import TopBarIndex from "./Components/TopBarIndex";

export default function HomePageIndex() {
  return (
    <div>
      <TopBarIndex />
      <AnnouncementsIndex />
      <SliderIndex />
      <CategoriesIndex />
    </div>
  );
}
