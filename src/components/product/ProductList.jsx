import React from 'react'
import List from '../../utilis/List';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
      {
        id: 1,
        name: 'Pizza Margherita',
        price: 45,
        category: 'Pizza',
        subCategory: 'Italian',
        status: 'active',
      },
      {
        id: 2,
        name: 'Cheeseburger',
        price: 35,
        category: 'Burger',
        subCategory: 'American',
        status: 'active',
      },
      {
        id: 3,
        name: 'Sushi Roll',
        price: 60,
        category: 'Sushi',
        subCategory: 'Japanese',
        status: 'blocked',
      }
    ];
  return (
    <div>
      <List data={products} card={ProductCard} filterKey="category" />
    </div>
  )
}

export default ProductList
