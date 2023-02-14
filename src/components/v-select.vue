<template>
  <div class="v-select">
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">Select</p>
    <div class="options" v-if="areOptionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  computed: {},
  methods: {
    selectOption(option) {
      this.$emit("select", option);
    },
  },
};
</script>

<style>
.v-select {
  position: relative;
  width: 200px;
  cursor: pointer;
  user-select: none;
}
.title {
  border: solid 1px #aeaeae;
}
.v-select p {
  margin: 0;
}
.options {
  border: solid 1px #aeaeae;
  position: absolute;
  top: 30px;
  right: 0;
  width: 100%;
}
.options p:hover {
  background: #e7e7e7;
}
</style>
