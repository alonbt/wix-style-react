import React from 'react';
import { storiesOf } from '@storybook/react';
import InputArea from '../InputArea';
import { Cell, Layout } from '../../Layout';

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'default',
        props: {},
      },
      {
        it: 'placeholder',
        props: {
          placeholder: 'This is a placeholder!',
        },
      },
      {
        it: 'disabled',
        props: {
          disabled: true,
        },
      },
      {
        it: 'resizable',
        props: {
          resizable: true,
        },
      },
      {
        it: 'small size',
        props: {
          size: 'small',
        },
      },
      {
        it: 'long text',
        props: {
          value:
            'Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.',
        },
      },
      {
        it: 'auto grow',
        props: {
          autoGrow: true,
          value: 'Line 1\nLine 2\nLine 3\nLine 4',
        },
      },
      {
        it: 'focus',
        props: {
          forceFocus: true,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`InputArea${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <Layout cols={1}>
          <Cell>
            <InputArea {...props} />
          </Cell>
          <Cell>
            <InputArea status="error" {...props} />
          </Cell>
          <Cell>
            <InputArea status="warning" {...props} />
          </Cell>
          <Cell>
            <InputArea status="loading" {...props} />
          </Cell>
        </Layout>
      ),
    );
  });
});
