const parties = {
  KPD:{name:"Communist Party", full:"Kommunistische Partei Deutschlands", color:"#8e1d24", ideology:"Far-left communist", stance:"Anti-republic", base:"Industrial workers, revolutionary left", summary:"The KPD rejected parliamentary liberal democracy and sought a soviet-style socialist order. Its growth after 1930 helped create an anti-parliamentary blocking majority with the NSDAP.", coalition:"Usually excluded from democratic coalitions; hostile to SPD leadership and Weimar institutions."},
  USPD:{name:"Independent Social Democrats", full:"Unabhängige Sozialdemokratische Partei Deutschlands", color:"#c45662", ideology:"Left socialist", stance:"Ambivalent/left opposition", base:"Anti-war socialists, radical labor", summary:"A breakaway socialist party that surged in 1920, then split as its left wing moved toward the KPD and many remaining members returned to the SPD.", coalition:"Possible only in left experiments; historically unstable after its split."},
  SPD:{name:"Social Democrats", full:"Sozialdemokratische Partei Deutschlands", color:"#d64545", ideology:"Democratic socialist / social democratic", stance:"Pro-republic", base:"Organized labor, urban workers, republican left", summary:"The strongest democratic party for most of Weimar. It backed the republic, supplied Friedrich Ebert and several chancellors, and often had to choose between governing compromise and opposition.", coalition:"Central to Weimar coalitions and grand coalitions, but often conflicted with conservative and liberal partners."},
  Zentrum:{name:"Centre Party", full:"Zentrum", color:"#222222", ideology:"Catholic political center", stance:"Mostly pro-republic", base:"Catholic voters across classes", summary:"A pivotal confessional party that joined nearly every governing coalition until 1932. It often acted as the hinge between left-liberal and center-right cabinets.", coalition:"Highly coalitionable; often the broker between SPD, liberals, BVP, and DVP."},
  BVP:{name:"Bavarian People's Party", full:"Bayerische Volkspartei", color:"#6b6b6b", ideology:"Catholic conservative regionalist", stance:"Conditional republican", base:"Catholic Bavaria, rural conservatives", summary:"A Bavarian split from Zentrum, more conservative and regionalist. It often supported bourgeois or center-right cabinets while defending Bavarian Catholic interests.", coalition:"Compatible with Zentrum, DVP, DNVP in some cabinets; less natural with SPD."},
  DDP:{name:"German Democratic Party", full:"Deutsche Demokratische Partei / German State Party", color:"#f2cf5b", ideology:"Center-left liberal", stance:"Pro-republic", base:"Educated middle class, liberal professionals", summary:"A major founding party of Weimar democracy that helped shape the constitution. Its collapse into a splinter party weakened the democratic center.", coalition:"Core Weimar Coalition partner with SPD and Zentrum; later too small to anchor governments."},
  DVP:{name:"German People's Party", full:"Deutsche Volkspartei", color:"#2d64b3", ideology:"National liberal / center-right", stance:"Skeptical then cooperative", base:"Business, Protestant middle class, Stresemann liberals", summary:"Initially skeptical of the republic, the DVP became a key governing party under Gustav Stresemann, especially during stabilization, before drifting rightward after his death.", coalition:"Often vital to Grand Coalitions and bourgeois cabinets; tension with SPD over labor/economic issues."},
  DNVP:{name:"German National People's Party", full:"Deutschnationale Volkspartei", color:"#1b3557", ideology:"National-conservative / monarchist", stance:"Anti-republic", base:"Conservative Protestants, landowners, nationalists", summary:"The DNVP opposed the republic from the right, appealed to monarchists and nationalists, and later cooperated with the NSDAP in anti-democratic pressure politics.", coalition:"Sometimes tolerated or joined right cabinets, but cooperation carried major democratic risk."},
  NSDAP:{name:"Nazi Party", full:"Nationalsozialistische Deutsche Arbeiterpartei", color:"#7b4b2a", ideology:"Far-right fascist", stance:"Anti-republic", base:"Cross-class protest vote, radical nationalists, many middle-class voters", summary:"After early failure and the Beer Hall Putsch, the NSDAP used elections and propaganda to become the largest party by 1932, without ever winning an outright majority in a free Reichstag election.", coalition:"Anti-democratic; any coalition including it is treated here as regime-threatening."},
  Others:{name:"Others", full:"Regional, agrarian, economic, and minor parties", color:"#9aa0a6", ideology:"Mixed", stance:"Mixed", base:"Regional interests, farmers, middle-class protest, splinters", summary:"Weimar's electoral rules allowed many small parties into parliament. Some represented narrow interests, which increased fragmentation and complicated coalition math.", coalition:"Varies widely; modeled as politically mixed and unreliable for simple coalition assumptions."}
};

