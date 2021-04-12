import React, { Fragment } from 'react'
import image from '../assets/test-image.jpg'
import './Workplace.css'

function Workplace() {
    return (
        <Fragment>
        <div className="TheWorkspace">

            <div className="colunm">
                <div className="row"><img src={image} className="TheImage"/></div>
                <div className="row"><button class="btn btn-secondary" type="submit">Examinar imagen</button></div>     
            
                <div className="filtros">
                <button className="filtro_button"></button>
                <button className="filtro_button"></button>
                <button className="filtro_button"></button>
                <button className="filtro_button"></button>
                <button className="filtro_button"></button>
                <button className="filtro_button"></button>
                <button className="filtro_button"></button>
                <button className="filtro_button"></button>               
                <button className="filtro_button"></button>
                <button className="filtro_button"></button>
                <button className="filtro_button"></button>
                </div>
            </div>

            
        </div>
        </Fragment>
    )
}

export default Workplace
