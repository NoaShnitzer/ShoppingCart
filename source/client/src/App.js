import { useState } from 'react'
import Header from './components/frame/Header.jsx'
import Footer from './components/frame/Footer.jsx'
import Navbar from './components/frame/Navbar.jsx'
import { Outlet } from 'react-router-dom'
// import Navbar from './components/frame/navbar.jsx'
import { Provider } from 'react-redux'
import { store } from './state/store.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (

  <Provider store={store}>
    <Header/>
    <Navbar/>
        <Outlet />
    <Footer/>
  </Provider>
   
  )
}

export default App


// import logo from './logo.svg';
// import GroceriesList from './components/GroceriesList';

// function App() {
//   return (
//     <GroceriesList/>
//   );
// }

// export default App;
