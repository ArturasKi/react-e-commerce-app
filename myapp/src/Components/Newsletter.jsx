import { MdSend } from "react-icons/md";

function Newsletter() {
  return (
    <div className="news-container">
      <h1>Newsletter</h1>
      <h2>Get updates about your favourite products.</h2>
      <div className="inp">
        <input placeholder="Your email"></input>
        <button>
          <MdSend className="ico-send" />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
