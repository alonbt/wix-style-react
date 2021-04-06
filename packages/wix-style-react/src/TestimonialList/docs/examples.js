export const basicExample = `
    <TestimonialList
        testimonials={[
          {
            avatar: <Avatar name="Guy in glasses" size="size60"/>,
            text: 'I love it! This product is exactly what I needed.',
            authorName: 'Guy in glasses'
          },
          {
            avatar: <Avatar name="Person with a hat" size="size60"/>,
            text: 'Amazing! It helped me to solve my problems.',
            authorName: 'Person with a hat'
          },
          {
            avatar: <Avatar name="Smiling lady" size="size60"/>,
            text: 'A perfect tool for my every day tasks.',
            authorName: 'Smiling lady'
          },
        ]}
    />
`;

export const columnsExample = `
    <TestimonialList
        cols={2}
        testimonials={[
          {
            avatar: <Avatar name="Guy in glasses" size="size60"/>,
            text: 'I love it! This product is exactly what I needed.',
            authorName: 'Guy in glasses'
          },
          {
            avatar: <Avatar name="Person with a hat" size="size60"/>,
            text: 'Amazing! It helped me to solve my problems.',
            authorName: 'Person with a hat'
          },
          {
            avatar: <Avatar name="Smiling lady" size="size60"/>,
            text: 'A perfect tool for my every day tasks.',
            authorName: 'Smiling lady'
          },
          {
            avatar: <Avatar name="Smiling lady" size="size60"/>,
            text: 'A perfect tool for my every day tasks.',
            authorName: 'Smiling lady'
          },
        ]}
    />
`;

export const withoutAvatarExample = `
    <TestimonialList
        testimonials={[
          {
            text: 'I love it! This product is exactly what I needed.',
            authorName: 'Guy in glasses'
          },
          {
            text: 'Amazing! It helped me to solve my problems.',
            authorName: 'Person with a hat'
          },
          {
            text: 'A perfect tool for my every day tasks.',
            authorName: 'Smiling lady'
          },
        ]}
    />
`;
