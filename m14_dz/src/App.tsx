import { createContext, Dispatch, useState } from "react";
import "./App.css";
import Header from "./components/Header/header";
import MainPage from "./ComponetsPages/MainPage/mainPage";
import Footer from "./components/Footer/footer";

// ИЗМЕНЕНИЕ ТЕМЫ
// тип для переменной ThemeContext
type ContextType = {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;
};
// переменная для конткста
export const ThemeContext = createContext<ContextType | null>(null);
//

function App() {
  // состояние для изменения Theme с light на dark
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <div className={`conteinerApp ${theme}`}>
        <Header />
        <MainPage />
        <Footer/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
