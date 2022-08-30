import { readings } from "../data"
import Reading from "./Reading"

function ReadingList() {
  return (
    <div className="read-container">
        <div className="row">
            {
                readings.map((reading) => <Reading key={reading.id} reading={reading}></Reading>)
            }
            <div className="btn">
                <button>READ MORE</button>
            </div>
        </div>
    </div>
  )
}

export default ReadingList