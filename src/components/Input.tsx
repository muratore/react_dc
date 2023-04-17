
type Props = {
    placeholder:string,
    name: string,
    id: string
}
const Input = ({placeholder, name, id }:Props) => {
  return (
    <input type="text" placeholder={placeholder} name={name} id={id}/>
  )
}

export default Input