const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const S=process.argv[2], days=process.argv.slice(3).map(Number);
const posts=JSON.parse(fs.readFileSync('/home/user/har-kuni-bir-sura/posts.json'));
const A='file:///home/user/quron-reels/assets/';
const duas={'Robbana_atina':['ROBBANA ATINA','Baqara · 201-oyat'],'Robbana_la_tuzig':['ROBBANA LA TUZIG‘','Oli Imron · 8-oyat'],'Robbanagfirliy':['ROBBANAG‘FIRLIY','Ibrohim · 41-oyat'],'Ota-ona':['ROBBIRHAMHUMAA','Isro · 24-oyat']};
const names={Moun:'MO‘UN',Qoria:'QORI’A'};
(async()=>{const b=await chromium.launch();const pg=await b.newPage({viewport:{width:1080,height:1920}});
for(const d of days){const p=posts[d-1];const src=p.source.replace('.mp4','');
 let kicker,title,word,sub;
 if(src.includes('Duo')){const k=src.split('_Duo_')[1];[title,sub]=duas[k];kicker='JUMA DUOSI';word='DUOSI';}
 else{const [,n,c]=src.match(/^\d+_([^_]+)(?:_(\d+-37))?/);title=names[n]||n.toUpperCase();word='SURASI';
  if(n==='Fotiha'){kicker='QUR’ONNING ONASI';sub='1-sura · 7 oyat';}else{kicker='30-PORA · '+c.replace('-','/');sub='Qori bilan birga yodlang';}}
 const fs_=title.length>12?120:title.length>8?150:title.length>5?190:230;
 const bg='file://'+S+'/bg/'+String(d).padStart(2,'0')+'.jpg';
 const html=(`<html><head><style>
@font-face{font-family:M8;src:url(${A}mont800.ttf)}@font-face{font-family:M6;src:url(${A}mont600.ttf)}@font-face{font-family:N7;src:url(${A}nunito700.ttf)}
*{margin:0;box-sizing:border-box}body{width:1080px;height:1920px;position:relative;overflow:hidden;background:#000}
.bg{position:absolute;inset:0;background:url(${bg}) center/cover;transform:scale(1.04)}
.sh{position:absolute;inset:0;background:radial-gradient(ellipse 75% 45% at 50% 50%,rgba(10,14,30,.62),rgba(10,14,30,.25) 70%,rgba(10,14,30,.05)),linear-gradient(rgba(0,0,0,.15),rgba(0,0,0,0) 30%,rgba(0,0,0,0) 70%,rgba(0,0,0,.2))}
.c{position:absolute;left:90px;right:90px;top:240px;height:1440px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:#fff}
.k{font:600 34px M6;letter-spacing:10px;color:#f6d77a;border:2px solid rgba(246,215,122,.85);border-radius:60px;padding:16px 38px 14px;background:rgba(0,0,0,.25)}
.t span{-webkit-box-decoration-break:clone;box-decoration-break:clone}.t{font:800 ${fs_}px/1.02 M8;margin-top:56px;background:linear-gradient(180deg,#fffef5 0%,#fff3c4 55%,#f2c55c 100%);-webkit-background-clip:text;color:transparent;filter:drop-shadow(0 6px 18px rgba(0,0,0,.55));letter-spacing:2px}
.w{font:600 64px M6;letter-spacing:26px;margin:22px 0 0 26px;color:#fff;text-shadow:0 4px 16px rgba(0,0,0,.6)}
.dv{display:flex;align-items:center;gap:22px;margin:54px 0 40px}.dv i{width:150px;height:3px;background:linear-gradient(90deg,transparent,#f6d77a)}.dv i:last-child{transform:scaleX(-1)}.dv b{width:22px;height:22px;background:#f6d77a;transform:rotate(45deg)}
.s{font:700 50px N7;color:#fff;text-shadow:0 3px 12px rgba(0,0,0,.7)}
.br{position:absolute;bottom:300px;left:0;right:0;text-align:center;font:600 30px M6;letter-spacing:6px;color:rgba(255,255,255,.9);text-shadow:0 2px 10px rgba(0,0,0,.7)}
</style></head><body><div class=bg></div><div class=sh></div>
<div class=c><div class=k>${kicker}</div><div class=t><span>${title}</span></div><div class=w>${word}</div><div class=dv><i></i><b></b><i></i></div><div class=s>${sub}</div></div>
<div class=br>QORI: BADR AT-TURKIY</div></body></html>`);fs.writeFileSync(S+'/t.html',html);await pg.goto('file://'+S+'/t.html',{waitUntil:'load'});
 await pg.evaluate(()=>document.fonts.ready);
 await pg.screenshot({path:S+'/out/c'+String(d).padStart(2,'0')+'.jpg',type:'jpeg',quality:92});}
await b.close();})();
