import ProductCard from "../productCard/ProductCard";
import "./productExamples.css";

import Package from "./../../img/product_examples/package.png";
import pack from "./../../img/product_examples/pack.png";
import cases from "./../../img/product_examples/cases.png";
import other from "./../../img/product_examples/other.png";

const obj = [
    {
        title: "Упаковка",
        desc: "Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим" +
            " форму под заказ.",
        count: 50
    },
    {
        title: "Пакеты",
        desc: "С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. " +
            "Различные расцветки и дизайн.",
        count: 200
    },
    {
        title: "Кейсы",
        desc: "Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: " +
            "прессованная бумага.",
        count: 30
    },
    {
        title: "Другие изделия",
        desc: "Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. " +
            "Изготовим в кратчайшие сроки.",
        count: 100
    }
]

const ProductExamples = () => {
    return (
        <section>
            <div className="container">
                <ul className="product_examples-list">
                    <li className="product_examples-list-item"><ProductCard title={obj[0].title} img={Package}
                                                                            desc={obj[0].desc} count={obj[0].count}/>
                    </li>
                    <li className="product_examples-list-item"><ProductCard title={obj[1].title} img={pack}
                                                                            desc={obj[1].desc} count={obj[1].count}/>
                    </li>
                    <li className="product_examples-list-item"><ProductCard title={obj[2].title} img={cases}
                                                                            desc={obj[2].desc} count={obj[2].count}/>
                    </li>
                    <li className="product_examples-list-item"><ProductCard title={obj[3].title} img={other}
                                                                            desc={obj[3].desc} count={obj[3].count}/>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default ProductExamples