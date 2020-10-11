import React, {useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import {database} from './fire'


function constructEvent(id, title, start) {
    return {
        id: id,
        title: title,
        start: start
    }
}


function EventCalendar(props) {

    let calendarRef = React.createRef();
    const dateStr = new Date().toISOString().substr(0,10);

    const [events, setEvents] = useState([
        {
        id: 1,
        title: "KnightHacks",
        start: dateStr
        }
    ])

    /*function getEvents() {
        var events = [];
        database.ref("details/qw7xVHh/").on('value', function(snapshot) {
            var id = snapshot.val().id
            var title = snapshot.val().title
            var start = snapshot.val().start
            events.push(constructEvent(id, title, start));
            console.log(events);
        });
        
        setEvents(events);
    }*/

    useEffect(() => {
        console.log("Side effect has been triggered")
        let dbref = database.ref("details/")
        function onValueChange(snapshot) {
            const newArr = []
            var x = snapshot.val()
            for(var i in x) {
                let newEvent = constructEvent(x[i].id,x[i].title,x[i].start)
                newArr.push(newEvent)             
            }
            //let newEvent = constructEvent(id, title, start)
            //console.log(events.concat(newEvent))
            setEvents(events.concat(newArr));
        }
        dbref.on('value', onValueChange);
        return () => database.ref("details/").off('value', onValueChange)
    }, []);

    return(
        <div className = "calendar">
            <FullCalendar
                ref={calendarRef}
                plugins={[  dayGridPlugin  ]}
                initialView="dayGridMonth"
                events={/*[{
                    id: 1,
                    title: "KnightHacks",
                    start: new Date().toISOString().substr(0,10)
                }]*/
                    events
                }
            />
        </div>
    )
}



export default EventCalendar;