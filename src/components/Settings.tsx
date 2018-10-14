import * as React from 'react';
import { connect, ConnectProps } from 'src/logic';
import Box from './Box';
import Header from './Header';
import { OutputMimeType } from 'src/logic/state';
// import Slider from 'rc-slider';

type Props = ConnectProps;

class Settings extends React.PureComponent<Props> {
  public render() {
    const { app } = this.props;
    return (
      <Box>
        <Header gradient="pink">settings</Header>
        <p>Format</p>
        {[OutputMimeType.jpeg, OutputMimeType.png, OutputMimeType.webp].map(k => {
          const onClick = () => {
            // this.setState(prevState => ({ ...prevState, settings: { ...prevState.settings, type: k } }));
          };
          return (
            // tslint:disable-next-line:jsx-no-lambda
            <div key={k} onClick={onClick}>
              {k === app.state.settings.type && ' > '}
              {k}
            </div>
          );
        })}
      </Box>
    );
  }
}

export default connect(Settings);
