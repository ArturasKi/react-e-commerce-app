function Category({category}) {

  return (
    <>
    <div>
      <div className="category-block">
        <div className="cat-image">
          <img src={category.img} alt='' />
        </div>
        <div className="info">
          <h1>{category.title}</h1>
          <button>SHOP NOW</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Category;