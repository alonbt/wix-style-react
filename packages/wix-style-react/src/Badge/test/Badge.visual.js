import React from 'react';
import Badge, { SKIN, TYPE } from '../index';
import { visualize, snap } from 'storybook-snapper';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import CalendarIcon from 'wix-ui-icons-common/Date';
import ChevronDownSmall from 'wix-ui-icons-common/ChevronDownSmall';
import CalendarIconSmall from 'wix-ui-icons-common/DateSmall';

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  visualize(`${themeName ? `${themeName}|` : ''}Badge`, () => {
    snap('base', () =>
      testWithTheme(<BadgesVariations children="Some Badge" />),
    );
    snap('ellipsis', () =>
      testWithTheme(
        <BadgesVariations children="I'm a Badge with a long text and ellipsis!" />,
      ),
    );
    snap('Affixes', () =>
      testWithTheme(<BadgesVariations withAffixes children="Some Badge" />),
    );
    snap('focus', () => testWithTheme(<FocusBadgeTest />));
  });

  const skins = Object.keys(SKIN);
  const types = Object.keys(TYPE);

  const renderBadge = props => (
    <span style={{ padding: '5px', maxWidth: '180px' }}>
      <Badge {...props} />
    </span>
  );

  const renderTypes = props =>
    types.map(type => renderBadge({ type, ...props }));

  class BadgesVariations extends React.Component {
    render() {
      const { withAffixes, ...rest } = this.props;

      return (
        <div>
          {skins.map(skin => (
            <div key={skin}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '5px',
                }}
                key={skin}
              >
                {renderTypes({
                  size: 'medium',
                  prefixIcon: withAffixes ? <CalendarIcon /> : null,
                  suffixIcon: withAffixes ? <ChevronDown /> : null,
                  skin,
                  ...rest,
                })}
                {renderTypes({
                  size: 'small',
                  prefixIcon: withAffixes ? <CalendarIconSmall /> : null,
                  suffixIcon: withAffixes ? <ChevronDownSmall /> : null,
                  skin,
                  ...rest,
                })}
                {renderBadge({ uppercase: false, skin, ...rest })}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }

  class FocusBadgeTest extends React.Component {
    componentDidMount() {
      // TODO - might want to make this focus action as a global driver / using tabs
      document.querySelector('[data-hook="focusable-badge"]').focus();
    }

    render() {
      return (
        <Badge dataHook="focusable-badge" onClick={() => alert(1)}>
          has focus ring on keyboard focus
        </Badge>
      );
    }
  }
};
