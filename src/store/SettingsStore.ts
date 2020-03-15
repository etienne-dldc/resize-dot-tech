import { useState, useMemo, useCallback } from 'democrat';
import { OutputMimeType, WaterMarkSettings } from './types';
import produce, { Draft } from 'immer';

export type StateSettings = {
  type: OutputMimeType;
  quality: number;
  maxSize: number;
  watermark: WaterMarkSettings;
};

export const SettingsStore = () => {
  const [settings, setSettings] = useState<StateSettings>({
    type: OutputMimeType.jpeg,
    quality: 90,
    maxSize: 1600,
    watermark: {
      enabled: false,
      text: '',
      opacity: 50,
      size: 20
    }
  });

  const immerSetSettings = useCallback((updater: (draft: Draft<StateSettings>) => void) => {
    setSettings(prev => produce(prev, updater));
  }, []);

  const setWatermarkEnabled = useCallback(
    (value: boolean) => {
      immerSetSettings(prev => {
        prev.watermark.enabled = value;
      });
    },
    [immerSetSettings]
  );

  const setWatermarkText = useCallback(
    (value: string) => {
      immerSetSettings(prev => {
        prev.watermark.text = value;
      });
    },
    [immerSetSettings]
  );

  const setWaterMarkOpacity = useCallback(
    (value: number) => {
      immerSetSettings(prev => {
        prev.watermark.opacity = value;
      });
    },
    [immerSetSettings]
  );

  const setWaterMarkSize = useCallback(
    (value: number) => {
      immerSetSettings(prev => {
        prev.watermark.size = value;
      });
    },
    [immerSetSettings]
  );

  const setSettingType = useCallback(
    (value: OutputMimeType) => {
      immerSetSettings(prev => {
        prev.type = value;
      });
    },
    [immerSetSettings]
  );

  const setSettingQuality = useCallback(
    (value: number) => {
      immerSetSettings(prev => {
        prev.quality = value;
      });
    },
    [immerSetSettings]
  );

  const setSettingMaxSize = useCallback(
    (value: number) => {
      immerSetSettings(prev => {
        prev.maxSize = value;
      });
    },
    [immerSetSettings]
  );

  return useMemo(
    () => ({
      ...settings,
      setWatermarkEnabled,
      setWatermarkText,
      setWaterMarkOpacity,
      setWaterMarkSize,
      setSettingType,
      setSettingQuality,
      setSettingMaxSize
    }),
    [
      settings,
      setWatermarkEnabled,
      setWatermarkText,
      setWaterMarkOpacity,
      setWaterMarkSize,
      setSettingType,
      setSettingQuality,
      setSettingMaxSize
    ]
  );
};
