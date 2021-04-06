import React from 'react';
import RadioGroup from '../RadioGroup';
import radioGroupDriverFactory from '../RadioGroup.driver';
import { radioGroupPrivateDriverFactory } from './RadioGroup.private.uni.driver';
import {
  cleanup,
  createRendererWithDriver,
  createRendererWithUniDriver,
} from '../../../test/utils/unit';

describe(RadioGroup.displayName, () => {
  const DefaultRadioGroup = props => (
    <RadioGroup {...props}>
      <RadioGroup.Radio value="1">Option 1</RadioGroup.Radio>
      <RadioGroup.Radio value="2">Option 2</RadioGroup.Radio>
      <RadioGroup.Radio value="3">Option 3</RadioGroup.Radio>
      <RadioGroup.Radio value="4">Option 4</RadioGroup.Radio>
    </RadioGroup>
  );

  afterEach(cleanup);

  describe('[sync]', () => {
    runTests(createRendererWithDriver(radioGroupDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(radioGroupPrivateDriverFactory), true);
  });

  function runTests(render) {
    const createDriver = jsx => render(jsx);

    it('should render', async () => {
      const { driver } = createDriver(<RadioGroup />);
      expect(await driver.exists()).toBe(true);
    });

    it('should have the correct radio buttons', async () => {
      const { driver } = createDriver(<DefaultRadioGroup />);
      expect(await driver.getNumberOfRadios()).toBe(4);
      expect(driver.getRadioAtIndex(0)).toBeTruthy();
      expect(await driver.getRadioValueAt(0)).toBe('1');
    });

    it('should return true if a radio button is disabled and false otherwise', async () => {
      const disabledRadios = ['1', '2'];
      const { driver } = createDriver(
        <DefaultRadioGroup disabledRadios={disabledRadios} />,
      );
      expect(await driver.isRadioDisabled(0)).toBe(true);
      expect(await driver.isRadioDisabled(1)).toBe(true);
      expect(await driver.isRadioDisabled(2)).toBe(false);
      expect(await driver.isRadioDisabled(3)).toBe(false);
    });

    it('should check the option that matches the initial value', async () => {
      const value = '2';
      const { driver } = createDriver(<DefaultRadioGroup value={'2'} />);
      expect(await driver.getSelectedValue()).toBe(value);
    });

    it('should update selected value after change to props', async () => {
      const { driver, rerender } = render(<DefaultRadioGroup value={'1'} />);
      const value = '2';
      rerender(<DefaultRadioGroup value={'2'} />);
      expect(await driver.getSelectedValue()).toBe(value);
    });

    it('should not check any options if value was not matched', async () => {
      const value = 10;
      const { driver } = createDriver(<DefaultRadioGroup value={value} />);
      expect(await driver.getSelectedValue()).toBe(null);
    });

    it('should return true if a radio button is checked and false otherwise', async () => {
      const { driver } = createDriver(<DefaultRadioGroup value={'3'} />);

      expect(await driver.isRadioChecked(0)).toBe(false);
      expect(await driver.isRadioChecked(1)).toBe(false);
      expect(await driver.isRadioChecked(2)).toBe(true);
      expect(await driver.isRadioChecked(3)).toBe(false);
    });

    describe('onChange attribute', () => {
      it('should be called with the correct option value', async () => {
        const onChange = jest.fn();
        const { driver } = createDriver(
          <DefaultRadioGroup onChange={onChange} />,
        );

        // Select by value
        await driver.selectByValue('1');
        expect(onChange).toHaveBeenNthCalledWith(1, '1');

        // Select by index
        await driver.selectByIndex(1);
        expect(onChange).toHaveBeenNthCalledWith(2, '2');
      });

      it('should not be called upon checked option', async () => {
        const value = 1;
        const onChange = jest.fn();
        const { driver } = createDriver(
          <DefaultRadioGroup onChan={onChange} value={value} />,
        );

        // Select by value
        await driver.selectByValue('1');
        expect(onChange).not.toHaveBeenCalled();

        // Select by index
        await driver.selectByIndex(0);
        expect(onChange).not.toHaveBeenCalled();
      });

      it('should not be called upon disabled option', async () => {
        const disabledRadios = ['1'];
        const onChange = jest.fn();
        const { driver } = createDriver(
          <DefaultRadioGroup
            onChange={onChange}
            disabledRadios={disabledRadios}
          />,
        );

        // Select by value
        await driver.selectByValue('1');
        expect(onChange).not.toHaveBeenCalled();

        // Select by index
        await driver.selectByIndex(0);
        expect(onChange).not.toHaveBeenCalled();
      });
    });

    describe('display attribute', () => {
      it('should be vertical by default', async () => {
        const { driver } = createDriver(<DefaultRadioGroup />);
        expect(await driver.isVerticalDisplay()).toBe(true);
        expect(await driver.isHorizontalDisplay()).toBe(false);
      });

      it('should be horizontal', async () => {
        const { driver } = createDriver(
          <DefaultRadioGroup display={'horizontal'} />,
        );
        expect(await driver.isHorizontalDisplay()).toBe(true);
        expect(await driver.isVerticalDisplay()).toBe(false);
      });
    });

    describe('spacing attribute', () => {
      it('should be spaced', async () => {
        const { driver } = createDriver(<DefaultRadioGroup spacing={'30px'} />);
        expect(await driver.spacing()).toBe('30px');
      });
    });

    describe('line-height attribute', () => {
      it('should have default value', async () => {
        const { driver } = createDriver(<DefaultRadioGroup />);
        expect(await driver.lineHeight()).toBe(
          RadioGroup.defaultProps.lineHeight,
        );
      });
    });

    describe('name attribute', () => {
      it('should set name attribute of radio button', async () => {
        const { driver } = createDriver(<DefaultRadioGroup name="test" />);
        expect(await driver.getRadioName()).toBe('test');
      });
      it('should set name as radio button id prefix', async () => {
        const { driver } = createDriver(<DefaultRadioGroup name="test" />);
        expect(await driver.getRadioIdAt(0)).toContain('test');
      });
    });

    describe('RadioGroup.Radio', () => {
      it('selectByValue should work with custom dataHook applied', async () => {
        const CustomRadioGroup = () => {
          const [radioValue, setRadioValue] = React.useState(null);
          return (
            <RadioGroup
              value={radioValue}
              onChange={value => setRadioValue(value)}
            >
              <RadioGroup.Radio dataHook="custom-yes" value="yes">
                Option 1
              </RadioGroup.Radio>
              <RadioGroup.Radio dataHook="custom-no" value="no">
                Option 2
              </RadioGroup.Radio>
            </RadioGroup>
          );
        };

        const { driver } = createDriver(<CustomRadioGroup />);

        await driver.selectByValue('no');
        expect(await driver.getSelectedValue()).toBe('no');
      });
    });

    describe('radio legacy drivers', () => {
      const RenderRadioGroup = ({ label, ...props }) => (
        <RadioGroup>
          <RadioGroup.Radio {...props}>{label}</RadioGroup.Radio>
        </RadioGroup>
      );

      it('should have a label', async () => {
        const label = 'myLabel';
        const { driver } = render(<RenderRadioGroup label={label} />);

        const radio = await driver.getRadioAtIndex(0);
        expect(await radio.getLabel()).toBe(label);
      });

      it('should return the label element', async () => {
        const label = 'myLabel';
        const { driver } = render(<RenderRadioGroup label={label} />);

        const radio = await driver.getRadioAtIndex(0);
        expect(
          (await radio.getLabelElement()) instanceof HTMLLabelElement,
        ).toBe(true);
      });

      it('should be checked', async () => {
        const onChange = jest.fn();
        const { driver } = createDriver(
          <DefaultRadioGroup onChange={onChange} />,
        );

        const radio = await driver.getRadioAtIndex(0);
        await radio.check();
        expect(onChange).toHaveBeenCalled();
      });

      it('should set tabIndex', async () => {
        const { driver } = render(<RenderRadioGroup />);

        const radio = await driver.getRadioAtIndex(0);
        expect(await radio.getTabIndex()).toEqual('1');
      });

      it('should render node from content prop', async () => {
        const { driver } = render(
          <RenderRadioGroup content={<span>Hello</span>} />,
        );

        const radio = await driver.getRadioAtIndex(0);
        expect((await radio.getContent()).textContent).toBe('Hello');
      });
    });
  }
});
