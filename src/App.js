import Header from './conponent/Header';
import Cart from './conponent/Cart';
import Home from './conponent/Home';
import { useState } from 'react'
import Alert from './conponent/Alert';
import './style/App.scss'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState({
    type: "",
    massage: ""
   })
   const alertMassage = (type, massage) => {
    setAlert({
      type: type,
      massage: massage,
      identifier: true
    })
    setTimeout(() => {
      setAlert({
        type: null,
      massage: null
      })
    }, 1000);
    console.log(type)
   }
   
  return (
    <Router>
      <Header/>
      {alert.identifier && <Alert type = {alert.type} massage = {alert.massage}/>}
      <Routes>
        <Route path='/' element={ <Home alert = {alertMassage} />}/>
        <Route path='/cart' element={ <Cart alert = {alertMassage}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
