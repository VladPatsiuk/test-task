import React, { useState, useEffect } from 'react';
import './App.scss';
import MonthPicker from './components/MonthPicker/MonthPicker';
import UsersList from './components/UsersList/UsersList';
import API from "./utils/API";

const App = () => {

  const [users, setUsers] = useState([])
  const [activeUsers, setActiveUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await API.get(
        'task0/users'
      )
      setUsers(result.data)
    }
    fetchData()
    }, [])

  const getMonth = (month) => {
    const currentMonthUsers = users.filter(user => new Date(user.dob).getMonth() === month)
    setActiveUsers(currentMonthUsers)
  }
  
  return (
    <div className="app">
      <MonthPicker users={users} getMonth={getMonth}/>
      <UsersList users={activeUsers}/>
    </div>
  );
}

export default App;
