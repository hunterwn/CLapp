import React, {Component} from 'react'
import EventCalendar from './EventCalendar';
<<<<<<< Updated upstream
import Sidebar from './Sidebar'
=======
import {database} from './fire'
import Dropdown from './dropdown'
import { Modal, Form, Row, Col, Button } from 'react-bootstrap';
>>>>>>> Stashed changes


export default class CLapp extends Component {

    

<<<<<<< Updated upstream
    render() {
        var views = ["Calendar", "Login"];
        var requests = ["Requests", "Pending", "History"];
        var things = ["People", "Events", "Locations"];
        return( 
          <div className='app-main'>
              <div className ='view'>
                  <Sidebar items={views} dropdown={false}/>
              </div>
              <div className = "sidebar">
                <div className ='requests'>
                    <Sidebar items={requests} dropdown={false}/>
                </div>
                <div className ='things'>
                    <Sidebar items={things}/>
                </div>
              </div>
              
            <EventCalendar/>
          </div>
        )
    }
}
=======


function MyVerticallyCenteredModal(props) {

  function onFormSubmit() {
    props.onHide(true);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Detail
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="detailOwner">
          <Form.Label>Detail Owner</Form.Label>
          <Form.Control type="text" placeholder="Enter Owner" />
        </Form.Group>
        <Form.Group controlId="detailTitle">
          <Form.Label>Task Name</Form.Label>
          <Form.Control type="text" placeholder='(e.g., "Clean Kitchen")' />
        </Form.Group>
        <Form.Group controlId="dateStart">
          <Form.Label>Task Date</Form.Label>
          <Form.Control type="text" placeholder="(Enter Date)" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onFormSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function CLapp(){

      const [modalShow, setModalShow] = React.useState(false);
  
      //placeholder strings
        var requests = ["Sam <-----> You","David <---> Anyone"];
        var pending = ["Hunter <-----> Phoebe",
        "Dave <---> Holden", "You <-----> David"];
        var history = ["Hunter <-----> Phoebe",
        "Dave <---> Holden", "You <-----> David"];
        var commons = ["Rec Room","Laundry Room","N Breezeway"
        ,"S Breezeway","N Lobbies","S Lobbies","N Halls","S Halls"];
        var bathroom = ["Mens","Womens","Master","Guest 1","Guest 2"];

        
        return(
            <div className='app-main'>
              <div className="topBar"><h1 className="title">CLapp</h1></div>
              <Row>
                <div className="sideBar">
                  <div className = 'buffer'></div>

                  <Button onClick={() => setModalShow(true)}>
                    +
                  </Button>
                  <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                </div>
                <Col sm={8}><EventCalendar/></Col>
                <Col>
                  <Row><Col>
                    <Dropdown title={"Requests"}list={requests}n={2}/>
                  </Col></Row>
                  <Row><Col>
                    <Dropdown title="Pending"list={pending}n={3}/>
                  </Col></Row>
                  <Row><Col>
                  <Dropdown title="History"list={history}n={3}/>
                  </Col></Row>
                </Col>
                <Col>
                  <Row><Col>
                    <Dropdown title="Commons"list={commons}n={8}/>
                  </Col></Row>
                  <Row><Col>
                    <Dropdown title="Bathroom"list={bathroom}n={5}/>
                  </Col></Row>
                </Col>

              </Row>
            </div>
        );
  }
>>>>>>> Stashed changes
