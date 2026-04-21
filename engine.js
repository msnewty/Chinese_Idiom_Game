let S={queue:[],cur:null,sk:0,tot:0,ans:false,from:'home'};
function ls(k,v){if(v===undefined)return JSON.parse(localStorage.getItem(k)||'null');localStorage.setItem(k,JSON.stringify(v));}
function loadS(){
  const s=ls('yj4')||{};
  document.documentElement.style.setProperty('--fs',s.fs||1);
  document.getElementById('fsSl').value=s.fs||1;
  document.getElementById('tog-poem').checked=s.poem!==false;
  document.getElementById('tog-idiom').checked=s.idiom!==false;
  document.getElementById('tog-proverb').checked=s.proverb!==false;
}
function saveS(){ls('yj4',{fs:parseFloat(document.getElementById('fsSl').value),poem:document.getElementById('tog-poem').checked,idiom:document.getElementById('tog-idiom').checked,proverb:document.getElementById('tog-proverb').checked});}
function changeFS(v){document.documentElement.style.setProperty('--fs',v);saveS();}
function activeCats(){const s=ls('yj4')||{};const c=[];if(s.poem!==false)c.push('poem');if(s.idiom!==false)c.push('idiom');if(s.proverb!==false)c.push('proverb');return c.length?c:['poem','idiom','proverb'];}
function buildQ(){const pool=Q.filter(q=>activeCats().includes(q.c));S.queue=[...pool].sort(()=>Math.random()-.5);}
function nextQ(){if(!S.queue.length)buildQ();S.cur=S.queue.pop();S.ans=false;render();}
function render(){
  const q=S.cur;
  const labels={poem:'古诗',idiom:'成语',proverb:'谚语'};
  const cls={poem:'tp',idiom:'ti',proverb:'tv'};
  const tag=document.getElementById('catTag');
  tag.textContent=labels[q.c];tag.className='ctg '+cls[q.c];
  document.getElementById('skN').textContent=S.sk;
  document.getElementById('gBg').style.backgroundImage=`url('${q.i}')`;
  document.getElementById('qSrc').textContent=q.a;
  const qEl=document.getElementById('qTx');
  qEl.innerHTML=q.t.replace(`{${q.b}}`,`<span class="blk">＿</span>`);
  qEl.classList.remove('sli');void qEl.offsetWidth;qEl.classList.add('sli');
  const grid=document.getElementById('agd');grid.innerHTML='';
  [...q.o].sort(()=>Math.random()-.5).forEach(opt=>{
    const b=document.createElement('button');b.className='abt';b.textContent=opt;
    b.onclick=()=>pick(opt,b);grid.appendChild(b);
  });
  document.getElementById('mpn').classList.remove('show');
}
function pick(choice,btn){
  if(S.ans)return;S.ans=true;const q=S.cur;
  if(choice===q.b){
    btn.classList.add('ok');S.sk++;S.tot++;
    document.getElementById('mph').innerHTML=q.f.replace(q.b,`<span class="hl">${q.b}</span>`);
    document.getElementById('mpb').textContent=q.a;
    document.getElementById('mpe').textContent=q.e;
    document.getElementById('mpn').classList.add('show');
    if(S.tot>0&&S.tot%10===0){setTimeout(()=>milestone(),2400);}
    else{setTimeout(()=>nextQ(),2600);}
  } else {
    btn.classList.add('no');S.sk=0;document.getElementById('skN').textContent=0;
    setTimeout(()=>{
      [...document.getElementById('agd').children].forEach(b=>{if(b.textContent===q.b)b.classList.add('ok');});
      setTimeout(()=>nextQ(),1900);
    },500);
  }
}
function milestone(){
  const msgs=['答得好！','真厉害！','继续加油！','棒极了！','了不起！'];
  const emojis=['🎉','🌟','🏆','🎊','👏'];
  const i=Math.floor(Math.random()*msgs.length);
  document.getElementById('msE').textContent=emojis[i];
  document.getElementById('msM').textContent=msgs[i];
  document.getElementById('msS').textContent=`已答对 ${S.tot} 题`;
  scr('milestone');
}
function resumeGame(){scr('game');nextQ();}
function startGame(){buildQ();scr('game');nextQ();}
function scr(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');}
function showSettings(from){S.from=from;document.getElementById('bkBtn').textContent=from==='home'?'← 返回':'← 返回游戏';loadS();scr('settings');}
function goBack(){scr(S.from);}
function resetProgress(){S.sk=0;S.tot=0;buildQ();alert('进度已重置 ✓');}
loadS();
