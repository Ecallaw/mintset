import { useEffect } from "react";
import useLocalStorage from "./useLocaleStorage";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");

  useEffect(() => {
    const bodyClass = window.document.body.classList;

    if(colorMode === 'dark') {
      bodyClass.add('dark')
      bodyClass.remove('light')
    }else{
      bodyClass.add('light')
      bodyClass.remove('dark')
    }

    // colorMode === "dark"
    //   ? bodyClass.add(colorMode)
    //   : bodyClass.remove(colorMode);
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;