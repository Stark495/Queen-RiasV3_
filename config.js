const fs = require("fs");
require("dotenv").config();

let config = {
    prefix: process.env.PREFIX || "☆",
    ownerName: process.env.OWNER_NAME || "Stark⚡",
    ownerNumber: process.env.OWNER_NUMBER || "237654765115",
    mode: process.env.MODE || "private",
    region: process.env.REGION || "Cameroon",
    botName: process.env.BOT_NAME || "ULTRON👾",
    exifPack: process.env.EXIF_PACK || "ULTRON👾",
    exifAuthor: process.env.EXIF_AUTHOR || "𝑴𝒂𝒅𝒆 𝑩𝒚 STARK⚡",
    timeZone: process.env.TIME_ZONE || "Africa/Douala",
    presenceStatus: process.env.PRESENCE_STATUS || "unavailable",
    autoRead: process.env.AUTO_READ?.toLowerCase() === "true" || false,
    autoViewStatus: process.env.AUTO_VIEW_STATUS?.toLowerCase() === "true" || false,
    autoReact: process.env.AUTO_REACT?.toLowerCase() === "true" || false,
    sessionId: process.env.SESSION_ID || "https://session-toxxictech.zone.id/download-session?id=d6UC",
    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED?.toLowerCase() === "true" || false,
    antiDelete: process.env.ANTIDELETE?.toLowerCase() === "true" || false,
    sessionSite: process.env.SESSION_SITE || 'https://session-toxxictech.zone.id/download-session?id=RK54',    
    menuType: process.env.MENU_TYPE || 2  // 1 = Image, 2 = Video
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`🔥 Update detected in '${__filename}', reloading Rias Gremory's config...`);
    delete require.cache[file];
    config = require(file);
});

module.exports = config;
