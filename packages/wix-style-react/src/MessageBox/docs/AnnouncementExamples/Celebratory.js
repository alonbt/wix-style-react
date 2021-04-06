/* eslint-disable react/prop-types */
import React from 'react';
import { MessageBoxMarketerialLayout } from 'wix-style-react';

export default () => (
  <MessageBoxMarketerialLayout
    title={'Nice! Your site is set up'}
    content="Next, connect your business email, chat and more to look professional. Keep Going"
    confirmText="Show Me"
    imageUrl="https://static.wixstatic.com/media/25125b_fde50458cc6746c79267182c4b4592e0~mv2.gif"
    theme="white"
    primaryButtonLabel="Button"
    primaryButtonTheme="blue"
    dataHook="announcement-celebratory"
    onClose={() => undefined}
  />
);
