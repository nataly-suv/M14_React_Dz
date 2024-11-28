import style from "./footer.module.css";
import logo from "../../assets/Footer/logo_footer.png";
import Line from "../Line/line";
import arrow from "../../assets/damienBraun/arrow.png";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__top}>
        <img src={logo} alt="logo" className={style.logo} />
      </div>
      {/*  */}
      <Line />
      {/*  */}
      <div className={style.footer__bottom}>
        <div className={style.bottom__left}>
          <p className={style.left__text}>
            A more meaningful home for photography
          </p>
          {/*Let’sgo  */}
          <div className={style.left_call}>
            <div className={style.left_letsGo}>
              <p className={style.left_letsGo_text}>Let’s</p>
              <button className={style.left_letsGo_btn}>
                <img src={arrow} alt="arrow" />
              </button>
            </div>
            <p className={style.left_textBottom}>Work Together</p>
          </div>
        </div>
        <div className={style.bottom__right}>
          <div className={style.right__column}>
            <h3 className={style.right__title}>Home</h3>
            <a href="#" className={style.right__text}>About Me</a>
            <a href="#" className={style.right__text}>My Works</a>
            <a href="#" className={style.right__text}>Testimonials</a>
          </div>
          <div className={style.right__column}>
            <h3 className={style.right__title}>Clients</h3>
            <a href="#" className={style.right__text}>Klovesto</a>
            <a href="#" className={style.right__text}>Nukeway</a>
            <a href="#" className={style.right__text}>Cloven’s</a>
            <a href="#" className={style.right__text}>MenVol</a>
          </div>
          <div className={style.right__column}>
            <h3 className={style.right__title}>Portfolio</h3>
            <a href="#" className={style.right__text}>Events</a>
            <a href="#" className={style.right__text}>Portrait</a>
            <a href="#" className={style.right__text}>Branding</a>
            <a href="#" className={style.right__text}>Commerciale</a>
            <a href="#" className={style.right__text}>Wedding</a>
          </div>
          <div className={style.right__column}>
            <h3 className={style.right__title}>Services</h3>
            <a href="#" className={style.right__text}>Portraits</a>
            <a href="#" className={style.right__text}>Events</a>
            <a href="#" className={style.right__text}>Commercial </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
