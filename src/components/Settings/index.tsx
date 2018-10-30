import * as React from 'react';
import { connect, ConnectProps } from '../../logic';
import Box, { BoxHeader } from '../Box';
import Slider from 'rc-slider';
import InputNum from 'rc-input-number';
import { Padding, Label, Content, Fade } from './elements';
import TypeSelect from '../TypeSelect';
import { PoseGroup } from 'react-pose';
import { OutputMimeType } from '../../logic/state';

type Props = ConnectProps;

class Settings extends React.PureComponent<Props> {
  public render() {
    const { app } = this.props;
    const supportQuality =
      app.state.settings.type === OutputMimeType.jpeg || app.state.settings.type === OutputMimeType.webp;
    return (
      <Box>
        <BoxHeader gradient="pink">settings</BoxHeader>
        <Content>
          <Label>Format</Label>
          <TypeSelect />
          <Label>Max Size</Label>
          <Padding>
            <InputNum
              value={app.state.settings.maxSize}
              step={100}
              placeholder="1600"
              onChange={app.actions.setSettingMaxSize}
              required={true}
              min={300}
            />
          </Padding>
          <PoseGroup>
            {supportQuality
              ? [
                  <Fade key="only">
                    <Label>Quality: {app.state.settings.quality}%</Label>
                    <Padding>
                      <Slider
                        value={app.state.settings.quality}
                        min={25}
                        max={100}
                        onChange={app.actions.setSettingQuality}
                      />
                    </Padding>
                  </Fade>,
                ]
              : []}
          </PoseGroup>
        </Content>
      </Box>
    );
  }
}

export default connect(Settings);
