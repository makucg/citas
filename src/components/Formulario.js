import React, {Fragment, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    //Crear state citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false);

    //Funcion que actualiza con el input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    //Valores de cita
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    //Cuando el usuario envía el formulario
    const submitCita = e => {
        e.preventDefault();
        
        //Validar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || 
            hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true);
            return;
        } 
        
        actualizarError(false);

        //Asignar ID
        cita.id = uuidv4();

        //Crear cita
        crearCita(cita);

        //Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    }

    return ( 
        <Fragment>
            <h2>Crear cita</h2>
            {
                error 
                ? <p className="alerta-error">Ttodos los campos son obligatorios</p>
                : null
            }
            <form
                onSubmit={submitCita}
            >
                <label>Nombre mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={sintomas}
                />
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>

            </form>
        </Fragment>
     );
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}
 
export default Formulario;