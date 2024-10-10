import "./main-style.css"

const Main = () =>{
    let numero = 1133445566
    return(
        <section className="main-contenedor">
            <h1>Servicio de plomeria y destapaciones con maquina</h1>
            <p className="p-telefono">Nuestro {numero}</p>
            <a href={`https://api.whatsapp.com/send/?phone=${numero}`}><p className="llamar">Llamanos</p></a>
        </section>
    )
}

export default Main;