const elections = [
  {date:"19 January 1919", short:"Jan 1919", title:"National Assembly election", context:"The founding democratic election after the November Revolution; women voted nationally for the first time.", turnout:83.0, total:421, note:"The classic 'Weimar Coalition' of SPD, Zentrum, and DDP held a large founding majority.", stress:"Low", stressValue:22, results:{USPD:{vote:7.6,seats:22},SPD:{vote:37.9,seats:163},Zentrum:{vote:19.7,seats:91},DDP:{vote:18.6,seats:75},DVP:{vote:4.4,seats:19},DNVP:{vote:10.3,seats:44},Others:{vote:1.5,seats:7}}},
  {date:"6 June 1920", short:"Jun 1920", title:"First Reichstag election", context:"The democratic center lost its majority amid postwar unrest, Versailles backlash, and polarization.", turnout:79.0, total:459, note:"SPD losses, a USPD surge, and conservative gains made stable majority-building much harder.", stress:"Rising", stressValue:42, results:{KPD:{vote:2.1,seats:4},USPD:{vote:17.6,seats:83},SPD:{vote:21.9,seats:103},Zentrum:{vote:13.6,seats:64},BVP:{vote:4.2,seats:20},DDP:{vote:8.4,seats:39},DVP:{vote:14.0,seats:65},DNVP:{vote:15.1,seats:71},Others:{vote:3.4,seats:10}}},
  {date:"4 May 1924", short:"May 1924", title:"Crisis election after hyperinflation", context:"Held after occupation of the Ruhr, hyperinflation, failed coups, and extreme instability.", turnout:77.4, total:472, note:"Anti-system parties surged: KPD grew and the Nazi/Völkisch alliance entered strongly.", stress:"High", stressValue:68, results:{KPD:{vote:12.6,seats:62},USPD:{vote:0.8,seats:0},SPD:{vote:20.5,seats:100},Zentrum:{vote:13.4,seats:65},BVP:{vote:3.2,seats:16},DDP:{vote:5.7,seats:28},DVP:{vote:9.2,seats:45},DNVP:{vote:19.5,seats:95},NSDAP:{vote:6.6,seats:32},Others:{vote:8.5,seats:29}}},
  {date:"7 December 1924", short:"Dec 1924", title:"Stabilization election", context:"After currency stabilization and relative recovery, extremist vote shares fell compared with May.", turnout:78.8, total:493, note:"The SPD recovered, DNVP remained strong, and the Nazi/Völkisch bloc collapsed to 14 seats.", stress:"Moderate", stressValue:48, results:{KPD:{vote:9.0,seats:45},USPD:{vote:0.3,seats:0},SPD:{vote:26.0,seats:131},Zentrum:{vote:13.6,seats:69},BVP:{vote:3.7,seats:19},DDP:{vote:6.3,seats:32},DVP:{vote:10.1,seats:51},DNVP:{vote:20.5,seats:103},NSDAP:{vote:3.0,seats:14},Others:{vote:7.5,seats:29}}},
  {date:"20 May 1928", short:"May 1928", title:"High point of relative normalcy", context:"The republic looked more stable; the SPD gained and the Nazis remained small.", turnout:75.6, total:491, note:"A broad Müller Grand Coalition was possible: SPD, Zentrum, DDP, DVP, and BVP.", stress:"Moderate", stressValue:38, results:{KPD:{vote:10.6,seats:54},USPD:{vote:0.1,seats:0},SPD:{vote:29.8,seats:153},Zentrum:{vote:12.1,seats:61},BVP:{vote:3.1,seats:17},DDP:{vote:4.8,seats:25},DVP:{vote:8.7,seats:45},DNVP:{vote:14.2,seats:73},NSDAP:{vote:2.6,seats:12},Others:{vote:14.0,seats:51}}},
  {date:"14 September 1930", short:"Sep 1930", title:"Depression breakthrough", context:"The Great Depression and Brüning's emergency-rule politics transformed the party system.", turnout:82.0, total:577, note:"The NSDAP jumped to 107 seats, making normal parliamentary majorities far more difficult.", stress:"Severe", stressValue:76, results:{KPD:{vote:13.1,seats:77},USPD:{vote:0.03,seats:0},SPD:{vote:24.5,seats:143},Zentrum:{vote:11.8,seats:68},BVP:{vote:3.0,seats:19},DDP:{vote:3.8,seats:20},DVP:{vote:4.5,seats:30},DNVP:{vote:7.0,seats:41},NSDAP:{vote:18.3,seats:107},Others:{vote:14.0,seats:72}}},
  {date:"31 July 1932", short:"Jul 1932", title:"Nazi plurality", context:"Amid depression, street violence, and presidential cabinets, the NSDAP became the largest party.", turnout:84.1, total:608, note:"NSDAP and KPD together held an anti-parliamentary blocking majority, making a normal democratic cabinet nearly impossible.", stress:"Critical", stressValue:91, results:{KPD:{vote:14.3,seats:89},SPD:{vote:21.6,seats:133},Zentrum:{vote:12.4,seats:75},BVP:{vote:3.2,seats:22},DDP:{vote:1.0,seats:4},DVP:{vote:1.2,seats:7},DNVP:{vote:5.9,seats:37},NSDAP:{vote:37.3,seats:230},Others:{vote:3.1,seats:11}}},
  {date:"6 November 1932", short:"Nov 1932", title:"Nazi setback, deadlock remains", context:"The Nazis lost seats but remained largest; KPD rose, and parliamentary deadlock persisted.", turnout:80.6, total:584, note:"A majority still required either anti-system parties or an ideologically unrealistic super-coalition.", stress:"Critical", stressValue:88, results:{KPD:{vote:16.9,seats:100},SPD:{vote:20.4,seats:121},Zentrum:{vote:11.9,seats:70},BVP:{vote:3.1,seats:20},DDP:{vote:1.0,seats:2},DVP:{vote:1.9,seats:11},DNVP:{vote:8.3,seats:51},NSDAP:{vote:33.1,seats:196},Others:{vote:3.3,seats:13}}},
  {date:"5 March 1933", short:"Mar 1933", title:"Last contested election", context:"Held after Hitler became chancellor and amid intimidation after the Reichstag Fire.", turnout:88.7, total:647, note:"The NSDAP still lacked a standalone majority, but NSDAP + DNVP had a parliamentary majority under coercive conditions.", stress:"Collapse", stressValue:97, results:{KPD:{vote:12.3,seats:81},SPD:{vote:18.3,seats:120},Zentrum:{vote:11.3,seats:73},BVP:{vote:2.7,seats:19},DDP:{vote:0.9,seats:5},DVP:{vote:1.1,seats:2},DNVP:{vote:8.0,seats:52},NSDAP:{vote:43.9,seats:288},Others:{vote:1.5,seats:7}}}
];

