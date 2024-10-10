import "./header-style.css"

const Header = () => {
    let zonas = "AMBA Y CABA"
    return (
        <div className="header_contenedor">
            <p className="logo">PLOMERO 24HS</p>
            <p className="des-logo">El mejor servicio para {zonas}</p>
        </div>
    )
}

export default Header