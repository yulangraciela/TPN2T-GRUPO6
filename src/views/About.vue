<template>
  <Titulo texto="Nuestra Historia" />
</template>

<script>
import Titulo from "../components/Titulo";
export default {
  name: "Home",
  data() {
    return {
      myStyle: {
        backgroundColor: "#16a085",
      },
    };
  },
  components: {
    Titulo,
  },
};
</script>
