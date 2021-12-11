
import '../styles/app.scss';
import '../styles/page.scss';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div class='page'>
    <Header />
    <Nav />
    <Main />
    <Footer />
    

    

    
  </div>
  );
}

export default App;
