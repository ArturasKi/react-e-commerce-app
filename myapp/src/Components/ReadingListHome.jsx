import { readings } from "../data";
import Reading from "./Reading";

function ReadingListHome() {
  return (
    <div className="read-container">
      <div className="row">
        {readings.slice(0, 3).map((reading) => (
          <Reading key={reading.id} reading={reading}></Reading>
        ))}
        <div className="btn">
          <button>
            <a href="/blog">READ MORE</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReadingListHome;
