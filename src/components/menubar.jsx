import React from 'react'
import { useLocation, Link } from 'react-router-dom';

const Menubar = ({className}) => {
    const actual = useLocation().pathname;
    return (
        <div className={"ui vertical menu "+className} style={{ height: '100vh', width: '15%', padding:0 }}>

            <Link to="/home" className={actual == '/home' || actual == '/' ? "red active item" : "item"} style={{paddingTop: 30, marginLeft:5,marginRight:5}}>
                Inicio
                <i className="home icon"></i>
            </Link>
            <Link to="/student" className={actual == '/student' ? "red active item" : "item"} style={{marginLeft:5,marginRight:5}}>
                Estudiantes
                <i className="student icon"></i>
            </Link>
            <Link to="/subject" className={actual == '/subject' ? "red active item" : "item"} style={{marginLeft:5,marginRight:5}}>
                Materia
                <i className="book icon"></i>
            </Link>
        </div>
    )
}

export default Menubar