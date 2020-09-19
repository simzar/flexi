import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import LineChart from '../../components/LineChart/LineChart';

const hours = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
];

const prices = [
  10,
  12,
  14,
  16,
  14,
  12,
  10,
  9,
  8,
  7,
  11,
  18,
  17,
  14,
  15,
  12,
  11,
  10,
  6,
  4,
  2,
  2,
  3,
  8,
];

const initialData = [
  {
    hour: '12:00',
    price: 10,
  },
  {
    hour: '13:00',
    price: 11,
  },
];

export default () => {
  const [idx, setIdx] = useState(14);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = [
        ...data,
        {
          hour: hours[idx],
          price: prices[idx],
        },
      ];
      setData(newData);
      setIdx((idx + 1) % 24);
    }, 1000);
    return () => clearInterval(interval);
  }, [data, idx]);

  return (
    <>
      <Card
        header='Turimi FlexiCoin:'
        text={<Chip avatar={<Avatar>520</Avatar>} label='Flexicoin' color='primary' />}
      />
      <Card
        header='Gaunami FlexiCoin už 1kWh:'
        text={<Chip avatar={<Avatar>17</Avatar>} label='Flexicoin' color='primary' />}
      />
      <div>
        <LineChart data={data} />
      </div>
    </>
  );
};
