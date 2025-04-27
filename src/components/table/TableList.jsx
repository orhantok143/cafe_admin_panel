import React from 'react'
import List from '../../utilis/List'
import TableCard from './TableCard';

const TableList = () => {
    const tables = [
        { id: 1, name: "Masa 1", region: "Bahçe" },
        { id: 2, name: "Masa 2", region: "Bahçe" },
        { id: 3, name: "Masa 3", region: "Salon" },
        { id: 4, name: "Masa 4", region: "Teras" },
        { id: 5, name: "Masa 5", region: "Salon" },
        { id: 6, name: "Masa 6", region: "Bahçe" },
        { id: 7, name: "Masa 7", region: "VIP Alan" },
        { id: 8, name: "Masa 8", region: "Teras" },
        { id: 9, name: "Masa 9", region: "Salon" },
        { id: 10, name: "Masa 10", region: "Bahçe" },
      ];
      
  return (
    <div>
      <List data={tables} card={TableCard} filterKey='region' />
    </div>
  )
}

export default TableList
