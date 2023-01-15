import React from "react";
import '../componentes/style/contenido.css'


class Contendido extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        Age: this.props.Age
    }
}
sum = () => this.setState({Age: this.state.Age + 1})
render()
{ 
    return(
        <div className="contenedor">
            <p className="apellido-nombre">
            {this.props.firstName}, {this.props.lastName}
            </p>
            <p className="edad">
                Age: {this.state.Age}
            </p>
            <p className="color-cabello">
                hair Color : {this.props.hairColor}
            </p>
            <button className="boton" onClick = {this.sum}>
                Birthday Button for {this.props.lastName} {this.props.firstName}
                </button>
        </div>
    )
    }
}

    export default Contendido;