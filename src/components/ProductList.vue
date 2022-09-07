<template>
  <div class="d-flex algin-items-stretch flex-wrap">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    ProductCard,
  },
  mounted() {
    this.getProducts;
  },
  computed: {
    ...mapState({
      products: (state) => state.product.products,
    }),
    ...mapActions("product", ["getProducts"]),
  },
};
</script>

<style></style>
