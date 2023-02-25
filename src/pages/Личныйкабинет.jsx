import React from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
import собака from '../image/собака.jpg'
const Личный = () => {

    return (
    <div>
        <Header/>
            <p className="fs-1 m-5">Личный кабинет</p>
            <div>
                <div className="d-flex flex-row flex-wrap m-auto p-3 w-50">

                    <p className="w-50 text-primary" >id:</p>
                    <p className="w-50">14</p>

                    <p className="w-50 text-primary" >Телефон:</p>
                    <p className="w-50" >+7-911-456-78-78</p>

                    <p className="w-50 text-primary">email:</p>
                    <p className="w-50" >leonid@yandex.ru</p>

                    <p className="w-50 text-primary" >Имя:</p>
                    <p className="w-50" >Леонид</p>

                    <p className="w-50 text-primary">Дата регистрации:</p>
                    <p className="w-50">26-06-2015</p>

                    <p className="w-50 text-primary">Количество найденных животных:</p>
                    <p className="w-50">2</p>

                    <p className="w-50 text-primary">Количество объявлений:</p>
                    <p className="w-50">4</p>
                </div>
            <p className="fs-1 m-5">Электронная почта</p>
            <form className="w-50 m-auto p-3" >
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Введите адрес электронной почты</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div className="form-text">Используйте цифры, +, -.</div>
                </div>
                <button type="submit" className="btn btn-primary">Отправить</button>
            </form>
            <p className="fs-1 m-5">Добавленные обьявления</p>
            <div className="p-5">
              <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={собака} className="img-fluid rounded-start" alt="..."/>
                  </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Заголовок карточки</h5>
                        <div className="card-text">
                            
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary m-3">Редактировать</button>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
         </div>
         
        <Footer/>
    </div>
    );
};
export default Личный;