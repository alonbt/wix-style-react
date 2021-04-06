const basic =
  '<GooglePreview title="Site Name | a title of your site" previewUrl="www.site-name.com" description="a short description for a site"></GooglePreview>';
const multiLineTitle = `<Layout>
  <Cell span={6}>
  <GooglePreview
    title="Site Name | a title of your site Site Name | a title of your site "
    previewUrl="www.site-name.com"
    description="a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site"
  ></GooglePreview>
  </Cell>
  <Cell span={6}>
  <GooglePreview
    title="Site Name | a title of your site Site Name | a title of your site "
    previewUrl="www.site-name.com"
    titleMaxLines={4}
    description="a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site"
  ></GooglePreview>
  </Cell>
  </Layout>`;
const multiLineDescription = `<Layout>
  <Cell span={6}>
  <GooglePreview
    title="Site Name | a title of your site"
    previewUrl="www.site-name.com"
    description="a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site"
  ></GooglePreview>
  </Cell>
  <Cell span={6}>
  <GooglePreview
    title="Site Name | a title of your site"
    previewUrl="www.site-name.com"
    descriptionMaxLines={4}
    description="a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site"
  ></GooglePreview>
  </Cell>
  </Layout>`;
const noDescription =
  '<GooglePreview title="Site Name | a title of your site" previewUrl="www.site-name.com"></GooglePreview>';
const transparent =
  '<GooglePreview title="Site Name | a title of your site" previewUrl="www.site-name.com" description="a short description for a site" skin="transparent"></GooglePreview>';

export const examples = [
  {
    title: 'Basic',
    text: 'With all required fields',
    source: basic,
  },
  {
    title: 'Multi-line title',
    text:
      'The title can grow up to value of `titleMaxlines`, default is 1 line',
    source: multiLineTitle,
  },
  {
    title: 'Multi-line description',
    text:
      'The description can grow up to value of `descriptionMaxlines`, default is 2 lines',
    source: multiLineDescription,
  },
  {
    title: 'No description',
    text: 'The google preview can appear without a description',
    source: noDescription,
  },
  {
    title: 'Transparent background',
    text: 'The google preview can appear with transparent backgrounf',
    source: transparent,
  },
];
