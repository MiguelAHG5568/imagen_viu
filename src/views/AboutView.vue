<template>
  <div>
      <NavbBar />
  </div>
</template>

<script>
import { defineComponent } from 'vue'; 
import  NavbBar from '@/components/Nav.vue';

export default defineComponent({
  name: 'AboutV',
  components: {
      NavbBar,
  }
})

</script>
