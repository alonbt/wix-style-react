import React from 'react';

export const suggestionsWidgetCarouselWIPExample = `
<CarouselWIP
  infinite={false}
  controlsSkin="inverted"
  controlsPosition="overlay"
  controlsStartEnd="hidden"
  slidingType="reveal-one"
  showControlsShadow
  startEndOffset={24}
  gutter={6}
  sidesGradientColor="#F0F4F7"
  hideDots
>
  {Array(10)
    .fill(0)
    .map((_, index) => (
      <Box maxWidth="500px">
        <Card>
          <MarketingLayout
            title={\`Card \${index + 1}\`}
            description="This layout requires less attention. It can promote side features that might add value, but are not mandatory to achieve main goals."
            actions={<Button size="small">Get Started</Button>}
            size="tiny"
            image={<img src="https://picsum.photos/100/100" />}
          />
        </Card>
      </Box>
    ))}
</CarouselWIP>
`;

export const suggestionsWidgetCarouselExample = `
<Carousel
  infinite={false}
  controlsSkin="inverted"
  controlsPosition="overlay"
  controlsStartEnd="hidden"
  controlsSize="small"
  slidingType="reveal-one"
  showControlsShadow
  startEndOffset={24}
  gutter={6}
  sidesGradientColor="#F0F4F7"
  dots={false}
>
  {Array(10)
    .fill(0)
    .map((_, index) => (
      <Box maxWidth="500px">
        <Card>
          <MarketingLayout
            title={\`Card \${index + 1}\`}
            description="This layout requires less attention. It can promote side features that might add value, but are not mandatory to achieve main goals."
            actions={<Button size="small">Get Started</Button>}
            size="tiny"
            image={<img src="https://picsum.photos/100/100" />}
          />
        </Card>
      </Box>
    ))}
</Carousel>
`;
