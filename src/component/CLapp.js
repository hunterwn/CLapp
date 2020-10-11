import React, {Component} from 'react'
import EventCalendar from './EventCalendar';
import Sidebar from './Sidebar'
import {database} from './fire'
import Bathroom from './Bathroom'
import { Container, Row, Col } from 'react-bootstrap';

database.ref("users").on('value', function(snapshot) {
  console.log(snapshot.val())
});



export default class CLapp extends Component {
    render() {
        var views = ["Calendar", "Login"];
        var requests = ["Requests", "Pending", "History"];
        var things = ["People", "Events", "Locations"];

        return( 
          <div className='app-main'>

              <Row className="justify-content-md-left">
                <Col sm={8}><EventCalendar/></Col>
                <Col><Sidebar items={views} dropdown={false}/></Col>
                <Col>
                  <Row><Bathroom /></Row>
                  <Row><Bathroom /></Row>
                </Col>
              </Row>


          </div>
        )
    }
}