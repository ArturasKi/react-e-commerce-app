import { NavLink } from "react-router-dom";

function Category({ category }) {
  return (
    <>
      <div>
        <div className="category-block">
          <div className="cat-image">
            <img src={category.img} alt="" />
          </div>
          <div className="info">
            <h1>{category.title}</h1>
            <NavLink to="/productlist/mens" className="menu-item">
              <button>SHOP NOW</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
