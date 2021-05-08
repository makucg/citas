import PropTypes from "prop-types";
import React from 'react';

const Cita = ({cita, eliminarCita}) => {
    return ( 
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Propietario: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Síntomas: <span>{cita.sintomas}</span></p>
            <button
                className="u-full-width button eliminar"
                onClick={ () => eliminarCita(cita.id) }
            >Eliminar &times;</button>
        </div>
    );
}

Cita.propTypes = {
  cita: PropTypes.shape({
    fecha: PropTypes.any,
    hora: PropTypes.any,
    id: PropTypes.any,
    mascota: PropTypes.any,
    propietario: PropTypes.any,
    sintomas: PropTypes.any
  }),
  eliminarCita: PropTypes.func
}
 
export default Cita;