const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require('./token.json')


bot.on("ready", async () =>{
    console.log("-----------------")
    console.log("En fonctionement")
    console.log("-----------------")
    bot.user.setStatus("online")
    bot.user.setActivity("Vous aidez", {type: 'PLAYING'});
})

bot.on("guildMemberAdd", member => {
    bot.channels.cache.get('767840496558145536').send(`Bienvenue sur le discord du Projet Borne Arcade ${member}!`);
    member.roles.add('767789956894425129')


})
bot.on("guildMemberRemove", memberleave => {
    bot.channels.cache.get('767840496558145536').send(`Bye 😢 ${memberleave}!`);


})

bot.on("message", message => {

    if(message.content.startsWith("!clear")){
    message.delete();
       if(message.member.hasPermission('MANAGE_MESSAGES')){

            let args = message.content.trim().split(/ +/g);

            if(args[1]){
                if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 98){

                    message.channel.bulkDelete(args[1])
                    message.channel.bulkDelete(1)
                    message.channel.send(`Vous avez bien supprimé ${args[1]} message(s)`)

                }
                else{
                    message.channel.send('Pour que cela marche il faut indiquer une valeur en 1 et 99 !')
                }

            }
            else{
                message.channel.send('Vous devez indiquer un nombre de messages a supprimer !')
            }
        
        
        }else{
            message.channel.send(`Il te faut des permissions pour faire cela !`)
        }
    }
    
})


bot.login(token.token);