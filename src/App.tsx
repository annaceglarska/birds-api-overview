import React from 'react';
import Styles from './App.module.css'
import Table from './components/table/Table';

interface AppProps{

}

const App : React.FC<AppProps>= () => {
  return (
    <Table />
  );
}

export default App;
