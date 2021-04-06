import wixEventually from 'wix-eventually';

const DEFAULT_INTERVAL_MS = 10; // Reasonable interval for a component library which does not do any fetching

export const eventually = (
  fn,
  { timeout: _timeout, interval: _interval } = {},
) => {
  const testFrameworkTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  const interval = _interval || DEFAULT_INTERVAL_MS;
  const suggestedTimeout =
    testFrameworkTimeout && testFrameworkTimeout - 2 * interval;

  let timeout;
  if (_timeout) {
    if (suggestedTimeout && _timeout > suggestedTimeout) {
      throw new Error(
        `eventually: options.timeout of ${_timeout} should be smaller than the suggested timeout (testFrameworkTimeout - 2 * interval = ${testFrameworkTimeout} - 2 * ${interval} = ${suggestedTimeout})`,
      );
    }
  } else {
    timeout = suggestedTimeout;
  }
  return wixEventually(fn, { timeout, interval });
};
