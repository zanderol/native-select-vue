// module.exports = {
//   publicPath: "/native-select-vue/",
// };

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/native-select-vue/" : "/",
};
