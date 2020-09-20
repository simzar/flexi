import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: '1rem auto',
    width: '90%',
    padding: 0,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    height: '85%',
  },
  header: {
    margin: 'auto 0',
    fontSize: '15px',
  },
});

export default function PrettyCard(props) {
  const { header, text } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography variant='h6' component='span' className={classes.wrapper}>
          <span className={classes.header}>{header}</span>
          <span className={classes.text}>{text}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}