const presets = [
  {name:"Weimar Coalition", parties:["SPD","Zentrum","DDP"]},
  {name:"Grand Coalition", parties:["SPD","Zentrum","BVP","DDP","DVP"]},
  {name:"Bourgeois Center-Right", parties:["Zentrum","BVP","DDP","DVP","DNVP"]},
  {name:"Left Bloc", parties:["KPD","USPD","SPD"]},
  {name:"NSDAP + DNVP", parties:["NSDAP","DNVP"]},
  {name:"Anti-System Bloc", parties:["KPD","NSDAP","DNVP"]}
];

const timeline = [
  ["1918–1919","Republic founded","The monarchy collapses; a new constitution creates a parliamentary democracy with a strong elected president."],
  ["1920","Center loses majority","The original pro-republic coalition loses its dominant majority, beginning chronic coalition fragility."],
  ["1923","Crisis year","Ruhr occupation, hyperinflation, political violence, and the Beer Hall Putsch test the state."],
  ["1924–1928","Relative stabilization","Currency reform, foreign-policy stabilization, and partial recovery reduce extremist momentum for a time."],
  ["1929–1930","Depression shock","Economic collapse destroys confidence, radicalizes voters, and breaks the last grand coalition."],
  ["1930–1932","Presidential cabinets","Chancellors increasingly govern through presidential emergency decrees rather than stable Reichstag majorities."],
  ["1933","Democratic endgame","Hitler becomes chancellor; the Reichstag Fire, emergency measures, and Enabling Act destroy parliamentary democracy."]
];

