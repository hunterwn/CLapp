import React, {Component} from 'react'
import EventCalendar from './EventCalendar';
import Sidebar from './Sidebar'
import {database} from './fire'
import Dropdown from './dropdown'
import { Container, Row, Col } from 'react-bootstrap';

database.ref("users").on('value', function(snapshot) {
  console.log(snapshot.val())
});



export default class CLapp extends Component {
    render() {
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
              <Row className="justify-content-md-left">
                <Col sm={0.5}><Dropdown /></Col>
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
        )
    }
}