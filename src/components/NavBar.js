import React, {Fragment} from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <nav class="navegationBar">
            <button class="btn btn-secondary col-md-4" type="submit">Examinar imagen</button>
            <button class="btn btn-secondary col-md-4" type="submit">Examinar imagen</button>
            <button class="btn btn-secondary col-md-4" type="submit">Guardar imagen</button>
        </nav>
    )
};

export default NavBar
