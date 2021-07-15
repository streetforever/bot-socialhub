const Discord = require("discord.js");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

function presence(){
    client.user.setPresence({
       status: "online",
       activity: {
          name: "Desarrollado por Antonio Martin.",
          type: "PLAYING"
       }
    });
 }

client.on("ready", () => {
    console.log("¡Hola y bienvenidx a la mejor experiencia del mundo!");
    presence();
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("Hola")) {
     message.channel.send("¡Hola bienvenidx a SocialHub, la mejor y única red social de Los Santos!");
   }
 
 });

 client.on("message", (message) => {
    if(message.content.startsWith("¿Como creo mi cuenta?")) {
      message.channel.send("Puedes ir a este canal, https://discord.com/channels/834817822101078016/835426789005197342");
    }
  
  });




  //EN TU ARCHIVO PRINCIPAL 

//Necesitamos los partials para este codigo:
const { Client, Collection } = require("discord.js");

///EN TU ARCHIVo PRINCIPAL O SI TI  ENES UN EVENT HANDLER TAMBIEN VA
client.on('messageReactionAdd', async (reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;//Para que la reaccion del bot o la de otro no cuente.
    if(!reaction.message.guild) return;
    if(reaction.message.id === '859732414992613397')/*En este espacio añadiran la ID del mensaje al que quiere que reaccioe. Osea el que hicimos arriba "el MessageEmbed"*/

    if(reaction.emoji.name === '📞')/*Puedes poner un emoji personalizado del servidor.*/ {
        reaction.users;

        reaction.message.guild.channels.create(`chat directo`, {
          parent: '858280573175595008',/*Aqui pones la ID de la categor�a donde quieres que se cree el ticket*/
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                  id: reaction.message.guild.roles.everyone,
                  deny: ["VIEW_CHANNEL"]
                }/*Aqui suprimimos el permiso para que vean el ticket a los demas usuarios*/
            ],
       type: 'text'
     }).then(async channel => {
       channel.send(`<@${user.id}>`, new Discord.MessageEmbed().setTitle("¡Hola has abierto un chat privado.").setDescription("Hola buenvenid@ al sistema de chat privado de SocialHub.").setColor("YELOW"))//Este mensaje lo mandara al ticket
     })
   }
 })




///*Para cerrar el ticket pueden hacer un comando close como quieran, pero con el metodo `message.channel.delete()`*\///
 // Me caguen dios ///

 client.login("ODU2ODI0ODM4OTcwODAyMTc2.YNGqUA.lFgkUjtuUmOQ7HA5pU4Ly2XS92E");