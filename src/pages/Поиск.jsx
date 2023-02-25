import React,{useState} from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
const Поиск = () => {

    let [district, setDistrict]=useState('');  
    let [kind, setKind]=useState(''); 

    function Search(e){  
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
          
        console.log(district)
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
      
        let raw = JSON.stringify(district);
        
        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch('https://pets.сделай.site/api/search/order', requestOptions)
        .then(response=> response.json())  
        .then(result=>{
          console.log(result)
            if ('data' in result){
              setDistrict(result.data.orders)

            }
        }
    );
    }

    console.log(district);

    return (
    <div className="min-vh-25">
        <Header/>
        <form className="w-50 m-auto mt-5" id="form" >

<div className="">
    <label htmlFor="district" className="form-label">Выберите район:</label>
    <select id="district" className="form-select" onChange={(e)=>setDistrict({...district,district: e.target.value})}>
        <option>Приморский</option>
        <option>Петроградский</option>
        <option>Василиостровский</option>
        <option>Центральный</option>
        <option>Красногвардейский</option>
        <option>Выборгский</option>
        <option>Калининский</option>
    </select>
</div>

<div className="mb-3">
        <label htmlFor="password" className="form-label">Введите вид животного:</label>
        <input type="text" className="form-control" id="password" onChange={(e)=>setKind({...kind,kind: e.target.value})}/>
    </div>

        <button type="submit" onClick={Search} className="btn btn-primary">Поиск</button>
</form>
        <Footer/>
    </div>
    );
};
export default Поиск;