import {
  getComponentUrl,
  getSymbolUrl,
} from '../../../symbolsComponentsMapping/storybookMapping';

export const createLinkedSymbolName = ({ groupSymbol, symbol }) => ({
  text: symbol,
  url: getSymbolUrl({ groupSymbol, symbol }),
});

export const createLinkedComponentsNames = componentsNamesArr =>
  componentsNamesArr.map(componentName => ({
    text: `<${componentName}/>`,
    url: getComponentUrl({ componentName }),
  }));
