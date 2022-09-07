<template>
  <div class="col-3 mt-3">
    <div class="card h-100">
      <img
        class="card-img-top"
        :src="product.image"
        alt=""
        height="300"
        width="100"
      />
      <div class="card-body">
        <h4 class="card-title text">
          <router-link :to="{ name: 'product', params: { id: product.id } }">{{
            product.title
          }}</router-link>
        </h4>
        <div class="d-flex justify-content-between align-items-center">
          <strong>$ {{ product.price }}</strong>
          <span class="badge badge-success"> {{ product.category }}</span>
        </div>
        <p class="card-text text">{{ product.description }}</p>
      </div>
      <div class="px-4 pb-3">
        <button class="btn btn-secondary" @click="addToCard">
          Add To Card
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["product"],
  methods: {
    ...mapActions("cart", ["addProductToCard"]),

    addToCard() {
      this.addProductToCard({
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style>
.text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
