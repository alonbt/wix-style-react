import { ThemeInterface } from '../../ThemeProvider';

type FloatingPanelsProps = ThemeInterface & {
  mainColor?: string;
};

export function theme(FloatingPanelsProps: FloatingPanelsProps): ThemeInterface;
