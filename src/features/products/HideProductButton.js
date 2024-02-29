import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Button, Modal} from 'react-bootstrap';
import { removeProduct } from './productsSlice';

function HideProductButton({product}) {

const dispatch = useDispatch();
const [showModal, setShowModal] = useState(false);

const header = "Are you sure?";
const body = "This will hide the product from the list. To show it again reload the page.";
const yes = "Ok, hide it.";
const no = "Oh no! Leave it!";

const yesHandler = () =>{
          dispatch(removeProduct(product));
          setShowModal(false);
        };
const noHandler = () =>{
          setShowModal(false);
        };

const handleHideFromDatabase = () => {
            setShowModal(true);
          }
      

  return (
    <>
    <Button className="btn-danger btn-sm"  onClick={handleHideFromDatabase}>Hide</Button>
    <div><Modal show={showModal} onHide={noHandler}>
      <Modal.Dialog >
        <Modal.Header>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{body}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button className="btn-success btn-sm " onClick = {yesHandler}>{yes}</Button>
          <Button className="btn-danger btn-sm " onClick = {noHandler} >{no}</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
    </div>
    </>
  )
}

export default HideProductButton