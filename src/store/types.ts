export enum OutputMimeType {
  jpeg = 'image/jpeg',
  png = 'image/png',
  webp = 'image/webp'
}

export type WaterMarkSettings = {
  enabled: boolean;
  text: string;
  opacity: number;
  size: number;
};
