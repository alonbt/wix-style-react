export const basicExample = `<SocialPreview
  title="Site Name | a title of you site"
  description="A short description for a site"
  previewUrl="www.site-name.com"
  media=<ImageViewer
    width="100%"
    height="100%"
    removeRoundedBorders
    imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/dd/New_Mela_Ramanputhur_Holy_Family_Church.jpg"
  />
/>`;

export const sizeExample = `<StorybookComponents.Stack flexDirection="column">
<SocialPreview
  title="Large Size Post  Preview"
  description="This size is used to see how the page will be displayed on most of the social media platforms"
  previewUrl="www.site-name.com"
  media=<ImageViewer
    width="100%"
    height="360px"
    removeRoundedBorders
    imageUrl="example.jpg"
  />
/>
<SocialPreview
  size="small"
  skin="twitter"
  title="Small Size Twitter Post  Preview"
  description="Small size is used as an alternative size for Twitter preview only"
  previewUrl="www.site-name.com"
  media=<ImageViewer
    width="100%"
    height="100%"
    removeRoundedBorders
    imageUrl="example.jpg"
  />
/>
</StorybookComponents.Stack>;`;

export const skinExample = `<StorybookComponents.Stack flexDirection="column">
<SocialPreview
  skin="social"
  title="Social Skin"
  description="This skin is used to see how the page will be displayed on most of the social media platforms"
  previewUrl="www.site-name.com"
  media=<ImageViewer
    width="100%"
    height="360px"
    removeRoundedBorders
    imageUrl="example.jpg"
  />
/>
<SocialPreview
  skin="twitter"
  title="Twitter Skin"
  description="This skin is used to see how the page will be displayed on Twitter social media platform"
  previewUrl="www.site-name.com"
  media=<ImageViewer
    width="100%"
    height="360px"
    removeRoundedBorders
    imageUrl="example.jpg"
  />
/>
</StorybookComponents.Stack>;`;
