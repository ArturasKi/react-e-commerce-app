import { categories } from "../data.js";
import Category from "./Category";

function CategoryList() {
  return (
    <>
      <div className="container">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </>
  );
}

export default CategoryList;
