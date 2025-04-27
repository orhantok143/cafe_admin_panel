import React from 'react';
import CategoryCard from './CategoryCard';
import List from '../../utilis/List';


const CategoryList = () => {
  const categories = [
    {
      name: 'Pizza',
      subCategories: [
        {
          name: 'Margherita',
          isHot: true,
          productCount: 5,
        },
        {
          name: 'Pepperoni',
          isHot: false,
          productCount: 2,
        },
        {
          name: 'Vegetarian',
          isHot: true,
          productCount: 4,
        },
      ],
    },
    {
      name: 'Burger',
      subCategories: [
        {
          name: 'Cheeseburger',
          isHot: true,
          productCount: 3,
        },
        {
          name: 'Veggie Burger',
          isHot: true,
          productCount: 0,
        },
      ],
    },
    {
      name: 'Sushi',
      subCategories: [
        {
          name: 'California Roll',
          isHot: false,
          productCount: 6,
        },
        {
          name: 'Tuna Roll',
          isHot: false,
          productCount: 2,
        },
      ],
    },
  ];
  return (
    <div>
     <List data={categories} card={CategoryCard} filterKey='name' />
    </div>
  );
};

export default CategoryList;
