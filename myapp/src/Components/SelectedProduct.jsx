import { products } from "../data"

function SelectedProduct() {
  return (
    <div className="container">
        <img src={products[0].img} alt="#" />
        <div className="about">
            <div>
                <h2>Classic Moc</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, hic nisi, recusandae minima dolores at totam voluptatibus ipsum magni adipisci ipsa soluta placeat vitae consectetur repudiandae tenetur, officiis perferendis nihil.</p>
                <h4>Price: 299.00 EUR</h4>
            </div>
            <div className="col-size">
                <h5>Color:</h5>
                <select>
                    <option option disabled>Color</option>
                    <option>Briar</option>
                    <option>Brown</option>
                    <option>Black</option>
                </select>
                <h5>Size:</h5>
                <select>
                    <option option disabled>Size</option>
                    <option>42</option>
                    <option>43</option>
                    <option>44</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default SelectedProduct