import React, { useContext } from 'react';
import { CustomContext } from '../../hooks/Context';
import './style.css';

export default function NowDate() {
  const { days, months, dayNow } = useContext(CustomContext);
  return (
    <div className='body-side-panel-footer__now-date'>
      <span className='secondary-text'>Сегодня</span>
      <span className='secondary-text'>
        {days[dayNow.getDay()]}, {dayNow.getDate()} {months[dayNow.getMonth()]}
      </span>
    </div>
  );
}
