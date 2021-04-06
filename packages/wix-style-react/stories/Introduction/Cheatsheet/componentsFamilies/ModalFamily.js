/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
} from '../sharedComponents';

import { modalsSymbolsToComponents } from '../../../symbolsComponentsMapping/families/modalsFamily';

import {
  createLinkedSymbolName,
  createLinkedComponentsNames,
} from '../sharedComponents/utils';

import {
  modalsSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

import More from 'wix-ui-icons-common/More';
import Print from 'wix-ui-icons-common/Print';
import { Category } from '../../../storiesHierarchy';

import {
  MessageModalLayout,
  Modal,
  ModalPreviewLayout,
  ModalMobileLayout,
  CustomModalLayout,
  AnnouncementModalLayout,
  Button,
  Box,
  Text,
  FormField,
  Input,
  NumberInput,
  RichTextInputArea,
  Checkbox,
  TextButton,
  Layout,
  Cell,
  IconButton,
  Container,
  Row,
  Col,
} from 'wix-style-react';

const groupSymbol = symbolsGroup.modals;

const AlertExamples = () => {
  const symbol = modalsSymbols.messageModal;
  const components = modalsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol: Category.MODALS, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };

  const renderMessageBoxFunctionalLayout = props => {
    const {
      primaryButtonText,
      secondaryButtonText,
      title,
      sideActions,
      illustration,
      theme,
      children,
    } = props;

    return (
      <MessageModalLayout
        theme={theme}
        onCloseButtonClick={() => {}}
        primaryButtonText={primaryButtonText}
        secondaryButtonText={secondaryButtonText}
        title={title}
        sideActions={sideActions}
        illustration={illustration}
      >
        {children}
      </MessageModalLayout>
    );
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout>
        <Cell>
          {renderMessageBoxFunctionalLayout({
            primaryButtonText: 'Report',
            secondaryButtonText: 'Cancel',
            title: 'Report as Spam',
            sideActions: <Checkbox>Don't show this again</Checkbox>,
            illustration: 'generic_report.svg',
            children: (
              <Text>
                Are you sure you want to report this conversation as spam? We
                will block messages like this.
              </Text>
            ),
          })}
        </Cell>
        <Cell>
          {renderMessageBoxFunctionalLayout({
            theme: 'destructive',
            primaryButtonText: 'Move To Trash',
            secondaryButtonText: 'Cancel',
            title: 'Move Site to Trash',
            illustration: 'generic_trash.svg',
            children: (
              <Text>
                Are you sure you want to move mysite-14 to Trash? <br />
                Your site will become unpublished and can't be edited.
              </Text>
            ),
          })}
        </Cell>
        <Cell>
          {renderMessageBoxFunctionalLayout({
            theme: 'premium',
            primaryButtonText: 'Upgrade',
            secondaryButtonText: 'Not Now',
            title: 'Start Accepting Online Payments',
            illustration: 'generic_upgrade.svg',
            children: (
              <Text>
                Upgrade your site with a business and ecommerce premium plan to
                start accepting payments.
              </Text>
            ),
          })}
        </Cell>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const AnnouncementModalLayoutExamples = () => {
  const symbol = modalsSymbols.announcement;
  const components = modalsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol: Category.MODALS, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout>
        <Cell>
          <AnnouncementModalLayout
            illustration={'generic_post.svg'}
            title="Import Posts From WordPress"
            primaryButtonText="Start Now"
            linkText="Learn More"
            onCloseButtonClick={() => {}}
          >
            <Text>
              Your public posts, images and videos will be copied and added to
              your Wix blog. Your site and current posts won't be affected.
            </Text>
          </AnnouncementModalLayout>
        </Cell>
        <Cell>
          <AnnouncementModalLayout
            theme="premium"
            illustration={'generic_upgrade.svg'}
            title="Start Accepting Online Payments"
            primaryButtonText="Upgrade"
            linkText="Learn More"
            onCloseButtonClick={() => {}}
          >
            <Text>
              Upgrade your site with a business and ecommerce premium plan to
              start accepting payments.
            </Text>
          </AnnouncementModalLayout>
        </Cell>
      </Layout>
    </SingleComponentSideBySide>
  );
};

class CustomModalLayoutExample extends PureComponent {
  render() {
    const symbol = modalsSymbols.custom;
    const components = modalsSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: createLinkedSymbolName({ groupSymbol: Category.MODALS, symbol }),
      componentsNames: createLinkedComponentsNames(components),
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <Box>
          <CustomModalLayout
            primaryButtonText="Save"
            secondaryButtonText="Cancel"
            title="New Product"
            subtitle="To get running, your new product needs some details:"
            sideActions={<Checkbox>Don't show this again</Checkbox>}
            width="600px"
          >
            <Layout>
              <Cell span={9}>
                <FormField label="Title">
                  <Input size="medium" placeholder="Value" />
                </FormField>
              </Cell>
              <Cell span={3}>
                <FormField label="Quantity">
                  <NumberInput value={500} />
                </FormField>
              </Cell>
              <Cell>
                <FormField label="Description">
                  <RichTextInputArea placeholder="Tell your customers what they will get" />
                </FormField>
              </Cell>
            </Layout>
          </CustomModalLayout>
        </Box>
      </SingleComponentSideBySide>
    );
  }
}

class ModalPreviewLayoutExample extends PureComponent {
  state = {
    isModalOpened: false,
  };

  toggleModalDisplay = () => {
    const { isModalOpened } = this.state;
    this.setState({ isModalOpened: !isModalOpened });
  };

  render() {
    const symbol = modalsSymbols.preview;
    const components = modalsSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
    };

    const { isModalOpened } = this.state;

    const modalPreviewActions = (
      <Box verticalAlign="middle">
        <Box marginRight={2}>
          <TextButton size="small" skin="light" prefixIcon={<Print />}>
            Print
          </TextButton>
        </Box>
        <Box marginRight={2}>
          <Button priority="secondary" size="small" skin="light">
            Send
          </Button>
        </Box>
        <IconButton priority="secondary" size="small" skin="light">
          <More />
        </IconButton>
      </Box>
    );

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <Button onClick={this.toggleModalDisplay}>
          Open Modal Preview Layout
        </Button>
        <Modal isOpen={isModalOpened}>
          <ModalPreviewLayout
            title="Modal Preview Layout"
            actions={modalPreviewActions}
            onClose={this.toggleModalDisplay}
          >
            <Box verticalAlign="middle" height="100%">
              <img
                src="https://i.ibb.co/C8HHTJx/rectangle-2x.png"
                width="100%"
                height="550px"
              />
            </Box>
          </ModalPreviewLayout>
        </Modal>
      </SingleComponentSideBySide>
    );
  }
}

const ModalMobileLayoutExample = () => {
  const symbol = modalsSymbols.mobile;
  const components = modalsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol: Category.MODALS, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };
  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <ModalMobileLayout
        title={<Text weight="bold">Enter VAT ID</Text>}
        content={
          <Text weight="normal" secondary>
            Enter a valid European Union VAT identification number for the
            ‘Reverse Charge’ mechanism in order to apply.
          </Text>
        }
        footer={
          <Box align="right">
            <Box marginRight="12px">
              <Button priority="secondary">Cancel</Button>
            </Box>
            <Button>Save</Button>
          </Box>
        }
        onCloseButtonClick={() => {}}
      />
    </SingleComponentSideBySide>
  );
};

const ModalFamily = () => (
  <FamilyStructure title={groupSymbol} showPreview>
    <AlertExamples />
    <AnnouncementModalLayoutExamples />
    <CustomModalLayoutExample />
    <ModalPreviewLayoutExample />
    <ModalMobileLayoutExample />
  </FamilyStructure>
);

export default ModalFamily;
