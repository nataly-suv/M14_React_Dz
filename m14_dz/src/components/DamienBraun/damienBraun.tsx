import style from "./damienBraun.module.css";
import arrow from "../../assets/damienBraun/arrow.png";
import banner from "../../assets/damienBraun/banner.png";
import Line from "../Line/line";

const DamienBraun = () => {
  return (
    <div className={style.damienBraun}>
      {/* верхняя чать с призывом */}
      <div className={style.damienBraun__top}>
        <div className={style.left}>
          <p className={style.left_sudio}>Stunning Photography by</p>
          <h1 className={style.left_name}>DAMIEN BRAUN</h1>
        </div>
        <div className={style.right}>
          <div className={style.right_letsGo}>
            <p className={style.right_letsGo_text}>Let’s</p>
            <button className={style.right_letsGo_btn}>
              <img src={arrow} alt="arrow" />
            </button>
          </div>
          <p className={style.right_textBottom}>Work Together</p>
        </div>
      </div>

      {/***************************************************************** */}
      {/* линия с перечислением работ */}
      <Line />

      {/***************************************************************** */}
      {/* баннер */}
      <div className={style.damienBraun__imgBox}>
        <img src={banner} alt="banner" className={style.damienBraun__img} />
      </div>
    </div>
  );
};

export default DamienBraun;
