const config = require('../config')
let fs = require('fs')
const os = require("os")
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "ping2",
    react: "🤖",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping2',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '*_ZINDA HUU...🚀_*'  }, { quoted: mek } )
var final = new Date().getTime();
await conn.sendMessage(from, { edit: ping.key })
return await conn.sendMessage(from , { text: '*_🔥SILENT-SOBX-MD SPEED:_*\n *' + (final - inital) + ' ms* ',
                              contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363189714152560@newsletter',
                    newsletterName: "sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in ping command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});

cmd({
    pattern: "ping",
    alias: ["🚀","pong"],use: '.ping',
    desc: "Check bot's response time.",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, quoted, sender, reply }) => {
    try {
        const start = new Date().getTime();

        const reactionEmojis = ['🔥', '⚡', '🚀', '💨', '🎯', '🎉', '🌟', '💥', '🕐', '🔹'];
        const textEmojis = ['💎', '🏆', '⚡️', '🚀', '🎶', '🌠', '🌀', '🔱', '🛡️', '✨'];

        const reactionEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
        let textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];

        // Ensure reaction and text emojis are different
        while (textEmoji === reactionEmoji) {
            textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];
        }

        // Send reaction using conn.sendMessage()
        await conn.sendMessage(from, {
            react: { text: textEmoji, key: mek.key }
        });

        const end = new Date().getTime();
        const responseTime = (end - start) / 1000;

        const text = `> *_↻SILENT-SOBX-MD SPEED: ${responseTime.toFixed(2)}ms ${reactionEmoji}_*`;

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: ['923096287432@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363189714152560@newsletter',
                    newsletterName: "DARK-SILENCE-MD",
                    serverMessageId: 999
                },
                externalAdReply: {
                    title: 'DARK-SILENCE-MD',
                    body: 'DARK-SILENCE-MD',
                    mediaType: 1,
                    sourceUrl: "https://github.com/DARKSILENCE04/DARK-SILENCE-MD",
                    thumbnailUrl: 'https://telegra.ph/file/2a06381b260c3f096a612.jpg', // This should match the image URL provided above
                    renderLargerThumbnail: false,
                    showAdAttribution: true
                }
            }
     }, {quoted: mek});
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
