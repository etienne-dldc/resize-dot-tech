import React from 'react';
import { TypeSelect } from '../TypeSelect';
import { InlineFormGroup, PopoverContainer } from './elements';
import {
  Card,
  H5,
  NumericInput,
  Slider,
  Checkbox,
  InputGroup,
  Callout,
  Popover,
  Button
} from '@blueprintjs/core';
import { Appear } from '../Appear';
import { useSelector } from '../../select';
import { OutputMimeType } from '../../store/types';

export const Settings = React.memo(() => {
  const settings = useSelector(s => s.settings);
  const running = useSelector(s => s.running);

  const supportQuality =
    settings.type === OutputMimeType.jpeg || settings.type === OutputMimeType.webp;

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
            value={settings.maxSize}
            onValueChange={val => {
              settings.setSettingMaxSize(val);
            }}
            disabled={running}
          />
        </InlineFormGroup>
        <Appear condition={supportQuality}>
          <InlineFormGroup inline={true} label="Quality">
            <Popover>
              <Button disabled={running}>{settings.quality}%</Button>
              <PopoverContainer>
                <Slider
                  value={settings.quality}
                  min={30}
                  max={100}
                  onChange={settings.setSettingQuality}
                  labelStepSize={10}
                  disabled={running}
                />
              </PopoverContainer>
            </Popover>
          </InlineFormGroup>
        </Appear>
      </Card>
      <Card>
        <H5>
          <Checkbox
            checked={settings.watermark.enabled}
            onChange={e => {
              settings.setWatermarkEnabled((e.target as any).checked);
            }}
          >
            Watermark
          </Checkbox>
        </H5>
        <Appear condition={!settings.watermark.enabled}>
          <Callout icon="info-sign">
            Add a white text in the bottom right corner of each image.
          </Callout>
        </Appear>
        <Appear condition={settings.watermark.enabled}>
          <InlineFormGroup inline={true} label="Content">
            <InputGroup
              leftIcon="new-text-box"
              value={settings.watermark.text}
              onChange={(e: any) => {
                settings.setWatermarkText(e.target.value);
              }}
              disabled={running}
              placeholder="Watermark content"
            />
          </InlineFormGroup>
          <InlineFormGroup inline={true} label="Opacity">
            <Popover>
              <Button disabled={running}>{settings.watermark.opacity}%</Button>
              <PopoverContainer>
                <Slider
                  value={settings.watermark.opacity}
                  min={0}
                  max={100}
                  onChange={settings.setWaterMarkOpacity}
                  labelStepSize={10}
                  disabled={running}
                />
              </PopoverContainer>
            </Popover>
          </InlineFormGroup>
          <InlineFormGroup inline={true} label="Size">
            <Popover>
              <Button disabled={running}>
                {settings.watermark.size}
                px
              </Button>
              <PopoverContainer>
                <Slider
                  value={settings.watermark.size}
                  min={10}
                  max={50}
                  onChange={settings.setWaterMarkSize}
                  labelStepSize={10}
                  disabled={running}
                />
              </PopoverContainer>
            </Popover>
          </InlineFormGroup>
        </Appear>
      </Card>
    </>
  );
});
