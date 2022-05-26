import React from 'react';
import './App.css';
import Ui from './components/Ui'
import Fader from "./components/Fader";

function App() {
  return (
    <div className="App">
   SYNTH
        <Ui name='ui'>
            <Fader name={'fader1'} type={'volume1'} />
            <Fader name={'fader2'} type={'volume2'}/>
            <Fader name={'fader3'} type={'volume3'}/>
        </Ui>

    </div>
  );
}

export default App;
