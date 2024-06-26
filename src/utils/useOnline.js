import { useState, useEffect } from "react";
const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("online", () => {
      setIsOnline(false);
    });
  }, []);

  return isOnline; //return true or false
};

export default useOnline;
