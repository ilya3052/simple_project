import "./businessCard.css"
import Card from "../card/Card";

import v1 from "./../../img/business_card/v1.png"
import v2 from "./../../img/business_card/v2.png"
import v3 from "./../../img/business_card/v3.png"

const BusinessCard = () => {
    return (
        <section className="business_card">
            <div className="container">
                <ul className="business_card-results">
                    <li className="business_card-results_item"><Card title="V.1" img={v1} desc="Результат вашего обучения"/></li>
                    <li className="business_card-results_item"><Card title="V.2" img={v2} desc="Результат вашего обучения"/></li>
                    <li className="business_card-results_item"><Card title="V.3" img={v3} desc="Результат вашего обучения"/></li>
                </ul>
            </div>
        </section>
    );
}

export default BusinessCard