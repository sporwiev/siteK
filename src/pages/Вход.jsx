import React,{useState} from 'react';
import {Link} from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
const Вход = () => {

    let [user, setUser]=useState();  
    let [token, setToken]=useState();

    function auth(e){  
        e.preventDefault();
        //'use strict'
    
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.getElementById('form')
      
        // Loop over them and prevent submission
      
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
        
        fetch("https://pets.сделай.site/api/login", requestOptions)
        .then(response=> response.json())  
        .then(result=>{
          console.log(result)
            if ('data' in result){
            localStorage.token=result.data.token
              setToken(result.data.token)

            }
        }
    );
    }

    console.log(user);

    return (
        
        <div>
            <Header className={'width100'}/>
            <form className='w-50 m-auto p-3' method='GET' action='' id='form'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Адрес эл-почты</label>
                    <input type="email" className="form-control" id="tel" onChange={(e)=>setUser({...user,email: e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setUser({...user,password: e.target.value})}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="password" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Проверить меня</label>
                </div>
                
                <button type="submit" onClick={auth} className="btn btn-primary" value="Войти"></button>
                </form>
        <Footer/>
    </div>
    

    );
}

export default Вход;