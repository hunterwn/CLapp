import React, {useState} from 'react'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'


export default  function Dropdown({title, list, n}) {
    const [open, setOpen] = useState(false);
    console.log(list)
    console.log(n)

    const items = []
    
    for (var i = 0; i<n; i++) {
        items.push(
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    {list[i]}
                </InputGroup.Prepend>
            </InputGroup>
          )
    }

    return (
        <>
           <Button block
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            >
                {title} ({n})
            </Button>
            <Collapse in={open}>
                 <div id="example-collapse-text">

                    {items}
                 
                 </div>
            </Collapse>
         </>
    );
  }