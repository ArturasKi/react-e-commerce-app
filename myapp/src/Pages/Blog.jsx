import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import ReadingList from '../Components/ReadingList';


function Blog() {
  return (
    <div>
        <Announcement />
        <Navbar />
        <ReadingList />
        <Footer />
    </div>
  )
}

export default Blog;