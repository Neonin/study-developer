<template>
  <div class="detail">
    <div class="recipe" v-if="recipe">
      <h2>{{ recipe.title }}</h2>
      <a href="#">Показать</a>
      <p>{{ recipe.description }}</p>
      <button class="btn remove">Удалить</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      recipe: Object,
    },
  }
</script>

<style>
  .recipe {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .recipe p {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  .recipe a,
  .recipe h2 {
    margin-bottom: 0.5rem;
  }
</style>
