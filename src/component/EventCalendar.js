import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import fire from './fire.js'
import { INITIAL_EVENTS, createEventId } from './event-utils'


class EventCalendar extends Component{
    

    componentDidMount() {

    }
    
    

    render() {
        
        return(
            <div className = "calendar">
                <FullCalendar
                    plugins={[  dayGridPlugin  ]}
                    initialView="dayGridMonth"
                    initialEvents={INITIAL_EVENTS}
                />
            </div>
        )
    }
}

export default EventCalendar;