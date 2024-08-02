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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_30_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjksXG4gICAgICAgIDEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDYwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMjEsXG4gICAgICAgIDc4LFxuICAgICAgICA5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDE1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLWWh0aU5EaFE0QW54eHdVVnJ4OFBBTTI1UEdvVXA0bWwra0s3ZDBFcnp3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjg2MDMxODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjkwMEY4MzA5RjFBOUM0NzQwRjRDM0U5QTY3NjgxMzQ1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjU2MjIzNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjg2MDMxODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNDMENDMzY2MjU2QzkxRTVCREUyMjFBMTlBNEEzOTIyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjU2MjIzNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVQW9nQ1pMVFRMNjZudXB2eGt3T3VRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM1YWM3YTM1LTc4Y2UtNDYwNy04YTc5LTBjMzk4YTE4YzNkYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5LFxuICAgICAgMjI1LFxuICAgICAgOCxcbiAgICAgIDE3OSxcbiAgICAgIDc4LFxuICAgICAgMTYyLFxuICAgICAgODgsXG4gICAgICAyNyxcbiAgICAgIDE4MyxcbiAgICAgIDk0LFxuICAgICAgMjA3LFxuICAgICAgODUsXG4gICAgICAyOSxcbiAgICAgIDIxLFxuICAgICAgMzQsXG4gICAgICAxNTIsXG4gICAgICAxMzUsXG4gICAgICAxMTAsXG4gICAgICA3NSxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMSxcbiAgICAgIDE4MyxcbiAgICAgIDc5LFxuICAgICAgMTM4LFxuICAgICAgOCxcbiAgICAgIDQ0LFxuICAgICAgMTYxLFxuICAgICAgMTA1LFxuICAgICAgNDUsXG4gICAgICA0NyxcbiAgICAgIDQ4LFxuICAgICAgMTYxLFxuICAgICAgODIsXG4gICAgICAyNixcbiAgICAgIDM5LFxuICAgICAgMjA4LFxuICAgICAgMTU5LFxuICAgICAgMjQ5LFxuICAgICAgNzEsXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjRMVFRFWkdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjg2MDMxODU6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MDcwNzE1NTE4OTk2OjE1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk/Nr82vcM2vza96za/Nr3nNr82vbc2vza9vza/Nr27Nr82vZc2vza90XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3I0emFrQkVMUHRzTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxUWdPWlF2UUxvUWJMQW5ZZW0rZFV2RGhxa2I4RlFwZWV1NUd5K2JYN1djPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlQ1cTE4MEo1eThHU1FINnptUkh5aDVMV2hzSU52b2taaElJcDBVb1BRUE10S0JCUE82RGVoQjBJMXVUaG1MTEQrQ2Z3VGlaTGJSMmhTeVhpV2RxOEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtrNDBQM1JuRGJmSDZKdElEa0d1U3E0cWpqKzl4S2Z6NzF3QWlOenhnZ0c4eTdXZy8zVjUrZHhKbmJuUzdmUHBTZHNGTmY2V3FHSEVXY1VKWXFSdWp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjg2MDMxODU6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1NjIyMzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLZENcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtkQy5qc29uIjogIntcImtleURhdGFcIjpcIkNsQjZGK3N6eE9vRkxCTk5PUFlZTEVrR053a2FjSVQ0eWR6ekFWTlhYZlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzU1Njk1NjU4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI1NjIyMzU2ODNcIn0iCn0="  // PUT your SESSION_ID 


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
