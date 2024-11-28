import { useContext } from "react";
import style from "./switchTheme.module.css";
import { ThemeContext } from "../../App";

const SwitchTheme = () => {
  // переменная для принятия контекста
  const currentTheme = useContext(ThemeContext);

  const handleClick = () => {
    // Если currentTheme имеет ключ theme, равный dark
    if (currentTheme?.theme === "dark") {
      currentTheme.setTheme("light");
    } else {
      // ? означает проверку, если currentTheme существует
      currentTheme?.setTheme("dark");
    }
  };

  return (
    <div className={style.theme} onClick={handleClick}>
      Dark Teme
    </div>
  );
};

export default SwitchTheme;
