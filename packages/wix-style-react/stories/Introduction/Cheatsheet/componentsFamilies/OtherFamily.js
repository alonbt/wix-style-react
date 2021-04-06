import React from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
  singleComponentSizes,
} from '../sharedComponents';

import { otherSymbolsToComponents } from '../../../symbolsComponentsMapping/families/otherFamily';

import { createLinkedComponentsNames } from '../sharedComponents/utils';

import {
  otherSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

import InfoSmall from 'wix-ui-icons-common/InfoSmall';
import PhotoCamera from 'wix-ui-icons-common/PhotoCamera';
import Facebook from 'wix-ui-icons-common/Facebook';

import { TYPE } from '../../../../src/Badge/constants';

import {
  Avatar,
  AvatarGroup,
  Badge,
  BadgeSelect,
  CounterBadge,
  Tag,
  Loader,
  LinearProgressBar,
  CircularProgressBar,
  Image,
  Palette,
  Skeleton,
  Layout,
  Cell,
  Box,
} from 'wix-style-react';

const groupSymbol = symbolsGroup.other;

const AvatarExample = () => {
  const avatarName = 'John Doe';

  const avatarColors = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'];

  const renderAvatar = props => <Avatar {...props} />;

  const symbol = otherSymbols.avatar;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={7} justifyItems="center" alignItems="center">
        {avatarColors.map((color, i) =>
          renderAvatar({ color, name: avatarName, key: `avatar-${i + 1}` }),
        )}
        {renderAvatar({
          imgProps: { src: 'https://randomuser.me/api/portraits/women/39.jpg' },
          onClick: () => 'Clicked!',
          presence: 'online',
        })}
        {renderAvatar({
          imgProps: { src: 'https://randomuser.me/api/portraits/women/39.jpg' },
          indication: <PhotoCamera size="24" />,
          shape: 'square',
          onClick: () => 'Clicked!',
        })}
        {renderAvatar({
          imgProps: { src: 'https://randomuser.me/api/portraits/women/39.jpg' },
          customIndication: (
            <Box
              align="center"
              verticalAlign="middle"
              backgroundColor="#3b5998"
              color="white"
              minHeight="100%"
            >
              <Facebook size="18" />
            </Box>
          ),
          shape: 'square',
          onClick: () => 'Clicked!',
        })}
      </Layout>
    </SingleComponentSideBySide>
  );
};

const AvatarGroupExample = () => {
  const avatarItems = [
    {
      ariaLabel: 'Avatar for John Doe',
      color: 'A1',
      name: 'John Doe',
      title: 'Wix Account: John Doe (johndoe@gmail.com)',
    },
    {
      ariaLabel: 'Avatar for Snoop Dogg',
      name: 'Snoop Dogg',
      title: 'Wix Account: Snoop Dogg (dog@gmail.com)',
    },
    {
      ariaLabel: 'Avatar for Sia Kate',
      imgProps: {
        src:
          'https://lh3.googleusercontent.com/proxy/EI3faU3-0hCPyjBKktiVuPKfZTMXx6BsDFE0f7UBr_8CKSMRWL28dLZJrWGWExcTRgWI2v3pcuBT19YpJ-xdmxla4mmqWw',
      },
      name: 'Sia Kate',
    },
    {
      ariaLabel: 'Avatar for Steven Tyler',
      title: 'Wix Account: Steven Tyler (steventyler@gmail.com)',
    },
    {
      ariaLabel: 'Avatar for Karen Carpenter',
      name: 'Karen Carpenter',
      title: 'Wix Account: Karen Carpenter (karencarpenter@gmail.com)',
    },
    {
      name: 'Levon Helm',
      title: 'Wix Account: Levon Helm (levonhelm@gmail.com)',
    },
    {
      ariaLabel: 'Avatar for Willie Nelson',
      name: 'Willie Nelson',
      title: 'Wix Account: Willie Nelson (willienelson@gmail.com)',
    },
    {
      ariaLabel: 'Avatar for Patti Smith',
      name: 'Patti Smith',
    },
  ];
  const symbol = otherSymbols.avatarGroup;
  const components = otherSymbolsToComponents[symbol];
  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };
  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Box
        direction="vertical"
        height="100"
        style={{ justifyContent: 'space-around' }}
      >
        <AvatarGroup items={avatarItems} maxItems={8} />
        <AvatarGroup items={avatarItems} showDivider />
      </Box>
    </SingleComponentSideBySide>
  );
};

const BadgeExample = () => {
  const badgeSkins = [
    'standard',
    'neutral',
    'success',
    'warning',
    'danger',
    'urgent',
    'premium',
    'general',
  ];

  const badgeSkinsLight = [
    'neutralStandard',
    'neutralLight',
    'neutralSuccess',
    'warningLight',
    'neutralDanger',
  ];

  const badgeTypes = Object.keys(TYPE);

  const renderBadge = props => <Badge {...props}>Badge</Badge>;

  const renderTypes = props => (
    <Layout cols={8}>
      {badgeTypes.map((type, i) =>
        renderBadge({ type, ...props, key: `badge-${i}` }),
      )}
    </Layout>
  );

  const renderSkinLayout = (skin, i) => (
    <Cell key={`cell-${skin}-${i}`}>
      {renderTypes({ uppercase: false, skin })}
    </Cell>
  );

  const symbol = otherSymbols.badge;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout>
        {badgeSkins.map(renderSkinLayout)}
        {badgeSkinsLight.map(renderSkinLayout)}
      </Layout>
    </SingleComponentSideBySide>
  );
};

