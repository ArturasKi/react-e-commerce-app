import { useState } from "react"
import { products } from "../data"

function SelectedProduct({ product }) {
    
    
    const [color, setColor] = useState('Color');
    const [size, setSize] = useState('Size');

    const selectColor = (e) => {
        setColor(e.target.value);
        console.log(product)
    }

    const selectSize = (e) => {
        setSize(e.target.value);
        // console.log(selectProduct)
    }

  return (
    <div className="sel-container">
        <img src={products[3].img} alt="#" />
        <div className="about">
            <div>
                <h2 style={{color: color}}>{products[3].title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, hic nisi, recusandae minima dolores at totam voluptatibus ipsum magni adipisci ipsa soluta placeat vitae consectetur repudiandae tenetur, officiis perferendis nihil.</p>
                <h4>Price: {products[3].price}</h4>
            </div>
            <div className="col-size">
                <h5>Color:</h5>
                <select onChange={selectColor} value={color}>
                    <option value='color'>Color</option>
                    <option value='red'>Red</option>
                    <option value='brown'>Brown</option>
                    <option value='green'>Green</option>
                </select>
                <h5>Size:</h5>
                <select onChange={selectSize} value={size}>
                    <option value=''>Size</option>
                    <option value='42'>42</option>
                    <option value='43'>43</option>
                    <option value='44'>44</option>
                </select>
                <div className="col-size" style={color === 'Color' ? {display: 'none'} : {display: 'block'}}>Selected color: <b>{color[0].toUpperCase() + color.slice(1).toLowerCase()}</b></div>
                <div className="col-size" style={size === 'Size' ? {display: 'none'} : {display: 'block'}}>Selected size: <b>{size}</b></div>
            </div>
        </div>
    </div>
  )
}

export default SelectedProduct