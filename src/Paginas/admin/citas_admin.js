import React, { useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Citas = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
  return (
    <div>
         <nav className='menu'>
        <label className='logo'>Citas</label>
        <ul className={`menu_items ${menuOpen ? 'show' : ''}`}>
          <li className='active'><Link to={"/Home"}>Inicio</Link></li>
          <li><Link to={"/citas"}>Citas</Link></li>
          <li><Link to={"#"}>Perfil</Link></li>
          <li><Link to={"/"}>Cerrar Sesion</Link></li>
        </ul>
        <span className={`btn_menu ${menuOpen ? 'hide' : ''}`} onClick={toggleMenu}>
  <FaBars />
</span>
      </nav><br/><br/>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridDay"
        }}
        height={"90vh"}
      />
    </div>
  );
};

export default Citas;
