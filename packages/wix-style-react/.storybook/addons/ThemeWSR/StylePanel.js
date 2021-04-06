import React from 'react';
import {
  Box,
  Card,
  ColorInput,
  FillPreview,
  FormField,
  Tooltip,
} from '../../../src';
import { Cell, Layout } from '../../../src/Layout';
import { stVars as colors } from '../../../src/Foundation/stylable/colors.st.css';
import { stVars as borderRadius } from '../../../src/Foundation/stylable/border.st.css';
import Text from '../../../src/Text';
import Input from '../../../src/Input';
import Tabs from '../../../src/Tabs';
import TextButton from '../../../src/TextButton';

function StylePanel({ onChange }) {
  const [activeId, setActiveId] = React.useState(1);
  const [page, setPage] = React.useState(null);

  // Global
  const [mainColor, setMainColor] = React.useState('');
  const [textColorPrimary, setTextColorPrimary] = React.useState(colors.D10);
  const [textColorPrimaryLight, setTextColorPrimaryLight] = React.useState(
    colors.D80,
  );
  const [textColorSecondary, setTextColorSecondary] = React.useState(
    colors.D20,
  );
  const [textColorSecondaryLight, setTextColorSecondaryLight] = React.useState(
    colors.D40,
  );
  const [dividerColor, setDividerColor] = React.useState(colors.D60);
  const [borderRadius02, setBorderRadius02] = React.useState(
    borderRadius.radius02,
  );
  const [borderRadius04, setBorderRadius04] = React.useState(
    borderRadius.radius04,
  );
  const [borderRadius06, setBorderRadius06] = React.useState(
    borderRadius.radius06,
  );
  const [borderRadius08, setBorderRadius08] = React.useState(
    borderRadius.radius08,
  );

  // Button
  const [buttonBorderRadius, setButtonBorderRadius] = React.useState(null);

  const updateCallback = () => {
    onChange({
      mainColor,
      textColorPrimary,
      textColorPrimaryLight,
      textColorSecondary,
      textColorSecondaryLight,
      dividerColor,
      borderRadius02,
      borderRadius04,
      borderRadius06,
      borderRadius08,

      // Button
      buttonBorderRadius,
    });
  };

  React.useEffect(updateCallback, [
    mainColor,
    textColorPrimary,
    textColorPrimaryLight,
    textColorSecondary,
    textColorSecondaryLight,
    dividerColor,
    borderRadius02,
    borderRadius04,
    borderRadius06,
    borderRadius08,

    // Button
    buttonBorderRadius,
  ]);

  const _renderGlobal = () => {
    return (
      <>
        {/* Main colors */}
        <Text weight="bold">Components color</Text>
        <FormField label="Color" labelPlacement="left">
          <Box width="160px" marginLeft="auto">
            <ColorInput
              popoverAppendTo="window"
              value={mainColor}
              onChange={color => setMainColor(color)}
            />
          </Box>
        </FormField>
        <FormField label="Preset" labelPlacement="left">
          <Box margin="10px">
            <Layout
              cols={5}
              justifyItems="center"
              alignItems="center"
              gap="20px"
            >
              <Cell span={1}>
                <Box width={25}>
                  <Tooltip content="Primary">
                    <FillPreview
                      fill="#2B81CB"
                      onClick={() => setMainColor('#2B81CB')}
                    />
                  </Tooltip>
                </Box>
              </Cell>
              <Cell span={1}>
                <Box width={25}>
                  <Tooltip content="Destructive">
                    <FillPreview
                      fill="#D6453D"
                      onClick={() => setMainColor('#D6453D')}
                    />
                  </Tooltip>
                </Box>
              </Cell>
              <Cell span={1}>
                <Box width={25}>
                  <Tooltip content="Premium">
                    <FillPreview
                      fill="#8E21B1"
                      onClick={() => setMainColor('#8E21B1')}
                    />
                  </Tooltip>
                </Box>
              </Cell>
              <Cell span={1}>
                <Box width={25}>
                  <Tooltip content="Success">
                    <FillPreview
                      fill="#44823F"
                      onClick={() => setMainColor('#44823F')}
                    />
                  </Tooltip>
                </Box>
              </Cell>
              <Cell span={1}>
                <Box width={25}>
                  <Tooltip content="Warning">
                    <FillPreview
                      fill="#C68801"
                      onClick={() => setMainColor('#C68801')}
                    />
                  </Tooltip>
                </Box>
              </Cell>
            </Layout>
          </Box>
        </FormField>

        {/* Text colors */}
        <Text weight="bold">Text colors</Text>
        <FormField label="Primary" labelPlacement="left">
          <Box width="160px" marginLeft="auto">
            <ColorInput
              popoverAppendTo="window"
              value={textColorPrimary}
              onChange={color => setTextColorPrimary(color)}
            />
          </Box>
        </FormField>
        <FormField label="Primary light" labelPlacement="left">
          <Box width="160px" marginLeft="auto">
            <ColorInput
              popoverAppendTo="window"
              value={textColorPrimaryLight}
              onChange={color => setTextColorPrimaryLight(color)}
            />
          </Box>
        </FormField>
        <FormField label="Secondary" labelPlacement="left">
          <Box width="160px" marginLeft="auto">
            <ColorInput
              popoverAppendTo="window"
              value={textColorSecondary}
              onChange={color => setTextColorSecondary(color)}
            />
          </Box>
        </FormField>
        <FormField label="Secondary light" labelPlacement="left">
          <Box width="160px" marginLeft="auto">
            <ColorInput
              popoverAppendTo="window"
              value={textColorSecondaryLight}
              onChange={color => setTextColorSecondaryLight(color)}
            />
          </Box>
        </FormField>
        <FormField label="Divider" labelPlacement="left">
          <Box width="160px" marginLeft="auto">
            <ColorInput
              popoverAppendTo="window"
              value={dividerColor}
              onChange={color => setDividerColor(color)}
            />
          </Box>
        </FormField>

        {/* Border Radius */}
        <Text weight="bold">Border Radius</Text>
        <FormField label="Border Radius 02" labelPlacement="left">
          <Box width="100px" marginLeft="auto">
            <Input
              value={borderRadius02}
              onChange={event => setBorderRadius02(event.target.value)}
            />
          </Box>
        </FormField>
        <FormField label="Border Radius 04" labelPlacement="left">
          <Box width="100px" marginLeft="auto">
            <Input
              value={borderRadius04}
              onChange={event => setBorderRadius04(event.target.value)}
            />
          </Box>
        </FormField>
        <FormField label="Border Radius 06" labelPlacement="left">
          <Box width="100px" marginLeft="auto">
            <Input
              value={borderRadius06}
              onChange={event => setBorderRadius06(event.target.value)}
            />
          </Box>
        </FormField>
        <FormField label="Border Radius 08" labelPlacement="left">
          <Box width="100px" marginLeft="auto">
            <Input
              value={borderRadius08}
              onChange={event => setBorderRadius08(event.target.value)}
            />
          </Box>
        </FormField>
      </>
    );
  };

  const _renderSpecific = () => {
    switch (page) {
      case 'Button':
        return _renderButton();
      default:
        return (
          <>
            {['Button'].map((str, key) => (
              <TextButton key={key} onClick={() => setPage(str)}>
                {str}
              </TextButton>
            ))}
          </>
        );
    }
  };

  const _renderButton = () => {
    return (
      <>
        {/* Border Radius */}
        <Text weight="bold">Button</Text>
        <FormField label="Border Radius" labelPlacement="left">
          <Box width="100px" marginLeft="auto">
            <Input
              value={buttonBorderRadius}
              onChange={event => setButtonBorderRadius(event.target.value)}
            />
          </Box>
        </FormField>
      </>
    );
  };

  return (
    <div style={{ overflow: 'auto', height: '600px' }}>
      <Box width="292px" margin="0 8px" alignItems="center" verticalAlign="middle">
        <Tabs
          size="small"
          hasDivider={false}
          activeId={activeId}
          onClick={value => {
            setActiveId(value.id);
            setPage(null);
          }}
          items={[
            { id: 1, title: 'Global' },
            { id: 2, title: 'Specific' },
          ]}
        />
        {page && <TextButton onClick={() => setPage(null)}>Back</TextButton>}
      </Box>

      <Card.Content>
        {/* Global */}
        {activeId === 1 && _renderGlobal()}

        {/* Specific */}
        {activeId === 2 && _renderSpecific()}
      </Card.Content>
    </div>
  );
}

export default StylePanel;
