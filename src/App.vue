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
  { text: "Between stimulus and response, there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom", author: "Viktor Frankl" },
  { text: "Friendly reminder that 'doing your best' does not mean working yourself to the point of a mental breakdown.", author: "@PeacefulMindPeacefulLife" },
  { text: "Feelings are just visitors, let them come and go", author: "Mooji" },
  { text: "The best way out is always through", author: "Robert Frost" },
  { text: "We suffer more in imagination that in reality", author: "Seneca" },
  { text: "Here's the part I didn't know for a very long time: nothing was ever missing. It was just missing in the places I expected it to be & I forgot I could look for it somewhere else." },
  { text: "Staying positive does not mean that things will turn out okay. Rather, it is knowing that YOU will be okay no matter how things turn out." },
  { text: "In the midst of movement and chaos, keep stillness inside of you." },
  { text: "I used to admire people with luxuries. Now I admire poeple with inner peace." },
  { text: "I don't have to chase extraordinary oments to find ahppiness - it's right there in front of me if I'm paying attention and practicing gratitude.", author: "Brene Brown" },
  { text: "It takes courage to say yes to rest and play in a culture where exhaustion is seen as a status symbol.", author: "Brene Brown" },
  { text: "Rest is not idele, is not wastreful. SOmetimes rest is the most productive thing you can do for body and soul.", author: "Erica Layne" },
  { text: "Take time today to pause, to linger, to quiet the noise and remember that your worth is not measured by your productivity." },
  { text: "The simplicity of owning what you love, wanting what you have, and being who you are is it's own form of wealth.", author: "Lisa Avellan" },

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
