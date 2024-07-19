import "./footer.css"
import darkLogo from "./../../img/icons/logo_dark.svg"
import fb from "./../../img/social/fb.svg"
import tw from "./../../img/social/tw.svg"
import inst from "./../../img/social/inst.svg"
import yt from "./../../img/social/yt.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_content">
                    <img src={darkLogo} alt="simple_logo"/>
                    <ul className="social_list">
                        <li className="social_list-item"><a href="#!"><img src={fb}
                                                                           alt="Facebook"/></a></li>
                        <li className="social_list-item"><a href="#!"><img src={tw} alt="Twitter"/></a>
                        </li>
                        <li className="social_list-item"><a href="#!"><img src={inst}
                                                                           alt="Instagram"/></a></li>
                        <li className="social_list-item"><a href="#!"><img src={yt} alt="YouTube"/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer