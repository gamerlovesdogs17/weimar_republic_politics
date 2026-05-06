const parties = {
  KPD:{name:"Communist",full:"Communist Party of Germany",color:"#b8172f",family:"Revolutionary left",stance:"Anti-republic left",ideology:"Marxist-Leninist communism",base:"Industrial workers, unemployed, radical left",coalition:"Usually outside coalition math",system:"Opposed Weimar parliamentary democracy",summary:"The KPD treated the republic as a capitalist order to be replaced, and its hostility toward the SPD made left-majority cooperation extremely difficult.",depression:"Called for revolutionary class politics, worker control, nationalization, resistance to austerity, and a break with capitalist institutions. Its line often attacked both the right and the SPD as enemies of workers."},
  USPD:{name:"Independent Social Democratic",full:"Independent Social Democratic Party",color:"#d45d79",family:"Radical socialist",stance:"Left opposition",ideology:"Democratic socialism / left socialism",base:"Anti-war socialists, workers, radicals",coalition:"Early left alternative",system:"Ambivalent; many later rejoined SPD or moved to KPD",summary:"The USPD was important in the early republic, then faded as members moved back to the SPD or toward communism.",depression:"No longer a major national force by the depression period, but its old constituency split between SPD reformism and KPD revolutionary politics."},
  SPD:{name:"Social Democratic",full:"Social Democratic Party of Germany",color:"#e04468",family:"Republican left",stance:"Pro-republic left",ideology:"Social democracy",base:"Trade unions, industrial workers, urban republicans",coalition:"Core republican anchor",system:"Defended parliamentary democracy",summary:"The SPD was the largest consistent defender of the republic on the left, but paid a political price for compromise, crisis management, and association with Weimar itself.",depression:"Defended unemployment insurance, wages, unions, social welfare, and democratic legality. It generally opposed deep austerity but was constrained by coalition politics and fear of destabilization."},
  Zentrum:{name:"Centre",full:"Catholic Centre Party",color:"#46a6d9",family:"Political Catholicism",stance:"Pro-republic center",ideology:"Christian democratic / Catholic center",base:"Catholics across classes, Rhineland, Westphalia, south/west",coalition:"Frequent pivot party",system:"Usually worked within the republic",summary:"Zentrum was one of Weimar’s indispensable coalition parties, often balancing left and right while protecting Catholic interests.",depression:"Favored fiscal discipline, social order, confessional protections, and negotiated crisis management. Under Brüning, much of the party accepted austerity and emergency-decree governance as a stabilizing strategy."},
  BVP:{name:"Bavarian People’s",full:"Bavarian People’s Party",color:"#2e83b7",family:"Bavarian Catholic right",stance:"Regional Catholic right",ideology:"Conservative Catholic regionalism",base:"Bavarian Catholics, rural conservatives",coalition:"Right-leaning Catholic partner",system:"Worked within politics but more conservative/regional than Zentrum",summary:"The BVP split from Zentrum after World War I and represented Bavarian Catholic conservatism with a stronger regional identity.",depression:"Supported conservative fiscal policy, regional and Catholic interests, order, agriculture, and resistance to socialist solutions; often closer to conservative cabinets than to the SPD."},
  DDP:{name:"Democratic / State",full:"German Democratic Party / German State Party",color:"#64d2ff",family:"Liberal republican",stance:"Pro-republic liberal",ideology:"Left-liberal constitutionalism",base:"Educated middle class, professionals, liberal Protestants",coalition:"Founding republican partner",system:"Strongly pro-republic",summary:"The DDP helped found Weimar democracy but steadily lost voters as liberal politics collapsed under social polarization.",depression:"Supported constitutional government, legal reform, credit restoration, international cooperation, and moderate recovery policy, but lacked the mass base to impose a large program."},
  DVP:{name:"People’s",full:"German People’s Party",color:"#2fb7a3",family:"National liberal",stance:"Center-right liberal",ideology:"Business liberal / national liberal",base:"Business, industry, Protestant middle classes",coalition:"Possible center-right or grand-coalition partner",system:"Initially skeptical, later partly reconciled under Stresemann",summary:"The DVP moved from monarchist skepticism toward pragmatic participation, especially under Gustav Stresemann, then drifted right after his death.",depression:"Favored business confidence, budget discipline, tax restraint, protection of property, foreign-credit normalization, and opposition to socialist redistribution."},
  DNVP:{name:"National People’s",full:"German National People’s Party",color:"#244f7a",family:"National conservative",stance:"Anti-republic right",ideology:"Monarchist / nationalist conservative",base:"Landowners, conservative Protestants, nationalists, old elites",coalition:"Right-wing pressure partner",system:"Often hostile to Weimar legitimacy",summary:"The DNVP represented old conservative nationalism and anti-Weimar resentment, though it sometimes entered or tolerated cabinets.",depression:"Pushed nationalism, tariff/protectionist themes, anti-socialism, revision of Versailles, authoritarian government, agriculture and business relief, and rollback of republican-left policies."},
  NSDAP:{name:"Nazi",full:"National Socialist German Workers’ Party",color:"#7b3f98",family:"Fascist far right",stance:"Anti-republic far right",ideology:"Nazism / fascist ultranationalism",base:"Cross-class protest voters, lower middle class, rural Protestants, unemployed, nationalists",coalition:"Regime-threatening if included",system:"Sought to destroy the republic",summary:"The NSDAP fused ultranationalism, antisemitism, anti-Marxism, charismatic leadership, and mass propaganda into the republic’s most dangerous anti-system force.",depression:"Promised jobs, public works, national revival, autarky, repudiation of Versailles, anti-Marxist repression, and antisemitic scapegoating while keeping many economic details deliberately flexible."},
  WP:{name:"Economic",full:"Reich Party of the German Middle Class / Economic Party",color:"#98b45f",family:"Middle-class protest",stance:"Interest-party right",ideology:"Small-business interest politics",base:"Shopkeepers, small proprietors, Mittelstand",coalition:"Minor bargaining party",system:"Generally parliamentary but anti-tax and anti-left",summary:"The Economic Party voiced small-business frustration with taxes, large firms, unions, and state burdens.",depression:"Sought tax relief, protection for small business, cuts to burdensome spending, credit access, and defense of middle-class property against both big capital and socialism."},
  Others:{name:"Others",full:"Other small parties",color:"#7a879a",family:"Fragmented minor parties",stance:"Mixed",ideology:"Regional, interest, protest, minority",base:"Varied",coalition:"Fragmentation factor",system:"Mixed",summary:"Minor parties reflected Weimar’s electoral fragmentation and could complicate stable parliamentary arithmetic.",depression:"Mixed programs: regional relief, farmer demands, middle-class protest, minority rights, or splinter nationalist/social reform platforms."}
};

