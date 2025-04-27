import React from 'react'
import List from '../../utilis/List';
import OrderCard from './OrderCard';
const orders = [
  {
    id: 1,
    name: 'Pizza Margherita',
    category: 'Pizza',
    subCategory: 'Italian',
    price: 45,
    quantity: 2,
    totalAmount: 90,
    table: 'Masa 1',
    orderedBy: 'Ali Yılmaz',
    status:"Iptal Edildi"
  },
  {
    id: 2,
    name: 'Cheeseburger',
    category: 'Burger',
    subCategory: 'American',
    price: 35,
    quantity: 3,
    totalAmount: 105,
    table: 'Masa 3',
    orderedBy: 'Mehmet Demir',
    status:"Ödendi"
  },
  {
    id: 3,
    name: 'Sushi Roll',
    category: 'Sushi',
    subCategory: 'Japanese',
    price: 60,
    quantity: 1,
    totalAmount: 60,
    table: 'Masa 2',
    orderedBy: 'Zeynep Kaya',
    status:"Ödendi"
  },
  {
    id: 4,
    name: 'Margherita Pizza + Extra Cheese',
    category: 'Pizza',
    subCategory: 'Italian',
    price: 50,
    quantity: 4,
    totalAmount: 200,
    table: 'Masa 4',
    orderedBy: 'Burak Çelik',
    status:"Ödendi"
  },
  {
    id: 5,
    name: 'California Roll',
    category: 'Sushi',
    subCategory: 'Japanese',
    price: 70,
    quantity: 2,
    totalAmount: 140,
    table: 'Masa 5',
    orderedBy: 'Ayşe Karaca',
    status:"Ödendi"
  },
  {
    id: 6,
    name: 'Chicken Wings',
    category: 'Appetizer',
    subCategory: 'American',
    price: 20,
    quantity: 6,
    totalAmount: 120,
    table: 'Masa 1',
    orderedBy: 'Fatma Aydın',
    status:"Ödendi"
  },
  {
    id: 7,
    name: 'Cheeseburger with Fries',
    category: 'Burger',
    subCategory: 'American',
    price: 40,
    quantity: 3,
    totalAmount: 120,
    table: 'Masa 6',
    orderedBy: 'Emre Gül',
    status:"Ödendi"
  },
  {
    id: 8,
    name: 'Tuna Roll',
    category: 'Sushi',
    subCategory: 'Japanese',
    price: 65,
    quantity: 2,
    totalAmount: 130,
    table: 'Masa 2',
    orderedBy: 'Selin Erdoğan',
    status:"Ödendi"
  },
  {
    id: 9,
    name: 'Veggie Burger',
    category: 'Burger',
    subCategory: 'Vegan',
    price: 35,
    quantity: 1,
    totalAmount: 35,
    table: 'Masa 3',
    orderedBy: 'Kemal Öztürk',
    status:"Ödendi"
  },
  {
    id: 10,
    name: 'Seafood Sushi',
    category: 'Sushi',
    subCategory: 'Japanese',
    price: 80,
    quantity: 2,
    totalAmount: 160,
    table: 'Masa 4',
    orderedBy: 'Hakan Yıldız',
    status:"Beklemede"
  },
];



const OrderList = () => {
  return (
    <div>
        <List data={orders} card={OrderCard} filterKey='status' />
    </div>
  )
}

export default OrderList
