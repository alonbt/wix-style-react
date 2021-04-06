export const standard = `<CalendarPanel
presets={[
  {
    id: 1,
    selectedDays: {
      from: new Date('2018-01-09T22:00:00.000Z'),
      to: new Date('2018-01-15T22:00:00.000Z'),
    },
    value: 'Next 7 Days',
  },
  {
    id: 2,
    selectedDays: {
      from: new Date('2018-01-03T22:00:00.000Z'),
      to: new Date('2018-01-09T22:00:00.000Z'),
    },
    value: 'Last 7 Days',
  },
  {
    id: 3,
    selectedDays: {
      from: new Date('2017-12-31T22:00:00.000Z'),
      to: new Date('2018-01-31T21:59:59.999Z'),
    },
    value: 'Full Month',
  },
  {
    id: 4,
    selectedDays: {
      from: new Date('2017-12-31T22:00:00.000Z'),
      to: new Date('2018-02-28T21:59:59.999Z'),
    },
    value: '2 Full Month',
  },
  {
    id: 5,
    selectedDays: {
      from: new Date('2018-01-09T22:00:00.000Z'),
      to: new Date('2018-02-09T22:00:00.000Z'),
    },
    value: 'Partial Month',
  },
  {
    id: 6,
    selectedDays: {
      from: new Date('2017-09-30T21:00:00.000Z'),
      to: new Date('2017-10-31T21:59:59.999Z'),
    },
    value: 'Month In Past',
  },
  {
    id: 7,
    selectedDays: {
      from: new Date('2018-01-09T22:00:00.000Z'),
      to: new Date('2018-01-09T22:00:00.000Z'),
    },
    value: 'Next 1 days',
  },
  {
    id: 8,
    selectedDays: {
      from: new Date('2018-01-09T22:00:00.000Z'),
      to: new Date('2018-01-10T22:00:00.000Z'),
    },
    value: 'Next 2 days',
  },
  {
    id: 9,
    selectedDays: {
      from: new Date('2018-01-09T22:00:00.000Z'),
      to: new Date('2018-01-11T22:00:00.000Z'),
    },
    value: 'Next 3 days',
  },
  {
    id: 10,
    selectedDays: {
      from: new Date('2018-01-09T22:00:00.000Z'),
      to: new Date('2018-01-12T22:00:00.000Z'),
    },
    value: 'Next 4 days',
  },
  {
    id: 11,
    selectedDays: {
      from: new Date('2018-01-09T22:00:00.000Z'),
      to: new Date('2018-01-13T22:00:00.000Z'),
    },
    value: 'Next 5 days',
  },
  {
    id: 12,
    selectedDays: {
      from: new Date('2018-01-09T22:00:00.000Z'),
      to: new Date('2018-01-14T22:00:00.000Z'),
    },
    value: 'Next 6 days',
  },
  {
    id: 14,
    selectedDays: {
      from: new Date('2018-01-09T22:00:00.000Z'),
      to: new Date('2018-01-16T22:00:00.000Z'),
    },
    value: 'Next 8 days',
  },
  {
    id: 15,
    selectedDays: {
      from: new Date('2018-01-09T22:00:00.000Z'),
      to: new Date('2018-01-17T22:00:00.000Z'),
    },
    value: 'Next 9 days',
  },
]}
footer={({ selectedDays, submitDisabled }) => (
  <CalendarPanelFooter
    primaryActionLabel="Submit"
    secondaryActionLabel="Cancel"
  />
)}
/>`;
