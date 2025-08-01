import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const OpenAtTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.key]);

  return null;
};

export default OpenAtTop;
