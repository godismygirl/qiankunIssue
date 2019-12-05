import React, { useEffect, useState } from 'react';
import moment from 'moment';
import style from './header.less';

const Date = () => {
  const [date, setDate] = useState({
    time: moment().format('HH:mm:ss'),
    week: moment().format('dddd')
  });
  useEffect(() => {
    const t = setInterval(() => {
      setDate({
        time: moment().format('HH:mm:ss'),
        week: moment().format('dddd')
      });
    }, 1000);

    return () => {
      clearInterval(t);
    };
  }, []);

  return (
    <div className={style.date}>
      {date.time}
      <span style={{paddingLeft: '10px'}}></span>
      {date.week}
    </div>
  );
};

export default Date;
