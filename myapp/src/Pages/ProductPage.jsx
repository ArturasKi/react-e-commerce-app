import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SelectedProduct from "../Components/SelectedProduct";

function ProductPage() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <SelectedProduct />
      <Footer />
    </div>
  );
}

export default ProductPage;
