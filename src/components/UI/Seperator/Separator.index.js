import React from 'react'
import './Separator.styles.css';
import { Label,Col} from 'reactstrap';
function Separator(props) {
    return (
         <Col className="separate__label" md={12}>
              <Label>{props.label}</Label>
          </Col>
    )
}

export default Separator
