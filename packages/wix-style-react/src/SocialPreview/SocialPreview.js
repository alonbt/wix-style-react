import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './SocialPreview.st.css';

import Text from '../Text';
import Box from '../Box';
import { Link } from 'wix-ui-icons-common';
import { dataHooks } from './constants';

/**
 * A displayer for a social post
 */
class SocialPreview extends React.Component {
  static displayName = 'SocialPreview';

  static propTypes = {
    dataHook: PropTypes.string,
    /** A social post link title */
    title: PropTypes.string,
    /** A social post link description */
    description: PropTypes.string,
    /** A url representation of the social post link */
    previewUrl: PropTypes.string,
    /** A slot to render a media item, most common will be the ImageViewer component */
    media: PropTypes.node,
    /** Changes the style of the preview */
    skin: PropTypes.oneOf(['social', 'twitter']),
    /** Specifies the size of the preview. Size small works only in combination with twitter skin */
    size: PropTypes.oneOf(['small', 'large']),
  };

  static defaultProps = {
    skin: 'social',
    size: 'large',
  };

  _isTwitter() {
    const { skin } = this.props;
    return skin === 'twitter';
  }

  _isTwitterSmall() {
    const { size } = this.props;
    return this._isTwitter() && size === 'small';
  }

  _renderTitle() {
    const { skin, title } = this.props;
    return (
      <Text
        weight="bold"
        size={this._isTwitter() ? 'tiny' : 'small'}
        dataHook={dataHooks.socialPreviewTitle}
        className={st(classes.socialPreviewTitle, { skin })}
        ellipsis
      >
        {title}
      </Text>
    );
  }

  _renderDescription() {
    const { skin, description } = this.props;
    return (
      <Text
        weight={this._isTwitter() ? 'normal' : 'thin'}
        size="tiny"
        dataHook={dataHooks.socialPreviewDescription}
        className={st(classes.socialPreviewDescription, { skin })}
        ellipsis
        maxLines={this._isTwitter() ? 2 : 1}
      >
        {description}
      </Text>
    );
  }

  _renderUrlText() {
    const { skin, previewUrl } = this.props;
    return (
      <Text
        weight="normal"
        size="tiny"
        dataHook={dataHooks.socialPreviewUrl}
        className={st(classes.socialPreviewUrl, { skin })}
        ellipsis
      >
        {this._isTwitter()
          ? previewUrl
          : previewUrl && previewUrl.toUpperCase()}
      </Text>
    );
  }

  _renderUrl() {
    const { skin, previewUrl } = this.props;
    if (this._isTwitter()) {
      return (
        previewUrl && (
          <div className={st(classes.socialPreviewUrlContainer, { skin })}>
            <Link size="14px" />
            {this._renderUrlText()}
          </div>
        )
      );
    } else {
      return this._renderUrlText();
    }
  }

  _renderMedia() {
    const { skin, size, media } = this.props;
    if (this._isTwitterSmall()) {
      return (
        <div className={st(classes.mediaContainer, { skin, size })}>
          {media}
        </div>
      );
    }

    return media;
  }

  render() {
    const { skin, size } = this.props;

    return (
      <div
        className={st(classes.root, { skin, size })}
        data-hook={this.props.dataHook}
        data-skin={skin}
        data-size={size}
      >
        {this._renderMedia()}
        <Box
          className={st(classes.container, { skin, size })}
          direction="vertical"
          verticalAlign={this._isTwitterSmall() ? 'middle' : undefined}
        >
          {!this._isTwitter() && this._renderUrl()}
          {this._renderTitle()}
          {this._renderDescription()}
          {this._isTwitter() && this._renderUrl()}
        </Box>
      </div>
    );
  }
}

export default SocialPreview;
