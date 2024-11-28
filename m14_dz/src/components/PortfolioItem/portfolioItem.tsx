import { FC } from "react";
import { Portfolio } from "../../types/portfolio";
import style from "./portfolioItem.module.css";


type Props = {
  item: Portfolio;
};

const PortfolioItem: FC<Props> = ({ item }) => {
  return (
    <article className={style.portfolioItem}>
      {/* фото */}
      <div className={style.imgBox}>
        <img src={"src/assets/Portfolio/"+item.imageUrl} alt="foto" className={style.img}/>
      </div>
      {/* нижняя часть статьи */}
      <div className={style.description}>
        {/* заголовок, дата */}
        <div className={style.text}>
          <h3 className={style.text__title}>{item.title}</h3>
          <p className={style.text__text}>{item.dataItem}</p>
        </div>
        {/* кнопка */}
        <div className={style.btnBox}>
          <button className={style.btn}>View Project &gt;</button>
        </div>
      </div>
    </article>
  );
};

export default PortfolioItem;
