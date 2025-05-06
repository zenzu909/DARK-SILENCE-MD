const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')
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
}, async (_0x2d5080, _0x1a71cf, _0x56f5c6, {
  from: _0x289080,
  quoted: _0x3ef4cf,
  body: _0x1b04e4,
  isCmd: _0x1eed9f,
  command: _0x14aa3d,
  args: _0x104c1c,
  q: _0x4905ab,
  isGroup: _0x5313d0,
  sender: _0x4796d0,
  senderNumber: _0x3a68fa,
  pushname: _0x1279c5,
  reply: _0x10d146
}) => {
  try {
    const thumbnailUrl = "https://i.ibb.co/SNvbJvY/Manul-Ofc-X.jpg"; // لینک تصویر منو
    const menuText = `*🎡[• SILENT-SOBX-MD •]🎡*\n\n*HELLO ${_0x1279c5 || "User"}* 👋🏻\n\n> *[• ʜᴇʀᴇ ɪs ʏᴏᴜʀ ᴍᴇɴᴜ •]*`;

    const imageMessage = await generateWAMessageContent(
      { image: { url: thumbnailUrl } },
      { upload: _0x2d5080.waUploadToServer }
    );

    let card = {
      header: {
        imageMessage: imageMessage.imageMessage,
        hasMediaAttachment: true,
      },
      body: { text: menuText },
      nativeFlowMessage: {
        buttons: [
          { name: "quick_reply", buttonParamsJson: `{"display_text":"ALQURAN MENU","id": ".quranmenu"}` },
          { name: "quick_reply", buttonParamsJson: `{"display_text":"OWNER MENU","id": ".ownermenu"}` },
          { name: "quick_reply", buttonParamsJson: `{"display_text":"DOWNLOAD MENU","id": ".dlmenu"}` },
          { name: "quick_reply", buttonParamsJson: `{"display_text":"GROUPS MENU ","id": ".groupmenu"}` },
          { name: "quick_reply", buttonParamsJson: `{"display_text":"INFO MENU","id": ".infomenu"}` },
          { name: "quick_reply", buttonParamsJson: `{"display_text":"RANDOM MENU","id": ".randommenu"}` },
          { name: "quick_reply", buttonParamsJson: `{"display_text":"CONVERT MENU","id": ".convertmenu"}` },
          { name: "quick_reply", buttonParamsJson: `{"display_text":"AI-CMD MENU","id": ".aimenu"}` },
          { name: "quick_reply", buttonParamsJson: `{"display_text":"WALLPAPERS MENU","id": ". walppapermenu"}` },
          { name: "quick_reply", buttonParamsJson: `{"display_text":"OTHER MENU","id": ".othermenu"}` },
        ],
      },
    };

    const messageContent = generateWAMessageFromContent(
      _0x56f5c6.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: { text: "*`( SILENT-SOBX-MD MENU OPTIONS )`*" },
              carouselMessage: {
                cards: [card],
                messageVersion: 0x1,
              },
            },
          },
        },
      },
      {}
    );

    await _0x2d5080.relayMessage(
      _0x56f5c6.chat,
      messageContent.message,
      { messageId: messageContent.key.id }
    );
  } catch (error) {
    console.error(error);
    _0x10d146(`Error: ${error.message}`);
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
  'fromMe': true, 
  'desc': "Quran menu", 
  'category': "menu", 
}, async (_0x2d5080, _0x1a71cf, _0x56f5c6, { from: _0x289080, quoted: _0x3ef4cf, body: _0x1b04e4, isCmd: _0x1eed9f, command: _0x14aa3d, args: _0x104c1c, q: _0x4905ab, isGroup: _0x5313d0, sender: _0x4796d0, senderNumber: _0x3a68fa, pushname: _0x1279c5, reply: _0x10d146 }) => { 
  try { 
    const messageContent = generateWAMessageFromContent( 
      _0x56f5c6.chat, 
      { 
        text: des 
      }, 
      {} 
    ); 
    await _0x2d5080.relayMessage( 
      _0x56f5c6.chat, 
      messageContent.message, 
      { 
        messageId: messageContent.key.id 
      } 
    ); 
  } catch (error) { 
    console.error(error); 
  } 
});
