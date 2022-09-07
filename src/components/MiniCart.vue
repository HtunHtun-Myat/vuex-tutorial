<template>
  <div>
    <div
      class="dropdown-menu"
      aria-labelledby="triggerId"
      style="min-width: 320px; right: 0; left: auto"
    >
      <div v-if="haveCart">
        <div v-for="item in cart" :key="item.product.id">
          <div class="px-2 d-flex justify-content-between">
            <div>
              <strong>{{ item.product.title }}</strong>
              <br />
              {{ item.quantity }} x $ {{ item.product.price }}
            </div>
            <div>
              <button
                class="btn btn-danger"
                @click="removeCart(item.product.id)"
              >
                Remove
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div v-else>
        <p class="text-center p-2 mt-2">There are no item in cart.</p>
      </div>
      <div class="px-2 d-flex justify-content-between">
        <span class="mt-2">Total : $ {{ totalPrice }}</span>
        <button
          class="btn btn-danger"
          :disabled="!haveCart"
          @click="clearCarts"
        >
          CLear
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState("cart", ["cart"]),

    ...mapGetters("cart", ["totalPrice"]),

    haveCart() {
      return this.cart.length != 0;
    },
  },
  methods: {
    ...mapActions("cart", ["clearCarts", "removeCarts"]),

    removeCart(id) {
      this.removeCarts(id);
    },
  },
};
</script>

<style></style>
