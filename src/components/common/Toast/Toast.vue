<template>
  <div v-show='show'>
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
data(){
  return {
    message:'',
    show:false
  }
},
  methods:{
    show(message,time = 2000){
      this.show = true
      this.message = message

      setTimeout(()=>{
        this.show = false
        this.message = ''
      },time)
    }
  }
}
</script>

<style>

</style>