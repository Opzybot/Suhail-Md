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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_46_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3LFxuICAgICAgICA0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTksXG4gICAgICAgIDc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDk5LFxuICAgICAgICA3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg4LFxuICAgICAgICA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcyLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMwLFxuICAgICAgICA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk1LFxuICAgICAgICAyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTExLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlxZTBua0d2T3R4UzJpd25GRWZMMld3bVYvbzd3OElUcFZYWUlCTEpCSXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhSeGZJaXV0VHZtWVpwQ0lYMTVyS2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjViOGJmNzMtYTRkYy00NDUyLWFiYzUtZmY1MzY1ZWRkYWVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDIzNSxcbiAgICAgIDExMSxcbiAgICAgIDIyOSxcbiAgICAgIDQyLFxuICAgICAgNjEsXG4gICAgICA2NixcbiAgICAgIDE4NyxcbiAgICAgIDQ3LFxuICAgICAgMjE5LFxuICAgICAgMjQwLFxuICAgICAgMTQ4LFxuICAgICAgNjUsXG4gICAgICAyMzAsXG4gICAgICAxMzYsXG4gICAgICAxMTEsXG4gICAgICAxMjUsXG4gICAgICAxNDUsXG4gICAgICAxNTEsXG4gICAgICAxNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAxMTgsXG4gICAgICA2LFxuICAgICAgNjksXG4gICAgICAxMyxcbiAgICAgIDU2LFxuICAgICAgODIsXG4gICAgICAxMzAsXG4gICAgICA1MSxcbiAgICAgIDE3MixcbiAgICAgIDc1LFxuICAgICAgNCxcbiAgICAgIDEzMSxcbiAgICAgIDY0LFxuICAgICAgMTI1LFxuICAgICAgMTMxLFxuICAgICAgNjcsXG4gICAgICAxNTMsXG4gICAgICAyMjIsXG4gICAgICAyNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkxERlY5NExcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjg2MDMxODU6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQwNzA3MTU1MTg5OTY6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLTDR6YWtCRU9XTXFyVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFRZ09aUXZRTG9RYkxBblllbStkVXZEaHFrYjhGUXBlZXU1R3krYlg3V2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieFZ3cnRCc1dxb0JRYWhkVmV6TncxajJMM3Y1akNhM2pIM2ZRdDJsOEhJUzZ2VW1nK213NHZuMGozRHdYME83by8xSFZzYlM4Um1tdE9iQldiV0pqQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSkxFRnkxa1JSSU5zUXBZd013QmMvaGM5R2lhdnN2SVVWYzRZUWdpQVNCTitjZWFwVU5tWGVCQ2xIeTRtNmNQWjE5QXhUUG9odXZUckxLQjJta1VZZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyODYwMzE4NTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDUxNTYyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSGtsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIa2wuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuTGpKTXhqcERHOHNsQy8vTzR4ZWVkUDJYNTBKc3k4VzJnUnJWSGVmdjZnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM1NTY5NTY0NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjM3MjExOTMyNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
