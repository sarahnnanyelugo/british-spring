import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageLoader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500); // Adjust the timeout as needed
    };

    handleRouteChange(); // Initial load

    // Listen for location changes
    return () => {
      handleRouteChange();
    };
  }, [location]);

  return loading;
};

export default usePageLoader;
