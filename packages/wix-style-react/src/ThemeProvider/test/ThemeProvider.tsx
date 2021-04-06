import * as React from 'react';
import ThemeProvider from '..';
import { theme } from '../../Themes/floatingPanels';
import Close from 'wix-ui-icons-common/system/Close';
import AddItemMedium from 'wix-ui-icons-common/system/AddItemMedium';
import CircleLoaderCheck from 'wix-ui-icons-common/system/CircleLoaderCheck';
import CircleLoaderCheckSmall from 'wix-ui-icons-common/system/CircleLoaderCheckSmall';

function themeProviderWithMandatoryProps() {
  return <ThemeProvider />;
}

function themeProviderWithAllProps() {
  return (
    <ThemeProvider
      dataHook="dataHook"
      theme={{
        className: 'some-class',
        componentWrapper: ({children}) => <div>{children}</div>,
        icons:{
          CloseButton: {
            small: Close,
            medium: Close,
            large: Close,
          },
          CircularProgressBar: {
            small: CircleLoaderCheckSmall,
            medium: CircleLoaderCheck,
            large: CircleLoaderCheck
          },
          BaseModalLayout: {
            HeloButton: Close,
          },
          AddItemButton: {
            tiny: AddItemMedium,
            small: AddItemMedium,
            medium: AddItemMedium,
            large: AddItemMedium,
            image: AddItemMedium,
          },
        },
        color00: '#FF0000',
        color05: '#FF0000',
        color10: '#FF0000',
        color20: '#FF0000',
        color30: '#FF0000',
        color40: '#FF0000',
        color50: '#FF0000',
        color60: '#FF0000',
        textColorPrimary: '#FF0000',
        textColorPrimaryLight: '#FF0000',
        textColorSecondary: '#FF0000',
        textColorSecondaryLight: '#FF0000',
      }}
    />
  );
}

function themeProviderWiththemeTheme() {
  return (
    <ThemeProvider
      dataHook="dataHook"
      theme={theme({ mainColor: '#555555' })}
    />
  );
}
