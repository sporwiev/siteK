import React,{useState} from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
const Добавить = () => {

    let [user, setUser]=useState();  
    let [status, setStatus]=useState();
    let [id, setId]=useState();

    function add(e){  
        e.preventDefault();
        //'use strict'
    
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.getElementById('form')
      
        // Loop over them and prevent submission
      

          
        console.log(user)
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
      
        let raw = JSON.stringify(user);
        
        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://pets.сделай.site/api/login", requestOptions)
        .then(response=> response.json())  
        .then(result=>{
            if ('data' in result){
                setStatus(result.data.status)
                setId(result.data.id)
            }
        }
    );
    }

    console.log(user);
    console.log(status);
    console.log(id);

    return (
    <div>
        <Header/>
        <p className="fs-1 m-5">Добавить обьявление</p>
        <form className="w-50 m-auto p-3">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Введите ваше имя</label>
                <input type="text" className="form-control" id="name" onChange={(e)=>setUser({...user,name: e.target.value})}/>
                <div className="form-text">Используйте кириллические буквы.</div>
            </div>    
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Введите свой телефон:</label>
                <input type="number" className="form-control" id="phone" onChange={(e)=>setUser({...user,phone: e.target.value})}/>
                <div className="form-text">Используйте цифры, +, -.</div>
            </div>  
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Введите адрес электронной почты</label>
                <input type="email" className="form-control" id="email" onChange={(e)=>setUser({...user,email: e.target.value})}/>
                <div className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="kind" className="form-label">Введите вид животного:</label>
                <input type="text" className="form-control" id="kind" onChange={(e)=>setUser({...user,kind: e.target.value})}/>
                <div className="form-text">Обязательное поле</div>
            </div>
            <div className="mb-3 form-check border p-3">
                <label className="form-check-label m-3" htmlFor="exampleCheck1">Пройти автоматическую регистрацию</label>
                <label htmlFor="password" className="form-label hidden">Введите пароль:</label>
                <input type="password" className="form-control hidden" id="password" onChange={(e)=>setUser({...user,password: e.target.value})}/>
                <div className="form-text hidden">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная буква, 1 - заглавная буква</div>
                <label htmlFor="confirm_password" className="form-label hidden">Повторите пароль пароль:</label>
                <input type="password" className="form-control hidden" id="confirm_password" onChange={(e)=>setUser({...user,password_confirmation: e.target.value})}/>
                <input type="checkbox" className="form-check-input" id="check2" onChange={(e)=>setUser({...user,confirm: e.target.value})}/>
                <label className="form-check-label" htmlFor="check2 ">Подтвердить согласие на обработку персональных данных</label>
            </div>
            <div className="mb-3 p-3 border">
                <label htmlFor="image1" className="form-label">Выберите файлы изображений:</label>
                <input type="file" className="form-control" id="image1" onChange={(e)=>setUser({...user,photo1: e.target.value})}/>
                <div className="form-text">Обязательное поле</div>
                <input type="file" className="form-control mb-3" id="image2" onChange={(e)=>setUser({...user,photo2: e.target.value})}/>
                <input type="file" className="form-control mb-3" id="image3" onChange={(e)=>setUser({...user,photo3: e.target.value})}/>
            </div>
            <div className="mb-3">
                <label htmlFor="chip" className="form-label">Электронный чип:</label>
                <input type="text" className="form-control" id="chip" onChange={(e)=>setUser({...user,mark: e.target.value})}/>
                <div className="form-text">Обязательное поле.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">Описание:</label>
                <textarea className="form-control" id="description" onChange={(e)=>setUser({...user,description: e.target.value})}></textarea>
                <div className="form-text">Обязательное поле.</div>
            </div>

            <div className="mb-3 form-check p-3">
                <input type="checkbox" className="form-check-input" id="check1" onChange={(e)=>setUser({...user,confirm: e.target.value})}/>
                <label className="form-check-label" htmlFor="check1">Подтвердить согласие на обработку персональных данных</label>
            </div>

            <input type="submit" onClick={add} className="btn btn-primary form-control" value="Добавить"/>
        </form>
        <Footer/>
    </div>
    );
};
export default Добавить;