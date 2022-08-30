import CategoryList from '../Components/CategoryList';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import Products from '../Components/Products';
import Slider from '../Components/Slider';

function Home() {
  return (
    <div>
        <Navbar />
        <Slider />
        <CategoryList />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home;