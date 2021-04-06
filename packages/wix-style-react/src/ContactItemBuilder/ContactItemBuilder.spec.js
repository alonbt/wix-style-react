import React from 'react';
import { ContactItem, contactItemBuilder } from './ContactItemBuilder';
import contactItemBuilderDriverFactory from './ContactItemBuilder.driver';
import { contactItemBuilderUniDriverFactory } from './ContactItemBuilder.uni.driver';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
} from '../../test/utils/unit';

describe('item picker option builder', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(contactItemBuilderDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(contactItemBuilderUniDriverFactory));
  });

  function runTests(render) {
    const createDriver = jsx => render(jsx).driver;
    const title = 'Some Title';
    const subtitle = 'some subtitle';

    it('should display item', async () => {
      const driver = createDriver(<ContactItem title={title} />);
      expect(await driver.exists()).toBe(true);
    });

    it('should display item with Title', async () => {
      const driver = createDriver(<ContactItem title={title} />);
      expect(await driver.getTitle()).toEqual(title);
    });

    it('should display item with Title and subtitle', async () => {
      const driver = createDriver(
        <ContactItem title={title} subtitle={subtitle} />,
      );
      expect(await driver.getTitle()).toEqual(title);
      expect(await driver.getSubtitle()).toEqual(subtitle);
    });

    it('should return item with disabled prop', async () => {
      const contactItem = contactItemBuilder({
        title,
        subtitle,
        disabled: true,
      });
      expect(contactItem.disabled).toBe(true);
    });

    it('should return item without disabled prop when prop is not passed', async () => {
      const contactItem = contactItemBuilder({ title, subtitle });
      expect(contactItem.disabled).toBeFalsy();
    });

    // TODO: test avatar
  }
});