const elections = [
  {date:"19 January 1919", short:"Jan 1919", title:"National Assembly election", context:"The founding democratic election after imperial collapse, with women voting nationally for the first time.", turnout:83.0, total:421, note:"The SPD, Zentrum, and DDP could form the classic Weimar Coalition with a large democratic majority.", stress:"Low", stressValue:18, cabinetSupport:78, results:{KPD:{vote:0,seats:0},USPD:{vote:7.6,seats:22},SPD:{vote:37.9,seats:165},Zentrum:{vote:19.7,seats:91},BVP:{vote:0,seats:0},DDP:{vote:18.5,seats:75},DVP:{vote:4.4,seats:19},DNVP:{vote:10.3,seats:44},NSDAP:{vote:0,seats:0},WP:{vote:0,seats:0},Others:{vote:1.6,seats:5}}, regions:{prussia:"SPD",bavaria:"Zentrum",rhineland:"Zentrum",saxony:"SPD",ruhr:"SPD",eastPrussia:"DNVP",north:"SPD",berlin:"SPD",silesia:"Zentrum",baden:"DDP"}},
  {date:"6 June 1920", short:"Jun 1920", title:"First Reichstag election", context:"The pro-republic founding parties lost their overwhelming position as voters punished crisis and compromise.", turnout:79.2, total:459, note:"The original Weimar Coalition no longer had a commanding majority, making cabinets more fragile.", stress:"Guarded", stressValue:35, cabinetSupport:37, results:{KPD:{vote:2.1,seats:4},USPD:{vote:17.9,seats:83},SPD:{vote:21.7,seats:102},Zentrum:{vote:13.6,seats:64},BVP:{vote:4.4,seats:21},DDP:{vote:8.3,seats:39},DVP:{vote:13.9,seats:65},DNVP:{vote:15.1,seats:71},NSDAP:{vote:0,seats:0},WP:{vote:0,seats:0},Others:{vote:3.0,seats:10}}, regions:{prussia:"SPD",bavaria:"BVP",rhineland:"Zentrum",saxony:"USPD",ruhr:"SPD",eastPrussia:"DNVP",north:"DVP",berlin:"USPD",silesia:"Zentrum",baden:"DDP"}},
  {date:"4 May 1924", short:"May 1924", title:"Crisis-election after 1923", context:"Hyperinflation, Ruhr occupation, and political violence boosted anti-system forces.", turnout:77.4, total:472, note:"The DNVP, KPD, and early Nazi lists showed the electoral damage caused by the crisis year.", stress:"High", stressValue:58, cabinetSupport:45, results:{KPD:{vote:12.6,seats:62},USPD:{vote:0.8,seats:0},SPD:{vote:20.5,seats:100},Zentrum:{vote:13.4,seats:65},BVP:{vote:3.2,seats:16},DDP:{vote:5.7,seats:28},DVP:{vote:9.2,seats:45},DNVP:{vote:19.5,seats:95},NSDAP:{vote:6.5,seats:32},WP:{vote:2.4,seats:10},Others:{vote:6.2,seats:19}}, regions:{prussia:"DNVP",bavaria:"NSDAP",rhineland:"Zentrum",saxony:"KPD",ruhr:"SPD",eastPrussia:"DNVP",north:"DNVP",berlin:"KPD",silesia:"Zentrum",baden:"Zentrum"}},
  {date:"7 December 1924", short:"Dec 1924", title:"Stabilization election", context:"After currency stabilization, extremist momentum eased and moderate parties recovered somewhat.", turnout:78.8, total:493, note:"The NSDAP fell sharply while the SPD recovered; still, coalition politics remained complicated.", stress:"Elevated", stressValue:46, cabinetSupport:52, results:{KPD:{vote:9.0,seats:45},USPD:{vote:0.3,seats:0},SPD:{vote:26.0,seats:131},Zentrum:{vote:13.6,seats:69},BVP:{vote:3.7,seats:19},DDP:{vote:6.3,seats:32},DVP:{vote:10.1,seats:51},DNVP:{vote:20.5,seats:103},NSDAP:{vote:3.0,seats:14},WP:{vote:2.3,seats:11},Others:{vote:5.2,seats:18}}, regions:{prussia:"SPD",bavaria:"BVP",rhineland:"Zentrum",saxony:"SPD",ruhr:"SPD",eastPrussia:"DNVP",north:"DNVP",berlin:"SPD",silesia:"Zentrum",baden:"Zentrum"}},
  {date:"20 May 1928", short:"May 1928", title:"High point of republican parties", context:"The SPD won clearly and the Nazis remained small, but the party system was still fragmented.", turnout:75.6, total:491, note:"This was the strongest late-Weimar opening for a democratic grand coalition, but economic conflict soon destroyed it.", stress:"Moderate", stressValue:38, cabinetSupport:62, results:{KPD:{vote:10.6,seats:54},USPD:{vote:0,seats:0},SPD:{vote:29.8,seats:153},Zentrum:{vote:12.1,seats:61},BVP:{vote:3.1,seats:17},DDP:{vote:4.9,seats:25},DVP:{vote:8.7,seats:45},DNVP:{vote:14.2,seats:73},NSDAP:{vote:2.6,seats:12},WP:{vote:4.5,seats:23},Others:{vote:9.5,seats:28}}, regions:{prussia:"SPD",bavaria:"BVP",rhineland:"Zentrum",saxony:"SPD",ruhr:"SPD",eastPrussia:"DNVP",north:"SPD",berlin:"SPD",silesia:"SPD",baden:"Zentrum"}},
  {date:"14 September 1930", short:"Sep 1930", title:"Depression breakthrough", context:"The Great Depression broke the grand coalition and produced a massive Nazi electoral breakthrough.", turnout:82.0, total:577, note:"The NSDAP became the second-largest party; stable democratic-majority government became much harder.", stress:"Severe", stressValue:72, cabinetSupport:39, results:{KPD:{vote:13.1,seats:77},USPD:{vote:0,seats:0},SPD:{vote:24.5,seats:143},Zentrum:{vote:11.8,seats:68},BVP:{vote:3.0,seats:19},DDP:{vote:3.8,seats:20},DVP:{vote:4.5,seats:30},DNVP:{vote:7.0,seats:41},NSDAP:{vote:18.3,seats:107},WP:{vote:3.9,seats:23},Others:{vote:10.1,seats:49}}, regions:{prussia:"SPD",bavaria:"NSDAP",rhineland:"Zentrum",saxony:"KPD",ruhr:"SPD",eastPrussia:"NSDAP",north:"NSDAP",berlin:"KPD",silesia:"NSDAP",baden:"Zentrum"}},
  {date:"31 July 1932", short:"Jul 1932", title:"Nazi plurality", context:"The Nazis became the largest party in the Reichstag, while the KPD also grew.", turnout:84.1, total:608, note:"The two largest anti-system parties together could block normal parliamentary government.", stress:"Critical", stressValue:90, cabinetSupport:23, results:{KPD:{vote:14.3,seats:89},USPD:{vote:0,seats:0},SPD:{vote:21.6,seats:133},Zentrum:{vote:12.4,seats:75},BVP:{vote:3.2,seats:22},DDP:{vote:1.0,seats:4},DVP:{vote:1.2,seats:7},DNVP:{vote:5.9,seats:37},NSDAP:{vote:37.3,seats:230},WP:{vote:0.3,seats:2},Others:{vote:2.8,seats:9}}, regions:{prussia:"NSDAP",bavaria:"NSDAP",rhineland:"Zentrum",saxony:"NSDAP",ruhr:"SPD",eastPrussia:"NSDAP",north:"NSDAP",berlin:"KPD",silesia:"NSDAP",baden:"NSDAP"}},
  {date:"6 November 1932", short:"Nov 1932", title:"Nazi setback, deadlock remains", context:"The Nazis lost seats but remained largest; KPD rose and parliamentary deadlock persisted.", turnout:80.6, total:584, note:"A majority still required either anti-system parties or an ideologically unrealistic super-coalition.", stress:"Critical", stressValue:88, cabinetSupport:20, results:{KPD:{vote:16.9,seats:100},USPD:{vote:0,seats:0},SPD:{vote:20.4,seats:121},Zentrum:{vote:11.9,seats:70},BVP:{vote:3.1,seats:20},DDP:{vote:1.0,seats:2},DVP:{vote:1.9,seats:11},DNVP:{vote:8.3,seats:51},NSDAP:{vote:33.1,seats:196},WP:{vote:0.8,seats:3},Others:{vote:2.6,seats:10}}, regions:{prussia:"NSDAP",bavaria:"NSDAP",rhineland:"Zentrum",saxony:"KPD",ruhr:"SPD",eastPrussia:"NSDAP",north:"NSDAP",berlin:"KPD",silesia:"NSDAP",baden:"NSDAP"}},
  {date:"5 March 1933", short:"Mar 1933", title:"Last contested election", context:"Held after Hitler became chancellor and amid intimidation following the Reichstag Fire.", turnout:88.7, total:647, note:"The NSDAP still lacked a standalone majority, but NSDAP + DNVP held a majority under coercive conditions.", stress:"Collapse", stressValue:97, cabinetSupport:52, results:{KPD:{vote:12.3,seats:81},USPD:{vote:0,seats:0},SPD:{vote:18.3,seats:120},Zentrum:{vote:11.3,seats:73},BVP:{vote:2.7,seats:19},DDP:{vote:0.9,seats:5},DVP:{vote:1.1,seats:2},DNVP:{vote:8.0,seats:52},NSDAP:{vote:43.9,seats:288},WP:{vote:0.3,seats:0},Others:{vote:1.2,seats:7}}, regions:{prussia:"NSDAP",bavaria:"NSDAP",rhineland:"Zentrum",saxony:"NSDAP",ruhr:"SPD",eastPrussia:"NSDAP",north:"NSDAP",berlin:"KPD",silesia:"NSDAP",baden:"NSDAP"}}
];

