import { useContext } from "react";
import { useState } from "react";
import AppContext from "./AppContext";
// import { FilterColor } from "./StyledComponents";

function SelectedProduct() {
  const { setCreateItem } = useContext(AppContext);

  const [color, setColor] = useState("");
  const [size, setSize] = useState("Size");
  const [count, setCount] = useState(1);

  const selectColor = (e) => {
    setColor(e.target.style.backgroundColor);
    console.log(e.target.style.backgroundColor);
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
      sale: localStorage.sale,
      img: JSON.parse(localStorage.img),
      color: color,
      size: size,
      amount: count,
    };
    setColor("");
    setSize("Size");
    setCount(1);
    setCreateItem(data);
  };

  const minusCount = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };

  const plusCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="sel-container">
      <img src={JSON.parse(localStorage.img)} alt="#" />
      <div className={localStorage.sale === "1" ? "sale" : "hidden"}>SALE</div>
      <div className="about">
        <div>
          <h2>{localStorage.title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            hic nisi, recusandae minima dolores at totam voluptatibus ipsum
            magni adipisci ipsa soluta placeat vitae consectetur repudiandae
            tenetur, officiis perferendis nihil.
          </p>
          <h4 className={localStorage.sale === "1" ? "oldprice" : null}>
            {localStorage.sale === "1"
              ? "Old price " + localStorage.price
              : null}
          </h4>
          <h4 className={localStorage.sale === "1" ? "salePrice" : null}>
            Price:{" "}
            {localStorage.sale === "1"
              ? (localStorage.price.slice(0, -4) / 2).toFixed(2) + " EUR"
              : localStorage.price}
          </h4>
        </div>
        <div className="col-size">
          <h5>
            Color:
            <div className="color-row">
              {localStorage.color
                ? JSON.parse(localStorage.color).map((color, index) => (
                    <div
                      className="colors"
                      style={{ backgroundColor: color }}
                      key={index}
                      onClick={selectColor}
                    ></div>
                  ))
                : null}
            </div>
          </h5>
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
          ) : localStorage.category === "wshoes" ? (
            <select onChange={selectSize} value={size}>
              <option value="Size">Size</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
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
            style={color === "" ? { display: "none" } : { display: "block" }}
          >
            Selected color:<b>{" " + color.toUpperCase()}</b>
          </div>
          <div
            className="col-size"
            style={size === "Size" ? { display: "none" } : { display: "block" }}
          >
            Selected size:<b>{" " + size}</b>
          </div>
          <div className="amount">
            <button onClick={minusCount}>-</button>
            <h2 style={{ padding: "10px", width: "30px", textAlign: "center" }}>
              {count}
            </h2>
            <button onClick={plusCount}>+</button>
          </div>
          <div className="col-size">
            <button id="add" onClick={addToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedProduct;
