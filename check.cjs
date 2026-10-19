const fs=require('node:fs');const vm=require('node:vm');const assert=require('node:assert/strict');
const store=new Map(),els=new Map();
function el(s){if(!els.has(s))els.set(s,{innerHTML:'',textContent:'',style:{},dataset:{},setAttribute(){},removeAttribute(){},addEventListener(){}});return els.get(s);}
const context=vm.createContext({window:{addEventListener(){},scrollTo(){}},document:{querySelector:el,querySelectorAll(){return[]},addEventListener(){},visibilityState:'visible'},localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)},location:{hash:'#inicio'},console,Date,Set,Map,URLSearchParams,FormData:class{},setInterval,clearInterval,setTimeout,Blob,URL,confirm:()=>false});
vm.runInContext(fs.readFileSync('public/data.js','utf8'),context);
vm.runInContext(fs.readFileSync('public/app.js','utf8'),context);
const result=vm.runInContext(`(()=>{
 const check=(b,m)=>{if(!b)throw Error(m)};
 check(LESSONS.length===8,'8 aulas');check(QUESTIONS.length===24,'24 questões');check(new Set(QUESTIONS.map(q=>q.id)).size===24,'IDs únicos');
 for(const q of QUESTIONS){check(q.options.length===5&&q.explanations.length===5,'5 alternativas e explicações: '+q.id);check(q.correct>=0&&q.correct<5,'gabarito válido');check(LESSONS.some(l=>l.id===q.lesson),'aula vinculada');check(!!SOURCES[q.source],'fonte vinculada');}
 check(DAILY.reduce((sum,x)=>sum+x[2],0)===120,'rotina de 120 minutos');
 check(filterList(new URLSearchParams('cargo=Técnico')).every(q=>q.cargos.includes('Técnico')),'filtro cargo');
 check(filterList(new URLSearchParams('area=Banco+de+dados')).length===3,'filtro disciplina');
 check(filterList(new URLSearchParams('search=COUNT')).length===1,'busca');
 check(filterList(new URLSearchParams('area=inexistente')).length===0,'filtro vazio');
 state=emptyState();state.attempts.push({id:'P01',selected:0,correct:false,guess:false,time:Date.now()-2*86400000});
 check(due().some(q=>q.id==='P01'),'erro vencido');
 state.attempts.push({id:'P01',selected:2,correct:true,guess:false,time:Date.now()});check(!due().some(q=>q.id==='P01'),'último acerto adia');
 state.attempts.push({id:'P02',selected:1,correct:true,guess:true,time:Date.now()-2*86400000});check(due().some(q=>q.id==='P02'),'palpite volta');
 check(filterList(new URLSearchParams('status=palpites')).some(q=>q.id==='P02'),'filtro palpites');
 const v=validate(JSON.parse(JSON.stringify(state)));check(v.attempts.length===3,'backup roundtrip');
 v.attempts[0].correct=true;check(validate(v).attempts[0].correct===false,'backup recalcula acerto');
 let rejected=false;try{validate({version:2})}catch(e){rejected=true}check(rejected,'rejeita formato inválido');
 const bad=JSON.parse(JSON.stringify(v));bad.attempts[0].selected=8;rejected=false;try{validate(bad)}catch(e){rejected=true}check(rejected,'rejeita alternativa inválida');
 check(esc('<img src=x>')==='&lt;img src=x&gt;','escapa texto importado');
 state=emptyState();
 for(const path of ['inicio','trilha','questoes','revisoes','tec','progresso','sobre','aula/logica','aula/inexistente']){location.hash='#'+path;render();check(document.querySelector('#main').innerHTML.length>100,'render '+path);}
 return {aulas:LESSONS.length,questoes:QUESTIONS.length,areasTEC:TEC_INDEX.length,verificacoes:'integridade, filtros, revisões, backup e rotas'};
})()`,context);
for(const f of ['style.css','data.js','app.js','programa-base.md','plano-estudos.md','analise-tec.md'])assert(fs.existsSync('public/'+f),f+' existe');
console.log(JSON.stringify({status:'ok',...result}));
