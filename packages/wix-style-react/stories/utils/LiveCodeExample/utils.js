export const createPropsArray = props =>
  Object.entries(props).map(([key, value]) => {
    if (value === true) {
      return key;
    } else if (typeof value === 'string') {
      return `${key}="${value}"`;
    }

    return `${key}={${JSON.stringify(value)}}`;
  });
