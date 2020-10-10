import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

class EventCalendar extends Component{
    render() {
        return(
            <div className = "calendar">
                <FullCalendar
                    plugins={[  dayGridPlugin  ]}
                    initialView="dayGridMonth"
                />
            </div>
        )
    }
}

export default EventCalendar;