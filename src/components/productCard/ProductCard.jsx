import style from "./productCard.module.css"
import arrow from "./../../img/icons/arrow.svg"

const ProductCard = ({title, img, count, desc}) => {
    return (
        <>
            <img src={img} alt="Package" className={style.product_example_img}/>
            <div className={style.product_example_text}>
                <div className={style.product_example_text_title}>{title}</div>
                <div className={style.product_example_text_title_muted}>Тираж: от {count} штук</div>
                <div className={style.product_example_text_desc}>{desc}
                </div>
                <a href="#!" className={style.show_more}>
                    Подробнее
                    <img src={arrow} alt=""/>
                </a>
            </div>
        </>
    );
}

export default ProductCard
