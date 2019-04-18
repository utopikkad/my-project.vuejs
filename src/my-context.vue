<template>
<div>
  <div class="myButton">
  <input class="input" v-model="label" placeholder="Iam autoclick">
  <!--<p class="paraph">enter input : {{ label }}</p>-->
  <my-button :label="label"  @click="animate()"/>
  </div>
  </div>
</template>

<script>
import myButton from './components/my-button.vue'

export default {
  components: {
    myButton
  },
  methods: {
    animate() {
      
    }
    },
  data () {
    return {
      label: ' '
    }
  }
  }

</script>

<style>
body {
  width: 100%;
  margin: auto;
}
.input {
  margin-top: 20px;
  margin-left: 100px;
  border-radius: 25px;
  position: absolute;
}
.paraph {
   margin-top: 20px;
   position: absolute;
}

</style>
