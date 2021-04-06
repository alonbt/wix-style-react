export const standard = `
<CalendarPanelFooter
  dateToString={date => date.toLocaleDateString('he-IL')}
  primaryActionLabel="Apply"
  secondaryActionLabel="Cancel"
  selectedDays={{
    from: new Date('2019-05-27T21:00:00.000Z'),
    to: new Date('2019-05-27T21:00:00.000Z'),
  }}
/>
`;
