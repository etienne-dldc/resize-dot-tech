declare module 'rc-input-number' {
  import * as React from 'react';

  interface InputNumProps {
    min?: number;
    max?: number;
    value?: number | null;
    placeholder?: string;
    step?: number;
    name?: string;
    onChange?: (value: number | null) => void;
    required?: boolean;
  }

  export default class InputNum extends React.Component<InputNumProps> {}
}
