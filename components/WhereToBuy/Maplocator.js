import { useEffect } from 'react';

const StoreLocator = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//cdn.storerocket.io/widget.js';
    script.async = true;
    script.onload = () => {
      // Initialize StoreRocket after the script has loaded
      window.StoreRocket.init({
        selector: '.storerocket-store-locator',
        account: 'n0pjVZvp6V',
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="storerocket-store-locator" style={{ width: '100%' }} />;
};

export default StoreLocator;
