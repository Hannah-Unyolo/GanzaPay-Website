
import Product from "./Product";
import Intro from './Landing-page';
import "./App.css"
import Navb from "./Navbar/navbar"

function Nav(){
  return(
        <h1>GanzaPay</h1>
      < Product/>
    <div>
            <section className='all'>
        <div className='Landingpage'>

            <Intro/>
        </div>
<Navb/>
    </div>
  );
};

export default Nav;
