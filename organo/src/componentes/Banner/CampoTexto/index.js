import './CampoTexto.css'

const CampoTexto = (props) => {
    
const placeholderModificada = `${props.placeholder}...`

//let valor = 'Rafael Ronqui'

//const [valor, setValor] = useState ('')



const aoDigitado = (evento) => {    
    //setValor(evento.target.value)
   //console.log(valor)
   props.aoAlterado(evento.target.value)
    
}

    return (
        <div className="campo-texto"> 
            <label> 
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholderModificada}/>
        </div>
    )
} 

export default CampoTexto