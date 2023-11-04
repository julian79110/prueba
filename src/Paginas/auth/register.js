import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section>
        <div className='form-container2'>
            <h1>Registro</h1>
            <form autoComplete='off'>
                <div className='control2'>
                    <label>Nombre Y Apellidos</label>
                    <input type='text' name='name' id='name'/>
                </div>
                <div className='control2'>
                    <select>
                      <optgroup label="Tipo Documento" disabled>
                      <option value="" selected hidden>Tipo De Documento</option>
                      </optgroup>
                      <option>Tarjeta De Identidad</option>
                      <option>Cedula De Ciudadania</option>
                      <option>Pasaporte</option>
                    </select>
                </div>
                <div className='control2'>
                    <label>Numero De Documento</label>
                    <input type='text' name='pass' id='pass'/>
                </div>
                <div className='control2'>
                    <input type='submit' value='Registrarse'/>
                </div>
            </form>
            <div className='link2'>
                <Link to={"/"}>Iniciar Sesion</Link>
            </div>
        </div>
    </section>
  );
}

export default Register;