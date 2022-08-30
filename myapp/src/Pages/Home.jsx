import CategoryList from '../Components/CategoryList';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import Products from '../Components/Products';
import ReadingList from '../Components/ReadingList';
import Slider from '../Components/Slider';

function Home() {
  return (
    <div>
        <Navbar />
        <Slider />
        <CategoryList />
        <Products />
        <ReadingList />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home;