import './category.css'
import { links } from '../../assets/imagesLinks'
import { useState } from 'react'

const Category = () => {
  const [selectedCateory,setSelectedCateory] = useState()
  return (
    <div className='filter-div'>
      {links.map((item, i)=>(
        <div key={i} 
          className={`links-box ${i === selectedCateory && 'selected-box'}`}
          onClick={()=>{
          setSelectedCateory(i)
        }}
        >
          <img src={item.imgSrc} className='links-img'/>
          <p 
          className={`links-label ${i === selectedCateory && 'selected-label'}`}
          onClick={()=>{
            setSelectedCateory(i)
          }}
          >{item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default Category