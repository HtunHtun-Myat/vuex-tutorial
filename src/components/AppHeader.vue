<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-dark">
      <div class="container">
        <ul class="nav navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link text-light">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Products</a>
          </li>
        </ul>

        <div>
          <div class="dropdown open">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ cartCount }} Carts
            </button>
            <div @click="$event.stopPropagation()"><mini-cart /></div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from "./MiniCart.vue";
import { mapGetters } from "vuex";
export default {
  components: { MiniCart },
  computed: {
    ...mapGetters("cart", ["cartCount"]),
  },
};
</script>

<style></style>
