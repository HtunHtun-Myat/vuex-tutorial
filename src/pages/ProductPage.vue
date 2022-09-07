<template>
  <div>
    <div class="row mt-5" v-if="product">
      <div class="col-4">
        <img :src="product.image" class="w-100" />
      </div>
      <div class="col-8">
        <h1>{{ product.title }}</h1>
        <h3 class="mt-4">$ {{ product.price }}</h3>
        <label class="text-bold">Enter Quantity:</label>
        <input
          type="text"
          v-model.number="quantity"
          class="col-1 mr-2 p-1 mt-4 ml-2"
        />
        <button class="btn btn-primary" @click="addToCart">Add To Card</button>

        <p class="mt-4">
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      quantity: 1,
    };
  },
  mounted() {
    this.productDetail(this.id);
  },
  computed: {
    ...mapState("product", ["product"]),
  },
  methods: {
    ...mapActions("product", ["productDetail"]),
    ...mapActions("cart", ["addProductToCard"]),
    addToCart() {
      this.addProductToCard({
        product: this.product,
        quantity: this.quantity,
      });
    },
  },
};
</script>

<style></style>
