import * as React from 'react';
import { connect, ConnectProps } from '../../logic';
import TypeSelect from '../TypeSelect';
import { PoseGroup } from 'react-pose';
import { OutputMimeType } from '../../logic/state';
import { Card, H5, FormGroup, NumericInput, Slider, Checkbox, InputGroup } from '@blueprintjs/core';
import Appear from '../Appear';

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
            onValueChange={val => {
              app.actions.setSettingMaxSize(val);
            }}
            disabled={app.state.running}
          />
        </FormGroup>
        <Appear condition={supportQuality}>
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
        </Appear>
        <FormGroup
          label={
            <Checkbox checked={app.state.settings.watermark.enabled} onChange={app.actions.handleWatermarkCheckbox}>
              Watermark
            </Checkbox>
          }
        >
          <Appear condition={app.state.settings.watermark.enabled}>
            <FormGroup label="Text">
              <InputGroup
                leftIcon="new-text-box"
                value={app.state.settings.watermark.text}
                onChange={app.actions.handleWatermarkText}
                disabled={app.state.running}
              />
            </FormGroup>
            <FormGroup label="Opacity" labelInfo={app.state.settings.watermark.opacity + '%'}>
              <Slider
                value={app.state.settings.watermark.opacity}
                min={0}
                max={100}
                onChange={app.actions.setWaterMarkOpacity}
                labelStepSize={10}
                disabled={app.state.running}
              />
            </FormGroup>
          </Appear>
        </FormGroup>
      </Card>
    );
  }
}

export default connect(Settings);
