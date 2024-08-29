const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/twsearch-MRZGOB6T-txJGk1ka.js","assets/index-CsUkGxxS.js","assets/index-BYIl_Ezv.css","assets/search-dynamic-sgs-side-events-RPVZU2YB--4oJdtXV.js","assets/chunk-Y3BVWVFU-CibxrBKt.js","assets/search-dynamic-solve-4x4x4-V5D7RQND-qJrXm0Oa.js","assets/search-dynamic-solve-fto-UOKDYVD5-B-teN3ue.js","assets/search-dynamic-sgs-unofficial-2TYKOUM4-6y07cd9Z.js","assets/search-dynamic-solve-kilominx-RAZM75GA-DHdnP6yz.js","assets/search-dynamic-solve-master_tetraminx-3D4MBF3V-BLS5-9Nb.js","assets/search-dynamic-solve-sq1-YESVPPLF-DFbFEjYA.js"])))=>i.map(i=>d[i]);
var B=Object.defineProperty;var K=(e,a,r)=>a in e?B(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;var P=(e,a,r)=>K(e,typeof a!="symbol"?a+"":a,r);import{r as f,_ as d,K as h,s as b,u as U,v as W,w,x as V,y as q,z as $,A as G,H,I as j,J as g,M as J,L as Q,N as X,P as Y}from"./index-CsUkGxxS.js";import{e as Z}from"./search-worker-entry-CMby0LnR.js";var ee=2;function ae(e,a){const r=[];for(const t of a){const n=new J(t);if(n.amount!==1)throw new Error("SGS cannot handle def moves with an amount other than 1 yet.");let i=e.identityTransformation();for(let S=1;i=i.applyMove(n),!i.isIdentityTransformation();S++)r.push({move:n.modified({amount:S}),transformation:i})}return r}var T=class{constructor(e,a,r){P(this,"searchMoves");this.kpuzzle=e,this.sgs=a,this.searchMoves=ae(this.kpuzzle,r??Object.keys(this.kpuzzle.definition.moves))}async solve(e,a=ee,r){const t=e.experimentalToTransformation();if(!t)throw new Error("distinguishable pieces are not supported in tremble solver yt");let n=null,i=1e6;const S=(m,y,s)=>{if(y===0){const c=this.sgsPhaseSolve(m,i);if(!c)return;const v=s.concat(c).experimentalSimplify({cancel:{directional:"any-direction",puzzleSpecificModWrap:"canonical-centered"},puzzleSpecificSimplifyOptions:{quantumMoveOrder:r}}),u=Q(v);(n===null||u<i)&&(n=v,i=u);return}for(const c of this.searchMoves)S(m.applyTransformation(c.transformation),y-1,s.concat([c.move]))};for(let m=0;m<=a;m++)S(t,m,new g);if(n===null)throw new Error("SGS search failed.");return n}sgsPhaseSolve(e,a){const r=new X;let t=e;for(const n of this.sgs.ordering){const i=n.pieceOrdering;let S="";const m=t.invert();for(let s=0;s<i.length;s++){const c=i[s],v=c.orbitName,u=c.permutationIdx;S+=` ${m.transformationData[v].permutation[u]} ${m.transformationData[v].orientationDelta[u]}`}const y=n.lookup[S];if(!y)throw new Error("Missing algorithm in sgs or esgs?");if(r.experimentalPushAlg(y.alg),r.experimentalNumAlgNodes()>=a)return null;t=t.applyTransformation(y.transformation);for(let s=0;s<i.length;s++){const c=i[s],v=c.orbitName,u=c.permutationIdx;if(t.transformationData[v].permutation[u]!==u||t.transformationData[v].orientationDelta[u]!==0)throw new Error("bad SGS :-(")}}return r.toAlg()}};function re(e,a){let r=e.identityTransformation();for(const t of a.ordering){const n=Y(Object.values(t.lookup));r=r.applyTransformation(n.transformation)}return r.toKPattern()}var k=f(async()=>d(()=>import("./twsearch-MRZGOB6T-txJGk1ka.js"),__vite__mapDeps([0,1,2])));async function L(e,a,r){const{wasmTwsearch:t}=await k;return t(e,a,r)}async function te(e){const{wasmRandomScrambleForEvent:a}=await k;return a(e)}var l=f(()=>d(()=>import("./search-dynamic-sgs-side-events-RPVZU2YB--4oJdtXV.js"),__vite__mapDeps([3,1,2,4]))),z=null;async function ne(){return z||(z=(async()=>{const e=await(await l).cachedData222();return new T(await b["2x2x2"].kpuzzle(),e,"URFLBD".split(""))})())}async function ie(){await ne()}async function oe(e){return w(),L((await V.kpuzzle()).definition,e,{generatorMoves:"UFLR".split("")})}var A=f(()=>d(()=>import("./search-dynamic-solve-4x4x4-V5D7RQND-qJrXm0Oa.js"),__vite__mapDeps([5,1,2]))),ce=[[null,"x","x2","x'","z","z'"],[null,"y","y2","y'"]];async function se(){return(await A).initialize()}async function F(){return w(),(await A).random444Scramble()}async function le(){return j(await F(),ce)}var me=f(()=>d(()=>import("./search-dynamic-solve-fto-UOKDYVD5-B-teN3ue.js"),__vite__mapDeps([6,1,2])));f(()=>d(()=>import("./search-dynamic-sgs-unofficial-2TYKOUM4-6y07cd9Z.js"),__vite__mapDeps([7,4,1,2])));async function ue(){return w(),new g(await(await me).getRandomFTOScramble())}var fe=f(()=>d(()=>import("./search-dynamic-solve-kilominx-RAZM75GA-DHdnP6yz.js"),__vite__mapDeps([8,1,2])));async function de(){return w(),(await fe).getRandomKilominxScramble()}var we=f(()=>d(()=>import("./search-dynamic-solve-master_tetraminx-3D4MBF3V-BLS5-9Nb.js"),__vite__mapDeps([9,1,2])));async function Se(){return w(),new g(await(await we).randomMasterTetraminxScrambleString())}var ve=2,x=null;async function he(){return x||(x=(async()=>{const e=await(await l).cachedSGSDataMegaminx();return new T(await(await l).cachedMegaminxKPuzzleWithoutMO(),e,["U","R","F","L","BR","BL","FR","FL","DR","DL","B","D"])})())}async function be(e){w();const a=await he(),r=structuredClone(e.patternData);r.CENTERS.orientation=new Array(12).fill(0);const t=new h(await(await l).cachedMegaminxKPuzzleWithoutMO(),r);return await a.solve(t,ve,()=>5)}var ye=3,R=null;async function ge(){return R||(R=(async()=>{const e=await(await l).sgsDataPyraminx();return new T(await b.pyraminx.kpuzzle(),e,"RLUB".split(""))})())}async function Te(e){return w(),await(await ge()).solve(e,ye,()=>3)}var Ee=f(()=>d(()=>import("./search-dynamic-sgs-unofficial-2TYKOUM4-6y07cd9Z.js"),__vite__mapDeps([7,4,1,2])));async function _e(){return w(),(await Ee).getRandomRediCubeScramble()}var pe=3,M=null;async function Pe(){return M||(M=(async()=>{const e=await(await l).sgsDataSkewb();return new T(await(await l).skewbKPuzzleWithoutMOCached(),e,"RLUB".split(""))})())}async function ze(e){return new h(await(await l).skewbKPuzzleWithoutMOCached(),{CORNERS:e.patternData.CORNERS,CENTERS:{pieces:e.patternData.CENTERS.pieces,orientation:new Array(6).fill(0)}})}async function C(e){return w(),await(await Pe()).solve(await ze(e),pe,t=>t.family==="y"?4:3)}async function xe(){return re(await(await l).skewbKPuzzleWithoutMOCached(),await(await l).sgsDataSkewbFixedCorner())}async function Re(){return C(await xe())}var Me=f(()=>d(()=>import("./search-dynamic-solve-sq1-YESVPPLF-DFbFEjYA.js"),__vite__mapDeps([10,1,2])));async function Oe(){return g.fromString(await(await Me).getRandomSquare1ScrambleString())}var De=1e3;q(!0);var I=!0;function ke(e){I=e}function O(){return(typeof performance>"u"?Date:performance).now()}async function o(e,a,r){if(!I)return a();const t=O(),n=a();n!=null&&n.then&&await n;const i=O();return console.warn(`${e}${r!=null&&r.isPrefetch?" (prefetched)":""}: ${Math.round(i-t)}ms`),n}var E=new Map,_=null;async function D(e,a){function r(){return o(`wasmRandomScrambleForEvent(${JSON.stringify(e)})`,()=>te(e),{isPrefetch:a==null?void 0:a.isPrefetch})}switch(e){case"222":return(await r()).experimentalSimplify({puzzleSpecificSimplifyOptions:{quantumMoveOrder:()=>4}});case"555":case"666":case"777":case"333fm":case"minx":case"pyram":case"555bf":return r();case"333":case"333oh":case"333ft":return o("random333Scramble",G,{isPrefetch:a==null?void 0:a.isPrefetch});case"333bf":case"333mbf":return o("random333OrientedScramble",$);case"444":return o("random444Scramble",F,{isPrefetch:a==null?void 0:a.isPrefetch});case"444bf":return o("random444OrientedScramble",le);case"skewb":return o("randomSkewbFixedCornerScramble",Re);case"sq1":return o("getRandomSquare1Scramble",Oe,{isPrefetch:a==null?void 0:a.isPrefetch});case"fto":return o("randomFTOScramble",ue,{isPrefetch:a==null?void 0:a.isPrefetch});case"master_tetraminx":return o("randomMasterTetraminxScramble",Se);case"kilominx":return o("randomKilominxScramble",de,{isPrefetch:a==null?void 0:a.isPrefetch});case"redi_cube":return o("randomRediCubeScramble",_e,{isPrefetch:a==null?void 0:a.isPrefetch});default:throw new Error(`unsupported event: ${e}`)}}var p="auto",N={initialize:async e=>{switch(e){case"222":return o("preInitialize222",ie);case"333":case"333oh":case"333ft":return o("initialize333",H);case"444":return o("initialize444",se);default:throw new Error(`unsupported event: ${e}`)}},setScramblePrefetchLevel(e){p=e},randomScrambleForEvent:async e=>{let a=E.get(e);return a?E.delete(e):a=D(e),p!=="none"&&a.then(()=>{_&&clearTimeout(_),_=setTimeout(()=>{E.set(e,D(e,{isPrefetch:!0}))},p==="immediate"?0:De)}),a},randomScrambleStringForEvent:async e=>(await N.randomScrambleForEvent(e)).toString(),solve333ToString:async e=>{const a=new h(await b["3x3x3"].kpuzzle(),e);return(await U(a)).toString()},solve222ToString:async e=>{const a=new h(await b["2x2x2"].kpuzzle(),e);return(await oe(a)).toString()},solveSkewbToString:async e=>{const a=new h(await b.skewb.kpuzzle(),e);return(await C(a)).toString()},solvePyraminxToString:async e=>{const a=new h(await b.pyraminx.kpuzzle(),e);return(await Te(a)).toString()},solveMegaminxToString:async e=>{const a=new h(await b.megaminx.kpuzzle(),e);return(await be(a)).toString()},setDebugMeasurePerf:async e=>{ke(e)},solveTwsearchToString:async(e,a,r)=>{const t=new W(e),n=new h(t,a);return(await L(e,n,r)).toString()}};Z(N);
