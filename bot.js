const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "R!";




client.on('message', message => {
	if(message.content === "R!invite") {
		message.author.send(`
		شكرأ لاستخدامك لبوتنا
		رابط اضافة البوت:
		https://discordapp.com/api/oauth2/authorize?client_id=531465508503945226&permissions=8&scope=bot
		Bot Created By IxRawan`);
	}
});





client.on("message", message => {
    if (message.content.startsWith("R!bc")) {
        if(!message.guild.member(client.user).hasPermissions('ADMINISTRATOR')) return message.reply(':x: **I Dont Have `ADMINISTRATOR ` Permission**');
        if(!message.guild.member(message.author).hasPermissions('ADMINISTRATOR')) return message.reply(':x: **You Dont Have `ADMINISTRATOR ` Permission**');
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });
















client.on("message", message => {
    var prefix = "R!";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
                if(!message.guild.member(client.user).hasPermissions('MANAGE_MESSAGES')) return message.reply(':x: **I Dont Have `MANAGE_MESSAGES ` Permission**');
                if(!message.guild.member(message.author).hasPermissions('MANAGE_MESSAGES')) return message.reply(':x: **You Dont Have `MANAGE_MESSAGES ` Permission**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل",
        footer: {
          text: "EpicBot By IxRawan" 
        }
      }}).then(msg => {msg.delete(9999)});
                          }

     
});



client.on('message', message =>{
    var prefix = "R!";

    let args = message.content.split(' ');
    if(args[0] === prefix + `avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});



client.on("message", msg => {
    if(msg.content === 'R!' + "id") {
        const embed = new Discord.RichEmbed();
    embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
            .addField("🆔| الاي دي :", `${msg.author.id}`, true)
            .setColor("RANDOM")
            .setFooter(msg.author.username , msg.author.avatarURL)
            .setThumbnail(`${msg.author.avatarURL}`)
            .setTimestamp()
            .setURL(`${msg.author.avatarURL}`)
            .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
            .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
     .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
            .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true);
        msg.channel.send({embed: embed})
    }
  })
  client.on('message', function(msg) {
      const prefix = 'R!'
      if(msg.content.startsWith (prefix  + 'server')) {
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(msg.guild.iconURL)
        .setTitle(`Showing Details Of  **${msg.guild.name}*`)
        .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
        .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
        .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
        .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
        .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
        .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
        .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
        .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
        .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
        msg.channel.send({embed:embed});
      }
    });







    client.on('message', message => { 
        var prefix = "R!";
        if (message.author.boss) return;
        if (!message.content.startsWith(prefix)) return;
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
        if (command == "role") {
        if (!message.channel.guild) return;
        if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
        if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
        let user = message.mentions.users.first();
        if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
        let MRole = message.content.split(" ").slice(2).join(" ");
        if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
        message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
        message.reply('*** Done :white_check_mark:  ***').then(msg => {msg.delete(10000)});
        }
        });





























       client.on('message', message => {
        if(message.content.includes('discord.gg')){
			if(!message.channel.guild) return;
            if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            message.delete()
        return message.reply(`** ممنوع نشر روابط بهل سيرفر!!! :angry: !**`)
        }
    }
    });



    
    client.on('message', message => {
        if(message.content.includes('http://')){
			if(!message.channel.guild) return;
            if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            message.delete()
        return message.reply(`** ممنوع نشر روابط بهل سيرفر!!! :angry: !**`)
        }
    }
    });

    
    client.on('message', message => {
        if(message.content.includes('https://')){
			if(!message.channel.guild) return;
            if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            message.delete()
        return message.reply(`** ممنوع نشر روابط بهل سيرفر!!! :angry: !**`)
        }
    }
    });



    
    client.on('message', message => {
        if(message.content.includes('.net')){
			if(!message.channel.guild) return;
            if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            message.delete()
        return message.reply(`** ممنوع نشر روابط بهل سيرفر!!! :angry: !**`)
        }
    }
    });






    client.on('message', message => {
        if(message.content.includes('.com')){
			if(!message.channel.guild) return;
            if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            message.delete()
        return message.reply(`** ممنوع نشر روابط بهل سيرفر!!! :angry: !**`)
        }
    }
    });





    
    client.on('message', message => {
        if(message.content.includes('.com')){
			if(!message.channel.guild) return;
            if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            message.delete()
        return message.reply(`** ممنوع نشر روابط بهل سيرفر!!! :angry: !**`)
        }
    }
    });


    
    client.on('message', message => {
        if(message.content.includes('.de')){
			if(!message.channel.guild) return;
            if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            message.delete()
        return message.reply(`** ممنوع نشر روابط بهل سيرفر!!! :angry: !**`)
        }
    }
    });





    
    client.on('message', message => {
        if(message.content.includes('aternos')){
			if(!message.channel.guild) return;
            if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            message.delete()
        return message.reply(`** ممنوع نشر روابط بهل سيرفر!!! :angry: !**`)
        }
    }
    });




    
    client.on('message', message => {
        if(message.content.includes('.pro')){
			if(!message.channel.guild) return;
            if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            message.delete()
        return message.reply(`** ممنوع نشر روابط بهل سيرفر!!! :angry: !**`)
        }
    }
    });




	
	
	
	
	
	
	









   






	
	
	
	    client.on('guildMemberRemove', member => {
        let channel = member.guild.channels.find('name', 'welcome');
        let memberavatar = member.user.avatarURL
          if (!channel) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(memberavatar)
			.addField('طلع من السيرفر',`${member}`)
       
          channel.sendEmbed(embed);
        });
	
	
	
	
	



    client.on('guildMemberAdd', member => {
        let channel = member.guild.channels.find('name', 'welcome');
        let memberavatar = member.user.avatarURL
          if (!channel) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(memberavatar)
            .addField('•🔰|Name» الإسم',`${member}`)
            .addField('•🌹|Welcome » نورت السيرفر' , `Welcome to the server, ${member}`)
            .addField('•🆔| User » اي دي العضو', "**[" + `${member.id}` + "]**" )
                    .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)                     
                                         .addField('•🔮|Server Name » اسم السيرفر', `${member.guild.name}`,true)
        .addField('•🕣|Time Create » مدة انشاء حسابك', member.user.createdAt.toLocaleString(), true)
       
          channel.sendEmbed(embed);
        });



        client.on('message', message => {
            if (message.content === "R!wlcchat") {
                if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return message.reply('** You Dont Have** ``ADMINISTRATOR`` **Permission**')
                if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return message.reply('** I Dont Have** ``ADMINISTRATOR` **Permission**')
                  client.guilds.forEach(m =>{
m.createChannel('welcome', 'text');





message.channel.send('تم انشاء الروم بنجاح :)');



})
}
 
});




