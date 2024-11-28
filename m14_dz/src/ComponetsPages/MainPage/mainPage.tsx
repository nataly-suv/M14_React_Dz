import AboutOnMainPage from "../../components/AboutOnMainPage/aboutOnMainPage";
import DamienBraun from "../../components/DamienBraun/damienBraun";
import Portfolio from "../../components/Portfolio/portfolio";
import style from "./mainPage.module.css";

const MainPage = () => {
  return (
    <main className={style.mainPage__comteiner}>
      <DamienBraun />
      <AboutOnMainPage />
      <Portfolio/>
    </main>
  );
};

export default MainPage;
