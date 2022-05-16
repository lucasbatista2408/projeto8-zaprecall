export default function Soma(){
  const [contador, setContador] = React.useState(0)
  function contadorSoma() { setContador(() => contador + 1) }
}