import {React } from 'react'
import FridgeProduct from '../../components/FridgeProduct/FridgeProduct';
import { useDispatch } from 'react-redux';
import { clearApiRecipes } from '../recipes/recipesSlice';
import {Button} from 'react-bootstrap';
function FridgeList(props) {

const allProducts = props.list; 
const clear = props.clear;
const dispatch = useDispatch();

return (
    <div>
      {allProducts.length !== 0 && <Button 
        className="btn-danger btn-sm border-black border-3 fw-bold mb-3"
        onClick={(event)=>{
          dispatch(clear([]));
          localStorage.removeItem('recipesFromApi');
          dispatch(clearApiRecipes())}}
      >Clear fridge</Button>}
        {allProducts.map((product)=>{
          return <FridgeProduct product={product} key={product.id} />
        })}
      </div>
  )
}

export default FridgeList;