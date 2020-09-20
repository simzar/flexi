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

const defaultDevices = [
  {
    id: 1,
    image:
      'https://storage.beko.co.uk/blomberg2018products/large/Blomberg_WashingMachine_LWF294411W_White_FrontClosed.png',
    name: 'Washing machine',
    consumption: 5.44,
    isOn: true,
  },
  {
    id: 2,
    image:
      'data:image/jpeg;base64,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',
    name: 'Dishwasher',
    consumption: 4.12,
    isOn: false,
  },
  {
    id: 3,
    image:
      'https://lh3.googleusercontent.com/proxy/drFRFtQPjXFjv0ybEjjygUz2ROnwm0ch8zM6TK87FFmv0qVrhZ-oet7X4t86XIgHqXk0lXSqs6n_FiZEGs5DpVfdHnNZchV42uyzSVnlA8cfKbVP3KjcpAJWXcJTitKFyoQ5vJ5hJUfBThY2nA',
    name: 'Heat pump',
    consumption: 10.86,
    isOn: true,
  },
  {
    id: 4,
    image:
      'data:image/jpeg;base64,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',
    name: 'AC',
    consumption: 3.46,
    isOn: false,
  },
  {
    id: 5,
    image: 'https://azcd.harveynorman.com.au/media/catalog/product/w/h/whke06ss.jpg',
    name: 'Kettle',
    consumption: 0.5,
    isOn: false,
  },
];

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
    devices: defaultDevices,
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
      return {
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
