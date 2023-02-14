<template>
  <div id="app">
    <h1>Hello, Vue!</h1>
    <v-select :options="options" @select="optionSelect" />
    <p>Selected option goes here: {{ selected }}</p>
  </div>
</template>

<script>
import vSelect from "./components/v-select.vue";
export default {
  name: "App",
  components: {
    vSelect,
  },
  data() {
    return {
      options: [
        { name: "Option 1", value: 1 },
        { name: "Option 2", value: 2 },
        { name: "Option 3", value: 3 },
        { name: "Option 4", value: 4 },
        { name: "Option 5", value: 5 },
      ],
      selected: "",
    };
  },
  methods: {
    optionSelect(option) {
      this.selected = option.name;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
