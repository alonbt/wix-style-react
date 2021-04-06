import React from 'react';
import { storiesOf } from '@storybook/react';
import PageFooter from '../PageFooter';
import { Button } from '../..';
import Pagination from '../../Pagination';
import Box from '../../Box';
import ArrowLeft from 'wix-ui-icons-common/ArrowLeft';

const tests = [
  {
    describe: 'PageFooter', // prop name (e.g. size)
    its: [
      {
        it: 'should display standard footer', // prop variation (e.g. small)
        story: () => (
          <PageFooter>
            <PageFooter.Start>
              <Button size="medium">Go Back</Button>
            </PageFooter.Start>
            <PageFooter.Center>
              <Pagination currentPage={4} totalPages={7} />
            </PageFooter.Center>
            <PageFooter.End>
              <Button size="medium">Save</Button>
            </PageFooter.End>
          </PageFooter>
        ),
      },
      {
        it: 'should display standard footer with divider', // prop variation (e.g. small)
        story: () => (
          <PageFooter divider>
            <PageFooter.Start>
              <Button size="medium">Go Back</Button>
            </PageFooter.Start>
            <PageFooter.Center>
              <Pagination currentPage={4} totalPages={7} />
            </PageFooter.Center>
            <PageFooter.End>
              <Button size="medium">Save</Button>
            </PageFooter.End>
          </PageFooter>
        ),
      },
      {
        it: 'should display footer with multiple components and divider', // prop variation (e.g. small)
        story: () => (
          <PageFooter divider>
            <PageFooter.Start>
              <Button size="medium">
                <ArrowLeft />
                <ArrowLeft />
              </Button>
              <Box marginLeft="SP2">
                <Button size="medium" skin="inverted">
                  <ArrowLeft />
                </Button>
              </Box>
            </PageFooter.Start>
            <PageFooter.Center>
              <Pagination currentPage={3} totalPages={5} />
            </PageFooter.Center>
            <PageFooter.End>
              <Box marginRight="SP2">
                <Button size="medium" skin="destructive" priority="secondary">
                  Cancel
                </Button>
              </Box>
              <Button size="medium">Save</Button>
            </PageFooter.End>
          </PageFooter>
        ),
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, story }) => {
    storiesOf(describe, module).add(it, story);
  });
});
