<template>
  <div class="notification-list">
    <notification-message
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotificationMessage from "./NotificationMessage.vue";
export default {
  components: {
    NotificationMessage,
  },
  computed: {
    ...mapState(["notifications"]),
  },
};
</script>

<style>
.notification-list {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  width: 350px;
  text-align: center;
}
</style>
