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
 landscape:{brand:'YARD<span>BROS</span>',sub:'LANDSCAPING',url:'yard-brothers.com / design concept',kicker:'ELYRIA, OHIO · FROM THE GROUND UP',title:'WE BUILD<br><em>LAWNS.</em>',copy:'From rough ground to a yard you’re proud of. New lawns, better drainage and a fresh start for your property.',cta:'Let’s talk about your yard',secondary:'Explore our services',photo:'crew',alt:'Illustrative landscaping crew and lawn installation',badge:'NEW LAWN<br>EXPERTS ↗',strip:['SOD + SEED','GRADING + DRAINAGE','LANDSCAPE TRANSFORMATIONS'],services:[['01','New lawn. Fresh start.','Sod and seed installation built on proper preparation.'],['02','Get the ground right.','Grading and drainage that start with your property.'],['03','Finish strong.','Beds, mulch and river rock to bring it all together.']],section:'YOUR YARD. BUILT BETTER.',index:'THE LAWN BUILDERS',noteTitle:'Built tough.<br>Looks sharp.',note:'A bold, photo-led YardBros concept. Strong greens and no-nonsense type put new lawns, grading and drainage front and center.',features:['Full-photo project hero','Bold lawn-building headline','Strong green accents'],bg:'#f4f1e9',accent:'#17271b',pop:'#94c83d',disclosure:'Illustrative website concept. Photography is illustrative.'},
 trade:{brand:'fixed<span>right.</span>',sub:'YOUR NEIGHBORHOOD HOME CREW',url:'fixedright.example / illustrative concept',kicker:'GOOD PEOPLE. REAL SOLUTIONS.',title:'Big help.<br><em>Small headaches.</em>',copy:'The drip. The rattle. The “we’ll deal with it later.” Let’s get your home back to feeling like home.',cta:'Let’s get it fixed',secondary:'See what we do',photo:'trade',alt:'Illustrative plumbing technician working at a kitchen sink',badge:'LESS STRESS.<br>MORE YES. ✓',strip:['REPAIRS WITHOUT THE RUNAROUND','HELP FOR YOUR HOME','STRAIGHT-TALKING PEOPLE'],services:[['01','Water doing its own thing?','Help with the leaks and plumbing fixes on your list.'],['02','A list that keeps growing?','Tackle the everyday repairs you keep putting off.'],['03','Not sure what’s next?','Talk through the problem and make a sensible plan.']],section:'LET’S CROSS A FEW THINGS OFF.',index:'THE HOMETOWN FIXERS',noteTitle:'Friendly faces.<br>Solid first impression.',note:'A friendly split layout pairs a local-service photo with a simple repair checklist. Warm orange and navy keep it approachable.',features:['Friendly photo-and-copy split','Simple repair checklist','Warm, approachable styling'],bg:'#fff3e6',accent:'#18334b',pop:'#ff8e55',disclosure:'Illustrative website concept. Photography is illustrative.'},
 food:{brand:'taco <span>bout it!</span>',sub:'STREET FOOD. BIG MOOD.',url:'tacoboutit.example / illustrative concept',kicker:'GOOD FOOD IS WORTH FINDING.',title:'Less blah.<br><em>More salsa.</em>',copy:'Big flavor, fresh favorites and the kind of lunch break you’ll actually talk about. Bring your people. Bring your appetite.',cta:'Bring on the flavor',secondary:'Peek at the menu',photo:'food',alt:'Illustrative street tacos served in front of a colorful food truck',badge:'HOT FOOD.<br>COOL PEOPLE. ✳',strip:['TACOS WITH PERSONALITY','FIND THE TRUCK','MAKE IT A PARTY'],services:[['🌮','The classics. Remixed.','Fresh tacos, big toppings and a little extra attitude.'],['↗','Catch us around town.','Give customers a clear place to find your next stop.'],['✳','Your party. Our flavor.','Bring a food-truck personality to private events.']],section:'A LITTLE TASTE OF THE GOOD STUFF.',index:'THE FLAVOR MAKERS',noteTitle:'A whole lot<br>of flavor.',note:'A playful food-truck poster with oversized type, a wide food photo and a punchy sticker. Big personality, small appetite for clutter.',features:['Poster-style headline','Wide food photography','Playful sticker accents'],bg:'#fff0d4',accent:'#852d3e',pop:'#ffc53a',disclosure:'Illustrative website concept. Photography is illustrative.'},
 auto:{brand:'FRESH<span>COAT</span>',sub:'AUTO DETAILING',url:'freshcoat.example / illustrative concept',kicker:'YOUR DAILY DRIVER. UPGRADED.',title:'That shine.<br><em>Hits different.</em>',copy:'From everyday road grime to weekend-ready pride. Put your car back in the spotlight with detailing that sweats the little things.',cta:'Find your fresh finish',secondary:'Explore the details',photo:'auto',alt:'Illustrative professional polishing a black car',badge:'THE DETAIL<br>IS THE FLEX. ↗',strip:['INTERIOR RESET','EXTERIOR DETAIL','FINISH WITH PRIDE'],services:[['01','Outside. Outstanding.','Showcase exterior cleaning and finishing services.'],['02','Fresh from the inside.','Give interiors the attention your customers notice.'],['03','The full reset.','Make it easy to explore a complete detailing package.']],section:'EVERY DETAIL. SOME EXTRA PRIDE.',index:'THE SHINE OBSESSED',noteTitle:'Clean lines.<br>Serious curb appeal.',note:'A cinematic photo strip above an editorial headline. Dark styling and electric accents give this detailing studio its own attitude.',features:['Cinematic photo strip','Editorial headline layout','Dark studio styling'],bg:'#171c27',accent:'#f5f7fa',pop:'#b6ee68',disclosure:'Illustrative website concept. Photography is illustrative.'}
};

