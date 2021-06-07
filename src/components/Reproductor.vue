<template>
  <div>
    <Titulo texto=" Reproductor de Musica" />
    <h2>{{ cancion.title }}</h2>
  </div>
</template>

<script>
import Titulo from "../components/Titulo";
export default {
  props: {
    id: String,
  },
  data() {
    return {
      cancion: {},
    };
  },
  name: "Reproductor",
  components: {
    Titulo,
  },
  methods: {
    async consumirApi() {
      try {
        const data = await fetch("/data/browser.json");
        const array = await data.json();
        const k = this.id;
        const o = array.filter((c) => c.key == k);
        this.cancion = o[0];
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style></style>
