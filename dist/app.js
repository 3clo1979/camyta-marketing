'use strict';
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
$('#year').textContent = new Date().getFullYear();
$('.menu-toggle').addEventListener('click', e => {
 const open = $('nav').classList.toggle('open');
 e.currentTarget.setAttribute('aria-expanded', String(open));
 e.currentTarget.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
$$('nav a').forEach(a => a.addEventListener('click', () => { $('nav').classList.remove('open'); $('.menu-toggle').setAttribute('aria-expanded', 'false'); }));
const vibes = {
 landscape: {brand:'GOOD ROOTS®', kicker:'YOUR YARD’S NEXT CHAPTER.', title:'Dirt happens.\nWe make it beautiful.', copy:'Fresh lawns. Clean edges. A backyard you actually want to hang out in.', cta:'Let’s talk dirt ↗', stamp:'FRESH\nSTARTS\nHERE. ↗', note:'Earthy colors, bold project photos and a little lawn-care attitude. Made for the crew with dirt on their boots.', bg:'#e5edca', accent:'#163a2d', pop:'#d4f56b', symbol:null},
 trade: {brand:'FIXED RIGHT®', kicker:'YOUR HOUSE. OUR TOOLBOX.', title:'Small leak.\nBig nope.', copy:'That thing you’ve been meaning to fix? Yeah, we’re on it. Friendly help for your home.', cta:'Let’s fix that ↗', stamp:'LESS\nSTRESS.\nMORE YES.', note:'Confident type, a warm pop of orange and straight-to-the-point messaging. Built for the hometown crew customers want to call again.', bg:'#ffdec4', accent:'#553320', pop:'#ff8554', symbol:'🔧'},
 food: {brand:'TACO BOUT IT®', kicker:'PULL UP. DIG IN.', title:'Your lunch break\njust got louder.', copy:'Big flavor. Good company. Find the truck and bring your appetite.', cta:'Find the flavor ↗', stamp:'GOOD\nFOOD.\nBIG MOOD.', note:'Punchy colors, playful copy and a personality you can almost taste. Your feed and website should feel like your favorite regular.', bg:'#f5d9f2', accent:'#7a2450', pop:'#f9ca47', symbol:'🌮'},
 auto: {brand:'FRESH COAT®', kicker:'CLEAN CAR. MAIN-CHARACTER ENERGY.', title:'That new-car\nfeeling. Again.', copy:'From daily driver to weekend pride. A little attention goes a long way.', cta:'Get that fresh feeling ↗', stamp:'SHINE\nHITS\nDIFFERENT.', note:'Electric accents, clean layouts and some well-earned attitude. Give your detailing work the spotlight it deserves.', bg:'#dfe6ff', accent:'#242a59', pop:'#c5f568', symbol:'✦'}
};
function chooseVibe(key) {
 const v = vibes[key];
 if (!v) return;
 $$('.vibe-tabs button').forEach(b => {const on = b.dataset.vibe === key;b.setAttribute('aria-selected', String(on));b.tabIndex=on?0:-1;});
 $('#vibe-preview').setAttribute('aria-labelledby','tab-'+key);
 for(const [selector, value] of [['#example-brand',v.brand],['#example-kicker',v.kicker],['#example-copy',v.copy],['#example-cta',v.cta],['#vibe-note',v.note]]) $(selector).textContent=value;
 for(const [selector,value] of [['#example-title',v.title],['#example-stamp',v.stamp]]) {$(selector).replaceChildren();value.split('\n').forEach((line,i)=>{if(i)$(selector).append(document.createElement('br'));$(selector).append(document.createTextNode(line));});}
 const ex=$('#vibe-example');ex.style.background=v.bg;ex.style.setProperty('--example-bg',v.bg);ex.style.setProperty('--example-accent',v.accent);
 const visual=$('#example-visual');visual.replaceChildren();
 if(v.symbol){const el=document.createElement('span');el.className='big-symbol';el.textContent=v.symbol;el.setAttribute('aria-hidden','true');visual.append(el);}
 else {const im=document.createElement('img');im.src='assets/crew.webp';im.alt='Illustrative landscape business';visual.append(im);}
 $$('.palette i').forEach((el,i)=>el.style.background=[v.accent,v.bg,v.pop][i]);
}
$$('[data-vibe]').forEach((b,i,arr)=>{b.addEventListener('click',()=>chooseVibe(b.dataset.vibe));b.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%arr.length;if(e.key==='ArrowLeft')n=(i+arr.length-1)%arr.length;if(e.key==='Home')n=0;if(e.key==='End')n=arr.length-1;if(n!==undefined){e.preventDefault();arr[n].focus();chooseVibe(arr[n].dataset.vibe);}});});
function setPlan(name){$('#plan-input').value=name;$$('[data-select-plan]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.selectPlan===name)));$$('.plan').forEach(p=>p.classList.toggle('selected',p.dataset.plan===name));}
$$('[data-select-plan]').forEach(b=>b.addEventListener('click',()=>setPlan(b.dataset.selectPlan)));
$$('[data-plan-choice]').forEach(b=>b.addEventListener('click',()=>setPlan(b.dataset.planChoice)));
setPlan('Website');
$('#brief-form').addEventListener('submit',e=>{
 e.preventDefault(); if(!e.target.reportValidity())return;
 const f=new FormData(e.target);
 const body=`Hi CAMYTA crew!\n\nI’d like to talk about ${f.get('plan')}.\n\nName: ${f.get('name')}\nBusiness: ${f.get('business')}\nReply email: ${f.get('email')}\n\nAbout my business:\n${f.get('details')}\n\nLet’s build something!`;
 const a=document.createElement('a');a.href='mailto:sales@camytagroup.com?subject='+encodeURIComponent('CAMYTA inquiry: '+f.get('business'))+'&body='+encodeURIComponent(body);document.body.append(a);a.click();a.remove();
 const status=$('#form-status');status.hidden=false;status.textContent='Your email draft is ready. Review it and press send in your email app. If your app didn’t open, ';
 const copy=document.createElement('button');copy.type='button';copy.textContent='copy your inquiry';copy.style.cssText='border:0;background:none;text-decoration:underline;color:inherit;padding:0;font-size:inherit';
 copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(body);copy.textContent='copied! Email it to sales@camytagroup.com.';}catch{status.textContent='Email your details directly to sales@camytagroup.com.';}});status.append(copy);
});
const chat=$('#rivet-chat');let previousFocus=null;
function openChat(){previousFocus=document.activeElement;chat.hidden=false;$('#chat-launcher').setAttribute('aria-expanded','true');$('#chat-input').focus();}
function closeChat(){chat.hidden=true;$('#chat-launcher').setAttribute('aria-expanded','false');if(previousFocus)previousFocus.focus();}
$('#chat-launcher').addEventListener('click',()=>chat.hidden?openChat():closeChat());
$$('[data-open-chat]').forEach(b=>b.addEventListener('click',openChat));
$('#chat-close').addEventListener('click',closeChat);
$('#chat-human').addEventListener('click',()=>{closeChat();setTimeout(()=>$('#brief-form input').focus({preventScroll:true}),100);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!chat.hidden)closeChat();});
function addMessage(text,who){const el=document.createElement('div');el.className='chat-message '+who;el.textContent=text;$('#chat-messages').append(el);$('#chat-messages').scrollTop=$('#chat-messages').scrollHeight;}
function reply(q){
 const s=q.toLowerCase();
 if(/price|cost|much|dollar|budget|cheap|pricing/.test(s))return 'Good question. We quote around your business and the scope—pages, updates, social posts and campaigns. Website hosting is included in the website subscription; ad spend is separate. No surprise package number here. Use “Talk to the CAMYTA crew” below for a custom quote.';
 if(/social|facebook|instagram|post|\bads\b|advertis/.test(s))return 'Let’s give that feed some personality! We offer social content planning, branded graphics, post copy and project spotlights, with Facebook and Instagram options. Paid campaigns are available too. We agree on posting frequency, management fees and ad spend before starting. Already have a site? Social can stand on its own.';
 if(/website|web site|hosting|domain|site/.test(s))return 'Your website should work as hard as you do. Our monthly website plan brings together custom mobile-friendly design, hosting, clear contact paths and agreed ongoing updates. Already own a domain? Great—we can work with it. Tell the crew about your trade and we’ll map out the right scope.';
 if(/\bai\b|rivet|robot|human|person|bot/.test(s))return 'I’m Rivet, your digital sidekick. This chat is a quick-answer guide to CAMYTA’s services. The team uses AI to help explore ideas and create faster, with real people directing and reviewing the work. For a custom answer, the CAMYTA crew is one click below.';
 if(/start|contact|quote|call|email|ready|sign/.test(s))return 'Let’s go! Head to “Let’s get this rolling” and tell us your business name, your trade and what you need. The form opens an email draft for you to review and send. We’ll discuss the scope and quote before any service starts.';
 if(/cancel|contract|own|term/.test(s))return 'We’ll spell out ownership, subscription terms, setup costs, update allowances and cancellation rules in your proposal before you sign. Those details depend on the agreed package. The crew can walk you through them—no jargon required.';
 if(/lead|guarantee|result|sale/.test(s))return 'We don’t promise a fixed number of leads or sales. We focus on your website, your message and a consistent social presence. Campaign goals and budget are agreed with you, and results depend on your market and offer too.';
 if(/landscap|plumb|electric|contract|clean|detail|truck|brew|business|trade/.test(s))return 'That sounds like our kind of business! We’re built for hands-on local owners—trades, landscapers, food trucks, breweries and more. Try the business-vibe selector on the page, then tell the crew what makes your business yours.';
 if(/hello|hey|hi\b|thanks/.test(s))return 'Hey there! 👋 Ready to give your business some online personality? Ask me about websites, social marketing, pricing or getting started.';
 return 'I can help with quick questions about websites, social marketing, pricing and getting started. For your specific project, tap “Talk to the CAMYTA crew” below and tell us what you have in mind.';
}
function ask(text){addMessage(text,'user');addMessage(reply(text),'bot');}
$('#chat-form').addEventListener('submit',e=>{e.preventDefault();const input=$('#chat-input');const q=input.value.trim();if(!q)return;input.value='';ask(q);});
$$('[data-question]').forEach(b=>b.addEventListener('click',()=>ask(b.dataset.question)));
const privacy=$('#privacy-dialog');$('#privacy-open').addEventListener('click',()=>privacy.showModal());$$('.dialog-close').forEach(b=>b.addEventListener('click',()=>privacy.close()));