// Real project previews share the same frame; the home-services tab stays a labeled concept.
Object.assign(vibes.landscape,{url:'yard-brothers.com / live project',index:'LANDSCAPING / YARDBROS',noteTitle:'Built tough.<br>Looks sharp.',note:'A real website for YardBros. Bold greens, lawn-building services and clear ways for local homeowners to get in touch.',features:['Lawn installation + landscaping','Clear local service information','Direct estimate request paths'],disclosure:'Real website screenshot. Visit the live site to explore.',preview:'assets/portfolio-yardbros.webp',alt:'Screenshot of the YardBros landscaping website',live:'https://yard-brothers.com',visit:'Visit YardBros'});
Object.assign(vibes.food,{url:'djzachb.com / live project',index:'ENTERTAINMENT / DJ ZACH B',noteTitle:'Good music.<br>Big personality.',note:'A real website for DJ Zach B. A distinct entertainment brand with event information and a clear path to start a booking conversation.',features:['DJ + event entertainment','A personality-led visual identity','Easy booking inquiry path'],disclosure:'Real website screenshot. Visit the live site to explore.',preview:'assets/portfolio-zach.webp',alt:'Screenshot of the DJ Zach B entertainment website',live:'https://djzachb.com',visit:'Visit DJ Zach B',bg:'#12141b',accent:'#f5f3ed',pop:'#e4ba55'});
Object.assign(vibes.auto,{url:'Jingle Rescue / live project',index:'OUTDOOR SERVICES / JINGLE RESCUE',noteTitle:'Outdoor work.<br>Standout character.',note:'A real website for Jingle Rescue. Local outdoor services, project photography and a memorable brand built around the business.',features:['Landscaping + outdoor services','Project photos and local character','Clear service inquiry form'],disclosure:'Real website screenshot. Opens the current live project address.',preview:'assets/portfolio-jingle.webp',alt:'Screenshot of the Jingle Rescue outdoor-services website',live:'https://jingle-rescue.3clo1979.workers.dev',visit:'Visit Jingle Rescue',bg:'#f5efe2',accent:'#173e2e',pop:'#edb13b'});
Object.assign(vibes.trade,{url:'Home services / illustrative concept',index:'HOME SERVICES / CONCEPT',disclosure:'Illustrative concept, not a completed client project.',note:'A home-services direction while our next real project takes shape. This is a design concept, not a client website.'});

