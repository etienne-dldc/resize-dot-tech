declare module 'file-saver' {
  function saveAs(data: Blob, filename?: string, disableAutoBOM?: boolean): void;

  namespace saveAs {

  }

  export = saveAs;
}
