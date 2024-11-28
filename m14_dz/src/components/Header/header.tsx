import style from "./header.module.css";

import logo from "../../assets/header/logo.png";
import SwitchTheme from "../SwitchTheme/switchTheme";

const Header = () => {
  return (
    <header className={style.header}>
      {/* переключение темы с темной на светлую */}
      <SwitchTheme />

      {/* основной контент header */}
      <div className={style.header__main}>
        <div className={style.logoBox}>
          <img src={logo} alt="logo" className={style.logo} />
        </div>
        {/* навигация */}
        <div className={style.navs}>
          <a href="" className={style.nav}>
            Home
          </a>
          <a href="" className={style.nav}>
            About Me
          </a>
          <a href="" className={style.nav}>
            Portfolio
          </a>
          <a href="" className={style.nav}>
            Services
          </a>
        </div>
        {/* контакты */}
        <div className={style.contacts}>
          <button className={style.contacts__btn}>Contact Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
