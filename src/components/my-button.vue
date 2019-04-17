<template>
  <div class="button-native">
    <span>{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'myButton',
  props :{
    label : {
      type : String,
      required : true
    }
  },
    created () {
      setInterval(() => {
        this.$emit('click')
      }, 1700)
    },
    data () {
      return {
        msg : ""
      }
    },
    methods: {
  
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .button-native {
    min-width: 193px;
    width: 50%;
    margin: auto;
    height: 50px;
    border-radius: 25px;
    background: #57b846;
    font-family: Montserrat;
    font-weight: 800;
    font-size: 15px;
    line-height: 1.5;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    cursor: not-allowed;
  }
</style>
