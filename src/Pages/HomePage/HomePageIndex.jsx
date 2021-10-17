import AnnouncementsIndex from "./Components/AnnouncementsIndex";
import Slider from "./Components/Slider";
import TopBarIndex from "./Components/TopBarIndex";

export default function HomePageIndex() {
  return (
    <div>
      <TopBarIndex />
      <AnnouncementsIndex />
      <Slider />
    </div>
  );
}