const regionShapes = [
  {id:"eastPrussia", name:"East Prussia", x:605,y:70,w:115,h:82,label:"E. Prussia", note:"Detached eastern province. Conservative nationalism and later Nazi strength were significant, with rural and Protestant political currents."},
  {id:"north", name:"North Germany", x:270,y:80,w:205,h:95,label:"North", note:"A Protestant north with liberal, conservative, socialist, and later Nazi competition. Rural areas moved differently than port and industrial cities."},
  {id:"prussia", name:"Prussian heartland", x:300,y:190,w:230,h:205,label:"Prussia", note:"The largest political arena in the republic. Its state government was long a republican stronghold until conservative presidential intervention in 1932."},
  {id:"berlin", name:"Berlin", x:405,y:250,w:62,h:52,label:"Berlin", note:"Capital city politics were intense: SPD, USPD/KPD, liberals, and nationalist movements all fought over urban voters."},
  {id:"rhineland", name:"Rhineland", x:135,y:285,w:126,h:170,label:"Rhine", note:"Catholic political culture made Zentrum unusually strong. Separatism, occupation, reparations, and industry shaped the region."},
  {id:"ruhr", name:"Ruhr / Westphalia", x:205,y:245,w:110,h:105,label:"Ruhr", note:"Industrial labor territory with strong SPD and KPD currents, plus Catholic and conservative blocs in surrounding areas."},
  {id:"saxony", name:"Saxony / Thuringia", x:378,y:405,w:175,h:116,label:"Saxony", note:"Industrial and urban left strength was important here, but the region also became contested by right-wing movements."},
  {id:"silesia", name:"Silesia", x:545,y:355,w:140,h:130,label:"Silesia", note:"A mixed confessional and borderland region where Zentrum, SPD, national conservatives, and later Nazis all had room to compete."},
  {id:"baden", name:"Baden / Württemberg", x:238,y:520,w:155,h:125,label:"SW", note:"The southwest combined Catholic, liberal, and conservative traditions. It often looked more moderate than the most polarized industrial and eastern zones."},
  {id:"bavaria", name:"Bavaria", x:425,y:548,w:190,h:145,label:"Bavaria", note:"Catholic regionalism gave the BVP strength, while Munich and rural Protestant/Catholic divides later became important to far-right mobilization."}
];

