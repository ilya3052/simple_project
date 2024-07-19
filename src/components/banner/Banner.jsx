import "./banner.css"
import banner_img from "./../../img/banner_img.png"

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner_content">
                    <div className="banner_text">
                        <div className="banner_title">Простые вещи. Из бумаги</div>
                        <div className="banner_desc">Бума́га (предположительно от итал. bombagia, первоисточником же
                            считается
                            иранский) — волокнистый материал с минеральными добавками.
                        </div>
                        <a href="#!" className="banner_text_btn">Каталог</a>
                    </div>
                    <img src={banner_img} alt="Banner image"/>
                </div>
            </div>
        </section>
    );
}

export default Banner