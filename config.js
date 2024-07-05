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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_48_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEsXG4gICAgICAgIDMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDM5LFxuICAgICAgICA2NSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU1LFxuICAgICAgICA4NixcbiAgICAgICAgMTM0LFxuICAgICAgICA2MixcbiAgICAgICAgMjA4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMwLFxuICAgICAgICA4OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDczLFxuICAgICAgICA3NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NixcbiAgICAgICAgOTgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTczLFxuICAgICAgICA3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU1LFxuICAgICAgICA1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDg2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMixcbiAgICAgICAgNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0LFxuICAgICAgICA4MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMixcbiAgICAgICAgMjUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5iRnJJR21WMGlWbTBiclZhYXcvOTE5eHdJQ1c5N1FHaW0vRytSQmk0MVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0MDIwOTY5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkNCMTg1MTJDMEI2QzRBNTNEODk3NTRCM0MwRjQ2MzRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTgzNzMyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJWZ21wZ29tUnc2S0pvZW1tZ29MTHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODlhYWMwYWQtYWEyYy00MTdkLTk4YWYtY2IxZjU4Zjc0OTNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUzLFxuICAgICAgMTg4LFxuICAgICAgMjI1LFxuICAgICAgMTE0LFxuICAgICAgMTMsXG4gICAgICAxMDUsXG4gICAgICAyNDEsXG4gICAgICAyMTksXG4gICAgICAxMjMsXG4gICAgICAzOSxcbiAgICAgIDI1MSxcbiAgICAgIDIxNCxcbiAgICAgIDIzMCxcbiAgICAgIDE0OCxcbiAgICAgIDEwMyxcbiAgICAgIDE5OCxcbiAgICAgIDI0MyxcbiAgICAgIDgsXG4gICAgICA0MCxcbiAgICAgIDYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNSxcbiAgICAgIDE0NyxcbiAgICAgIDIzNyxcbiAgICAgIDE1NSxcbiAgICAgIDIzNSxcbiAgICAgIDE4MixcbiAgICAgIDE2NCxcbiAgICAgIDE4MyxcbiAgICAgIDE1NCxcbiAgICAgIDIxNixcbiAgICAgIDIyNCxcbiAgICAgIDE2NyxcbiAgICAgIDIxNCxcbiAgICAgIDExOSxcbiAgICAgIDgyLFxuICAgICAgMjQzLFxuICAgICAgNzksXG4gICAgICAxNTMsXG4gICAgICAxOTYsXG4gICAgICAxNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFpCWUIyNjlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDAyMDk2OTM6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLhtLjhtLzhtL/htLDigKLwnZKR8J2SgvCdkpHwnZKR8J2SiidzIOKAouGltOqqtuqqruqqgOqrgFwiLFxuICAgIFwibGlkXCI6IFwiMTY5ODI4MjA4MjcxOTY6MzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWEwc2FZQkVLM1huN1FHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1TlI1aE8rWmxac0gvNi93RWREamZlakpYNmdDTGRqc0habDhmODRSNmxZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjl4QlNFWFpVRG5hUm1nOU5ZbjRiYU94dlJ4VmRJSElzNmVwSWNNRUlRc3pBSkZwZDVCcmJic21jcml0Y0JOc0U4T3ZCRVNlakFVS2VRcllRUEErSkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjV5SmliSWpkVWE1dFhrOVRISTVnalJWUXVmeEV6M2FkM2h6MFJLU2g4cXVkaHpDUTQyQ2VWVzc5eGdXeXNZeFpOQWJpRC9ieHRqZ3hSdVpHaE42akRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDAyMDk2OTM6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE4MzcyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNSQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1JDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM0JQMU04MEt2TmlYOUZIQzUzbmdmRExqRk1pS2pqTXFuQzMwc0F2SkNVST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNDg5MzY3NzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE2NzkyNzQ2NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