const presets = [
  {name:"Weimar Coalition", parties:["SPD","Zentrum","DDP"]},
  {name:"Grand Coalition", parties:["SPD","Zentrum","BVP","DDP","DVP"]},
  {name:"Bourgeois Center-Right", parties:["Zentrum","BVP","DDP","DVP","DNVP"]},
  {name:"Left Bloc", parties:["KPD","USPD","SPD"]},
  {name:"NSDAP + DNVP", parties:["NSDAP","DNVP"]},
  {name:"Anti-System Bloc", parties:["KPD","NSDAP","DNVP"]}
];

const governments = [
  ["Scheidemann","Feb–Jun 1919","Philipp Scheidemann","SPD + Zentrum + DDP","Founding coalition","First cabinet of the republic; resigned over the Versailles Treaty settlement."],
  ["Bauer","Jun 1919–Mar 1920","Gustav Bauer","SPD + Zentrum + DDP","Treaty crisis","Implemented the new constitutional order while confronting Versailles, unrest, and administrative transition."],
  ["Müller I","Mar–Jun 1920","Hermann Müller","SPD + Zentrum + DDP","Kapp aftermath","Brief democratic coalition after the Kapp Putsch crisis."],
  ["Fehrenbach","Jun 1920–May 1921","Constantin Fehrenbach","Zentrum + DDP + DVP","Minority / center-right","First Reichstag election weakened the Weimar Coalition and pushed government rightward."],
  ["Wirth I–II","May 1921–Nov 1922","Joseph Wirth","Zentrum + SPD + DDP","Reparations and fulfillment","Tried to work within treaty obligations while resisting nationalist pressure."],
  ["Cuno","Nov 1922–Aug 1923","Wilhelm Cuno","Non-party with bourgeois support","Technocratic crisis cabinet","Ruhr occupation and passive resistance contributed to hyperinflation and collapse of confidence."],
  ["Stresemann I–II","Aug–Nov 1923","Gustav Stresemann","DVP + SPD + Zentrum + DDP","Grand coalition","Ended passive resistance, began stabilization, and survived extreme pressure from left and right."],
  ["Marx I–II","Nov 1923–Jan 1925","Wilhelm Marx","Zentrum-led center cabinets","Stabilization cabinets","Managed post-hyperinflation stabilization and the shift toward relative normalcy."],
  ["Luther I–II","Jan 1925–May 1926","Hans Luther","Center-right / non-party leadership","Conservative-leaning stabilization","Worked through Locarno-era diplomacy and disputes over symbols, reparations, and coalition balance."],
  ["Marx III–IV","May 1926–Jun 1928","Wilhelm Marx","Zentrum-led, shifting center/right support","Late stabilization","Governed in the relative-stability period before the 1928 SPD victory."],
  ["Müller II","Jun 1928–Mar 1930","Hermann Müller","SPD + Zentrum + BVP + DDP + DVP","Last parliamentary grand coalition","Collapsed over unemployment insurance and fiscal crisis as the Depression intensified."],
  ["Brüning I–II","Mar 1930–May 1932","Heinrich Brüning","Zentrum-led presidential cabinet","Emergency-decree austerity","Relied on Hindenburg and Article 48; pursued deflationary austerity and reparations diplomacy."],
  ["Papen","Jun–Nov 1932","Franz von Papen","Conservative presidential cabinet","Authoritarian turn","Lacked Reichstag support; removed the Prussian state government and tried rule from above."],
  ["Schleicher","Dec 1932–Jan 1933","Kurt von Schleicher","Presidential cabinet","Failed split strategy","Tried to split the Nazis and build labor/conservative support; failed quickly."],
  ["Hitler","Jan–Mar 1933","Adolf Hitler","NSDAP + DNVP with conservative elites","Democratic collapse","Used office, emergency powers, intimidation, and the Enabling Act to destroy parliamentary democracy."]
];

