console.log("Welcome Again !");

client.on('ready', () => {
    client.user.setStatus('idle');
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
      حياك الله ي بعد راسي
       خش بتنورنا فعاليات وكل شيء حلو موجود !
        ي بعد عيني الرابط تحت
         Spring SERVER

                                 [ https://discord.gg/g7vFAAc ] **`)
}).catch(console.error)
})

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
      حياك الله ي بعد راسي
       خش بتنورنا فعاليات وكل شيء حلو موجود !
        ي بعد عيني الرابط تحت
         Spring SERVER

                                 [ https://discord.gg/g7vFAAc ] **`)
}).catch(console.error)
})
client.login('NTAxMDI0OTg2MTkxMTAxOTUz.DsgeLQ.rYYBVwMU8P43kfc6f_xs7SSGkjc');
