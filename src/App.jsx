import React, {useEffect, useState} from 'react';
import Crypto from './Crypto'
import Scroll from "./Scroll";

import './css/App.css';


const App: React.FC = () => {
  
  return (
  <div>
    <Scroll />
    <Crypto />
  </div>
  );
}

export default App;
