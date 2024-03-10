import React from 'react'
import {Col, Popover, OverlayTrigger, Image} from 'react-bootstrap';
import dairy from '../../img/dairy.jpg';
import gluten from '../../img/gluten.png';
import meat from '../../img/meat.png';

function FoodRestriction({diet}) {


const restriction = (diet) => {
    let restriction;
    switch (diet) {
        case 'glutenfree': {
            restriction = 'Contains gluten'
            break;}
        case 'dairyfree': {
            restriction = 'Contains dairy'
            break;
        }
        case 'vegetarian': {
            restriction = 'Contains animal products'
            break;
        }
        default:
            {break}
        }
    return restriction;
    }
const dietImage = (diet) => {
    let dietImage;
    switch (diet) {
        case 'glutenfree': {
            dietImage = gluten;
            break;}
        case 'dairyfree': {
            dietImage = dairy;
            break;
        }
        case 'vegetarian': {
            dietImage = meat;
            break;
        }
        default:
            {break}
        }
    return dietImage;
    }

    const popover = 
        (
        <Popover id="foodRestrictionInfo">
            <Popover.Body>
            {restriction(diet)}
            </Popover.Body>
        </Popover>
          );


  return (
    <Col><OverlayTrigger trigger="hover" placement="right" overlay={popover}><Image width="40" height="40" src={dietImage(diet)} alt="food restriction" /></OverlayTrigger></Col>
  )
}

export default FoodRestriction