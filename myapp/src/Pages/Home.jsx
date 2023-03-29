import Announcement from "../Components/Announcement";
import CategoryList from "../Components/CategoryList";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import ProductsHome from "../Components/ProductsHome";
import ReadingListHome from "../Components/ReadingListHome";
import Slider from "../Components/Slider";
import BtnUp from "../Components/BtnUp";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <CategoryList />
      <ProductsHome />
      <ReadingListHome />
      <Newsletter />
      <Footer />
      <BtnUp />
    </div>
  );
}

export default Home;