const BadgeSelectExample = () => {
  const counterBadgeSkins = [
    'standard',
    'neutral',
    'success',
    'warning',
    'danger',
    'urgent',
    'premium',
    'general',
    'neutralStandard',
    'neutralLight',
    'neutralSuccess',
    'warningLight',
    'neutralDanger',
  ];

  const badgeSelectOptions = counterBadgeSkins.map((skin, i) => ({
    id: `${i + 1}`,
    skin,
    text: skin,
  }));

  const badgeSelectTypes = ['solid', 'outlined', 'transparent'];

  const renderBadgeSelect = props => <BadgeSelect {...props} />;

  const symbol = otherSymbols.badgeSelect;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={3}>
        {badgeSelectTypes.map((type, i) =>
          renderBadgeSelect({
            type,
            options: badgeSelectOptions,
            key: `badge-select-${i + 1}`,
            uppercase: true,
          }),
        )}
      </Layout>
    </SingleComponentSideBySide>
  );
};

const CounterBadgeExample = () => {
  const counterBadgeValues = [1, 12, 120, <InfoSmall />];

  const counterBadgeSkins = [
    'standard',
    'success',
    'warning',
    'danger',
    'urgent',
    'general',
  ];

  const renderCounterBadge = props => <CounterBadge {...props} />;

  const symbol = otherSymbols.counterBadge;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={6}>
        <Layout gap="5px">
          {counterBadgeSkins.map((skin, i) => (
            <Cell key={`cell-counter-badge-skin-${i + 1}`}>
              {renderCounterBadge({
                skin,
                children: i + 1,
                key: `counter-badge-skin-${i + 1}`,
              })}
            </Cell>
          ))}
        </Layout>
        <Layout gap="5px">
          {counterBadgeValues.map((value, i) => (
            <Cell key={`cell-counter-badge-values-${i + 1}`}>
              {renderCounterBadge({
                children: value,
                key: `counter-badge-${i + 1}`,
              })}
            </Cell>
          ))}
        </Layout>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const TagsExample = () => {
  const thumbTags = [
    {
      id: '1',
      label: 'Green',
      thumb: <Box height="100%" backgroundColor="G10" />,
    },
    {
      id: '2',
      label: 'Red',
      thumb: <Box height="100%" backgroundColor="R10" />,
    },
    {
      id: '3',
      label: 'Yellow',
      thumb: <Box height="100%" backgroundColor="Y10" />,
    },
    {
      id: '4',
      label: 'Avatar',
      thumb: (
        <Avatar
          imgProps={{
            src: 'https://randomuser.me/api/portraits/women/39.jpg',
          }}
          size="size18"
        />
      ),
    },
  ];

  const themeTags = [
    { id: '1', label: 'Default' },
    { id: '2', label: 'Error', theme: 'error' },
    { id: '3', label: 'Warning', theme: 'warning' },
    { id: '4', label: 'Dark', theme: 'dark' },
  ];

  const renderTag = props => <Tag {...props}>{props.label}</Tag>;

  const renderTagsLayout = tagsArr => (
    <Layout cols={6} gap="5px">
      {tagsArr.map((tagProps, i) => (
        <Cell key={i}>{renderTag({ ...tagProps, key: `tag-${i + 1}` })}</Cell>
      ))}
    </Layout>
  );

  const symbol = otherSymbols.tag;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={6}>
        {renderTagsLayout(thumbTags)}
        {renderTagsLayout(themeTags)}
      </Layout>
    </SingleComponentSideBySide>
  );
};

const LoaderExample = () => {
  const symbol = otherSymbols.loader;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={4}>
        <Loader size="small" />
        <Loader />
        <Loader size="large" />
        <Loader text="LOADER" />
      </Layout>
    </SingleComponentSideBySide>
  );
};

const LinearProgressBarExample = () => {
  const symbol = otherSymbols.linearProgressBar;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={2}>
        <Cell>
          <Layout cols={2}>
            <LinearProgressBar value={25} />
            <Box backgroundColor="D10">
              <LinearProgressBar light value={25} />
            </Box>
          </Layout>
        </Cell>
        <Cell>
          <Layout cols={2}>
            <LinearProgressBar skin="success" value={25} />
            <Box backgroundColor="D10">
              <LinearProgressBar skin="success" light value={25} />
            </Box>
          </Layout>
        </Cell>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const CircularProgressBarExample = () => {
  const symbol = otherSymbols.circularProgressBar;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={2}>
        <CircularProgressBar value={25} />
        <Box height="54px" width="54px" backgroundColor="D10">
          <CircularProgressBar light value={25} />
        </Box>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const SkeletonExample = () => {
  const symbol = otherSymbols.skeleton;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  const skeletonContent = [
    { size: 'small', type: 'line' },
    { size: 'medium', type: 'line' },
    { size: 'medium', type: 'line' },
  ];

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Skeleton content={skeletonContent} />
    </SingleComponentSideBySide>
  );
};

const ImageExample = () => {
  const symbol = otherSymbols.image;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Image width="150" height="100" />
    </SingleComponentSideBySide>
  );
};

const PaletteExample = () => {
  const symbol = otherSymbols.palette;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Box height="42px">
        <Palette
          fill={[
            'rgb(50, 132, 144)',
            'rgb(50, 183, 198)',
            'rgb(146, 224, 225)',
            'rgb(203, 246, 255)',
            'rgb(229, 250, 248)',
          ]}
        />
      </Box>
    </SingleComponentSideBySide>
  );
};

const OtherFamily = () => (
  <FamilyStructure title={groupSymbol} showPreview>
    <AvatarExample />
    <AvatarGroupExample />
    <BadgeExample />
    <BadgeSelectExample />
    <CounterBadgeExample />
    <TagsExample />
    <LoaderExample />
    <LinearProgressBarExample />
    <CircularProgressBarExample />
    <SkeletonExample />
    <ImageExample />
    <PaletteExample />
  </FamilyStructure>
);

export default OtherFamily;
