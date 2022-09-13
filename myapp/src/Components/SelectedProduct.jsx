import { useState } from "react";
import { FilterColor } from "./StyledComponents";

function SelectedProduct() {
  const [color, setColor] = useState("Color");
  const [size, setSize] = useState("Size");

  const selectColor = (e) => {
    setColor(e.target.value);
  };

  const selectSize = (e) => {
    setSize(e.target.value);
  };

  const addToCart = () => {
    const data = {
      id: localStorage.id,
      title: localStorage.title,
      category: localStorage.category,
      price: localStorage.price,
      img: JSON.parse(localStorage.img),
      color: color,
      size: size
    }
    localStorage.setItem('cart_item', JSON.stringify(data));
  }

  return (
    <div className="sel-container">
      <img src={JSON.parse(localStorage.img)} alt="#" />
      <div className="about">
        <div>
          <h2>{localStorage.title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            hic nisi, recusandae minima dolores at totam voluptatibus ipsum
            magni adipisci ipsa soluta placeat vitae consectetur repudiandae
            tenetur, officiis perferendis nihil.
          </p>
          <h4>Price: {localStorage.price}</h4>
        </div>
        <div className="col-size">
          <h5>Color:</h5>
          <select onChange={selectColor} value={color}>
            <option value="Color">Color</option>
            <option value="red">Red</option>
            <option value="brown">Brown</option>
            <option value="green">Green</option>
          </select>
          <h5>Size:</h5>
          {localStorage.category === "shoes" ? (
            <select onChange={selectSize} value={size}>
              <option value="Size">Size</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
              <option value="45">45</option>
            </select>
          ) : localStorage.category === "accessories" ? (
            <select onChange={selectSize} value={size}>
              <option value="Size">Size</option>
              <option value="Onesize">One Size</option>
            </select>
          ) : (
            <select onChange={selectSize} value={size}>
              <option value="Size">Size</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          )}
          <div
            className="col-size"
            style={
              color === "Color" ? { display: "none" } : { display: "flex" }
            }
          >
            Selected color:{" "}
            <FilterColor className="filter-color" color={color} />
          </div>
          <div
            className="col-size"
            style={size === "Size" ? { display: "none" } : { display: "flex" }}
          >
            Selected size:<b style={{ marginLeft: "5px" }}>{size}</b>
          </div>
          <div className="col-size">
            <button onClick={addToCart}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedProduct;
