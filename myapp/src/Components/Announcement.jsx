import { useState } from "react";

function Announcement() {

    const [announceBar, setAnnounceBar] = useState(false);

    const changeBackground = () => {
      if(window.scrollY >= 90) {
        setAnnounceBar(true)
      } else {
        setAnnounceBar(false);
      }
    }
  
    window.addEventListener('scroll', changeBackground);

  return (
    <div className={announceBar ? 'announce-container' : 'announce-container announce-active'}>
        <div className="announcement">
            Free delivery on all orders over €69
        </div>
    </div>
  )
}

export default Announcement