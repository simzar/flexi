import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default ({ open, message, onAgree, onCancel }) => {
  return (
    <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={onCancel}>
      <DialogContent>
        <DialogContentText color='textPrimary'>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color='secondary'>
          Cancel
        </Button>
        <Button onClick={onAgree} color='primary'>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
