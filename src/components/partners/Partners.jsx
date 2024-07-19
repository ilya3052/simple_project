import "./partners.css"
import hahnemuhle from "./../../img/partners/hahnemuhle.png"
import canson from "./../../img/partners/canson.png"
import royal_talens from "./../../img/partners/royal_talens.png"
import fabriano from "./../../img/partners/fabriano.png"

const Partners = () => {
    return (
        <section className="partners">
            <div className="container">
                <ul className="partners_list">
                    <li className="partner">
                        <img src={hahnemuhle} alt="hahnemuhle" className="partner-img"/>
                    </li>
                    <li className="partner">
                        <img src={canson} alt="canson" className="partner-img"/>
                    </li>
                    <li className="partner">
                        <img src={royal_talens} alt="royal_talens" className="partner-img"/>
                    </li>
                    <li className="partner">
                        <img src={fabriano} alt="fabriano" className="partner-img"/>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Partners