import * as React from 'react';
import { connect, ConnectProps } from '../../logic';
import { Wrapper, SelectItemAnim } from './elements';
import HoverProvider from '../HoverProvider';
import { OutputMimeType } from '../../logic/state';

type Props = ConnectProps;

const typeNames: { [K in OutputMimeType]: string } = {
  [OutputMimeType.jpeg]: 'JPEG',
  [OutputMimeType.png]: 'PNG',
  [OutputMimeType.webp]: 'WEBP',
};

class TypeSelect extends React.PureComponent<Props> {
  public render() {
    const { app } = this.props;
    return (
      <Wrapper>
        {[OutputMimeType.jpeg, OutputMimeType.png, OutputMimeType.webp].map(k => {
          const onClick = () => {
            this.onTypeSelected(k);
          };
          const selected = k === app.state.settings.type;
          return (
            <HoverProvider key={k}>
              {hoverParams => (
                <SelectItemAnim
                  pose={
                    selected ? (hoverParams.hover ? 'hoverSelected' : 'selected') : hoverParams.hover ? 'hover' : 'init'
                  }
                  innerRef={hoverParams.ref as any}
                  onClick={onClick}
                >
                  {typeNames[k]}
                </SelectItemAnim>
              )}
            </HoverProvider>
          );
        })}
      </Wrapper>
    );
  }

  private onTypeSelected = (type: OutputMimeType) => {
    this.props.app.actions.setSettingType(type);
  };
}

export default connect(TypeSelect);
