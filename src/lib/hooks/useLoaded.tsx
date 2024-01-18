import { useState, useEffect } from "react";


// Resolve issue caused by colorMode and condition to display button. 
// When page load the server component doesn't know the value of colorMode
// and send undefined that provide an error
export const useLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true)
  }, []);
  return loaded;
};