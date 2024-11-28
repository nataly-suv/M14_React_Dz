import style from "./portfolio.module.css";
import PortfolioItem from "../PortfolioItem/portfolioItem";
import portfolio from "../../data/portfolio.json";

const Portfolio = () => {
  return (
    <section className={style.portfolio}>
      {/* шапка разреда {Portfolio} */}
      <div className={style.portfolio__header}>
        <div className={style.header_left}>
          <p className={style.left__category}>Portfolio</p>
          <h2 className={style.left__title}>Explore My photography work.</h2>
        </div>
        <div className={style.aheader_right}>
          <button className={style.right__btn}>View All Works &#8594;</button>
        </div>
      </div>
      {/* отрисовка работ */}
      <div className={style.conteiner}>
        {portfolio.portfoliaItems.map((item) => {
          // item={item} - item - то, что передали в Props в PortfolioItem. {item} - текущий элемент в map
          return <PortfolioItem item={item} key={item.portfolioItemId} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
