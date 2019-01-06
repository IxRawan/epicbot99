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
            if (message.content === prefix + "help") {
            let embed = new Discord.RichEmbed()
       .setThumbnail(message.author.avatarURL)
       .addField('     **Bot Created By** `client_`', 'client ID: 516307527806484490')
       .addField('     **R!clear** ' ,' ``مسح الشات`` ')
       .addField('     **R!bc**  ' ,' ``نشر رساله للأعضاء`` ')
       .addField('     **R!server**  ' ,' ``معلومات السرفر`` ')
       .addField('     **R!id**  ' ,' ``لعرض معلوماتك`` ')
       .addField('     **R!avatar**  ' ,' ``لعرض صورة البروفايل خاصتك`` ')
       .addField('     **R!ping **  ' ,' ``لمعرفة سرعة اتصال البوت`` ')
       .addField('     **R!hide **  ' ,' ``لاخفاء الروم``')
       .addField('     **R!show **  ' ,' ``لأضهار الروم`` ')
       .addField('     **R!wlcchat **','``منشان كل مايدخل حتا تجي رسالة بهل روم رسالة ولكم welcome لعمل روم بأسم`` ')
       .addField('     **R!ask', '``البوت يسئلك اسئلة وانت لازم تجاوب``')
       
       .setColor('RANDOM')
         message.author.sendEmbed(embed);
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




	
	
	
	
	
	
	
	
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   client.user.setActivity("R!help|By client",{type: 'WATCHING'})
   
});









   






      
    client.on('message', message => {
        if(message.content.includes('https :')){
            if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            message.delete()
        return message.reply(`** ممنوع السب :angry: !**`)
        }
    }
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


































































































client.login(process.env.BOT_TOKEN);
