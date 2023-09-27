import "./pro.scss"

const Pro = ({item}) => {
  return (
    <div className='pro' >
        <img src={item.imgUrl} alt='' />
        <a href={item.url} rel="noopener" target="_blank"  > <h5>{item.title}</h5> </a>
    </div>
  )
}

export default Pro