const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'ZEROTWO=cjN3nbbK#g7RW0tHB_gv30MP54SNBzAQ_WWU9KDPlq5Bc4Km8dHE',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://chariya_x5gi_user:owdt1CitQZSgcB67D5wsUlpSwuOaiijc@dpg-ck8s8tfsasqs738sajtg-a.frankfurt-postgres.render.com/chariya_x5gi',
LANG: process.env.BOT_LANG || 'EN' ,
ANTI_BAD: process.env.ANTI_BAD || 'false',
MAX_SIZE: process.env.MAX_SIZE || 200,
ONLY_GROUP: process.env.ONLY_GROUP || 'false',
ANTI_LINK: process.env.ANTI_LINK || 'false' ,
ANTI_BOT: process.env.ANTI_BOT || 'false',
ALIVE: process.env.ALIVE || `default`,
FOOTER: process.env.FOOTER ||  '©𝚉𝙴𝚁𝙾-𝚃𝚆𝙾 𝙼𝙳',
LOGO: process.env.LOGO || `https://github.com/vihangayt0/ZeroTwo-Uploads/blob/main/ZERO-TWO.png?raw=true` 
};
