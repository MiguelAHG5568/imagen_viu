<template>
    <div>
        <NavbBar />
    </div>
</template>

<script>
import { defineComponent } from 'vue'; 
import  NavbBar from '@/components/Nav.vue';


export default defineComponent({
    name: 'HelpV',
    components: {
        NavbBar,    
    }
})
</script>

