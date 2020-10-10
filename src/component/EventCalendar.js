import React, {Component} from 'react'
import FullCalendar, { CalendarApi } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import fire, {database} from './fire'


function constructEvent(id, title, start) {
    this.id = id;
    this.title = title;
    this.start = start;
}



class EventCalendar extends Component{
    
    getEvents() {
        var calendarEl = document.getElementById('calendar');
        var events = [];
        var detailsRef = database.ref("details/qw7xVHh/").on('value', function(snapshot) {
            var id = snapshot.val().id
            var title = snapshot.val().title
            var start = snapshot.val().start
            events.push(new constructEvent(id, title, start));
            console.log(events);
        });
        calendarEl.render();
        return events
    }

    componentDidMount() {
        this.setState({foo: "works"});
      }

    render() {
        
        
        return(
            <div className = "calendar">
                <FullCalendar
                    ref={this.calendarRef}
                    plugins={[  dayGridPlugin  ]}
                    initialView="dayGridMonth"
                    events={this.getEvents()}
                />
            </div>
        )
        
    }
}


export default EventCalendar;