import { Link } from 'react-router-dom'
import './index.css'

export default function Menu(){
    return(
        <header>
            <nav className='navegacao'>
                <Link to="/" className='link'>Home</Link>
                <Link to="/About" className='link'>Sobre</Link>
            </nav>
        </header>

    )
}