let currentElection = 0;
let chartMode = "seats";
const selected = new Set();
const $ = id => document.getElementById(id);
const majority = e => Math.floor(e.total/2)+1;

function sortedResults(e){return Object.entries(e.results).sort((a,b)=>b[1].seats-a[1].seats)}
function setStress(e){
  const ring = document.querySelector('.stress-ring');
  ring.style.background = `conic-gradient(var(--gold) 0 ${e.stressValue}%, rgba(255,255,255,.08) ${e.stressValue}% 100%)`;
  $('stressNumber').textContent = e.stress;
}
function renderElection(){
  const e=elections[currentElection];
  const top=sortedResults(e)[0][0];
  $('heroYear').textContent=e.short;
  $('heroSeats').textContent=e.total;
  $('heroTurnout').textContent=e.turnout.toFixed(1)+'%';
  $('heroMajority').textContent=majority(e);
  setStress(e);
  $('electionDate').textContent=e.date;
  $('electionTitle').textContent=e.title;
  $('electionContext').textContent=e.context;
  $('totalSeats').textContent=e.total;
  $('majoritySeats').textContent=majority(e);
  $('turnout').textContent=e.turnout.toFixed(1)+'%';
  $('topParty').textContent=top;
  $('electionNote').textContent=e.note;
  $('scrubLabel').textContent=e.short;
  $('coalitionElection').textContent=`${e.short} coalition math`;
  selected.clear();
  renderChart();renderCoalitionChecks();renderCoalition();renderPresets();
}
function renderChart(){
  const e=elections[currentElection];
  const maxVal = chartMode==='seats' ? Math.max(...Object.values(e.results).map(r=>r.seats)) : Math.max(...Object.values(e.results).map(r=>r.vote));
  $('stackedBar').innerHTML = Object.entries(e.results).map(([key,r])=>`<div class="stack-segment" title="${key}: ${r.seats} seats" style="width:${(r.seats/e.total)*100}%;background:${parties[key].color}"></div>`).join('');
  $('chart').innerHTML = sortedResults(e).map(([key,r])=>{
    const val = chartMode==='seats'?r.seats:r.vote;
    const label = chartMode==='seats'?`${r.seats}`:`${r.vote}%`;
    return `<div class="bar-row"><div class="bar-label" style="color:${parties[key].color}">${key}</div><div class="bar-track"><div class="bar-fill" style="width:${(val/maxVal)*100}%;background:${parties[key].color}"></div></div><div class="bar-value">${label}</div></div>`;
  }).join('');
}
function renderCoalitionChecks(){
  const e=elections[currentElection];
  $('partyChecks').innerHTML = Object.entries(e.results).filter(([_,r])=>r.seats>0).map(([key,r])=>`<label class="check-card"><input type="checkbox" data-party="${key}" ${selected.has(key)?'checked':''}><span class="party-dot" style="background:${parties[key].color}"></span><span class="check-meta"><b>${key}</b><span>${r.seats} seats • ${parties[key].stance}</span></span></label>`).join('');
  document.querySelectorAll('.check-card input').forEach(input=>input.addEventListener('change',()=>{input.checked?selected.add(input.dataset.party):selected.delete(input.dataset.party);renderCoalition();}));
}
function renderCoalition(){
  const e=elections[currentElection];
  const seats=[...selected].reduce((sum,p)=>sum+(e.results[p]?.seats||0),0);
  const maj=majority(e);
  $('selectedSeats').textContent=seats;
  $('neededSeats').textContent=maj;
  $('coalitionStatus').textContent= seats>=maj ? 'Majority' : seats===0 ? 'No coalition' : 'Short';
  $('coalitionFill').style.width=Math.min(100,(seats/e.total)*100)+'%';
  $('majorityLine').style.left=(maj/e.total)*100+'%';
  $('coalitionVerdict').textContent=coalitionVerdict([...selected],seats,maj);
}
function coalitionVerdict(list,seats,maj){
  if(!list.length) return 'Choose parties to test combinations.';
  const names=list.join(' + ');
  const hasN=list.includes('NSDAP'), hasK=list.includes('KPD'), hasDNVP=list.includes('DNVP');
  const pro=list.filter(p=>['SPD','Zentrum','DDP'].includes(p)).length;
  const libs=list.filter(p=>['DDP','DVP'].includes(p)).length;
  if(seats<maj) return `${names} reaches ${seats} seats, short of the ${maj}-seat majority. It could obstruct, bargain, or tolerate, but it cannot reliably govern alone.`;
  if(hasN) return `${names} reaches a majority, but this is not a normal democratic coalition. Any cabinet relying on the NSDAP would be regime-threatening because the party opposed the republic itself.`;
  if(hasK && (list.includes('SPD')||list.includes('Zentrum')||list.includes('DVP'))) return `${names} has the numbers, but it is ideologically explosive. KPD hostility to parliamentary democracy and to the SPD makes this highly implausible as a stable Weimar government.`;
  if(hasDNVP && pro>=2) return `${names} has a majority, but it spans republican defenders and anti-republican national conservatives. It might pass measures tactically, but stability would be doubtful.`;
  if(list.includes('SPD') && list.includes('Zentrum') && (list.includes('DDP')||list.includes('DVP'))) return `${names} is a plausible democratic majority or grand-coalition formula, though labor, budget, religion, and foreign-policy disputes could still break it.`;
  if(libs && list.includes('Zentrum')) return `${names} is a plausible bourgeois/center cabinet if tolerated by others, but its social base is narrower than a true majority republic coalition.`;
  return `${names} reaches ${seats} seats. Numerically viable, but historical plausibility depends on whether these parties could accept the republic and compromise on economic crisis policy.`;
}
function renderPresets(){
  const e=elections[currentElection];
  $('presetButtons').innerHTML=presets.map(p=>`<button data-preset="${p.name}">${p.name}</button>`).join('');
  document.querySelectorAll('[data-preset]').forEach(btn=>btn.addEventListener('click',()=>{
    selected.clear();
    const preset=presets.find(p=>p.name===btn.dataset.preset);
    preset.parties.forEach(p=>{ if(e.results[p]?.seats>0) selected.add(p); });
    renderCoalitionChecks();renderCoalition();
  }));
}
function renderParties(){
  $('partyGrid').innerHTML=Object.entries(parties).filter(([k])=>k!=="Others").map(([key,p])=>`<article class="party-card" style="--party:${p.color}"><span class="tag">${p.stance}</span><h3>${key} — ${p.name}</h3><p><b>${p.full}</b></p><p>${p.summary}</p><div class="mini-list"><div><span>Ideology</span><b>${p.ideology}</b></div><div><span>Base</span><b>${p.base}</b></div><div><span>Coalition role</span><b>${p.coalition}</b></div></div></article>`).join('');
}
function renderTimeline(){
  $('timelineList').innerHTML=timeline.map(t=>`<div class="time-item"><b>${t[0]}</b><div><h3>${t[1]}</h3><p>${t[2]}</p></div></div>`).join('');
}
function init(){
  $('tickRow').innerHTML=elections.map(e=>`<span>${e.short}</span>`).join('');
  $('electionRange').addEventListener('input',e=>{currentElection=Number(e.target.value);renderElection();});
  document.querySelectorAll('.mode-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.mode-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');chartMode=btn.dataset.mode;renderChart();}));
  $('clearCoalition').addEventListener('click',()=>{selected.clear();renderCoalitionChecks();renderCoalition();});
  renderParties();renderTimeline();renderElection();
}
init();