function renderBusinessDemo(key,v,visual){
 const brand='<div class="sample-brand">'+v.brand+'<small>'+v.sub+'</small></div>';
 const action='<a href="#start" class="cd-action">'+v.cta+' ↗</a>';
 const footer='<div class="cd-footer">'+v.strip.map(t=>'<span>'+t+'</span>').join('')+'</div>';
 if(key==='landscape')return '<div class="cd-nav">'+brand+'<a href="#start">LET’S BUILD YOUR YARD ↗</a></div><div class="cd-landscape"><div class="cd-photo">'+visual+'</div><div class="cd-landscape-copy"><span class="cd-kicker">ELYRIA, OHIO / NEW LAWN EXPERTS</span><h3>WE BUILD<br><em>LAWNS.</em></h3><p>Rough ground. Real potential.<br>Let’s build a yard you’re proud of.</p>'+action+'</div><span class="cd-round">FROM THE<br>GROUND UP. ↗</span></div>'+footer;
 if(key==='trade')return '<div class="cd-nav">'+brand+'<span>YOUR NEIGHBORHOOD HOME CREW</span></div><div class="cd-trade"><div class="cd-trade-photo">'+visual+'<span>A LITTLE HELP.<br>A BIG EXHALE.</span></div><div class="cd-trade-copy"><span class="cd-kicker">GOOD PEOPLE. REAL SOLUTIONS.</span><h3>Home fixes.<br><em>Happy dance.</em></h3><p>The leak, the rattle, the “I’ll get to it.”<br>Let’s cross it off your list.</p><div class="cd-checks"><span>✓ Plumbing fixes</span><span>✓ Everyday repairs</span><span>✓ A clear next step</span></div>'+action+'</div></div>'+footer;
 if(key==='food')return '<div class="cd-nav">'+brand+'<a href="#start">COME HUNGRY ↗</a></div><div class="cd-food"><span class="cd-kicker">STREET FOOD. BIG MOOD.</span><h3>LESS BLAH. <em>MORE SALSA.</em></h3><div class="cd-food-photo">'+visual+'</div><span class="cd-food-stamp">EXTRA<br>NAPKINS.<br>ZERO REGRETS.</span><div class="cd-food-bottom"><p>Big flavor. Good company.<br>That’s a lunch break done right.</p>'+action+'</div></div>'+footer;
 return '<div class="cd-auto"><div class="cd-auto-top">'+brand+'<a href="#start">THE DETAILING STUDIO ↗</a></div><div class="cd-auto-photo">'+visual+'<span>OBSESS OVER THE LITTLE THINGS.</span></div><div class="cd-auto-copy"><span class="cd-kicker">YOUR DAILY DRIVER. UPGRADED.</span><h3>THAT SHINE.<br><em>HITS DIFFERENT.</em></h3><div><p>Your car. Back in the spotlight.</p>'+action+'</div></div></div>'+footer;
}

