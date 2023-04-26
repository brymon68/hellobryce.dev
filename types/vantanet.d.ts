declare module 'vanta/dist/vanta.net.min' {
  export interface NetParams {
    el: string;
    mouseControls: boolean;
    touchControls: boolean;
    gyroControls: boolean;
    minHeight: number;
    minWidth: number;
    xOffset?: number;
    yOffset?: number;
    size?: number;
    backgroundColor?: string;
  }

  export interface NetInstance {
    setOptions: ({
      el,
      mouseControls,
      touchControls,
      gyroControls,
      minHeight,
      minWidth,
      size,
      xOffset,
      yOffset,
      backgroundColor
    }: Omit<NetParams, 'el'>) => void;
    resize: () => void;
    destroy: () => void;
  }

  declare global {
    interface Window {
      VANTA: {
        NET: ({
          el,
          mouseControls,
          touchControls,
          gyroControls,
          minHeight,
          minWidth,
          size,
          xOffset,
          yOffset,
          backgroundColor
        }: NetParams) => NetInstance;
      };
    }
  }
  const NET: NetInstance<NetParams>;
  export default NET;
}
