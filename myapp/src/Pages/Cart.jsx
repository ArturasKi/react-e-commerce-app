import Announcement from "../Components/Announcement";
import CartList from "../Components/CartList";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";

function Cart() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <CartList />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Cart;
