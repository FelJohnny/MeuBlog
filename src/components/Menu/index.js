import './index.css'
import MenuLink from './MenuLink'

export default function Menu(){

    return(
        <header>
            <nav className='navegacao'>
                <MenuLink to='/' className='link' nome='Home'/>
                <MenuLink to='/About' className='link' nome='Sobre'/>
            </nav>
        </header>

    )
}