<script setup>

defineProps({
  quote: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: false
  }
})


</script>

<template>
  <div class="greetings">
    <h3>
      {{quote}}
    </h3>
    <h6 v-if="author">-{{author}}</h6>
  </div>
</template>

<style scoped>


h3 {
  font-size: 1.2rem;
  margin-bottom: 40px;

}

@media (max-width: 480px) {
  h3 {
    font-size: 1rem;
  }
} 

.greetings {
  max-width: 480px;
}


.greetings h3,
.greetings h6 {
  text-align: center;
}
</style>
