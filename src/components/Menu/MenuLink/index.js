import { useLocation, Link } from 'react-router-dom';
import './index.css'

export default function MenuLink(props){
    const localizacao = useLocation();
    console.log(localizacao)

    return(
        <Link
            to={props.to}
            className={`
                ${props.link}
                ${localizacao.pathname === props.to ? 'linkDestacado' : ''}`}
        >{props.nome}</Link>
    )
}



//https://reactrouter.com/en/main/components/nav-link OUTRA FORMA DE FAZER