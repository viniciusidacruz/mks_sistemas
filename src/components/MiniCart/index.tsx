import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

import { useMiniCart } from '@hooks/index';
import { ProductRowCartComponent } from '@components/index';

import * as Styles from './styles';

export function MiniCartComponent() {
  const { cart } = useSelector((state: RootState) => state.cart);
  const quantity = cart.length;

  const {
    handleOpenDrawer,
    drawerRef,
    showMiniCart,
    setShowMiniCart,
    handleCloseDrawer,
  } = useMiniCart();

  return (
    <Fragment>
      <Styles.Button
        onClick={handleOpenDrawer}
        aria-label="abrir-carrinho"
      >
        <Styles.Icon />

        <span>{quantity}</span>
      </Styles.Button>

      <Styles.Background
        ref={drawerRef}
        active={showMiniCart}
        onClick={handleCloseDrawer}
        data-testid="background"
      >
        <Styles.Wrapper active={showMiniCart}>
          <Styles.HeadingDrawer>
            <Styles.Title>
              Carrinho
              <br /> de compras
            </Styles.Title>

            <Styles.Circle>
              <Styles.CloseIcon
                data-testid="close-icon"
                onClick={() => setShowMiniCart(false)}
              />
            </Styles.Circle>
          </Styles.HeadingDrawer>

          <Styles.List>
            {cart.map((product) => (
              <ProductRowCartComponent
                data={product}
                key={product.id}
              />
            ))}
          </Styles.List>

          <Styles.Footer>
            <div>
              <h3>Total: </h3>
              <h3>R$208</h3>
            </div>

            <button type="button" aria-label="finalizar-compra">
              Finalizar compra
            </button>
          </Styles.Footer>
        </Styles.Wrapper>
      </Styles.Background>
    </Fragment>
  );
}
