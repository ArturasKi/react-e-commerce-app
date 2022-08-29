function Product({item}) {
  return (
    <div className='products'>
        {/* <div>{item.id}</div> */}
        <img className='pr-images' src={item.img} alt='' />
    </div>
  )
}

export default Product;