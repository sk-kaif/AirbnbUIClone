import './card.css'
import Card from './Card'

const Cards = ({list2}) => {
  return (
    <div className='cards-flex'>
    {
      list2.map((card,i)=>(
        <Card card={card} key={i} />
      ))
    }
    </div>
  )
}

export default Cards