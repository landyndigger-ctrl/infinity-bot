module.exports = {
  name: 'ready',
  execute(client) {
    console.log(`🚀 Logged in as ${client.user.tag}`);
  }
};
