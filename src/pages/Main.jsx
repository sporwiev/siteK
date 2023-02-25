import React from "react";
import Card from "../components/Card";
import Footer from '../components/Footer';
import Header from '../components/Header';
import горилла from '../image/горилла.jpg'
import коза from '../image/коза.jpeg'
import кошка from '../image/кошка.jpg'
import мышь from '../image/мышь.jpg'
import dog from '../image/собака.jpg'


const Main = () => {
  
  let pet = {photo:dog,id:14,kind:'собака',description:"какая то собака",mark:"чип",district:"Василиостровский",date:"22.02.2023"}
    return (
    <div>
      <Header/>
            <div id="carouselExampleCaptions" className="carousel slide">

            <div className="carousel-indicators">

              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={горилла} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Пончик</h5>
          <p>Хозяин этой гориллы очень нуждается в помощи</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={кошка} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Барсик</h5>
          <p>Хозяйка Мэри развешивает обьявления, она очень сожалеет, что неусмотрела за котом</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={dog} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Рекс</h5>
          <p>Моя собака всегда возращалась домой сама</p>
        </div>
      </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Предыдущий</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Следующий</span>
      </button>
      </div>
      <div className="w-auto h-50 bg-body-secondary p-5">

      <p className="p-2"><h4>Найденые животные</h4></p>

      </div>
      <Card pet={pet}/>
      <div className="p-5">
              <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={dog} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Заголовок карточки</h5>
                      <div className="card-text">
                        <p>id<p id="id"></p></p>
                        <p>Вид животного<p id="type"></p></p>
                        <p>Описание<p id="text"></p></p>
                        <p>Номер чипа<p id="number_chip"></p></p>
                        <p>Район<p id="region"></p></p>
                        <p>Дата<p id="date"></p></p>
                      </div>
                      <p className="card-text"><small className="text-muted">Последнее обновление 3 мин. назад</small></p>
                    </div>
                  </div>
                </div>
              </div>
      </div>
      <div className="p-5">
              <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={мышь} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Заголовок карточки</h5>
                      <div className="card-text">
                        <p>id<p id="id"></p></p>
                        <p>Вид животного<p id="type"></p></p>
                        <p>Описание<p id="text"></p></p>
                        <p>Номер чипа<p id="number_chip"></p></p>
                        <p>Район<p id="region"></p></p>
                        <p>Дата<p id="date"></p></p>
                      </div>
                      <p className="card-text"><small className="text-muted">Последнее обновление 3 мин. назад</small></p>
                    </div>
                  </div>
                </div>
              </div>
      </div>
      <div className="p-5">
              <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={кошка} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Заголовок карточки</h5>
                      <div className="card-text">
                        <p>id<p id="id"></p></p>
                        <p>Вид животного<p id="type"></p></p>
                        <p>Описание<p id="text"></p></p>
                        <p>Номер чипа<p id="number_chip"></p></p>
                        <p>Район<p id="region"></p></p>
                        <p>Дата<p id="date"></p></p>
                      </div>
                      <p className="card-text"><small className="text-muted">Последнее обновление 3 мин. назад</small></p>
                    </div>
                  </div>
                </div>
              </div>
      </div>
      <div className="p-5">
              <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={коза} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Заголовок карточки</h5>
                      <div className="card-text">
                        <p>id<p id="id"></p></p>
                        <p>Вид животного<p id="type"></p></p>
                        <p>Описание<p id="text"></p></p>
                        <p>Номер чипа<p id="number_chip"></p></p>
                        <p>Район<p id="region"></p></p>
                        <p>Дата<p id="date"></p></p>
                      </div>
                      <p className="card-text"><small className="text-muted">Последнее обновление 3 мин. назад</small></p>
                    </div>
                  </div>
                </div>
              </div>
      </div>
      <div className="w-auto h-50 bg-body-secondary rounded-start row  p-5">
      <form className="row mb-3 ">
          <h3 className="col-sm-2">Подписка на новости<br/><h6 className="mt-5">Пожпишитесь на новости и будьте всегда в курсе событий</h6></h3>
          
          <div className="col-sm-10">
            <div class="row mb-3">
             <label for="inputEmail3" class="col-form-label">Эл. почта</label>
              <div class="col-sm-10">
             <input type="email" class="form-control" id="inputEmail3"/>
             <button type="submit" class="btn btn-primary mt-5 w-5">Войти</button>
           </div>
          </div>
        </div>
      </form>
    </div>
    <Footer/>
  </div>
    );
};
export default Main;