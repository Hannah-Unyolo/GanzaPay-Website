import './index.css'
import Ganza from './Ganza.png'

const Product = () => {
    return(
        <div className='big'>
            <p className='product-text'>GanzaPay is gamified app for mobile money apps.<br></br>With GanzaPay you can send money,<br></br> withdraw money, check balance and call customer care<br></br> without the need to read or write.</p>

             <div id='image'>
             <img src={Ganza} alt='' />
             </div>
         
            
        </div>
    )
}




export default Product;