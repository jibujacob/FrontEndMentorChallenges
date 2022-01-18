import ArticlePreview from "./challenges/ArticlePreview/ArticlePreview";
import NFTPreviewCard from "./challenges/NFTPreviewCard/NFTPreviewCard";
import OrderSummaryCard from "./challenges/OrderSummaryCard/OrderSummaryCard";
import ProfileCard from "./challenges/ProfileCard/ProfileCard";
import SocialProofSection from "./challenges/SocialProofSection/SocialProofSection";
import StatsPreviewCard from "./challenges/StatsPreviewCard/StatsPreviewCard";
import ThreeColumnPreviewCard from "./challenges/ThreeColumnPreviewCard/ThreeColumnPreviewCard";
import FourCardFeature from "./challenges/FourCardFeature/FourCardFeature";
import Topbar from "./components/topbar";
import Solution from "./pages/solution";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";




function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>  <Topbar /><Solution /></>}/>
          <Route path="/challenge/NFTPreviewCard" element={<NFTPreviewCard/>}/>
          <Route path="/challenge/OrderSummaryCard" element={<OrderSummaryCard/>}/>
          <Route path="/challenge/ProfileCard" element={<ProfileCard/>}/>
          <Route path="/challenge/SocialProofSection" element={<SocialProofSection/>}/>
          <Route path="/challenge/StatsPreviewCard" element={<StatsPreviewCard/>}/>
          <Route path="/challenge/ThreeColumnPreviewCard" element={<ThreeColumnPreviewCard/>}/>
          <Route path="/challenge/ArticlePreview" element={<ArticlePreview/>}/>
          <Route path="/challenge/FourCardFeature" element={<FourCardFeature/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
