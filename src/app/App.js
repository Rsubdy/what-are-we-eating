import React, {useState} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { clearFridge } from '../features/fridge/fridgeSlice';
import { clearPreferences } from '../features/diets/dietPreferencesSlice';
import { useDispatch } from 'react-redux';
import { clearApiRecipes } from '../features/recipes/recipesSlice';
import logo from '../img/logo.png'
import trash from '../img/trash.png';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button, Image, Container, Row, Col, Navbar} from 'react-bootstrap';
import {title, bodyStyle, navButton} from '../styles';

function App() {
  
  const dispatch = useDispatch();
  const clear = () => {
    dispatch(clearFridge([]));
    dispatch(clearPreferences());
    dispatch(clearApiRecipes());
    handleOffcanvas();
  }

  const handleClearPreferences = () => {
    clear();
    setTimeout(()=>localStorage.clear(), 5);
  }
  
  const [offcanvas, setOffcanvas] = useState(false);

  const handleOffcanvas = () => {
    setOffcanvas(!offcanvas);
  }

  

  return (
    <Container className="container bg-warning d-block justify-content-center" style={bodyStyle}>
      <Row className="sticky-top">
      <Navbar expand="lg" className="d-flex justify-content-center navbar navbar-expand-lg bg-warning border-bottom border-black border-5 mb-2">
          <Col className="col-1 me-2">
          <img className="navbar-logo" src={logo} alt="logo" height="150" w-auto="true"/>
          </Col>
          <Col className="col-7">
            <Row className="mb-1">
            <header className="title bg-white border border-5 border-black text-center" style={title} >What are we eating?</header>
            </Row>
          <Row className="d-block justify-content-center">
          <NavLink className="button active" to="/" ><p className={navButton}>Home</p></NavLink>
          <NavLink to="/fridge" ><p className={navButton}>Fridge</p></NavLink>
          <NavLink to="/recipes" ><p className={navButton}>Recipes</p></NavLink>
          <NavLink to="/about"><p className={navButton}>About</p></NavLink>
          </Row>
          </Col>
      </Navbar>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col sm={12} lg={6} xl={6} className="bg-light text-black border border-black border-5 rounded bg-opacity-75 p-3">
          <Outlet />
        </Col>
      </Row>
      <Row className="sticky-bottom">
        <footer className="container-fluid d-flex justify-content-center pt-2 pb-2 bg-warning">
          <Button variant="danger" className="btn btn-large w-25 border-black border-4" onClick={handleOffcanvas}>
              <Image src={trash} width="25" height="25" />
          </Button>
        <>
          <Offcanvas show={offcanvas} onHide={handleOffcanvas} placement="bottom">
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Clear all of your preferences?</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p>This will clear your food preferences, products in your fridge and recipes from the web. Are you sure?</p>
            <Button variant="btn btn-danger" onClick={()=>handleClearPreferences()}><strong>Yup! Clear all!</strong></Button>
          </Offcanvas.Body>
          </Offcanvas>
        </>
        </footer>
      </Row>
    </Container>)
}

export default App;