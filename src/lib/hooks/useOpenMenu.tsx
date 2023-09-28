import { useState } from "react";

const useOpenMenu = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return [openMenu, setOpenMenu] as const;
};

export default useOpenMenu;