function Reading({reading}) {
  return (
            <div className='col-read'>
                <div className='read-images'>
                    <img src={reading.img} alt='' />
                </div>
                <div className="info">
                    <h6>{reading.date}</h6>
                    <h4>{reading.title}</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempora iusto optio quasi quod a soluta necessitatibus veritatis expedita ratione fugiat at rerum voluptatum, totam est. Quam eius soluta natus.</p>
                    <a href=".">Read more</a>
                </div>
            </div>
  )
}

export default Reading