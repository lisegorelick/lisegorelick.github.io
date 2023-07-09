<script setup>
import Quote from './components/Quote.vue'
import { ref } from 'vue'
const quotes = [
  { text: "Life meanders like a path through the woods. We have seasons when we flourish and seasons when the leaves fall from us, revealing our bare bones. Given time, they grow again.", author: "Katherine May" },
  { text: "Winter is not the death of the life cycle, but its crucible.", author: "Katherine May" },
  { text: "Life isn't about finding yourself. It's about creating yourself." },
  { text: "The goal of meditation isn't to control your thoughts. It's to stop letting them control you." },
  { text: "Everything is hard before it is easy." },
  { text: "Your direction is more important than your speed" },
  { text: "If one does not know to which port one is sailing, no wind is favorable.", author: "Seneca" },
  { text: "Between stimulus and response, there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom", author: "Viktor Frankl" }

]

const currentIndex = ref(0)

function randomQuote(previousIndex) {
  var randomIndex = Math.floor(Math.random() * quotes.length)
  if(previousIndex) {
    while(randomIndex == previousIndex.value) {
      randomIndex = Math.floor(Math.random() * quotes.length)
    }
  }
  currentIndex.value = randomIndex
}

randomQuote();
const quote = ref(quotes[currentIndex.value])

function refreshQuote() {
  randomQuote(currentIndex)
  quote.value = quotes[currentIndex.value]
}

</script>

<template>

  <main>
    <div class="container">
      <div class="titleContainer">
          <h1 class="green">Winter Wisdom</h1>
      </div>
      <div class="quoteContainer">
        <Quote msg="Winter Wisdom" v-bind:quote="quote.text" v-bind:author="quote.author"/>
      </div>
      <div class="buttonContainer">
        <button @click="refreshQuote"> Refresh </button>
      </div>
    </div>

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  margin-bottom: 30px;
}

.titleContainer {
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  padding-top: 20px;
  }

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.buttonContainer {
position: fixed;
  bottom: 0;
  width: 100%;
  padding-bottom: 20px;
  }

button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  
}

.container {
  height: 100vh;
  position: relative;
  border: 3px solid hsla(160, 100%, 37%, 1);;
  overflow: scroll;
}

.quoteContainer {
  margin: 0;
  position: absolute;
  top: 50%;
    left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

</style>
