import React from 'react'

function Card(props) {
    
  return (
    <div>

        <div className="p-5">
                    <div className="card mb-3" >
                        <div className="row g-0">
                        <div className="col-md-4">
                            <img src={props.pet.photo} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <h5 className="card-title">Заголовок карточки</h5>
                            <div className="card-text">
                                <p>id<p id="id">{props.pet.id}</p></p>
                                <p>Вид животного<p id="type">{props.pet.kind}</p></p>
                                <p>Описание<p id="text">{props.pet.description}</p></p>
                                <p>Номер чипа<p id="number_chip">{props.pet.mark}</p></p>
                                <p>Район<p id="region"></p>{props.pet.district}</p>
                                <p>Дата<p id="date">{props.pet.date}</p></p>
                            </div>
                            <p className="card-text"><small className="text-muted">Последнее обновление 3 мин. назад</small></p>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>

    </div>
  )
}

export default Card