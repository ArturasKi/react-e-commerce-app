function Reading({ reading }) {

    const selectReading = () => {
        localStorage.setItem("id", reading.id);
        localStorage.setItem("title", reading.title);
        localStorage.setItem("date", JSON.stringify(reading.date));
        localStorage.setItem("img", JSON.stringify(reading.img));
      };


  return (
    <div className="col-read">
      <div className="read-images">
        <div className="image">
          <img src={reading.img} alt="" />
        </div>
      </div>
      <div className="info">
        <h6>{reading.date}</h6>
        <h4>{reading.title}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          tempora iusto optio quasi quod a soluta necessitatibus veritatis
          expedita ratione fugiat at rerum voluptatum, totam est. Quam eius
          soluta natus.
        </p>
        <a onClick={selectReading} href="/blog/reading">Read more</a>
      </div>
    </div>
  );
}

export default Reading;
