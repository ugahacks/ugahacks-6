import React from 'react';
import './Schedule.css';
import '../../bootstrap.css'


function Schedule(props) {
  return (
    <>
      <section id='schedule' className=''>
        <div class="section-text schedule-text">
          <h1>Schedule</h1>
          <div class="day-schedule collapse" id="Frisched">
            <h1 class="day-header"><span class="disabled"><i class="material-icons">arrow_back_ios</i></span> Friday <span class="active" onclick="changeSchedule('#Frisched','#Satsched')"><i class="material-icons">arrow_forward_ios</i></span></h1>
            <table>
              <tbody>
                <tr>
                  <td>What's big data? - Example Sponsor (Room 101)</td>
                  <td>9:00 am</td>
                </tr>
                <tr>
                  <td>Workshops</td>
                  <td>10:00 am</td>
                </tr>
                <tr>
                  <td>More Workshops</td>
                  <td>11:00 am</td>
                </tr>
                <tr>
                  <td>Even More Workshops</td>
                  <td>11:30 am</td>
                </tr>
                <tr>
                  <td>Lunch</td>
                  <td>12:00 pm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="day-schedule collapse" id="Satsched">
            <h1 class="day-header"><span class="active" onclick="changeSchedule('#Satsched','#Frisched')"><i class="material-icons">arrow_back_ios</i></span> Saturday <span class="active" onclick="changeSchedule('#Satsched','#Sunsched')"><i class="material-icons">arrow_forward_ios</i></span></h1>
            <table>
              <tbody>
                <tr>
                  <td>Breakfast</td>
                  <td>8:00 am</td>
                </tr>
                <tr>
                  <td>Workshops</td>
                  <td>10:00 am</td>
                </tr>
                <tr>
                  <td>The latest Byte - Example Sponsor (Room 101)</td>
                  <td>11:00 am</td>
                </tr>
                <tr>
                  <td>Even More Workshops</td>
                  <td>11:30 am</td>
                </tr>
                <tr>
                  <td>Lunch</td>
                  <td>12:00 pm</td>
                </tr>
                <tr>
                  <td>Cup Stacking - Example Sponsor (Room 101)</td>
                  <td>1:00 pm</td>
                </tr>
                <tr>
                  <td>Dinner</td>
                  <td>6:00 pm</td>
                </tr>
                <tr>
                  <td>Join the UGAHacks team!</td>
                  <td>7:00 pm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="day-schedule collapse" id="Sunsched">
            <h1 class="day-header"><span class="active" onclick="changeSchedule('#Sunsched','#Satsched')"><i class="material-icons">arrow_back_ios</i></span> Sunday <span class="disabled"><i class="material-icons">arrow_forward_ios</i></span></h1>
            <table>
              <tbody>
                <tr>
                  <td>Brekafast</td>
                  <td>9:00 am</td>
                </tr>
                <tr>
                  <td>Judging</td>
                  <td>10:00 am</td>
                </tr>
                <tr>
                  <td>Closing Ceremony</td>
                  <td>1:00 pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>

  );
}

export default Schedule;
