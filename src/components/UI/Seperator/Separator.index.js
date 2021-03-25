import React from 'react'
import './Separator.styles.css';
import { Label,Input,FormGroup,} from 'reactstrap';
function Separator() {
    return (
         <FormGroup className="form-group separate__label  " check>
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label className="control-label" for="exampleCheck" check>
              {props.label}
            </Label>
         </FormGroup>

    )
}

export default Separator