const timeline = [
  ["1918–1919","Republic founded","The monarchy collapses; a new constitution creates a parliamentary democracy with a strong elected president."],
  ["1920","Founding majority lost","The original republican coalition loses its dominant majority, beginning chronic coalition fragility."],
  ["1923","Crisis year","Ruhr occupation, hyperinflation, political violence, and the Beer Hall Putsch test the state."],
  ["1924–1928","Relative stabilization","Currency reform, foreign-policy stabilization, and partial recovery reduce extremist momentum for a time."],
  ["1929–1930","Depression shock","Economic collapse destroys confidence, radicalizes voters, and breaks the last grand coalition."],
  ["1930–1932","Presidential cabinets","Chancellors increasingly govern through presidential emergency decrees rather than stable Reichstag majorities."],
  ["1933","Democratic endgame","Hitler becomes chancellor; emergency measures and the Enabling Act destroy parliamentary democracy."]
];

let currentElection = 0;
let chartMode = "seats";
const selected = new Set();
const $ = id => document.getElementById(id);
const majority = e => Math.floor(e.total/2)+1;
const systemParties = ["SPD","Zentrum","BVP","DDP","DVP","WP"];
const antiSystemParties = ["KPD","DNVP","NSDAP"];
function sortedResults(e){return Object.entries(e.results).sort((a,b)=>b[1].seats-a[1].seats)}
function seatsOf(e, list){return list.reduce((sum,p)=>sum+(e.results[p]?.seats||0),0)}
function votesOf(e, list){return list.reduce((sum,p)=>sum+(e.results[p]?.vote||0),0)}

