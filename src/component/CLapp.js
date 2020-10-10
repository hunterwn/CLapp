import React, {Component} from 'react'
import EventCalendar from './EventCalendar';
import Sidebar from './Sidebar'


export default class CLapp extends Component {
    render() {
        return( 
          <div className='app-main'>
              <div className = "sidebar">
                <div className ='requests'>
                    <Sidebar/>
                </div>
                <div className ='locations'>
                    <Sidebar/>
                </div>
              </div>
              
            <EventCalendar/>
          </div>
        )
    }
}