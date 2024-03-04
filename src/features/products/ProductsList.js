import React, {useEffect, useState} from 'react'
import ListedProduct from '../../components/ListedProduct/ListedProduct';
import { Row, Container } from 'react-bootstrap';
import { sorting } from './sorting';

function ProductsList({searchedProducts, sortingPreference, displayedProducts}) {

const [productsToList, setProductsToList] = useState(displayedProducts)
const products = searchedProducts.length !== 0 ? searchedProducts : displayedProducts;

  useEffect(()=>{
    setProductsToList(sorting(products, sortingPreference));
    },[products, sortingPreference])
    
  return (
    <Container>
      <Row>
      {productsToList.map((e)=>{
        return <ListedProduct product={e} key={e.id} />
      })}
      </Row>
    </Container>
  )
}
    

export default ProductsList