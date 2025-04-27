import React from 'react'
import List from '../../utilis/List'
import PersonCard from './PersonCard';

const PersonalList = () => {
  const staff = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      salary: 25000,
      region: "Mutfak",
      advance: 3000,
      remainingSalary: 22000,
      startDate: "2023-05-01",
      daysWorked: 320,
      password: "ahmet123",
    },
    {
      id: 2,
      name: "Ayşe Demir",
      salary: 20000,
      region: "Salon",
      advance: 1000,
      remainingSalary: 19000,
      startDate: "2023-06-15",
      daysWorked: 290,
      password: "",
    },
    {
      id: 3,
      name: "Mehmet Koç",
      salary: 22000,
      region: "Bahçe",
      advance: 500,
      remainingSalary: 21500,
      startDate: "2023-07-10",
      daysWorked: 280,
      password: "mehmet987",
    },
  ];
  
  return (
    <div className='w-full' >
      <List data={staff} card={PersonCard} filterKey='region' />
    </div>
  )
}

export default PersonalList
