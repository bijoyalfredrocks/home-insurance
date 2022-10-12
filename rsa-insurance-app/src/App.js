import './App.css';
import { ExtraCoverTitle } from './components/ExtraCoverTitle/ExtraCoverTitle';
import { Header } from './components/Header/Header';
import { QuoteInfo } from './components/QuoteInfo/QuoteInfo';
import { QuoteSummary } from './components/QuoteSummary/QuoteSummary';
import { OptionalExtraCover } from './contanier/OptionalExtraCover';

const App = () => {
  return (
    <div className="container-fluid px-0">
      <Header />
      <div className="ms-4 me-4">
        <div className="row mt-5">
          <QuoteInfo />
          <QuoteSummary />
        </div>
        <div>
          <ExtraCoverTitle/>
          <OptionalExtraCover />
        </div>
      </div>
    </div>
  );
}

export default App;