client.on('message', message => {
    if (message.content == prefix + "ask") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
		var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
        })
        })
    }
})






























client.on('message', message => {
var prefix = "R!";
       if(message.content === prefix + "hide") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(' :x: **You Dont have `ADMINISTRATOR` Permission**');
              message.channel.overwritePermissions(message.guild.id, {
            READ_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم احفاء الشات__ ✅ **")
              });
                }

    if(message.content === prefix + "show") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x: **You Dont have `ADMINISTRATOR` Permission**');
              message.channel.overwritePermissions(message.guild.id, {
            READ_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم اضهار الشات__✅**")
              });
    }
       
});















client.on('message', message => {
    if(message.content == (prefix + "mb")) {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });
  
  
  client.on("message", (message) => {
if (message.content.startsWith(prefix + "ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});

/*روم صوتي*/

client.on("message", (message) => {
if (message.content.startsWith(prefix + "cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});







client.on('message', message => {
	var prefix = "R!"
             if (!message.channel.guild) return;
      if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  
  if (command === 'invites') {
    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    return message.reply(`**
	${inviteCount} لقدر دعيت 
	عضو موجودين بسيرفر ${member.guild.memberCount}**`)

});
}});










        client.on('message', message => {
            if (message.content === prefix + "help") {
            let embed = new Discord.RichEmbed()
       .setThumbnail(message.author.avatarURL)
       .addField('     **Bot Created By** `IxRawan`', 'IxRawan ID: 516307527806484490')
       .addField('     **R!clear** ' ,' ``مسح الشات`` ')
       .addField('     **R!bc <message>**  ' ,' ``نشر رساله للأعضاء`` ')
       .addField('     **R!server**  ' ,' ``معلومات السرفر`` ')
       .addField('     **R!id**  ' ,' ``لعرض معلوماتك`` ')
       .addField('     **R!avatar <MentionUser>**  ' ,' ``لعرض صورة البروفايل خاصتك`` ')
       .addField('     **R!ping **  ' ,' ``لمعرفة سرعة اتصال البوت`` ')
       .addField('     **R!hide **  ' ,' ``لاخفاء الروم``')
       .addField('     **R!show **  ' ,' ``لأضهار الروم`` ')
       .addField('     **R!wlcchat **','``منشان كل مايدخل حتا تجي رسالة بهل روم رسالة ولكم welcome لعمل روم بأسم`` ')
       .addField('     **R!ask**', '``البوت يسئلك اسئلة وانت لازم تجاوب``')
	   .addField('     **R!ct <channelName>**', '``يسويلك روم كتابي ``')
	   .addField('     **R!cv <channelName>**', '``يوسيلك روم صوتي``')
	   .addField('     **R!image**', '``يبعتلك صورة السيرفر``')
	   .addField('     **R!صراحة**', '``لعبة صراحة``')
	   .addField('     **R!لو خيروك**', '``لعبة لو خيروك`')
	   .addField('     **R!كت تويت**', '``لعبة كت تويت``')
	   .addField('     **R!bans**', '``لمعرفة كم شخص مطرود من السيرفر``')
	   
       .setColor('RANDOM')
         message.author.sendEmbed(embed);
           }
       });




const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
   if (message.content.startsWith(prefix + "كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});























client.on('message', message => {
    if(message.content == 'R!bans'){
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
               message.channel.send('\`#\` <@'+ user.tag + '>');
            });
        });
    }
});
  


 
client.on('ready', () => { //playing
    client.user.setGame(`R!help|By IxRawan	`,'https://twitch.tv/RedFoxYT');
    client.user.setStatus('Online')
});
 











const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
   client.on('message', message => {
 if (message.content.startsWith(prefix + "صراحة")) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});



var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
    }
});




















client.login('NTMxNDY1NTA4NTAzOTQ1MjI2.DxUHyQ.0olAJtuy79a80PzNIjOezRY7XZw');