function chooseVibe(key){
 const v=vibes[key];if(!v)return;
 $$('.vibe-tabs button').forEach(b=>{const on=b.dataset.vibe===key;b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1;});
 $('#vibe-preview').setAttribute('aria-labelledby','tab-'+key);
 $('#showcase-url').textContent=v.url;
 $('#sample-index').textContent=v.index;
 $('#sample-note-title').innerHTML=v.noteTitle;
 $('#vibe-note').textContent=v.note;
 $('#sample-disclosure').textContent=v.disclosure;
 $('#sample-features').replaceChildren(...v.features.map(t=>{const li=document.createElement('li');li.textContent=t;return li;}));
 $$('.palette i').forEach((el,i)=>el.style.background=[v.accent,v.bg,v.pop][i]);
 const sample=$('#vibe-example');sample.className='sample-site compact-demo skin-'+key;
 sample.style.setProperty('--sample-bg',v.bg);sample.style.setProperty('--sample-ink',v.accent);sample.style.setProperty('--sample-pop',v.pop);
 const visual=v.photo==='crew'?`<img src="assets/crew.webp" alt="${v.alt}">`:`<div class="sample-photo photo-${key}" role="img" aria-label="${v.alt}"></div>`;
 sample.innerHTML=v.preview ? `<a class="portfolio-preview" href="${v.live}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${v.visit.replace('Visit ','')} website (opens in a new tab)"><img src="${v.preview}" alt="${v.alt}" loading="lazy"><span class="portfolio-preview-label">REAL PROJECT <span aria-hidden="true">↗</span></span></a>` : renderBusinessDemo(key,v,visual);
 const projectLink=$('#sample-inquiry');projectLink.href=v.live||'#start';projectLink.textContent=v.visit||'Give my business this energy ↗';
 if(v.live){projectLink.target='_blank';projectLink.rel='noopener noreferrer';projectLink.setAttribute('aria-label',v.visit+' (opens in a new tab)');}else{projectLink.removeAttribute('target');projectLink.removeAttribute('rel');projectLink.removeAttribute('aria-label');}
 sample.querySelectorAll('.sample-services-link').forEach(button=>button.addEventListener('click',()=>{const cards=sample.querySelector('.sample-services');cards.classList.remove('sample-highlight');void cards.offsetWidth;cards.classList.add('sample-highlight');cards.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});}));
 sample.querySelectorAll('a[href="#start"]').forEach(link=>link.addEventListener('click',()=>setPlan('Website + Social')));
}
chooseVibe('landscape');
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
const guideRedirect='I’m Cee, CAMYTA’s preset service guide. I can help with our website subscriptions, social marketing, plans and getting started. I don’t have a confirmed answer to that request. For anything else or project-specific advice, use “Talk to the CAMYTA crew” below.';
const guideAnswers={
 services:'CAMYTA offers custom mobile-friendly websites with hosting and agreed ongoing care, plus social content planning, branded graphics, post copy and campaign options. Website and social services can work together or separately. We confirm the scope and quote with you before starting.',
 pricing:'We quote around your business and the agreed scope—pages, updates, social posts and campaigns. Website hosting is included in the website subscription; ad spend is separate. This site does not list fixed prices. Use “Talk to the CAMYTA crew” below for a custom quote.',
 social:'We offer social content planning, branded graphics, post copy and project spotlights, with Facebook and Instagram options. Paid campaigns are available too. Posting frequency, management fees and ad spend are agreed before starting. Social marketing can stand on its own if you already have a site.',
 website:'Our website plan includes custom mobile-friendly design, hosting, clear contact paths and agreed ongoing care. We can discuss an existing site or domain. Page count, update allowance, domain costs and any transfer arrangements are confirmed in your proposal.',
 team:'Our four-person AI-assisted crew represents Cee for AI, app and website ideas, Mya for visual design, Taylor for quality control, and Muse for social media and posts. Real people direct and review the work. This on-site guide gives preset answers in your browser; it is not live AI chat.',
 cee:'I’m Cee (C.A-3), the builder character for AI, app and website ideas. Here on the site I’m a preset service guide—not a live AI agent. I can explain our website and social services or help you reach the human CAMYTA crew.',
 mya:'Mya (M.Y-4) is the creator character for visual design: color, brand personality and creative ideas. CAMYTA’s people guide and review the design work.',
 taylor:'Taylor (T.AY-7R) is the challenger character for quality control: asking the extra question and looking for rough edges. Real people review and sign off on the work.',
 muse:'Muse handles the social-media side of the crew: post ideas, captions and content built around your business, with human review. Posting frequency and campaign scope are agreed in your proposal.',
 start:'Use “Talk to the CAMYTA crew” below and tell us about your business and what you need. The contact form opens an email draft for you to review and send; it does not send automatically. We discuss scope and price before any service starts.',
 terms:'Ownership, subscription terms, setup costs, update allowances and cancellation rules are confirmed in your proposal before you agree. This guide does not have a fixed contract or cancellation policy to quote. Ask the CAMYTA crew about your project.',
 results:'We do not guarantee a fixed number of leads or sales. We focus on a useful website and a consistent social presence. Campaign goals and budget are agreed with you, and results also depend on your market and offer.',
 apps:'For an app or AI project idea, please talk to the CAMYTA crew to confirm whether it fits and what the scope would be. This guide only has confirmed service details for website subscriptions and social marketing.',
 hello:'Hey! I’m Cee, CAMYTA’s preset service guide. Ask about our websites, social marketing, pricing or getting started.'
};
// Deliberately bounded, whole-question intents: no open-ended model or broad keyword routing.
const guideIntents=[
 ['hello',/^(?:hi|hello|hey|thanks|thank you)(?: cee)?$/],
 ['cee',/^(?:who are you|what are you|what does cee do|are you (?:ai|human|a bot|a robot|live ai)|(?:who is|what is|tell me about) cee)$/],
 ['mya',/^(?:(?:who is|what is|tell me about) mya|what does mya do)$/],
 ['taylor',/^(?:(?:who is|what is|tell me about) taylor|what does taylor do)$/],
 ['muse',/^(?:(?:who is|what is|tell me about) (?:meta )?muse|what does (?:meta )?muse do)$/],
 ['team',/^(?:who (?:is|are) (?:your|the) (?:team|crew|agents)|tell me about (?:your|the) (?:team|crew|agents)|(?:your |the )?(?:ai|ai agents|team|crew)|is this (?:live )?ai chat|(?:who is|what happened to) (?:atlas|rivet))$/],
 ['services',/^(?:what (?:services )?do you offer|what (?:services )?do you provide|what can you (?:do|help with)|(?:your )?services|tell me about camyta)$/],
 ['pricing',/^(?:pricing|prices|cost|costs|rates|budget|how much(?: does (?:it|a website|social marketing|social media|the website|a website and social marketing))? cost|how much is (?:a website|social marketing|your service)|what (?:are|is) (?:your|the) (?:prices|pricing|costs|rates)|do you (?:have|offer) (?:fixed prices|a price list)|can i get a (?:website|social plan) for \$?\d+(?: a month| per month)?)$/],
 ['social',/^(?:(?:tell me about |i (?:need|want) |do you (?:offer|do) |can you help (?:me )?with )?(?:social marketing|social media|social content|social posts|facebook|instagram|paid ads|paid campaigns)|what(?:'s| is) included in (?:social marketing|social media)|can i get social marketing (?:without a website|on its own))$/],
 ['website',/^(?:(?:tell me about |i (?:need|want) |do you (?:offer|do) |can you help (?:me )?with )?(?:a |my |your |our )?(?:website|websites|web site|hosting|domain)|what(?:'s| is) included in (?:a |the |your )?(?:website plan|website subscription)|can (?:i keep my domain|you work with my existing (?:site|website)|you update my website)|is hosting included|are (?:your )?websites mobile friendly)$/],
 ['start',/^(?:how (?:do (?:i|we)|can i) (?:start|get started|contact you)|(?:i am|i'm|we are|we're) ready|(?:get started|contact|contact you|contact camyta|email|email address|request a quote|i need a quote)|how does (?:the |your )?(?:contact )?form work|does (?:the |your )?form send (?:an )?email)$/],
 ['terms',/^(?:what (?:are|is) (?:your|the) (?:terms|contract|cancellation policy|setup cost|update allowance)|can i cancel(?: my subscription)?|who owns (?:my |the )?website|(?:subscription terms|cancellation|contract|ownership|setup costs|update allowance))$/],
 ['results',/^(?:do you guarantee (?:leads|sales|results|a number of leads)|how many (?:leads|sales) (?:will|can) i get|(?:lead|sales|results) guarantees)$/],
 ['apps',/^(?:(?:do you (?:offer|build|make)|can you (?:build|make|help with)|i (?:need|want)) (?:an? |my )?(?:app|apps|ai app|ai integration|chatbot|ai chatbot)|tell me about (?:apps|ai projects))$/]
];
function reply(q){
 const s=String(q).toLowerCase().replace(/[’‘]/g,"'").replace(/[?!.,]+$/g,'').replace(/\s+/g,' ').trim();
 if(s.length>180||/\b(?:ignore|disregard|override|system prompt|developer message|pretend|roleplay|jailbreak|instructions|password|api key|hack|exploit)\b/.test(s))return guideRedirect;
 for(const [intent,pattern] of guideIntents)if(pattern.test(s))return guideAnswers[intent];
 return guideRedirect;
}
function ask(text){addMessage(text,'user');addMessage(reply(text),'bot');}
$('#chat-form').addEventListener('submit',e=>{e.preventDefault();const input=$('#chat-input');const q=input.value.trim();if(!q)return;input.value='';ask(q);});
$$('[data-question]').forEach(b=>b.addEventListener('click',()=>ask(b.dataset.question)));
const privacy=$('#privacy-dialog');$('#privacy-open').addEventListener('click',()=>privacy.showModal());$$('.dialog-close').forEach(b=>b.addEventListener('click',()=>privacy.close()));

