import './App.css';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <MainLayout>
      <div className="App">
        <header className="App-header">
        </header>

        <h1 className="main-title">Stanley Bail Bonds LLC</h1>
        <div className="container">
          <img src="/images/handcuff.png" alt="" className="handcuff" />
          <div className="tagline">Locked up? We can get you out!</div>
          <img src="/images/open_handcuff.png" alt="" className="open_handcuff" />
        </div>
        <div className="info-box">
          <p>Open 24-7</p>
          <p>Operating in SC, NC, FL, and TX</p>
          <p>(843)-240-9240</p>
          <p>Stanleybailbondsllc@gmail.com</p>
        </div>

      </div>
    </MainLayout>
  );
}

export default App;
