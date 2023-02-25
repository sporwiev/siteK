import React,{useState} from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
const Регистрация = () => {
    
    let [user, setUser]=useState('');  
    let [code, setCode]=useState('');

    function reg(e){  
        e.preventDefault();

      
        let forms = document.getElementById('form')

        if (!forms.checkValidity()) {
            // e.preventDefault()
             e.stopPropagation()
             forms.classList.add('was-validated')
            return
           } 
    
            
          
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
        
        fetch("https://pets.сделай.site/api/register", requestOptions)
        .then(response=> response.json())  
        .then(result=>{
          console.log(result)
            if ('data' in result){
             setCode(result.data.code)
             console.log(result.data.code);
            }
        }
    );
    }

    


    return (
    <div>
        <Header/>
        <form className="w-50 m-auto p-3" id="form">
        <div className="mb-3 row mt-5">
            <label htmlFor="Name" className="col-sm-2 col-form-label" >Ваше имя</label>
            <div className="col-sm-10">
                <input type="text" readonly className="form-control-plaintext" placeholder="Имя" id="user_name" onChange={(e)=>setUser({...user,name: e.target.value})}/>
             </div>
             <div id="emailHelp" className="form-text">Используйте кириллические буквы</div>
        </div>
        <div className="mb-3 row mt-5">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Эл. адрес</label>
            <div className="col-sm-10">
                <input type="email" readonly className="form-control-plaintext" id="staticEmail user_email" placeholder="email@example.com" onChange={(e)=>setUser({...user,email: e.target.value})}/>
            </div>
            <div id="emailHelp" className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
        </div>
        <div className="mb-3 row mt-5">
            <label htmlFor="Phone" className="col-sm-2 col-form-label">Телефон</label>
            <div className="col-sm-10">
                <input type="number" readonly className="form-control-plaintext" placeholder="8 999 99 99" id="user_phone" onChange={(e)=>setUser({...user,phone: e.target.value})}/>
             </div>
             <div id="emailHelp" className="form-text">Используйте цифры, +, -.</div>
        </div>
        <div className="mb-3 row mt-5">
            <label htmlFor="password" className="col-sm-2 col-form-label">Пароль</label>
            <div className="col-sm-10">
                 <input type="password" className="form-control-plaintext" id="exampleInputPassword1 user_password" placeholder="Hfei8Hfdvmn6qx" onChange={(e)=>setUser({...user,password: e.target.value})}/>
            </div>
        </div>
        <div className="mb-3 row mt-5">
            <label htmlFor="repeat-password" className="col-sm-2 col-form-label">Повторите Пароль</label>
            <div className="col-sm-10">
                 <input type="password" className="form-control-plaintext" id="exampleInputPassword1 user_password_conform" placeholder="Hfei8Hfdvmn6qx" onChange={(e)=>setUser({...user,password_confirmation: e.target.value})}/>
            </div>
        </div>
        <div id="emailHelp" className="form-text">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная буква, 1 - заглавная буква</div>
        <div className="form-check p-3">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e)=>setUser({...user,confirm: e.target.value})}/>
            <label className="form-check-label " htmlFor="flexCheckDefault">Согласие на обработку данных</label>
        </div>
        <button type="submit" onClick={reg} className="btn btn-primary m-3">Регистрация</button>
     
        </form>
        <Footer/>
    </div>
    );
};
export default Регистрация;