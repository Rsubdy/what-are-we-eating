import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap';

function ModalAlert({show, title, message}) {

const [showAlert, setShowAlert] = useState(show);

  return (
        <Modal show={showAlert} onHide={()=>setShowAlert(false)}>
            <Modal.Header>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {message}
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-success btn-sm" onClick={()=>setShowAlert(false)}>
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>        
  )
}

export default ModalAlert