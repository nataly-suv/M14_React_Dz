import style from "./line.module.css";
import star from "../../assets/damienBraun/star.png";


const Line = () => {
  return (
    <div className={style.line}>
      <div className={`${style.items} ${style.marquee}`}>
        <div className={style.item}>
          <img src={star} alt="star" />
          <p className={style.text}>Event Photography</p>
        </div>
        <div className={style.item}>
          <img src={star} alt="star" />
          <p className={style.text}>Comercial Photography</p>
        </div>
        <div className={style.item}>
          <img src={star} alt="star" />
          <p className={style.text}>Product Photography</p>
        </div>
        <div className={style.item}>
          <img src={star} alt="star" />
          <p className={style.text}>Wedding Photography</p>
        </div>
        <div className={style.item}>
          <img src={star} alt="star" />
          <p className={style.text}>Landscape Photography</p>
        </div>
        <div className={style.item}>
          <img src={star} alt="star" />
          <p className={style.text}>Branding Photography</p>
        </div>
        <div className={style.item}>
          <img src={star} alt="star" />
          <p className={style.text}>Portrait Photography</p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className={`${style.items} ${style.marquee}`}
      >
        <div className={style.item}>
          <img src={star} alt="star" />
          <p className={style.text}>Event Photography</p>
        </div>
        <div className={style.item}>
          <img src={star} alt="star" />
          <p className={style.text}>Comercial Photography</p>
        </div>
        <div className={style.item}>
          <img src={star} alt="star" />
          <p className={style.text}>Product Photography</p>
        </div>
        <div className={style.item}>
          <img src={star} alt="star" />
          <p className={style.text}>Wedding Photography</p>
        </div>
        <div className={style.item}>
          <img src={star} alt="star" />
          <p className={style.text}>Landscape Photography</p>
        </div>
        <div className={style.item}>
          <img src={star} alt="star" />
          <p className={style.text}>Branding Photography</p>
        </div>
        <div className={style.item}>
          <img src={star} alt="star" />
          <p className={style.text}>Portrait Photography</p>
        </div>
      </div>
    </div>
  );
};

export default Line;
