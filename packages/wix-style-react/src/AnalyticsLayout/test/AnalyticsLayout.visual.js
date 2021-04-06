import React from 'react';
import { snap, story, visualize } from 'storybook-snapper';
import AnalyticsLayout from '../AnalyticsLayout';
import { range } from 'lodash';

const items = [1, 2, 3, 4, 5, 6, 7, 8];
const tests = [
  {
    describe: 'sanity', // prop name (e.g. size)
    its: [
      {
        it: 'default', // prop variation (e.g. small)
      },
    ],
  },
];

export const runTests = () => {
  visualize(AnalyticsLayout.displayName, () => {
    tests.forEach(({ describe, its }) => {
      story(describe, () => {
        its.map(({ it }) =>
          snap(it, () =>
            items.map(item => {
              return range(0, item).map(allItems => (
                <div>
                  <AnalyticsLayout items={allItems}>
                    {(itemChild, index) => (
                      <AnalyticsLayout.Cell>
                        <div style={{ padding: 20 }}>
                          item {itemChild} {index}
                        </div>
                      </AnalyticsLayout.Cell>
                    )}
                  </AnalyticsLayout>
                </div>
              ));
            }),
          ),
        );
      });
    });
  });
};
