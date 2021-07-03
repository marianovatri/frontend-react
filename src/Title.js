function Title(props) {
    console.log(props.text)

    let text = "Clase Nº1 de react"
    let sum = props.a + props.b

    return (
        <div>
        <h1>{props.text}</h1>
        <p>{text}</p>
        <p>{sum}</p>
       
        </div>
        )

}
// me ayuda a saber que cosas son dinamicos ( que pueden cambiar) o fijos

export default Title