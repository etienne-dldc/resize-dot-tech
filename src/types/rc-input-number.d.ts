declare module 'rc-input-number' {
  import * as React from 'react';

  interface InputNumProps {
    min?: number;
    max?: number;
    value?: number;
    placeholder?: string;
    step?: number;
    name?: string;
    onChange?: (value: number) => void;
  }

  export default class InputNum extends React.Component<InputNumProps> {}
}
