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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348169645404";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_45_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0LFxuICAgICAgICA1OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDk3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MyxcbiAgICAgICAgNixcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMyxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDcyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDk3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDYxLFxuICAgICAgICA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcyLFxuICAgICAgICA5NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk5LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg1LFxuICAgICAgICA2NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgODYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDgzLFxuICAgICAgICAzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3LFxuICAgICAgICA0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5acUdGTVJkUVVIMHdGQzFha1MzMDNyY3BneEtjRDcyclF4U2RIRFhIVWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2OTY0NTQwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0M3RDNBQkIzNDk1Q0E4NzMxMzk2MEFFMjYyRTVBOTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTY1NTMzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkQwOXVXcjdlU1FPenBZRklIeExtcHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmFmYWY4ODEtNmNkMC00YTYwLWFkMTgtMjA0ZTdhNjU3ZDdiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMsXG4gICAgICA5NixcbiAgICAgIDU5LFxuICAgICAgMjgsXG4gICAgICAyNixcbiAgICAgIDUsXG4gICAgICAyNDcsXG4gICAgICAyMyxcbiAgICAgIDE0OCxcbiAgICAgIDE5NSxcbiAgICAgIDU4LFxuICAgICAgMTgwLFxuICAgICAgMjA5LFxuICAgICAgMTg0LFxuICAgICAgMzIsXG4gICAgICAxMjIsXG4gICAgICAxNjUsXG4gICAgICAxMzAsXG4gICAgICAxNDYsXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NCxcbiAgICAgIDU4LFxuICAgICAgMjUxLFxuICAgICAgMTgwLFxuICAgICAgMjA5LFxuICAgICAgNDAsXG4gICAgICAxNzQsXG4gICAgICAxNjcsXG4gICAgICAyMSxcbiAgICAgIDE2NyxcbiAgICAgIDkzLFxuICAgICAgMTY4LFxuICAgICAgMTQwLFxuICAgICAgMjM3LFxuICAgICAgMTI1LFxuICAgICAgNDksXG4gICAgICAxMzcsXG4gICAgICAxMzcsXG4gICAgICAxOTksXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMUDNaWUE3U1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2OTY0NTQwNDoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE1OTY4NTcxNzQwMzYxOjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01ENXFXZ1FsTW1ldEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHhEaFZXN2s0cmZMRjVPZG5UcHNDYW4wUzI0bXpHbysvRzZrVnNwcTdoND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlRk5hZUNOeXBYbUFxYWw2TDRtYlVETUhFVEJhTUxvTXVtYUVmc3U1Z2JqVGtJUFJnYk1Pcmk1S2IwTXU2dlllVWROSWt6SzZ5Y2NTL0t1N09Wc3dCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMQmM2TWR5N1paR2I0SE1ZL05lUjFRK0dsTFVodEh1dVlNd0NVbERFaUgzR0tYVXRqR1hFMnZRKzBCNXJDU2V3bVl0bDFQN291b3h1ajEyMTliWjBEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY5NjQ1NDA0OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE2NTUyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZCUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkJQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUThhZ2tsMUhHT0d4czlJb1lsME8vNWdzMFNEYlFCZEI3OE5mUUhWd0kydz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTg3OTExMDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE2NTUzMDkwOFwifSIKfQ=="  // PUT your SESSION_ID 


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
