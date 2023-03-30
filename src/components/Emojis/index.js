import './index.css'

const Emojis = props => {
  const {emojisDetails} = props
  const {name, imageUrl} = emojisDetails
  //   const isSubmit = () => {
  //     isClickedEmojis(id)
  //   }

  return (
    <li className="emojis-item">
      <img src={imageUrl} alt={name} className="image" />
      <p className="feeling">{name}</p>
    </li>
  )
}

export default Emojis
