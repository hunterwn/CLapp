/*

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import InputGroup from 'react-bootstrap/InputGroup'
import Col from 'react-bootstrap/Col'
import Row  from 'react-bootstrap/Row';
import Commons from './Commons'
import Bathroom from './Bathroom'
import FormControl from 'react-bootstrap/FormControl'

const EVENT = {
  id:1,
  title:"My Birthday",
  start: "2020-10-09",
}


function App() {
  return (
    <div className="App">

  <Row>
    <Col>

          <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            initialEvents={[EVENT]}
          ></FullCalendar>
        
    </Col>

    <Col md="2">

      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl as="textarea" aria-label="With textarea" />
      </InputGroup>
    
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          Events
        </InputGroup.Prepend>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          Kitchen
        </InputGroup.Prepend>
      </InputGroup>

      <Row>
        <Commons>
        </Commons>
      </Row>
      
      <Row>
        <Bathroom>
        </Bathroom>
      </Row>
      
    </Col>   
  </Row>
    </div>
  );
}

export default App;

*/