import { useState } from 'react';
import './App.css';
import { CardTitleText } from './components/CardTitleText/CardTitleText';
import { Header } from './components/Header/Header';
import { TotalPriceCard } from './components/PriceCard/TotalPriceCard';
import { UserInfo } from './components/UserInfo/UserInfo';
import { CardsContainer } from './contanier/CardsContainer';

function App() {
  const [togglePayment , setTogglePayment] = useState(false);
  const handleTogglePayment = (e)=>{
    setTogglePayment(!togglePayment);
    console.log("togglePayment",togglePayment);
  }
  return (
    <div className="container-fluid ps-0 pe-0">
      <Header />      
      <div className="ms-4 me-4">
      <div className="row mt-5">
        <UserInfo key="UserInfo" />
        <TotalPriceCard key="TotalPriceCard" togglePayment={handleTogglePayment}/>
      </div>
      <div>
        <CardTitleText title={"Tailor your cover with our optional extra"} />
        <CardsContainer togglePayment={togglePayment}/>
      </div>
    </div>
    </div>
  );
}

export default App;
