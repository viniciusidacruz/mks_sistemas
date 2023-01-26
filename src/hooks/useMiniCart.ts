import { MouseEvent, useRef, useState } from 'react';

export function useMiniCart() {
  const [showMiniCart, setShowMiniCart] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null);

  const handleOpenDrawer = () => setShowMiniCart(!showMiniCart);

  const handleCloseDrawer = (event: MouseEvent) => {
    if (drawerRef.current === event.target) {
      setShowMiniCart(false);
    }
  };

  return {
    drawerRef,
    showMiniCart,
    setShowMiniCart,
    handleOpenDrawer,
    handleCloseDrawer,
  };
}
