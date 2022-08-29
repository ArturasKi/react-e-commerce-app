function Category({category}) {

  return (
    <>
    <div>
      <div className="category-block">
        <img className="images" src={category.img} alt='' />
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