<template>
  <h1>Mi Perfil</h1>
  <p>Aqui pondremos todo lo relativo al usuario</p>
  <div> v-for="MiPerfiles in MiPerfiles":key="MiPerfil.id"
      <h2>{{MiPerfiles.title}}</h2>
  </div>
</template>

<script>
export default {
data(){
    return{
        MiPerfiles:[
            {title:'Canciones terminadas', id:1, },
            {title:'Genero favorito', id:2, },
            {title:'Mi nivel', id:3, },
        ]
    }
}
}
</script>

<style>

</style>