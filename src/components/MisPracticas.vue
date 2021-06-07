<template>
  <div>
    <Titulo texto="Cancionero" />
    <div v-for="item of arrayCancionero" :key="item.key">
      <b-card :img-src="`/data/${item.thumbnailhash}.0.cache`" img-top>
        <b-button to="/Reproductor" variant="primary">ir</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import Titulo from "../components/Titulo.vue";
export default {
  name: "MisPracticas",
  components: {
    Titulo,
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
        const data = await fetch("/data/browser.json")
        const array = await data.json()
        console.log(array)
        this.arrayCancionero = array
      } catch (error) {
        console.log(error)
      }
    },
  },
  created() {
    this.consumirApi();
  },
};
</script>

<style></style>
