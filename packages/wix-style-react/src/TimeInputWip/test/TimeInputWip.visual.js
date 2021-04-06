// skipping these tests until flakey stuff is resolved. Kills ours velocity.

// import React from 'react';
// import { snap, story, visualize } from 'storybook-snapper';
// import TimeInputWip from '../TimeInputWip';

// const commonProps = {
//   value: new Date(1993, 5, 31, 20, 15, 12),
// };

// const tests = [
//   {
//     describe: 'Intl api props with a value',
//     its: [
//       {
//         it: 'hour12 is true and time is before noon',
//         props: {
//           hour12: true,
//           value: new Date(1993, 5, 31, 3, 15, 12),
//         },
//       },
//       {
//         it: 'hour12 is false and time is before noon',
//         props: {
//           hour12: false,
//           value: new Date(1993, 5, 31, 3, 15, 12),
//         },
//       },
//       {
//         it: 'hour12 is true and time is after noon',
//         props: {
//           hour12: true,
//         },
//       },
//       {
//         it: 'hour12 is false and time is after noon',
//         props: {
//           hour12: false,
//         },
//       },
//       // this test shows different result every time it builds, need to fix it
//       // {
//       //   it: 'timeZone is set to Europe/Simferopol',
//       //   props: {
//       //     timeZone: 'Europe/Simferopol',
//       //   },
//       // },
//       {
//         it: 'numberingSystem',
//         props: {
//           numberingSystem: 'arab',
//         },
//       },
//       {
//         it: 'timeStyle set to full',
//         props: {
//           timeStyle: 'full',
//         },
//       },
//     ],
//   },
//   {
//     describe: 'width prop',
//     its: [
//       {
//         it: 'width is auto',
//         props: {
//           width: 'auto',
//         },
//       },
//     ],
//   },
// ];

// export const runTests = () => {
//   visualize(TimeInputWip.displayName, () => {
//     tests.forEach(({ describe, its }) => {
//       story(describe, () => {
//         its.map(({ it, props }) =>
//           snap(it, () => <TimeInputWip {...commonProps} {...props} />),
//         );
//       });
//     });
//   });
// };
