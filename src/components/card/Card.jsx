import style from "./card.module.css"

const Card = ({title, img, desc}) => {
    return (
        <div className={style.business_card_results_item}>
            <img src={img} alt="Product version" className={style.business_card_results_img}/>
            <div className={style.business_card_results_text}>
                <div className={style.business_card_results_text_title}>{title}</div>
                <div className={style.business_card_results_text_desc}>{desc}</div>
            </div>
        </div>
    );
}

export default Card