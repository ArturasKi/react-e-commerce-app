import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import ProductsMensSale from "../Components/ProductsMensSale";

function Sale() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <ProductsMensSale />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Sale;
