<template>
  <div class="row">
    <Titulo texto="Cancionero" />
    <div v-for="(item, index) in arrayCancionero" :key="index" class="col">
      <li
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
        "
      >
        {{ item.name }}
        <span class="badge badge-primary badge-pill">
          <b-button :to="'/Reproductor/' + `${item.id}`" variant="primary"
            >ir</b-button
          ></span
        >
      </li>
    </div>
    <Footer />
  </div>
</template>

<script>
import Titulo from "../components/Titulo.vue";
import axios from "axios";
import Footer from "./Footer.vue";
export default {
  name: "MisPracticas",
  components: {
    Titulo,
    Footer,
  },
  props: {},

  data() {
    return {
      arrayCancionero: [],
    };
  },
  methods: {
    async consumirApi() {
      try {
        const res = await axios.get(
          "https://60c654e819aa1e001769f232.mockapi.io/optimus/canciones"
        );
        const data = await res.data;

        this.arrayCancionero = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.consumirApi();
  },
};
</script>

<style></style>
