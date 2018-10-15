import * as React from 'react';
import { connect, ConnectProps } from 'src/logic';
import Box, { BoxHeader } from '../Box';
import { OutputMimeType } from 'src/logic/state';
import Slider from 'rc-slider';
import InputNum from 'rc-input-number';
import { SliderWrapper } from './elements';

type Props = ConnectProps;

class Settings extends React.PureComponent<Props> {
  public render() {
    const { app } = this.props;
    return (
      <Box>
        <BoxHeader gradient="pink">settings</BoxHeader>
        <p>Format</p>
        {[OutputMimeType.jpeg, OutputMimeType.png, OutputMimeType.webp].map(k => {
          const onClick = () => {
            this.onTypeSelected(k);
          };
          return (
            <div key={k} onClick={onClick}>
              {k === app.state.settings.type && ' > '}
              {k}
            </div>
          );
        })}
        <p>Max Size</p>
        <InputNum value={app.state.settings.maxSize} step={100} onChange={app.actions.setSettingMaxSize} />
        <SliderWrapper>
          <p>Quality: {app.state.settings.quality}%</p>
          <Slider value={app.state.settings.quality} min={25} max={100} onChange={app.actions.setSettingQuality} />
        </SliderWrapper>
      </Box>
    );
  }

  private onTypeSelected = (type: OutputMimeType) => {
    this.props.app.actions.setSettingType(type);
  };
}

export default connect(Settings);
