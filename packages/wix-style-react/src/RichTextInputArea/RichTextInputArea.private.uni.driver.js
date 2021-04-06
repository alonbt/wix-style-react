import { getContent } from '../../test/utils/unidriver/DraftJS';
import publicDriverFactory, {
  getPlaceholder,
} from './RichTextInputArea.uni.driver';

import richTextToolbarPrivateDriverFactory from './Toolbar/RichTextToolbar.private.uni.driver';

const getLink = async (base, text, url) => {
  const links = await getContent(base).$$('[data-hook=richtextarea-link]');

  // Returns the appropriate link by the text and url
  return links
    .filter(
      async link =>
        (await link.text()) === text && (await link.attr('href')) === url,
    )
    .get(0);
};

export default (base, body) => {
  return {
    ...publicDriverFactory(base, body),
    ...richTextToolbarPrivateDriverFactory(
      base.$('[data-hook=richtextarea-toolbar]'),
      body,
    ),
    hasPlaceholder: () => getPlaceholder(base).exists(),
    getLink: (text, url) => getLink(base, text, url),
    hoverTextArea: async () => await getContent(base).hover(),
    clickTextArea: async () => await getContent(base).click(),
  };
};