function setStress(e){
  const ring = document.querySelector('.stress-ring');
  ring.style.background = `conic-gradient(var(--accent) 0 ${e.stressValue}%, rgba(255,255,255,.08) ${e.stressValue}% 100%)`;
  $('stressNumber').textContent = e.stress;
}
function renderElection(){
  const e=elections[currentElection];
  const top=sortedResults(e)[0][0];
  $('heroYear').textContent=e.short; $('heroSeats').textContent=e.total; $('heroTurnout').textContent=e.turnout.toFixed(1)+'%'; $('heroMajority').textContent=majority(e); setStress(e);
  $('electionDate').textContent=e.date; $('electionTitle').textContent=e.title; $('electionContext').textContent=e.context; $('totalSeats').textContent=e.total; $('majoritySeats').textContent=majority(e); $('turnout').textContent=e.turnout.toFixed(1)+'%'; $('topParty').textContent=top; $('electionNote').textContent=e.note; $('scrubLabel').textContent=e.short; $('coalitionElection').textContent=`${e.short} coalition math`; $('mapTitle').textContent=`${e.short} regional politics`;
  selected.clear();
  renderChart();renderCoalitionChecks();renderCoalition();renderPresets();renderMap();renderBlocBars();renderSandbox();
}
function renderChart(){
  const e=elections[currentElection];
  const maxVal = chartMode==='seats' ? Math.max(...Object.values(e.results).map(r=>r.seats)) : Math.max(...Object.values(e.results).map(r=>r.vote));
  $('stackedBar').innerHTML = Object.entries(e.results).filter(([_,r])=>r.seats>0).map(([key,r])=>`<div class="stack-segment" title="${key}: ${r.seats} seats" style="width:${(r.seats/e.total)*100}%;background:${parties[key].color}"></div>`).join('');
  $('chart').innerHTML = sortedResults(e).filter(([_,r])=>r.seats>0 || r.vote>0).map(([key,r])=>{
    const val = chartMode==='seats'?r.seats:r.vote;
    const label = chartMode==='seats'?`${r.seats}`:`${r.vote.toFixed(1)}%`;
    return `<div class="bar-row"><div class="bar-label" style="color:${parties[key].color}">${key}</div><div class="bar-track"><div class="bar-fill" style="width:${Math.max(1,(val/maxVal)*100)}%;background:${parties[key].color}"></div></div><div class="bar-value">${label}</div></div>`;
  }).join('');
}
function renderMap(){
  const e=elections[currentElection];
  const svg=$('weimarMap');
  svg.innerHTML = `<defs><filter id="soft"><feDropShadow dx="0" dy="8" stdDeviation="10" flood-opacity=".25"/></filter></defs>` + regionShapes.map(r=>{
    const p=e.regions[r.id]||'Others';
    return `<g data-region="${r.id}" tabindex="0"><rect class="region" x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" rx="24" fill="${parties[p].color}" opacity=".88"/><text class="region-label" x="${r.x+r.w/2}" y="${r.y+r.h/2+7}">${r.label}</text></g>`;
  }).join('');
  document.querySelectorAll('#weimarMap g[data-region]').forEach(g=>{
    const id=g.dataset.region;
    const show=ev=>showRegion(id,ev);
    g.addEventListener('mouseenter',show);g.addEventListener('focus',show);g.addEventListener('mousemove',moveTooltip);g.addEventListener('mouseleave',hideTooltip);g.addEventListener('blur',hideTooltip);g.addEventListener('click',ev=>showRegion(id,ev,true));
  });
  const used=[...new Set(Object.values(e.regions))];
  $('mapLegend').innerHTML=used.map(p=>`<span><i class="swatch" style="background:${parties[p].color}"></i>${p}</span>`).join('');
}
function showRegion(id, ev, pin=false){
  const e=elections[currentElection]; const r=regionShapes.find(x=>x.id===id); const lead=e.regions[id]||'Others'; const party=parties[lead];
  $('mapInfo').innerHTML=`<h3>${r.name}</h3><p>${r.note}</p><div class="region-stats"><div><span>Selected election</span><b>${e.short}</b></div><div><span>Leading tendency shown</span><b style="color:${party.color}">${lead} — ${party.family}</b></div><div><span>Interpretive note</span><b>${party.summary}</b></div></div>`;
  const tt=$('tooltip'); tt.innerHTML=`<b>${r.name}</b><br>${lead} tendency in ${e.short}`; tt.classList.add('show'); moveTooltip(ev);
}
function moveTooltip(ev){ if(!ev) return; const tt=$('tooltip'); tt.style.left=ev.clientX+'px'; tt.style.top=(ev.clientY-12)+'px'; }
function hideTooltip(){ $('tooltip').classList.remove('show'); }
function renderCoalitionChecks(){
  const e=elections[currentElection];
  $('partyChecks').innerHTML = Object.entries(e.results).filter(([_,r])=>r.seats>0).map(([key,r])=>`<label class="check-card"><input type="checkbox" data-party="${key}" ${selected.has(key)?'checked':''}><span class="party-dot" style="background:${parties[key].color}"></span><span class="check-meta"><b>${key}</b><span>${r.seats} seats • ${parties[key].stance}</span></span></label>`).join('');
  document.querySelectorAll('.check-card input').forEach(input=>input.addEventListener('change',()=>{input.checked?selected.add(input.dataset.party):selected.delete(input.dataset.party);renderCoalition();}));
}
function renderCoalition(){
  const e=elections[currentElection]; const seats=seatsOf(e,[...selected]); const maj=majority(e);
  $('selectedSeats').textContent=seats; $('neededSeats').textContent=maj; $('coalitionStatus').textContent= seats>=maj ? 'Majority' : seats===0 ? 'No coalition' : 'Short';
  $('coalitionFill').style.width=Math.min(100,(seats/e.total)*100)+'%'; $('majorityLine').style.left=(maj/e.total)*100+'%'; $('coalitionVerdict').textContent=coalitionVerdict([...selected],seats,maj);
}
function coalitionVerdict(list,seats,maj){
  if(!list.length) return 'Choose parties to test combinations.';
  const names=list.join(' + '); const hasN=list.includes('NSDAP'), hasK=list.includes('KPD'), hasDNVP=list.includes('DNVP'); const pro=list.filter(p=>['SPD','Zentrum','DDP'].includes(p)).length; const libs=list.filter(p=>['DDP','DVP'].includes(p)).length;
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
  document.querySelectorAll('[data-preset]').forEach(btn=>btn.addEventListener('click',()=>{selected.clear(); const preset=presets.find(p=>p.name===btn.dataset.preset); preset.parties.forEach(p=>{ if(e.results[p]?.seats>0) selected.add(p); }); renderCoalitionChecks();renderCoalition();}));
}
function renderParties(){
  $('partyGrid').innerHTML=Object.entries(parties).filter(([k])=>k!=="Others").map(([key,p])=>`<article class="party-card" style="--party:${p.color}"><span class="tag">${p.stance}</span><h3>${key} — ${p.name}</h3><p><b>${p.full}</b></p><p>${p.summary}</p><div class="mini-list"><div><span>Ideology</span><b>${p.ideology}</b></div><div><span>Base</span><b>${p.base}</b></div><div><span>Republic stance</span><b>${p.system}</b></div><div><span>Depression line</span><b>${p.depression}</b></div></div></article>`).join('');
  $('policyGrid').innerHTML=Object.entries(parties).filter(([k])=>!['USPD','Others'].includes(k)).map(([key,p])=>`<article class="policy-card" style="--party:${p.color}"><span class="tag">${p.family}</span><h3>${key}</h3><p>${p.depression}</p></article>`).join('');
}
function renderTimeline(){ $('timelineList').innerHTML=timeline.map(t=>`<div class="time-item"><b>${t[0]}</b><div><h3>${t[1]}</h3><p>${t[2]}</p></div></div>`).join(''); }
function renderGovernments(){
  $('governmentRows').innerHTML=governments.map((g,i)=>`<tr data-gov="${i}"><td><b>${g[0]}</b></td><td>${g[1]}</td><td>${g[2]}</td><td>${g[3]}</td><td>${g[4]}</td></tr>`).join('');
  document.querySelectorAll('[data-gov]').forEach(row=>row.addEventListener('click',()=>{const g=governments[Number(row.dataset.gov)]; $('governmentDetail').innerHTML=`<h3>${g[0]}</h3><p><b>${g[2]}</b>, ${g[1]}</p><p><b>Basis:</b> ${g[3]}</p><p><b>Why it matters:</b> ${g[5]}</p>`;}));
}
function drawLineChart(canvasId, series, opts={}){
  const canvas=$(canvasId); if(!canvas) return; const ctx=canvas.getContext('2d'); const w=canvas.width, h=canvas.height; ctx.clearRect(0,0,w,h); const pad=44; const max=opts.max??Math.max(...series.map(s=>s.v),1); const min=opts.min??0;
  ctx.strokeStyle='rgba(237,246,255,.12)'; ctx.lineWidth=1; ctx.font='22px Inter'; for(let i=0;i<5;i++){const y=pad+(h-pad*2)*i/4;ctx.beginPath();ctx.moveTo(pad,y);ctx.lineTo(w-pad,y);ctx.stroke();}
  ctx.strokeStyle=opts.color||'#64d2ff'; ctx.lineWidth=5; ctx.lineJoin='round'; ctx.beginPath(); series.forEach((p,i)=>{const x=pad+(w-pad*2)*i/(series.length-1); const y=h-pad-((p.v-min)/(max-min||1))*(h-pad*2); i?ctx.lineTo(x,y):ctx.moveTo(x,y);}); ctx.stroke();
  ctx.fillStyle=opts.color||'#64d2ff'; series.forEach((p,i)=>{const x=pad+(w-pad*2)*i/(series.length-1); const y=h-pad-((p.v-min)/(max-min||1))*(h-pad*2); ctx.beginPath();ctx.arc(x,y,6,0,Math.PI*2);ctx.fill();});
  ctx.fillStyle='rgba(237,246,255,.68)'; ctx.font='22px Inter'; ctx.textAlign='center'; series.forEach((p,i)=>{const x=pad+(w-pad*2)*i/(series.length-1); ctx.fillText(p.label.replace(' ', '\n'),x,h-10);});
  ctx.textAlign='left'; ctx.fillStyle='rgba(237,246,255,.62)'; ctx.fillText(`${max.toFixed(0)}${opts.suffix||''}`,8,pad+7); ctx.fillText(`${min.toFixed(0)}${opts.suffix||''}`,8,h-pad+7);
}
function renderTrendCharts(){
  const party=$('trendParty').value||'SPD'; const series=elections.map(e=>({label:e.short,v:e.results[party]?.vote||0})); drawLineChart('partyTrend',series,{color:parties[party].color,max:50,suffix:'%'});
  const anti=elections.map(e=>({label:e.short,v:(seatsOf(e,antiSystemParties)/e.total)*100})); drawLineChart('antiSystemTrend',anti,{color:'#ef5d60',max:70,suffix:'%'});
  const turn=elections.map(e=>({label:e.short,v:e.turnout})); drawLineChart('turnoutTrend',turn,{color:'#4cc38a',min:70,max:90,suffix:'%'});
}
function renderBlocBars(){
  $('blocBars').innerHTML=elections.map((e,idx)=>{
    const rep=(seatsOf(e,systemParties)/e.total)*100, anti=(seatsOf(e,antiSystemParties)/e.total)*100, oth=Math.max(0,100-rep-anti);
    return `<div class="bloc-row"><b>${e.short}</b><div class="bloc-stack" title="Republican/system: ${rep.toFixed(1)}%, anti-system: ${anti.toFixed(1)}%"><div class="bloc-seg" style="width:${rep}%;background:#64d2ff">R</div><div class="bloc-seg" style="width:${anti}%;background:#ef5d60">A</div><div class="bloc-seg" style="width:${oth}%;background:#7a879a">O</div></div></div>`;
  }).join('');
}
function setupCharts(){
  $('trendParty').innerHTML=Object.keys(parties).filter(p=>p!=='Others').map(p=>`<option value="${p}">${p}</option>`).join('');
  $('trendParty').addEventListener('change',renderTrendCharts); renderTrendCharts();
}
function sandboxVotes(){
  const e=elections[Number($('sandboxElection').value)];
  const dep=Number($('depressionSlider').value), comp=Number($('compromiseSlider').value), decree=Number($('decreeSlider').value), nat=Number($('nationalistSlider').value), left=Number($('leftUnitySlider').value);
  const raw={}; Object.entries(e.results).forEach(([p,r])=>raw[p]=r.vote);
  raw.NSDAP += dep*1.6 + decree*0.8 + nat*1.5 - comp*.7;
  raw.KPD += dep*.8 + left*.9 - comp*.4;
  raw.SPD += comp*1.0 + left*.45 - dep*.55 - decree*.35;
  raw.DDP += comp*.35 - dep*.25; raw.DVP += comp*.2 - dep*.1 - nat*.25; raw.Zentrum += comp*.25 - dep*.1; raw.BVP += comp*.05; raw.DNVP += nat*.8 + decree*.45 - comp*.25; raw.WP += dep*.2 - comp*.1;
  Object.keys(raw).forEach(p=>raw[p]=Math.max(0,raw[p]));
  const sum=Object.values(raw).reduce((a,b)=>a+b,0)||1; Object.keys(raw).forEach(p=>raw[p]=raw[p]*100/sum);
  const seats={}; let allocated=0; Object.keys(raw).forEach(p=>{seats[p]=Math.round(raw[p]/100*e.total); allocated+=seats[p];});
  while(allocated!==e.total){const diff=e.total-allocated; const p=Object.keys(seats).sort((a,b)=>raw[b]-raw[a])[0]; seats[p]+=Math.sign(diff); allocated+=Math.sign(diff);}
  return {e, raw, seats, inputs:{dep,comp,decree,nat,left}};
}
function renderSandbox(){
  ['depression','compromise','decree','nationalist','leftUnity'].forEach(id=>$(id+'Val').textContent=$(id+'Slider').value);
  const {e,raw,seats,inputs}=sandboxVotes(); const maj=majority(e);
  const total=e.total; const sorted=Object.keys(seats).sort((a,b)=>seats[b]-seats[a]);
  $('sandboxMajority').textContent=`Majority: ${maj}`;
  $('sandboxStack').innerHTML=sorted.filter(p=>seats[p]>0).map(p=>`<div class="stack-segment" title="${p}: ${seats[p]} seats" style="width:${seats[p]/total*100}%;background:${parties[p].color}"></div>`).join('');
  $('sandboxChart').innerHTML=sorted.filter(p=>seats[p]>0).map(p=>`<div class="bar-row"><div class="bar-label" style="color:${parties[p].color}">${p}</div><div class="bar-track"><div class="bar-fill" style="width:${Math.max(1,seats[p]/Math.max(...Object.values(seats))*100)}%;background:${parties[p].color}"></div></div><div class="bar-value">${seats[p]}</div></div>`).join('');
  const anti=antiSystemParties.reduce((s,p)=>s+seats[p],0), rep=systemParties.reduce((s,p)=>s+seats[p],0), top=sorted[0];
  let text=`Starting from ${e.short}, the simulated top party is ${top} with ${seats[top]} seats. Republican/system parties hold about ${rep} seats; anti-system parties hold about ${anti}. `;
  if(seats.NSDAP+seats.DNVP>=maj) text += `A nationalist-right majority is possible, making authoritarian capture very likely.`;
  else if(rep>=maj) text += `A democratic majority is still mathematically possible, though it may require compromise across class and religious lines.`;
  else if(anti>=maj) text += `Anti-system forces can dominate or block parliament, pushing politics toward emergency rule.`;
  else text += `No clean bloc majority appears, so minority cabinets, toleration deals, or presidential rule become more likely.`;
  $('sandboxNarrative').textContent=text;
}
function setupSandbox(){
  $('sandboxElection').innerHTML=elections.map((e,i)=>`<option value="${i}">${e.short} — ${e.title}</option>`).join(''); $('sandboxElection').value=currentElection;
  ['sandboxElection','depressionSlider','compromiseSlider','decreeSlider','nationalistSlider','leftUnitySlider'].forEach(id=>$(id).addEventListener('input',renderSandbox));
  $('saveScenario').addEventListener('click',()=>{const {e,inputs}=sandboxVotes(); const card=document.createElement('article'); card.className='scenario-card'; card.innerHTML=`<h3>${e.short} scenario</h3><p>Depression ${inputs.dep}, compromise ${inputs.comp}, decree reliance ${inputs.decree}, nationalism ${inputs.nat}, left unity ${inputs.left}.</p><p>${$('sandboxNarrative').textContent}</p>`; $('scenarioBoard').prepend(card);});
}
function init(){
  $('tickRow').innerHTML=elections.map(e=>`<span>${e.short}</span>`).join('');
  $('electionRange').addEventListener('input',e=>{currentElection=Number(e.target.value); $('sandboxElection').value=currentElection; renderElection(); renderTrendCharts();});
  document.querySelectorAll('.mode-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.mode-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');chartMode=btn.dataset.mode;renderChart();}));
  $('clearCoalition').addEventListener('click',()=>{selected.clear();renderCoalitionChecks();renderCoalition();});
  renderParties();renderTimeline();renderGovernments();setupCharts();setupSandbox();renderElection();
}
init();
