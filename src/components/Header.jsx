import React from 'react';
import {Link} from "react-router-dom";
import logo from '../image/coffePage.svg';
const Header = () => {
    return (
    <header>
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <p className="navbar-brand" href="#"><img src={logo} className="w-25 rounded-3"/></p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to={'/'} className="nav-link text-white"><p className="nav-link text-white" aria-current="page" href="#">Главная</p></Link>
        </li>
        <li className="nav-item">
        <Link to={'/Личный'} className="nav-link text-white"><p className="nav-link text-white" aria-current="page" href="#">Личный кабинет</p></Link>
        </li>
        <li className="nav-item">
        <Link to={'/Регистрация'} className="nav-link text-white"><p className="nav-link text-white" aria-current="page" href="#">Регистрация</p></Link>
        </li>
        <li className="nav-item">
        <Link to={'/Добавить Обьявление'} className="nav-link text-white"><p className="nav-link text-white" aria-current="page" href="#">Добавить обьявление</p></Link>
        </li>
        <li className="nav-item">
        <Link to={'/Поиск по обьявлениям'} className="nav-link text-white"><p className="nav-link text-white" aria-current="page" href="#">Поиск по обьявлениям</p></Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск"/>
        <button className="btn btn-outline-success" type="submit">Поиск</button>
      </form>
    </div>
  </div>
</nav>

  

</header>

    );
}
export default Header;