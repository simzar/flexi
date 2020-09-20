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
  12,
  14,
  12,
  10,
  9,
  8,
  7,
  11,
  14,
  15,
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
  {
    hour: '14:00',
    price: 7,
  },
  {
    hour: '15:00',
    price: 6,
  },
  {
    hour: '16:00',
    price: 6,
  },
  {
    hour: '17:00',
    price: 8,
  },
  {
    hour: '18:00',
    price: 10,
  },
  {
    hour: '19:00',
    price: 8,
  },
  {
    hour: '20:00',
    price: 5,
  },
  {
    hour: '21:00',
    price: 3,
  },
];

const currentConsumption = () => {
  return JSON.parse(window.sessionStorage.getItem('devices'))
    .filter((d) => d.isOn)
    .map((d) => d.consumption)
    .reduce((a, b) => a + b, 0);
};

export default () => {
  const [idx, setIdx] = useState(22);
  const [data, setData] = useState(initialData);
  const [balance, setBalance] = useState(17);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = [
        ...data,
        {
          hour: hours[idx],
          price: prices[idx],
        },
      ];

      setData(newData.slice(-10));
      if (idx % 3 === 0) {
        setBalance(balance + prices[idx]);
      }

      setIdx((idx + 1) % 24);
    }, 2000);

    return () => clearInterval(interval);
  }, [data, idx, balance]);

  return (
    <>
      <Card
        header='Balance'
        text={<Chip avatar={<Avatar>{balance}</Avatar>} label='Flexicoin' color='primary' />}
      />
      <Card
        header='Rate per 1kWh'
        text={
          <Chip
            avatar={<Avatar>{data[data.length - 1].price}</Avatar>}
            label='FlexiCoin'
            color='primary'
          />
        }
      />
      <Card
        header='Current consumption'
        color='primary'
        text={
          <Chip
            avatar={<Avatar>{currentConsumption()}</Avatar>}
            label='FlexiCoin'
            color='primary'
          />
        }
      />
      <div>
        <LineChart data={data} />
      </div>
    </>
  );
};
