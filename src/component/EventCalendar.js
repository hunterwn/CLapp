import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import fire, {database} from './fire'


function constructEvent(id, title, start) {
    this.id = id;
    this.title = title;
    this.start = start;
}


class EventCalendar extends Component{

    calendarRef = React.createRef();

    getEvents() {
        var events = [];
        var detailsRef = database.ref("details/qw7xVHh/").on('value', function(snapshot) {
            var id = snapshot.val().id
            var title = snapshot.val().title
            var start = snapshot.val().start
            events.push(new constructEvent(id, title, start));
            console.log(events);
        });
        
        return events
    }

    render() {
        return(
            <div className = "calendar">
                <FullCalendar
                    ref={this.calendarRef}
                    plugins={[  dayGridPlugin  ]}
                    initialView="dayGridMonth"
                    events={this.getEvents.bind(this)}
                />
            </div>
        )
        
    }

    componentDidMount() {
        let calendarApi = this.calendarRef.current.getApi()
    }
}



export default EventCalendar;