import * as React from 'react';
import { connect, ConnectProps } from '../../logic';
import { Fade } from './elements';
import TypeSelect from '../TypeSelect';
import { PoseGroup } from 'react-pose';
import { OutputMimeType } from '../../logic/state';
import { Card, H5, FormGroup, NumericInput, Slider } from '@blueprintjs/core';

type Props = ConnectProps;

class Settings extends React.PureComponent<Props> {
  public render() {
    const { app } = this.props;
    const supportQuality =
      app.state.settings.type === OutputMimeType.jpeg || app.state.settings.type === OutputMimeType.webp;
    return (
      <Card>
        <H5>Settings</H5>
        <FormGroup helperText="Select the output format" label="Format">
          <TypeSelect />
        </FormGroup>
        <FormGroup label="Max Size">
          <NumericInput
            placeholder="1600"
            required={true}
            stepSize={100}
            majorStepSize={1000}
            minorStepSize={10}
            value={app.state.settings.maxSize}
            onValueChange={app.actions.setSettingMaxSize}
            disabled={app.state.running}
          />
        </FormGroup>
        <PoseGroup>
          {supportQuality
            ? [
                <Fade key="only">
                  <FormGroup label="Quality" labelInfo={app.state.settings.quality + '%'}>
                    <Slider
                      value={app.state.settings.quality}
                      min={30}
                      max={100}
                      onChange={app.actions.setSettingQuality}
                      labelStepSize={10}
                      disabled={app.state.running}
                    />
                  </FormGroup>
                </Fade>,
              ]
            : []}
        </PoseGroup>
      </Card>
    );
  }
}

export default connect(Settings);
