import React, {useEffect, useState} from 'react'
import './MonthPicker.scss'

const MonthPicker = (props) => {

  const months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

  const [colors, setColors] = useState(new Array(12).fill(""))

  const usersForEachMonth = (users) => {
    return users.reduce((acc, user) => {
      let currentUserMonth = new Date(user.dob).getMonth()
      acc[currentUserMonth]++;
      return acc
    }, new Array(12).fill(0))
  }

  const colorForEachNumber = (usersCount) => {
    return usersCount.map(count => {
      if (count > 11) return "red"
      else if (count > 7) return "green"
      else if (count > 3) return "blue"
      else return "grey"
    })
  }

  useEffect(() => {
    let usersCount = usersForEachMonth(props.users)
    let colors = colorForEachNumber(usersCount)
    setColors(colors)
  }, [props.users])      
    
  return (
    <div className="months">
      <div className="box">
        <ul className='circle-container'>
          {months.map((month, index) => <li key={month}  onMouseEnter={() => props.getMonth(index)} onMouseLeave={() => props.getMonth(null)}><div className={`${colors[index]}`}>{month}</div></li>)}
          <li><div className="start"><span role="img" aria-label="star">⭐</span></div></li>
        </ul>
      </div>
      
    </div>
  )

}

export default MonthPicker;

