import * as React from 'react';
import { useOvermind } from '../../logic';
import TypeSelect from '../TypeSelect';
import { InlineFormGroup, PopoverContainer } from './elements';
import { OutputMimeType } from '../../logic/state';
import { Card, H5, NumericInput, Slider, Checkbox, InputGroup, Callout, Popover, Button } from '@blueprintjs/core';
import Appear from '../Appear';

type Props = {};

const Settings: React.SFC<Props> = ({}) => {
  const app = useOvermind();
  const supportQuality =
    app.state.settings.type === OutputMimeType.jpeg || app.state.settings.type === OutputMimeType.webp;
  return (
    <>
      <Card>
        <H5>Settings</H5>
        <InlineFormGroup inline={true} label="Format">
          <TypeSelect />
        </InlineFormGroup>
        <InlineFormGroup inline={true} label="Max Size">
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
        </InlineFormGroup>
        <Appear condition={supportQuality}>
          <InlineFormGroup inline={true} label="Quality">
            <Popover>
              <Button>{app.state.settings.quality}%</Button>
              <PopoverContainer>
                <Slider
                  value={app.state.settings.quality}
                  min={30}
                  max={100}
                  onChange={app.actions.setSettingQuality}
                  labelStepSize={10}
                  disabled={app.state.running}
                />
              </PopoverContainer>
            </Popover>
          </InlineFormGroup>
        </Appear>
      </Card>
      <Card>
        <H5>
          <Checkbox checked={app.state.settings.watermark.enabled} onChange={app.actions.handleWatermarkCheckbox}>
            Watermark
          </Checkbox>
        </H5>
        <Appear condition={!app.state.settings.watermark.enabled}>
          <Callout icon="info-sign">Add a white text in the bottom right corner of each image.</Callout>
        </Appear>
        <Appear condition={app.state.settings.watermark.enabled}>
          <InlineFormGroup inline={true} label="Content">
            <InputGroup
              leftIcon="new-text-box"
              value={app.state.settings.watermark.text}
              onChange={app.actions.handleWatermarkText}
              disabled={app.state.running}
              placeholder="Watermark content"
            />
          </InlineFormGroup>
          <InlineFormGroup inline={true} label="Opacity">
            <Popover>
              <Button>{app.state.settings.watermark.opacity}%</Button>
              <PopoverContainer>
                <Slider
                  value={app.state.settings.watermark.opacity}
                  min={0}
                  max={100}
                  onChange={app.actions.setWaterMarkOpacity}
                  labelStepSize={10}
                  disabled={app.state.running}
                />
              </PopoverContainer>
            </Popover>
          </InlineFormGroup>
          <InlineFormGroup inline={true} label="Size">
            <Popover>
              <Button>
                {app.state.settings.watermark.size}
                px
              </Button>
              <PopoverContainer>
                <Slider
                  value={app.state.settings.watermark.size}
                  min={10}
                  max={50}
                  onChange={app.actions.setWaterMarkSize}
                  labelStepSize={10}
                  disabled={app.state.running}
                />
              </PopoverContainer>
            </Popover>
          </InlineFormGroup>
        </Appear>
      </Card>
    </>
  );
};

export default Settings;
