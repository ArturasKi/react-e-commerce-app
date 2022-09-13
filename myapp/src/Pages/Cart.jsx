import Announcement from '../Components/Announcement';
import CartProduct from '../Components/CartProduct';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';


function Cart() {
  return (
    <div>
        <Announcement />
        <Navbar />
        <CartProduct />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Cart;