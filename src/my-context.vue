<template>
  <!--<div class="mybutton">-->
  <my-button label="label" @click="animate()"/>
  <!--</div>-->
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
      label: 'Iam Autoclick'
    }
  }
}
</script>

<style>
body {
  width: 100%;
  margin: auto;
}

</style>
