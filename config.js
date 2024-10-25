const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_20_40_10_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDY4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDY0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDYzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg0LFxuICAgICAgICA2MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc1LFxuICAgICAgICAzMixcbiAgICAgICAgMTk5LFxuICAgICAgICA3NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDkyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkxLFxuICAgICAgICA4NSxcbiAgICAgICAgOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDYwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDkyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMyLFxuICAgICAgICA0NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDQwLFxuICAgICAgICA3MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQzLFxuICAgICAgICA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIktRUGNVQVhna09WMWVnc0QwaG5wUGlXdFlKMnFDdlFQL3pKWThPUUhuZHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhldUExeURzUWNTaFA1aEJKRi1nOFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTUyYzk5NzAtNmNlNy00OTJkLWE3YWEtNzE4YTZmZTMyY2I5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MixcbiAgICAgIDczLFxuICAgICAgNzYsXG4gICAgICAxOTksXG4gICAgICAxOTQsXG4gICAgICAyMixcbiAgICAgIDI1LFxuICAgICAgODEsXG4gICAgICAxNTIsXG4gICAgICAxNDcsXG4gICAgICAyMTIsXG4gICAgICAzOCxcbiAgICAgIDE0NCxcbiAgICAgIDk4LFxuICAgICAgMTYzLFxuICAgICAgOTAsXG4gICAgICAxNjUsXG4gICAgICAxNzgsXG4gICAgICAxNDgsXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDIyLFxuICAgICAgNzksXG4gICAgICAxNzgsXG4gICAgICAxNTEsXG4gICAgICA0NixcbiAgICAgIDIyNCxcbiAgICAgIDcxLFxuICAgICAgMzUsXG4gICAgICAxMTUsXG4gICAgICAxMDcsXG4gICAgICAxNjAsXG4gICAgICA1MyxcbiAgICAgIDE3MyxcbiAgICAgIDc5LFxuICAgICAgNDIsXG4gICAgICAyMjcsXG4gICAgICA5MSxcbiAgICAgIDE5MyxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjI4MjFOVFFCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcxMjcwMzUxODo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdl55cXG5cXG5cXG5cXG5cXG7wnZecXFxuXFxuXFxuXFxuXFxu8J2XoVxcblxcblxcblxcblxcbvCdl5pcXG5cXG5cXG7lvaEgXFxuXFxuXFxu8J2XoVxcblxcblxcblxcblxcbvCdl5RcXG5cXG5cXG5cXG5cXG7wnZepXFxuXFxuXFxuXFxuXFxu8J2XmFxcblxcblxcblxcblxcbvCdl5hcXG5cXG5cXG5cXG5cXG7wnZesXFxuXFxuXFxuXFxuXFxu8J2XlFxcblxcblxcblxcblxcbvCThqRcIixcbiAgICBcImxpZFwiOiBcIjE1NTE2OTA4MTgxOTE2Mzo2OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNaXFsN1VERU1PRThMZ0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm45ZTRXNkRDWEVJZE9QVjhVZ3ZSd1VEQTU2TGRIemFOdFRKL1IycUVIUUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRngxamVoN0N4TWN4OCtVWWFTS2RPUUtVOWpjK1pSVy8wMHBnYzF2TTZISHliVjhLNWhhcTJ3K09QNi9zYUVGYUZURjFUTHVseXlyNVp5TGgxZVl0Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWWVJMll1TXgvS3NTeGc0bUFwWjBQYVhGdUtLaDBCMkJoaURTUXBGTG5sRkhhYlFWaXVUd250MmtXZU1xUG0wc2N4Z2NhMTNFcHE1UTE4aE5wZDRHQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTI3MDM1MTg6NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk4ODg4Mzlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
