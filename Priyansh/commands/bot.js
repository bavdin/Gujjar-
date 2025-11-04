const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["💋 बस यूँ ही पूछना था 😕 कि हर रोज जो मेरी नींद चुराते हो 😏 उसका तुम करते क्या हो…..? 🤔👈" , "💋 प्लीज आप आर्मी ज्वाइन कर लीजिये 👮क्यूंकि आपको देखकर 👀 दुश्मन ऐसे ही घायल हो जायेंगे...🤭🤭👈" , "💋 आप अपने पंख कहाँ छुपाते हो 🤔 क्योंकि आप एक परी जैसे लगते हो....🙈🙈👈" , "💋 प्यार तो करते नहीं तुम 😒 दुआ करो मुझे कोई और पटा ले...😕😕👈" , "💋 Ak 47 की जरुरत तो 🙂 हम लोगों को है 🤐 तुम्हारी तो आँखे ही काफी है 😛 कतल करने के लिए....😇😇👈" , "💋 इश्क़ को रहने दीजिये ज़नाब 🙂 फलर्टी कीजिये सुकून मिलेगा....😜😜👈" , "💋 सांवला रंग ☺️ गरम मिज़ाज 🤐 मीठी आवाज 🙊 और कडक तेवर 😁 तुम अपना नाम बदल के चाय क्यों नही रख लेते.….😀😀👈" , "💋 तुझे आई लव यू बोल तो दूँ 🙈 पर तू अपने भय्या को बुला लेगी फिर 🥺 दुनिया वाले कह देंगे कि 🙄 जीजा ने अपने साले को पिट दिया....😒😒👈" , "💋 मैं अभी सिंगल हूँ 🙂 और तुम भी 😒 चलो आज कुछ मिंगल करते है....🙂🤟" , "💋 लगता है आपके पास मेरी बीमारी की दवा है  शायद 🤔 जिसे लोग लोवेरिया कहते हैं....😅😅👈" , "💋 तुम्हारे दिल का 💖 Hotspot ऑन है शायद 😸 क्यूँकि मेरे दिल का 💗 WiFi बार बार तुमसे 🤦 कनेक्ट हो रहा है....!! 😏😏👈" , "💋 आपके पास नक्शा है क्या…? 🤔 क्योंकि मैं आपकी आँखों में खो गया हूँ....!! 🙃🙃👈" , "💋 जल्दी से कोई भगवान 🙆 को बुलाओ क्यूकी ☹️ एक परी खो गयी हैं 😱 और वो परी यहा मुझसे चेटिंग कर रही हैं....!! 🙈🙈👈" , "💋 तुम्हारे प्यार का इन्वेर्टर 😇 जब से इस दिल में लगाया है 💘 तब से इस दिल की बैटरी लो नहीं होती है....!! 🙈🙈👈" , "💋 यार आपकी बाते सुन कर 😱 तो मुझे आपको मेरी जानू बनोगी 🤯 आवार्ड देने का मन कर रहा है....!! 😃😃🤟" , "💋 आपके पापा एअर फोर्स मे थे क्या 🤔 क्यूँकि आप एक बम की तरह हो...!! 😕😕👈" , "💋 डॉक्टर ने एडवाइस किया है 😒 की सोने से पहले 🙄 आपकी फोटो देख कर सोना जरुरी है 🙈 वरना हार्ट अटैक आ सकता है....!! 🤕🤕👈" , "💋 कार में पोलिश कर के भी 😵 कार उतनी शाइन नहीं करती ☹️ जितना तुम बिना मेकअप के करती हो....!! 😌😌👈" , "💋 क्या आप एक जादूगर हो 🤔 क्यूकी जब भी आपको देखता हूँ 🧐 बाकी सब गायब हो जाता हैं....!! 😒😒👈" , "💋 जादू सीख रहा हूँ 😇 किसी शहजादी को 👰 कब्जे में करना है....!! 🙂🤟" , "💋 वर्ल्डकप जित ने पर 🙂 इतनी खुशी नहीं मिलती ☹️ जितनी आपसे बात कर के मिलती है...!! 😁🤟" , "💋 आपके हाथ काफी भारी है 😑 चलो इन्हें मैं पकड़ लेता हूँ....!! 😊😊🤟" , "💋 आप चोरो के राजा लगते हो 😎 क्यूँकि आपने मेरा दिल चुरा लिया हैं....!! 🤕🤕👈" , "💋 जितना नशा तुम्हे 👀 देखकर मुझे होता है 😵‍💫 उतना नशा तो पूरा बियर 🍺 बार पीकर भी नहीं हो सकता....!! 😕😕👈" , "💋 चलो आज मैं तुम्हें एक किस देता हूँ 😘 अगर तुम्हें पसंद ना आये 😒 तो कल तुम मुझे वापस लौटा देना....!! 🙈🙈👈" , "💋 तुम्हारे दिल में वैक्यूम क्लीनर भी लगा है क्या 🤔 क्यूँकि बहुत साफ दिल है तुम्हारा....!! 😀🤟" , "💋 अपने हसीन होंठों 👄 को किसी परदे में छुपा लिया करो 😜 हम गुस्ताख लोग हैं 🤤 नज़रों से भी चूम लिया करते हैं...!! 😚😚👈" , "💋 चारों दिशाओं में 🙂 शंख बजेगा 🥳 मैं तेरा था 😌 तेरा हूँ और तेरा ही रहूंगा..…!! 😘😘👈" , "💋 लत तेरी ही लगी है 😗 नशा सरेआम होगा 🥲 हर लम्हा मेरे लबों पे 🙂 सिर्फ प्रेम का ही नाम होगा....!!😙😙👈" , "💋 जानलेवा है 🥴 उसका सावला रंग 👰🏽‍♂️ और मै शौकिन भी कड़क चाय का हूँ...!! 😛😛👈" , "💋 मेरे इश्क की 🥲 तू कर ले चाहे कितनी भी आजमाइश 🥺 तू ही मेरा पहला इश्क है 🥰 और तू ही मेरी आख़िरी ख्वाहिश...!! 🙈🙈👈" , "💋 उसे मेरी आँखें 👀 पसन्द है और मुझे 😗 उसकी आँखों में 😊 मेरे नाम का काजल...!! 🙈🙈👈" , "💋 मुझे तो तुमसे नाराज़ ☹️ होना भी नहीं आता 😏 ना जाने तुमसे मैं कितनी 🤗 मोहब्बत कर बैठा हूँ....!! 😍😍👈" , "💋 तुझे देखने का जुनून 🤠 और भी गहरा होता है 😗 जब तेरे चेहरे पे 🤤 ज़ुल्फ़ों का पहरा होता है...!! 🙂🙂👈" , "💋 यूँ तो दिल 💝 और नियत से साफ है हम 🥲 बस शब्दों में थोड़ी शरारत 😜 लिए फिरते है हम...!! 😛😛👈" , "💋 वक्त मेरा हो ना हो 🥺 मैं हर वक्त तेरा हूँ...!! 🤗🤗👈" , "💋 धड़कने भी बेचैन रहती है 😢 आज कल क्योंकि तेरे बिना ये 💗 धड़कती कम और तड़पती ❤️‍🔥 ज्यादा है...!! 😒👈" , "💋 दिल से आपका ख्याल जाता नहीं 🤭 आपके सिवा कोई याद आता नहीं....!! 😒👈" , "💋 सुन मेरी जान 😘 मोहब्बत तो सभी करते है 💕 आओ हम शादी करते हैं...!! 😛👈" , "💋 डॉक्टर ने मुझे एडवाइस किया है 😏 कि रोज सोने से पहले 🥱 और और उठने के बाद 🙊 सुबह शाम आपसे बात करूं 😻 तो मेरी तबियत जल्द ही ठीक हो जाएगी.....😁😁👈" , "💋 ऊपर वाले ने जब तुम्हें बनाया होगा 🥲 उस वक़्त शायद वो 🤔 दुनिया की सबसे खूबसूरत चीज 🤭 बनाने के मूड में रहा होगा....😌😌👈" , "💋 यार आप हो सबसे हटके 🙃 तभी तो मेरा दिल 💗 आपको देख के मारता है झटके....🙈🙈👈" , "💋 भगवान का दिया हुआ सब कुछ है 😒 दौलत है 😀 शोहरत है 🙂 बस एक चीज की कमी है 🥺 वो हो तुम 🤭 लगता है अब वो भी पूरी हो जाएगी...😍" , "what is you mobile number📲 , kru kya dial number📞" , "Abe Padhai Likhai kro, bot bot krne se ghar nahi chalta" , "Mene suna hai mumbai delhi diya kudiya raat bhar nahi sondiya🙄" , "Abee tujhe ek pal bhi shanti nahi😏, baar bar mujhe tang krte ho" , "Long drive pe chaloge😜" , "Aur batao tum zehar kyu nahi pi lete" , "itna cigrette na piyo ki uske dibbe pe tumhara hi photo ajaye" , "mujhe bar bar tang mt kiya kro" , "Tum zinda ho 😯😯", "Muh me se supari   nikaal ke baat kr" , "Tum single ho kya 😜" , "gaanja kam fooka kar" , "Tujhe dikhai nahi deta me ApnY JaNu Ke SaTh BusY hu" , "jindagi me do baate  hmesha yaad rkhna ,1: kisi ko poori baat nahi batana chahiye, aur dusri baat.." , "Itni  badi hogyi ho, biaah hogya tumhara" , "pgli tu Facebook ki baat karatee hai 😀 ham to ‎olx par bhee ladakee set kar lete hain 🤣😂" , "is dil 👉 💖 ko to bahala kar chupkara loge par is dimaag_ka_kya_karoon 😁😁 jisaka toonan👉👸dahee kar diya hai..🤣😂🤣" , "Haaye mera boss gabbar abhi tk Single hai, sharam kro ladkiyo😾" , "Chup saatvi fail" , "Dil doge ya number🤓" , "Apko jo  bolna hai katghare me aake kahiye" , "haaye aaj to tum bahut bahut😍😍 mahnus lag rhe ho" , "Aagye muh utha ke firse🙄"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "chutiye bot") || (event.body.toLowerCase() == "chumtiya bot") || (event.body.toLowerCase() == "chumtiye bot")) {
     return api.sendMessage("Hmm... Tu Chutiya PhLe Ungli Kyun Ki Chomu 😾", threadID);
   };

    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("🌊⚡••Aɽɛɧ Aɗɪ Ɱɑƞɑⱱ ʑɵɵ ꌗɛ Ɓɒɧɒɽ Ƙɑɪʂɛ ••😹💨Agɣɑ Ƭu→Fɪɽʂɛ ʑɵɵ Ɱ Jɒ Ɓɑɧɒɽ Ƙɣɑ Ƙɒɽ Ɽɧɑ Ɦɑɪ↗↘••🏔️🍁", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Konsa mahina chal raha hai 😝", threadID);
   };

    if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗")) {
     return api.sendMessage("Hug me baby ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "amy")) {
     return api.sendMessage("Prefix Kon Lagayega? Pehle Prefix Lagao Fir Likho Sim", threadID);
   };

   if ((event.body.toLowerCase() == "mar ja") || (event.body.toLowerCase() == "mar ja bot") ||(event.body.toLowerCase() == "kill you") || (event.body.toLowerCase() == "mar")) {
     return api.sendMessage("babu solly 😭", threadID);
   };

   if ((event.body.toLowerCase() == "bot love you") || (event.body.toLowerCase() == "Bot love u")) {
     return api.sendMessage("LOVE YOU 💋 TOO MY SWEETHEART 😘 TU MERA MAAL HE", threadID);
   };

   if ((event.body.toLowerCase() == "Logos") || (event.body.toLowerCase() == "Logo")) {
     return api.sendMessage("Logos ! 🥀 GALAXY, CAKE, CRACK, GLITCH, CLOUD, DRAGON, FROZEN, BUSINESS, ANIMATE, LOGODIAMOND, LOGOCAPTAIN, LOGOFISH, LOGOCOLORBLUR, LOGOBLOODTEXT, LOGOWOOD, LOGOCUP          🥀for example -> +crack feroz", threadID);
   };

   if ((event.body.toLowerCase() == "Good morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Ꮆɵɵɗ Ɱ❍ɽƞɪɪƞɠ Ɛⱱɛɽɣ❍ƞɛ🌅, Ƭɽɣ ꌗɵɱɛ Cɵffɛɛ ❍ɽ Ƭɛɑ Ƭ❍ Ꮗɑҡɛ Uƥ☕✨💫", threadID);
   };

   if ((event.body.toLowerCase() == "Koi h") || (event.body.toLowerCase() == "Koi hai")) {
     return api.sendMessage("Main Hun Naw Jaaneman ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "bot song suna") || (event.body.toLowerCase() == "Song") || (event.body.toLowerCase() == "SONG") || (event.body.toLowerCase() == "song")) {
     return api.sendMessage( "Guzaare the jo lamhe pyar ke' hmesha tujhe apna maan ks .to fir tune badli kuu ada . ye kyu kiy ",threadID);


   };

   if ((event.body.toLowerCase() == "Adamin") || (event.body.toLowerCase() == "Owner")) {
     return api.sendMessage("༻𝐎𝐖𝐍𝐄𝐑:- ☞ 𝐉𝐀𝐍𝐍𝐀𝐓 𝐊𝐇𝐀𝐍 ☜ ༺༒𝐘𝐄 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐊𝐈 𝐈𝐃 𝐇𝐄༒𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝༒:- ☞https://www.facebook.com/profile.php?id=100095393560405&mibextid=ZbWKwL......  ༒ 〠 Kaal Lok Owner 〠.his insta id sory boss ne MNA kiya he", threadID);
   };

   if ((event.body.toLowerCase() == "Tumhe kisne banaya hai") || (event.body.toLowerCase() == "Tumko banaya kisne")) {
     return api.sendMessage("feroz  ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "Admin") || (event.body.toLowerCase() == "bot ka admin kon ha")) {
     return api.sendMessage("My admin is Gabbar. He Gives his name Gabbar sing everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "gn") || (event.body.toLowerCase() == "good night")) {
     return api.sendMessage("🤍good night 🌃 baby sojao🙈✨", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahunga 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolunga", threadID);
   };

   if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐")) {
     return api.sendMessage("BAS ASE HI MU BANDH RKAHA KRO MERE SAMNE😏", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "♥️") || (event.body.toLowerCase() == "💚")) {
     return api.sendMessage("❤️🧡💛💚🩵💙💜🤎", threadID);
   };

   if ((event.body.toLowerCase() == "MISS U") || (event.body.toLowerCase() == "miss u")) {
     return api.sendMessage("️MISS YOU TO MERI JAAN_🦋🔐😘", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "Very nice") || (event.body.toLowerCase() == "So cute") || (event.body.toLowerCase() == "Beautiful")) {
     return api.sendMessage("️M hu hi itna Accha. sab log Tarref karte hai meri.🙈🙈🙈🙈🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rha Tha, Chalo Ek chappal khao 🩴🩴🩴 aur shant rho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😿") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 𝐬𝐚𝐝 𝐌𝐚𝐭 𝐡𝐨 , 𝐁𝐚𝐭𝐚𝐨 𝐤𝐲𝐚 𝐡𝐮𝐚🤗😇", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️𝐇𝐌𝐌,𝐀𝐂𝐇𝐚 ,𝐓𝐡𝐢𝐤 𝐇𝐚𝐢🙂🙂", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "🙁")) {
     return api.sendMessage("️𝐊𝐲𝐚 𝐡𝐮𝐚 𝐑𝐨 𝐊𝐲𝐮 𝐑𝐚𝐡𝐞 𝐡𝐨 ,𝐌𝐞 𝐡𝐮 𝐟𝐢𝐫 𝐤𝐲𝐮 𝐑𝐨𝐧𝐚 😇😇.", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Kya huva, Tabiyat kharab hai kya, Mujhe batao me abhi medicine 💊💉 le aati hu😇", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "Bot ke bacche") || (event.body.toLowerCase() == "Bot ka baccha")) {
     return api.sendMessage("️meri baccha toh Tumhare Pet Me Hai.", threadID);
   };

   if ((event.body.toLowerCase() == "Pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "love u") || (event.body.toLowerCase() == "LOVE U") || (event.body.toLowerCase() == "love u")) {
    return api.sendMessage("️🙃𝐋𝐨𝐯𝐞 𝐲𝐨𝐮 𝐭𝐨 𝐦𝐞𝐫𝐢 𝐣𝐚𝐧 _🦋🔐😘♥", threadID);
   };

   if ((event.body.toLowerCase() == "Ib aao") || (event.body.toLowerCase() == "id")) {
     return api.sendMessage("️Jo bolna hak yhi bol 😒😒 ib koi nahi jayega", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙃🙃") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️𝐇𝐚𝐚 𝐄𝐬𝐞 𝐡𝐢 𝐍𝐚𝐳𝐫𝐞 𝐧𝐢𝐜𝐡𝐢 𝐫𝐤𝐡𝐚 𝐤𝐫𝐨 𝐦𝐞𝐫𝐞 𝐬𝐚𝐦𝐧𝐞 👇", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
     return api.sendMessage("️aree teri to naak hi etni lambi hai... uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("️𝐒𝐚𝐦𝐣𝐡 𝐍𝐚𝐡𝐢 𝐚𝐭𝐚 , 𝐭𝐮𝐦 𝐛𝐢𝐧𝐚 𝐝𝐢𝐦𝐚𝐠 𝐤𝐞 𝐤𝐞𝐬𝐞 𝐬𝐨𝐜𝐡 𝐥𝐞𝐭𝐞 𝐡𝐨 🤨😮🧐", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
     return api.sendMessage("️Oye nashedi 😂😂😂", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️Kya huva bhoot dekh liya kya 👻👻", threadID);
   };

  if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("️️🙄𝐔𝐩𝐚𝐑 𝐏𝐚𝐧𝐤𝐡𝐚 𝐂𝐡𝐚𝐥𝐓𝐚 𝐡𝐚𝐢🗡️🙄", threadID);
   };

   if ((event.body.toLowerCase() == "bot love me") || (event.body.toLowerCase() == "Bot love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Are apne muh pe kyu maar rahe ho, Mujhe batao kya huva?😬", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ßΛS ҠΛŔ♡ ҠĪŦИΛ ĤΛS♡♡ƓƐ🧐😒💯💫", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M To cute hu aap batao kese ho 🤭☺️", threadID);
   };

   if ((event.body.toLowerCase() == "bot baby") || (event.body.toLowerCase() == "bot janu")) {
     return api.sendMessage("『_HA BOL NA MERA BACHHA_😘", threadID);
   };

   if ((event.body.toLowerCase() == "🫢🫢") || (event.body.toLowerCase() == "🫢")) {
     return api.sendMessage("【_ASA KAM HI KU KRTE JO MU CHUPANA PDE_】", threadID);
   };

   if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳😳")) {
     return api.sendMessage("『_ASE NA GHOOR PIYAR HO JAYE GA🦋🔐😘", threadID);
   };

  if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("【_HAYYE RE JABHI MU TEDA KRTI KASAM SE KATEI ZAHER LGTI HO😘】", threadID);
   };

   if ((event.body.toLowerCase() == "shibli") || (event.body.toLowerCase() == "Shibli")) {
     return api.sendMessage("『_ABE OY SHIBLI NA BOLA KR FARAZ KI WF HE_🦋🔐😘", threadID);
   };

  if ((event.body.toLowerCase() == "Love u bot") || (event.body.toLowerCase() == "i love u bot")) {
     return api.sendMessage("『_𝐈 𝐋𝐨𝐯𝐞 𝐲𝐨𝐮 𝐭𝐨 𝐦𝐞𝐫𝐢 𝐣𝐚𝐧 _🦋🔐😘", threadID);
   };

   if ((event.body.toLowerCase() == "miss u bot") || (event.body.toLowerCase() == "bot miss you")) {
     return api.sendMessage("【_𝐌𝐈𝐒𝐒 𝐔 𝐓0 M𝐑𝐈 𝐉𝐀𝐍__😘 】", threadID);
   };

   if ((event.body.toLowerCase() == "kiss") || (event.body.toLowerCase() == "😘")) {
     return api.sendMessage("UMMMAAA MERI JAAN😘😘", threadID);
   };

  if ((event.body.toLowerCase() == "Im gabbar") || (event.body.toLowerCase() == "Gabbar") || (event.body.toLowerCase() == "GABBAR") || (event.body.toLowerCase() == "IM GABBAR") || (event.body.toLowerCase() == "baby")) {
     return api.sendMessage("🕊️🍎...Aɭɛ Ɱɛɹɛ Ɓɑɓɣ Ƙɛʂɛ Ɦɵ ɑɑp😚🍒", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `╠═🌸${name}🌸=╣,                    ❤❤❤                                                                                                                                      ${rand}                                        

           *『𝗖𝗿𝗲𝗱𝗶𝘁'𝘀』‎‎『𖣴❰❰FAIZANː͢ː❱❱𖣴』
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
