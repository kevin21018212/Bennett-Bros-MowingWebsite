import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Services Include</h1>
      <p>Prices Vary Based On Yard Size</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/Mowing.jpg')}
              text='Mowing'
              label='Standard'
              path='/services'
            />
            <CardItem
              src={require('../images/Trimming.jpg')}
              text='Trimming'
              label='Standard'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/Weed Removal.jpg')}
              text='Weed Removal'
              label='Extra'
              path='/services'
            />
            <CardItem
              src={require('../images/Mulching.jpg')}
              text='Spreading Mulch'
              label='Extra'
              path='/products'
            />
            <CardItem
              src={require('../images/Other.jpg')}
              text='Other Requests'
              label='Other'
              path='/Requests'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;