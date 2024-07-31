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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_37_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDczLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTgsXG4gICAgICAgIDU0LFxuICAgICAgICA1NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDY2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDQzLFxuICAgICAgICA0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMyLFxuICAgICAgICA1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxLFxuICAgICAgICAxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM1LFxuICAgICAgICA0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NixcbiAgICAgICAgNjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgMjI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgODMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICA1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2ekNaSEpGeHlxTGszVktpZkhLTTZ2R0hKRkNUVllMN1NBNFlWOS9lVWNjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjg2MDMxODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEwQTAxQjVFNTQwNUExMjQxMTdBQzk0NjQ0OTc0MjkxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjQ1NDYyNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEd2xwc3NpaFN3U3B0M3lyR1dsTTlRXCIsXG4gIFwicGhvbmVJZFwiOiBcImZjNTY0MmMyLTZkMTEtNDczMS1hYzhkLWY4YzM0ZmEzNjU1NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MyxcbiAgICAgIDE3NCxcbiAgICAgIDExOSxcbiAgICAgIDExNCxcbiAgICAgIDE2NSxcbiAgICAgIDg3LFxuICAgICAgMTk2LFxuICAgICAgMTkzLFxuICAgICAgMjUzLFxuICAgICAgMTc4LFxuICAgICAgMjksXG4gICAgICAyMzEsXG4gICAgICAyMTcsXG4gICAgICAxOTYsXG4gICAgICA5NyxcbiAgICAgIDE4MixcbiAgICAgIDEzNSxcbiAgICAgIDE0OSxcbiAgICAgIDMyLFxuICAgICAgMjEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOSxcbiAgICAgIDcsXG4gICAgICA0MixcbiAgICAgIDg4LFxuICAgICAgMjI2LFxuICAgICAgNDYsXG4gICAgICAyMzAsXG4gICAgICAyNDksXG4gICAgICAxOTQsXG4gICAgICAyMDQsXG4gICAgICAyMjUsXG4gICAgICAxOCxcbiAgICAgIDE3MixcbiAgICAgIDIzNixcbiAgICAgIDI2LFxuICAgICAgMTIsXG4gICAgICA4NyxcbiAgICAgIDE4MCxcbiAgICAgIDEwMixcbiAgICAgIDI0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBUlpaUjQ2MlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyODYwMzE4NTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDA3MDcxNTUxODk5Njo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tQNHpha0JFTm1rcXJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMVFnT1pRdlFMb1FiTEFuWWVtK2RVdkRocWtiOEZRcGVldTVHeStiWDdXYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJZWZuQlROZExLTE1McEZaRkx4clNrS0hMUjVMWmpEbTBpSnFxamdLS1E3Z01QOWJSc255Wm1kWmd1alp0c1NvNU5GamhFN1k4ejJoNTNvMmVnT3REZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3a0FUbFM5clFacE1nV1FGRFgvQ1ZzZmdhSHArcnJOQk80Vm9xdUtGNmZTSTI1YTFQdWxLeGpabUtDbm0rWHhXc1E4T1Z0MHRwZDFBNVQ1ZUJYU3pEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDI4NjAzMTg1OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0NTQ2MjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIa2xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhrbC5qc29uIjogIntcImtleURhdGFcIjpcIm5MakpNeGpwREc4c2xDLy9PNHhlZWRQMlg1MEpzeThXMmdSclZIZWZ2Nmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzU1Njk1NjQ3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIyMzcyMTE5MzI0XCJ9Igp9"  // PUT your SESSION_ID 


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
