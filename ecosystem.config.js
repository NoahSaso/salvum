module.exports = {
  apps: [
    {
      name: "salvum",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      instances: 1,
    },
  ],
}
