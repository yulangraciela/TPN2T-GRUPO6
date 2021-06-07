<template>
  <Titulo texto=" Reproductor de Musica" />
  <h2>`${item.thumbnailhash}`</h2>
  <template />

  <script>
    import Titulo from '../components/Titulo',
    export default {
        props: { key: String
 },
 data() {
    return {
      cancion:{},
    };
  },
        name: Reproductor,
      components: {
          Titulo,
      },
      methods: {
    async consumirApi() {
      try {
        const data = await fetch("/data/browser.json")
        const array = await data.json()
        const k = this.key
       const o =array.filter((c)=>c.key==k)
        this.Cancion = o[0]
      } catch (error) {
        console.log(error)
      }
    },
  },
    }
  </script>

  <style></style>
