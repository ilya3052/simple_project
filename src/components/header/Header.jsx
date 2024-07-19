import logo from "../../img/icons/logo.svg"
import search from "../../img/icons/Search.svg"
import login from "../../img/icons/log_in.svg"
import './header.css'


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <div className="nav_items">
                        <img src={logo} alt="logo"/>
                        <ul className="nav_list">
                            <li><a href="#!" className="nav_list-item">Продукция</a></li>
                            <li><a href="#!" className="nav_list-item">Материалы</a></li>
                            <li><a href="#!" className="nav_list-item">О нас</a></li>
                            <li><a href="#!" className="nav_list-item">Контакты</a></li>
                            <li><a href="#!" className="nav_list-item"><img src={search} alt="search"/></a>
                            </li>
                            <li><a href="#!" className="nav_list-item"><img src={login}
                                                                            alt="login"/></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header