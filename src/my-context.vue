<template>
  <div class="myButton">
  <input class="input" v-model="label" placeholder="Iam autoclick">
  <p>Le message est : {{ label }}</p>
  <my-button label="label" @click="animate()"/>
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
  margin-top: 80px;
  margin-left: 80px;
  border-radius: 25px;
}

</style>
