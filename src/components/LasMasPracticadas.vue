<template>
  <div>
    <Titulo texto="Favoritas"></Titulo>
    <div v-for="(item, index) in favoritas" :key="index">
      <li
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <p>{{ item.cancion.name }}</p>
        <span class="badge badge-primary badge-pill"></span>
      </li>
    </div>
  </div>
</template>

<script>
import Titulo from "../components/Titulo.vue";
import { mapState } from "vuex";
export default {
  name: "LasMasPracticadas",
  components: {
    Titulo,
  },
  computed: {
    ...mapState(["favoritas"]),
  },
};
</script>

<style></style>
