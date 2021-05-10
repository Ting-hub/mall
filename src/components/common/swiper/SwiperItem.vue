<template>
    <div class="slide">
      <slot></slot>
    </div>
</template>

<script>
	export default {
		name: "Slide"
	}
</script>

<style scoped>
  .slide {
    width: 100%;
    /* height: 130px; */
    flex-shrink: 0;
    /* height: 191px; */
  }

  .slide>>>img{

  width: 100%;       
  /* height: 191px; */
  }
</style>
