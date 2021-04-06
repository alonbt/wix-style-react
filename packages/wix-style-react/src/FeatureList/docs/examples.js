export const basicExample = `
    <FeatureList
      features={[
          {
            image: <Image width={60} height={60} />,
            title: 'Remove Wix Ads',
            text: "Enjoy a website that's completely your own brand by removing Wix ads.",
          },
          {
            image: <Image width={60} height={60} />,
            title: 'Connect a Custom Domain',
            text: "Get your business found with a custom domain.",
          },
          {
            image: <Image width={60} height={60} />,
            title: 'Accept Online Payment',
            text: "Let your customers and clients pay you online at checkout.",
          },
        ]}
    />
`;

export const columnsExample = `
    <FeatureList
      cols={2}
      features={[
          {
            image: <Image width={60} height={60} />,
            title: 'Remove Wix Ads',
            text: "Enjoy a website that's completely your own brand by removing Wix ads.",
          },
          {
            image: <Image width={60} height={60} />,
            title: 'Connect a Custom Domain',
            text: "Get your business found with a custom domain.",
          },
          {
            image: <Image width={60} height={60} />,
            title: 'Accept Online Payment',
            text: "Let your customers and clients pay you online at checkout.",
          },
          {
            image: <Image width={60} height={60} />,
            title: 'Accept Online Payment',
            text: "Let your customers and clients pay you online at checkout.",
          },
        ]}
    />
`;

export const withoutImagesExample = `
    <FeatureList
      features={[
          {
            title: 'Remove Wix Ads',
            text: "Enjoy a website that's completely your own brand by removing Wix ads.",
          },
          {
            title: 'Connect a Custom Domain',
            text: "Get your business found with a custom domain.",
          },
          {
            title: 'Accept Online Payment',
            text: "Let your customers and clients pay you online at checkout.",
          },
        ]}
    />
`;
