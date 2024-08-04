const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349028603185";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_40_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDk0LFxuICAgICAgICA0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDg1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI0LFxuICAgICAgICA1NixcbiAgICAgICAgMSxcbiAgICAgICAgMSxcbiAgICAgICAgMjExLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNixcbiAgICAgICAgMjMyLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3LFxuICAgICAgICA3NixcbiAgICAgICAgMTE0LFxuICAgICAgICA5NixcbiAgICAgICAgODUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzOCxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI2LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk2LFxuICAgICAgICA4NSxcbiAgICAgICAgMzksXG4gICAgICAgIDczLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNixcbiAgICAgICAgMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MixcbiAgICAgICAgMTkwLFxuICAgICAgICA3NixcbiAgICAgICAgMTExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODksXG4gICAgICAgIDU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInYxQVpSUWRrRldsTFM3R3Ztd25VUG8yRjBzcGhiaGpySU5hVlBzSFVmVEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1TaUJpcVdWUVJXMHIxX2E5RUt5Q1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzBiMTlkOWMtNGRmNS00MWUwLTgyNjEtMDMyZWE5ZmQyNTEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDQsXG4gICAgICAyOCxcbiAgICAgIDg3LFxuICAgICAgNjQsXG4gICAgICAyMDgsXG4gICAgICAyMjMsXG4gICAgICAyMjcsXG4gICAgICAxMTUsXG4gICAgICAyMTgsXG4gICAgICAyNTAsXG4gICAgICA4MSxcbiAgICAgIDQwLFxuICAgICAgMjUsXG4gICAgICAxNDQsXG4gICAgICAxOTQsXG4gICAgICAyLFxuICAgICAgMTUwLFxuICAgICAgMjU1LFxuICAgICAgMTM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NyxcbiAgICAgIDE4MyxcbiAgICAgIDI0NSxcbiAgICAgIDE0NCxcbiAgICAgIDE3NyxcbiAgICAgIDEzOCxcbiAgICAgIDk4LFxuICAgICAgMTk1LFxuICAgICAgOSxcbiAgICAgIDk4LFxuICAgICAgMjUwLFxuICAgICAgMTYsXG4gICAgICAxMTEsXG4gICAgICA2NSxcbiAgICAgIDIxNixcbiAgICAgIDE2MSxcbiAgICAgIDIxOCxcbiAgICAgIDEyMSxcbiAgICAgIDE1NixcbiAgICAgIDU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpUM1gxNkM1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDI4NjAzMTg1OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDA3MDcxNTUxODk5NjoyNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMUDR6YWtCRUszcXY3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFRZ09aUXZRTG9RYkxBblllbStkVXZEaHFrYjhGUXBlZXU1R3krYlg3V2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU2lLcmxDSVE3VFAyODJsbVlZS0ZYOHpVS2QzSjlJcnZtQXhMZXBHcWNNMS95b1VhV2hPSGdjNHcxSWVrNG85b201b1kzTDhNRzN5bUFXQnpsVXAyQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieUNMcW5JSm9POUpDSzJnOXowTWtKK0dhMFpjSHoxajFUd3VnY1ZTN0hRUmpNMWN3b0dvUlBxMzVjamRaSzNNSTlEVmw0b3FCUGVLTEdacnpPMVJGRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyODYwMzE4NToyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjgwNzYwMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBTTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFNNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVHIrMXRCNGZnTzExalZ0QTNoRGZLU2hjTE5SaEl0YWdRcjJGVFZBaU42WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNTU2OTU2NjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI3OTU0NDgwMzJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Oͯͯpͯͯzͯͯyͯͯmͯͯoͯͯnͯͯeͯͯtͯ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
