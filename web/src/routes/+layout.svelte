<script lang="ts">
  import { cartState } from '$lib/cart/cart-state';
  import Meta from '$lib/meta/Meta.svelte';
  import { db, user } from '$lib/utils/firebase';
  import '@jaspero/web-components/dist/alert.wc';
  import '@jaspero/web-components/dist/confirm.wc';
  import { doc, getDoc } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import '../../../shared/styles/index.pcss';

  onMount(async () => {
    const userDoc: any = $user;
    let currentCartState;
    const items = localStorage.getItem('cart');

    if (items) {
      currentCartState = JSON.parse(items);
    }

    if (userDoc && userDoc.cartItems) {
      if (currentCartState && currentCartState.cartUpdate) {
        if (currentCartState.cartUpdate < userDoc.cartUpdate) {
          currentCartState = {
            cartItems: userDoc.cartItems
          };
        }
      } else {
        currentCartState = {
          cartItems: userDoc.cartItems
        };
      }
    }

    if (currentCartState && currentCartState.cartItems) {
      const cartItems = await Promise.all(
        currentCartState.cartItems.map(async (product) => {
          const productSnapshot = await getDoc(doc(db, 'products', product.id));
          if (productSnapshot.exists()) {
            const productData = productSnapshot.data();
            return {
              ...productData,
              id: product.id,
              selectedVariant: product.selectedVariant
            };
          }

          return null;
        })
      );
      cartState.set(cartItems);
    }
  });
</script>

<div class="bg"></div>

<slot />

<Meta />

<style>
  .bg {
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-image: url(/images/texture.svg);
  }
</style>