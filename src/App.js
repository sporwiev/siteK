import { Routes, Route } from "react-router-dom";
import Main from "../src/pages/Main";
import Личный from "../src/pages/Личныйкабинет";
import Регистрация from "../src/pages/Регистрация";
import Поиск from "../src/pages/Поиск";
import Добавить from "../src/pages/Добавить";
import Вход from "../src/pages/Вход";

function App() {
  
  return (
    
    <div>

        <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/Личный'} element={<Личный/>}/>
                <Route path={'/Регистрация'} element={<Регистрация/>}/>
                <Route path={'/Добавить Обьявление'} element={<Добавить/>}/>
                <Route path={'/Поиск по обьявлениям'} element={<Поиск/>}/>
                <Route path={'/Вход'} element={<Вход/>}/>
                
      </Routes>

    </div>
  );

}

export default App;
