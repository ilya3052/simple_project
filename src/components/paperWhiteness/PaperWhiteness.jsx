import "./paperWhiteness.css"
import paperWhitenessImg from "./../../img/business_card/paper-whiteness.png"

const PaperWhiteness = () => {
    return (
        <section className="paper-whiteness">
            <div className="container">
                <div className="paper-whiteness_content">
                    <div className="paper-whiteness_content-img">
                        <img src={paperWhitenessImg} alt="Paper whiteness"/>
                    </div>
                    <div className="paper-whiteness_content-text">
                        <div className="paper-whiteness_content-text-title">Максимальная белизна</div>
                        <div className="paper-whiteness_content-text-desc">Для повышения белизны, гладкости и мягкости в
                            состав бумажной массы вводят белые минеральные вещества: мел, тальк, каолин и др. Эта
                            операция
                            называется наполнением.
                            Отлив бумажного листа осуществляют на бумагоделательной машине, важнейшей частью которой
                            является непрерывно движущаяся (как транспортер) металлическая или капроновая сетка.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PaperWhiteness