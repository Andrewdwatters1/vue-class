<template>
  <div class="todo-main">
    <ul v-if="list.length">
      <li v-for="item in list" :key="item.id">
        {{item.item}}
        <button v-on:click="removeItem(item.id)">Remove Item</button>
      </li>
    </ul>
  <div v-else>
    Nothing in list!
  </div>
    <form v-on:submit.prevent="addToList(inputVal)">
      <input v-model="inputVal"/>
      <button type="submit">Add item</button>
  </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "todo",
  data: function() {
    return {
      inputVal: ""
    };
  },
  methods: {
    ...mapMutations(["addToList", "removeItem"])
  },
  computed: mapState({
    // this is essentially map state to props
    list: state => state.list
  })
};
</script>

<style>
body {
  margin: 0;
}
/* .todo-main {
    background-color: red;
} */
</style>