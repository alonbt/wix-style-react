import { useRef, useEffect } from 'react';

// Returns a function that checks whether component is still mounted
const useIsMounted = () => {
  const mountedRef = useRef(true);
  useEffect(() => {
    // React performs the cleanup when the component unmounts
    const cleanup = () => {
      mountedRef.current = false;
    };
    return cleanup;
  }, []);

  return () => mountedRef.current;
};

export default useIsMounted;
