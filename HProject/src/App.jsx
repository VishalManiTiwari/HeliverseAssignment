import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import TrustedUser from './components/TrustedUser';
import WholePage from './components/WholePage';
import AllRound from './components/AllRound';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#121212] md:h-[250rem] h-[330rem] xl:h-[240rem] text-white">
      <Header />
      <MainContent />
      <TrustedUser />
      <WholePage/>
      <AllRound/>
      <Footer/>
    </div>
  );
}

export default App;
