import React, {Component} from 'react'
import EventCalendar from './EventCalendar';
import Sidebar from './Sidebar'


export default class CLapp extends Component {

    

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