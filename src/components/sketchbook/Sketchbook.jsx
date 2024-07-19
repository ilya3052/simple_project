import "./sketchbook.css"
import sketchbook from "./../../img/sketchbook.png"

const Sketchbook = () => {
    return (
        <section className="sketchbook">
            <div className="container">
                <div className="sketchbook_content">
                    <div className="sketchbook_content-text">
                        <div className="sketchbook_content_text-title">Simple скетчбук</div>
                        <div className="sketchbook_content_text-desc">80 листов, твердая обложка, бумага Fabriano
                            200г/м2.
                            Подойдет и для графики и для акварели. Для самых смелых творческих замыслов!
                        </div>
                        <a href="#!" className="sketchbook_content-btn">Купить</a>
                    </div>
                    <img src={sketchbook} alt="" className="sketchbook_content-img"/>
                </div>
            </div>
        </section>
    );
}

export default Sketchbook