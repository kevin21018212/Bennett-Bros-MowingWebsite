import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
   
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/Email.jpg')}
              text='Email: bennettyard@gmail.com'
              label='Email'
              path='/Contact'
            />
            <CardItem
              src={require('../images/Phone.jpg')}
              text='Phone:
               217-278-1869'
              label='Phone'
              path='/Contact'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;