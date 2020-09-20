import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PowerOffIcon from '@material-ui/icons/PowerOffOutlined';
import PowerOnIcon from '@material-ui/icons/PowerSettingsNew';
import Dialog from '../../components/Dialog';

const Device = ({ name, image, consumption, isOn, onTurnOff }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar src={image} variant='square' />
    </ListItemAvatar>
    <ListItemText primary={name} secondary={isOn ? `${consumption} kWh` : '0 kWh'} />
    <ListItemIcon onClick={isOn ? onTurnOff : () => {}}>
      {isOn ? <PowerOnIcon fontSize='large' htmlColor='red' /> : <PowerOffIcon fontSize='large' />}
    </ListItemIcon>
  </ListItem>
);

export default class Devices extends React.Component {
  state = {
    showDialog: false,
    dialogMessage: null,
    deviceIdToTurnOff: null,
    devices: JSON.parse(sessionStorage.getItem('devices')),
  };

  onTurnOffRequest(deviceId) {
    this.setState((oldState) => {
      const device = oldState.devices.find((device) => device.id === deviceId);
      return {
        deviceIdToTurnOff: deviceId,
        dialogMessage: `By turning off ${device.name} you will earn additional ${Math.abs(
          device.consumption * 4,
        )} FlexiCoins.`,
        showDialog: true,
      };
    });
  }

  onTurnOffAccept() {
    this.setState((oldState) => {
      const newState = {
        devices: oldState.devices.map((device) => {
          if (device.id === oldState.deviceIdToTurnOff) {
            return {
              ...device,
              isOn: false,
            };
          }

          return device;
        }),
        showDialog: false,
        dialogMessage: null,
        deviceIdToTurnOff: null,
      };

      sessionStorage.setItem('devices', JSON.stringify(newState.devices));

      return newState;
    });
  }

  onTurnOffReject() {
    this.setState(() => ({
      showDialog: false,
      dialogMessage: null,
      deviceIdToTurnOff: null,
    }));
  }

  render() {
    return (
      <>
        <List>
          {this.state.devices.map((device) => (
            <Device
              {...device}
              key={device.id}
              onTurnOff={() => this.onTurnOffRequest(device.id)}
            />
          ))}
        </List>
        <Dialog
          open={this.state.showDialog}
          message={this.state.dialogMessage}
          onAgree={() => this.onTurnOffAccept()}
          onCancel={() => this.onTurnOffReject()}
        ></Dialog>
      </>
    );
  }
}
