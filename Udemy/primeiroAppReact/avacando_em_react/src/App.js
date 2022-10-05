import { useState } from 'react';
import './App.css';

import CidadeMedieval from './assets/CidadeMedieval.png';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';


function App() {

  // const name="Heitor";
  const[userName] = useState("Maria");
  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0},
    {id: 2, brand: "Koegnissegg", color: "Cinza", newCar: false, km: 1000},
    {id: 3, brand: "Jaguar", color: "Azul", newCar: false, km: 10000},
  ];

  function showMessage(){
    console.log("Evento do compnente pai")
  }

  const [message, setMessage] = useState("Mensagem Inicial")

  const handleMessage = (msg) => { //meio que tenho para alterar a msg
    setMessage(msg)
  }

  const users = [
    {id: 1, name: "Gabriel", job: "Programador", age: 20},
    {id: 2, name: "Denner", job: "Personal", age: 26},
    {id: 3, name: "Josias", job: "Reporter", age: 66},
    {id: 4, name: "Miguel", job: "Lutador", age: 16},
  ]
  
  return (
    <div className="App">
      
      <h1>Avançando em react</h1>
      {/* imagem em public */}
      <div>
        <img src="/renaissance_castle_at_night_dark_fantasy_snowing_photograp_8799f93f-32eb-4b7b-b348-afe59ef3b63d.png" alt="castelo do final fantasy" />
      </div>
      {/* imagem em assets */}
      <div>
        <img src={CidadeMedieval} alt="Cidade Medieval" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>

      {/* Props */}
      <ShowUserName name={userName}/>
      <CarDetails brand="VW" km={100000} color="Branco" newCar={false}/> {/*<- Passar valores numéricos é assim -> {1999}*/} 

      {/* Reaproveitamento de componentes */}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true}/>
      <CarDetails brand="Honda" km={4500} color="Cinza" newcAR={false}/>

      {/* Loop em array de objetos */}
      {cars.map((car) =>(
        <CarDetails 
        key={car.id}
        brand={car.brand} 
        color={car.color}
        km={car.km} 
        newCar={car.newCar}/>
      ))}
      {/* Fragment */}
      <Fragments propFragment="TextoTeste"/>

      {/* Childrem props */}
      <Container myValue={10}>
        <p>Este é o conteúdo</p>
      </Container>
      <Container myValue={20}>
        <h5>Testando outro container</h5>
      </Container>

      {/* Funções */}
      <ExecuteFunction myFunction={showMessage}/>

      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

      {/* desafio */}
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} age={user.age} job={user.job}/>
      ))}
    </div>
  );
}

export default App;
