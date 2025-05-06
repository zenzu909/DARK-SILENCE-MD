const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const {
  generateWAMessageFromContent,
  generateWAMessageContent,
} = require("@whiskeysockets/baileys");

cmd({
  'pattern': "menu4",
  'alias': ["list4"],
  'react': '📜',
  'desc': "Display the main menu",
  'category': "menu",
  'filename': __filename,
}, async (m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, pushname, reply }) => {
  try {
    const thumbnailUrl = "https://i.ibb.co/SNvbJvY/Manul-Ofc-X.jpg"; // لینک تصویر منو
    const menuText = `*🎡[• SILENT-SOBX-MD •]🎡*\n\n*HELLO ${pushname || "User"}* 👋🏻\n\n> *[• ʜᴇʀᴇ ɪs ʏᴏᴜʀ ᴍᴇɴᴜ •]*`;

    const imageMessage = await generateWAMessageContent(
      { image: { url: thumbnailUrl } },
      { upload: m.waUploadToServer }
    );

    let buttons = [
      { buttonId: '.quranmenu', buttonText: { displayText: 'ALQURAN MENU 1' }, type: 1 },
      { buttonId: '.ownermenu', buttonText: { displayText: 'OWNER MENU 2' }, type: 1 },
      { buttonId: '.dlmenu', buttonText: { displayText: 'DOWNLOAD MENU 3' }, type: 1 },
      { buttonId: '.groupmenu', buttonText: { displayText: 'GROUPS MENU' }, type: 1 },
      { buttonId: '.infomenu', buttonText: { displayText: 'INFO MENU' }, type: 1 },
      { buttonId: '.randommenu', buttonText: { displayText: 'RANDOM MENU' }, type: 1 },
      { buttonId: '.convertmenu', buttonText: { displayText: 'CONVERT MENU' }, type: 1 },
      { buttonId: '.aimenu', buttonText: { displayText: 'AI-CMD MENU' }, type: 1 },
      { buttonId: '.walppapermenu', buttonText: { displayText: 'WALLPAPERS MENU' }, type: 1 },
      { buttonId: '.othermenu', buttonText: { displayText: 'OTHER MENU' }, type: 1 },
    ];

    const buttonMessage = {
      image: imageMessage.imageMessage,
      caption: menuText,
      footer: 'SILENT-SOBX-MD',
      buttons: buttons,
      headerType: 4
    };

    await m.sendMessage(from, buttonMessage);

  } catch (error) {
    console.error(error);
    reply(`Error: ${error.message}`);
  }
});

let des = `WELCOME TO QURAN MENU

Here you can find various Quran-related features, including:

* Quran translation
* Quran recitation
* Quran search
* Quran bookmarking

Please select an option from the menu below:
`;

cmd({
  'pattern': ".quranmenu",
  'desc': "Quran menu",
  'category': "menu",
}, async (m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, pushname, reply }) => {
  try {
    await m.reply(des);
  } catch (error) {
    console.error(error);
  }
});
