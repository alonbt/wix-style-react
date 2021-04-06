import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { ActionsMenuLayout, Text, SocialBar } from '..';
import { MobileDrawer } from './';
import { Icons } from '../..';

visualize('MobileDrawer', () => {
  story('Basic', () => {
    snap(`With Action Menu`, () => (
      <MobileDrawer isOpen>
        <div style={{ width: '100%', height: '100%' }}>
          <ActionsMenuLayout>
            <ActionsMenuLayout.Item
              onClick={() => console.log('Video clicked')}
              content="Take a Video"
              prefixIcon={<Icons.Camera />}
            />
            <ActionsMenuLayout.Item
              onClick={() => console.log('Picture clicked')}
              content="Take a Picture"
              prefixIcon={<Icons.Heart />}
            />
            <ActionsMenuLayout.Divider />
            <ActionsMenuLayout.Item
              onClick={() => {}}
              content="Close"
              prefixIcon={<Icons.Close />}
            />
          </ActionsMenuLayout>
        </div>
      </MobileDrawer>
    ));
    snap('With Social Bar', () => (
      <MobileDrawer isOpen>
        <div style={{ width: '100%', textAlign: 'center', padding: '10px' }}>
          <Text>Share</Text>
          <SocialBar>
            <SocialBar.Icon icon={<Icons.Facebook />} />
            <SocialBar.Icon icon={<Icons.Instagram />} />
            <SocialBar.Icon icon={<Icons.Linkedin />} />
            <SocialBar.Icon icon={<Icons.Tumblr />} />
          </SocialBar>
        </div>
      </MobileDrawer>
    ));
    snap('With Simple Text', () => (
      <MobileDrawer isOpen>Children</MobileDrawer>
    ));
  });
});
