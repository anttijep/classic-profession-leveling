
const Enchant = (props) => {
  return (
    <div>
      {`${props.start} - ${props.end}`} {props.spell.name}
    </div>
  )
}

export default Enchant;
