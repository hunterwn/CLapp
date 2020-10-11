import React, {useState} from 'react'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

export default  function Bathroom() {
    const [open, setOpen] = useState(false);
  
    return (
        <>
           <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
            >
                Bathroom
            </Button>
            <Collapse in={open}>
                 <div id="example-collapse-text">
                 <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    1
                    </InputGroup.Prepend>
                </InputGroup>

                
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    2
                    </InputGroup.Prepend>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    3
                    </InputGroup.Prepend>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    4
                    </InputGroup.Prepend>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    5
                    </InputGroup.Prepend>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    6
                    </InputGroup.Prepend>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    7
                    </InputGroup.Prepend>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    8
                    </InputGroup.Prepend>
                </InputGroup>
                 </div>
            </Collapse>
         </>
    );
  }