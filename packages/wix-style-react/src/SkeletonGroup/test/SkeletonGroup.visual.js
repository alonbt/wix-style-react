import React from 'react';
import { storiesOf } from '@storybook/react';
import SkeletonGroup from '../SkeletonGroup';
import SkeletonRectangle from '../../SkeletonRectangle';
import SkeletonCircle from '../../SkeletonCircle';
import SkeletonLine from '../../SkeletonLine';
import Card from '../../Card';

const commonProps = {};

const tests = [
  {
    describe: 'Skin',
    its: [
      {
        it: 'Should be rendered with light skin',
        props: {
          ...commonProps,
          skin: 'light',
          children: (
            <>
              <SkeletonRectangle width="150px" height="70px" margin="auto" />
              <SkeletonCircle diameter="45px" margin="auto" />
              <SkeletonLine width="90px" margin="auto" />
            </>
          ),
        },
      },
      {
        it: 'Should be rendered with dark skin',
        props: {
          ...commonProps,
          skin: 'dark',
          children: (
            <>
              <SkeletonRectangle width="150px" height="70px" margin="auto" />
              <SkeletonCircle diameter="45px" margin="auto" />
              <SkeletonLine width="90px" margin="auto" />
            </>
          ),
        },
      },
    ],
  },
  {
    describe: 'Sizing',
    its: [
      {
        it: 'Should be rendered with sizes',
        props: {
          ...commonProps,
          children: (
            <>
              <SkeletonRectangle width="150px" height="80px" />
              <SkeletonCircle diameter="80px" />
              <SkeletonLine width="50%" />
            </>
          ),
        },
      },
    ],
  },
  {
    describe: 'Spacing',
    its: [
      {
        it: 'Should be rendered with margin',
        props: {
          ...commonProps,
          children: (
            <>
              <SkeletonRectangle width="150px" height="80px" margin="auto" />
              <SkeletonCircle diameter="80px" margin="40px" />
              <SkeletonLine width="50%" margin="60px 30px" />
            </>
          ),
        },
      },
      {
        it: 'Should be rendered with margin parts in percentage',
        props: {
          ...commonProps,
          children: (
            <>
              <SkeletonRectangle width="150px" height="80px" marginLeft="10%" />
              <SkeletonCircle diameter="80px" marginRight="2%" />
              <SkeletonLine width="50%" marginTop="30%" marginBottom="20%" />
            </>
          ),
        },
      },
      {
        it: 'Should be rendered with margin parts in pixels',
        props: {
          ...commonProps,
          children: (
            <>
              <SkeletonRectangle
                width="150px"
                height="80px"
                marginLeft="10px"
              />
              <SkeletonCircle diameter="80px" marginRight="2px" />
              <SkeletonLine width="50%" marginTop="30px" marginBottom="20px" />
            </>
          ),
        },
      },
    ],
  },
  {
    describe: 'Complex',
    its: [
      {
        it: 'Complex Example',
        props: {
          ...commonProps,
          children: (
            <Card>
              <Card.Content>
                <SkeletonGroup>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <SkeletonCircle diameter="30px" />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <SkeletonLine
                        width="90px"
                        marginLeft="10px"
                        marginBottom="5px"
                      />
                      <SkeletonRectangle
                        width="60px"
                        height="7px"
                        marginLeft="10px"
                      />
                    </div>
                  </div>
                  <SkeletonLine
                    width="180px"
                    marginBottom="5px"
                    marginTop="10px"
                  />
                  <SkeletonLine
                    width="200px"
                    marginBottom="5px"
                    marginTop="10px"
                  />
                  <SkeletonLine
                    width="150px"
                    marginBottom="5px"
                    marginTop="10px"
                  />
                  <SkeletonRectangle
                    width="250px"
                    height="150px"
                    marginTop="20px"
                  />
                </SkeletonGroup>
              </Card.Content>
            </Card>
          ),
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${SkeletonGroup.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => (
      <SkeletonGroup {...commonProps} {...props}>
        <div
          style={{
            height: '700px',
            width: '900px',
            ...(props.skin === 'dark' ? { backgroundColor: 'black' } : {}),
          }}
        >
          {props.children}
        </div>
      </SkeletonGroup>
    ));
  });
});
