import React, { useState } from 'react';
import './Schedule.css';
import '../../bootstrap.css'
// import { motion } from "framer-motion"
import day1 from './images/day1.svg';
import day2 from './images/day2.svg';
import day3 from './images/day3.svg';
import comingsoon from './images/comingsoon.svg';

// eslint-disable-next-line
const buttonVariants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: .9,
  }
}

function DayImg(props) {
  return (
      <img
        src={props.image}
        alt={props.alt}
      />
  );
}

function Schedule(props) {

  // eslint-disable-next-line
  const dayMapping = {
    0: "friday",
    1: "saturday",
    2: "sunday",
  }

  const [day, setDay] = useState(getDay());

  function getDay() {
    var date = new Date();
    var dateDay = date.getDay();

    if (dateDay === 6) {
      return 1;
    } else if( dateDay === 0) {
      return 2;
    } else {
      return 0;
    }
  }

  // eslint-disable-next-line
  function renderDay() {
    if (day === 0) {
      return (
        <>
        <DayImg image={day1} alt="Day 1 banner"/>
        <div>
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
        </>
      );
    } else if (day === 1) {
      return (
        <>
        <DayImg image={day2} alt="Day 2 banner"/>
        <div>
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
        </>
      );
    } else {
      return (
        <>
        <DayImg image={day3} alt="Day 3 banner"/>
        <div>
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
        </>
      );
    }
  }

  // eslint-disable-next-line
  function changeDay(increment) {
    if (day + increment >= 0 && day + increment <= 2) {
      setDay(day+increment);
    }
  }

  return (
      <section id='schedule' className=''>
        <img id="commingsoonimg" src={comingsoon} alt="Coming Soon banner"></img>
      </section>
  )

//   return (
//     <>
//       <section id='schedule' className=''>
//         <div className="section-text schedule-text">
//           <h1 id="scheduleheader">Schedule</h1>
//           <div className="day-header">
//             <motion.button
//               onClick={() => changeDay(-1)}
//               className="back-button"
//               variants={buttonVariants}
//               whileHover="hover"
//               ></motion.button>
//             <h1>{dayMapping[day]} </h1>
//             <motion.button
//               onClick={() => changeDay(1)}
//               className="forward-button"
//               variants={buttonVariants}
//               whileHover="hover"
//               whileTap="tap"
//               > </motion.button>
//           </div>
//           <div className="day-container">
//           {renderDay()}
//           </div>
//         </div>
//       </section>
//     </>
//   );
}

export default Schedule;
