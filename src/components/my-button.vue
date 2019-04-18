<template>
<div>
  <div class="button-native"  :v-on:click ="show = !show">
    <span>{{ label }}</span>
  </div>
  <transition name = "fade">
    <p v-if = "show" class="clic" >Click</p>
  </transition>
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
      show: true
      return {
        msg : ""
      }
    },
    methods: {
      emitToParent() {
        this.$emit('label', this.label)
      
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .button-native {
    min-width: 193px;
    width: 50%;
    margin: auto;
    margin-top: 100px;
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
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
.clic {
  font-size: 5rem;
  margin-left: 80%;
  margin-top: 0px;

}
</style>
