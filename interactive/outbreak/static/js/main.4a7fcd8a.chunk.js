(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,a){"use strict";
a.r(t);
var n=a(0),i=a.n(n),r=a(21),s=a.n(r),l=(a(71),a(3)),o=a(4),h=a(7),c=a(6),u=a(8),d=(a(43),a(9)),m=a(30),p=a.n(m),v=function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,null,[{key:"makeHex",value:function(e){var t=p()(e);
return[t.red(),t.green(),t.blue()]}},{key:"makeRGB",value:function(e,t,a){return[e,t,a]}},{key:"makeHSL",value:function(e,t,a){var n=p.a.hsl(e,t,a);
return[n.red(),n.green(),n.blue()]}},{key:"blend",value:function(e,t,a){return[(t[0]-e[0])*a+e[0],(t[1]-e[1])*a+e[1],(t[2]-e[2])*a+e[2]]}},{key:"withAlpha",value:function(e,t){return[e[0],e[1],e[2],t]}},{key:"r",value:function(e){return e[0]}},{key:"g",value:function(e){return e[1]}},{key:"b",value:function(e){return e[2]}},{key:"a",value:function(e){return 4===e.length?e[3]:255}},{key:"hue",value:function(e){var t=e[0]/255,a=e[1]/255,n=e[2]/255,i=Math.min(t,a,n),r=Math.max(t,a,n),s=NaN,l=r-i,o=(r+i)/2;
return l?(s=t===r?(a-n)/l+6*(a<n):a===r?(n-t)/l+2:(t-a)/l+4,l/=o<.5?r+i:2-r-i,s*=60):l=o>0&&o<1?0:s,s}},{key:"__helperRep",value:function(t){return p.a.rgb(e.r(t),e.g(t),e.b(t),e.a(t))}},{key:"__fromHelperRep",value:function(e){return[e.red(),e.green(),e.blue()]}},{key:"hex",value:function(t){return e.__helperRep(t).toString()}},{key:"opacity",value:function(t){return e.a(t)/255}},{key:"lighten",value:function(t,a){return e.__fromHelperRep(e.__helperRep(t).whiten(a))}}]),e}(),y=function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,null,[{key:"assert",value:function(e,t){e||(console.log("ACK!",t),alert("ACK! "+t))}},{key:"makeImageUri",value:function(e){var t=-1,a=!0,n=!1,i=void 0;
try{for(var r,s=e[Symbol.iterator]();
!(a=(r=s.next()).done);
a=!0){var l=r.value;
l.length>t&&(t=l.length)}}catch(P){n=!0,i=P}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}for(var o=e.length,h=new Uint8ClampedArray(t*o*4),c=0;
c<o;
c++){for(var u=e[c].length,d=Math.floor((t-u)/2),m=t-u-d,p=0;
p<u;
p++){var y=e[c][p],f=4*(c*t+d+p);
h[f]=v.r(y),h[f+1]=v.g(y),h[f+2]=v.b(y),h[f+3]=v.a(y)}for(var g=0;
g<d;
g++){var E=4*(c*t+g);
h[E]=255,h[E+1]=255,h[E+2]=255,h[E+3]=255}for(var w=u+m;
w<t;
w++){var b=4*(c*t+w);
h[b]=255,h[b+1]=255,h[b+2]=255,h[b+3]=255}}var k=document.createElement("canvas"),S=k.getContext("2d");
k.width=t,k.height=o;
var D=S.createImageData(t,o);
return D.data.set(h),S.putImageData(D,0,0),k.toDataURL()}},{key:"arraysEqual",value:function(t,a){if(t.length!==a.length)return!1;
for(var n=0;
n<t.length;
n++){var i=t[n],r=a[n],s=i===r;
if(Array.isArray(i)&&Array.isArray(r)&&(s=e.arraysEqual(i,r)),!s)return!1}return!0}}]),e}(),f=a(65),g=a.n(f),E=function(){function e(t){Object(l.a)(this,e),null!==t&&void 0!==t||(t=Math.floor(Math.random()*e.m)),this.lastX=Math.floor(t)}return Object(o.a)(e,[{key:"random",value:function(){return this.lastX=(e.a*this.lastX+e.c)%e.m,this.lastX/e.m}},{key:"randBetween",value:function(e,t){return this.random()*(t-e)+e}},{key:"randIntBetween",value:function(e,t){var a=this.random()*(t-e+1);
return Math.floor(a)+e}}]),e}();
E.m=2147483648,E.a=214013,E.c=2531011;
var w=function(e){function t(e){var a;
return Object(l.a)(this,t),(a=Object(h.a)(this,Object(c.a)(t).call(this,e))).initializeFromProps(a.props,!0),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){this.initializeFromProps(e,!1)}},{key:"initializeFromProps",value:function(e,t){var a={};
t?this.state=a:this.setState(a),null!==this.interval&&void 0!==this.interval&&clearInterval(this.interval),this.interval=setInterval(e.callback,e.milliseconds)}},{key:"render",value:function(){return null}}]),t}(n.Component);
w.defaultProps={};
var b=function e(){Object(l.a)(this,e)};
b.SUSCEPTIBLE_COLOR="#EEE",b.EXPOSED_COLOR="#ffdde2",b.INFECTED_COLOR="#F44",b.REMOVED_COLOR="#999",b.DEAD_COLOR="#000",b.SUSCEPTIBLE=0,b.EXPOSED=1,b.INFECTED=2,b.REMOVED=3,b.DEAD=4;
var k=function(){function e(t,a,n){Object(l.a)(this,e),this.r=a,this.c=n,this.state=b.SUSCEPTIBLE,this.nextState=b.SUSCEPTIBLE,this.daysInState=0,this.linked=!1,this.mediaOutlet=!1,this.specialDegree=null,this.dead=!1,this.rng=t}return Object(o.a)(e,[{key:"getState",value:function(){return this.state}},{key:"getNextState",value:function(){return this.nextState}},{key:"isSusceptible",value:function(){return this.state===b.SUSCEPTIBLE}},{key:"isExposed",value:function(){return this.state===b.EXPOSED}},{key:"isInfected",value:function(){return this.state===b.INFECTED}},{key:"canInfectOthers",value:function(){return this.state===b.EXPOSED||this.state===b.INFECTED}},{key:"isRemoved",value:function(){return this.state===b.REMOVED}},{key:"isDead",value:function(){return this.state===b.DEAD}},{key:"isAllowedToBeRemoved",value:function(){return!this.linked}},{key:"_setState",value:function(e){this.state=e}},{key:"setNextState",value:function(e){this.nextState=e}},{key:"setSusceptible",value:function(){this._setState(b.SUSCEPTIBLE)}},{key:"setExposed",value:function(){this._setState(b.EXPOSED)}},{key:"setInfected",value:function(){this._setState(b.INFECTED)}},{key:"setRemoved",value:function(){this._setState(b.REMOVED)}},{key:"setDead",value:function(){this._setState(b.DEAD)}},{key:"startDay",value:function(){this.nextState=this.state}},{key:"tryToInfect",value:function(e,t){if(e.isSusceptible()&&this.rng.random()<t){e.setNextState(b.EXPOSED)}}},{key:"endDay",value:function(e,t,a,n,i){this.nextState!==this.state?(this.nextState===b.EXPOSED&&0===t&&(this.nextState=b.INFECTED),this._setState(this.nextState),this.daysInState=0):(this.daysInState++,this.isExposed()?this.daysInState>=t&&(this.setInfected(),this.daysInState=0):this.isInfected()&&this.daysInState>=a&&(e&&(i*=2),n||(i=0),this.rng.random()<i?this.setDead():this.setRemoved(),this.daysInState=0))}}]),e}(),S=a(62),D=a(64),P=a.n(D),C=a(180),I=Object(C.withStyles)({root:{background:"linear-gradient(0deg, #f0f0f0 30%, #f8f8f8 90%)"},label:{textTransform:"capitalize"}})(P.a),O=Object(C.withStyles)({root:{background:"linear-gradient(0deg, #ccddff 30%, #ddeeff 90%)"},label:{textTransform:"capitalize"}})(I),R=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t={margin:"0.5rem"};
return"small"===this.props.size&&(t={margin:"0.5rem",maxWidth:"30px",maxHeight:"30px",minWidth:"30px",minHeight:"30px"}),this.props.highlighted?i.a.createElement(O,{variant:"contained",onClick:function(t){t.preventDefault(),e.props.onClick(t)},style:t},this.props.children):i.a.createElement(I,{variant:"contained",onClick:function(t){t.preventDefault(),e.props.onClick(t)},style:t},this.props.children)}}]),t}(i.a.PureComponent),x=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=b.SUSCEPTIBLE_COLOR;
return"exposed"===this.props.type?e=b.EXPOSED_COLOR:"infected"===this.props.type?e=b.INFECTED_COLOR:"removed"===this.props.type?e=b.REMOVED_COLOR:"dead"===this.props.type&&(e=b.DEAD_COLOR)
,i.a.createElement("div",{style:{marginBottom:"-2px",border:"1px black solid",width:"1rem",height:"1rem",backgroundColor:e,display:"inline-block"}})}}]),t}(n.Component),N=function(e){function t(e){var a;
return Object(l.a)(this,t),(a=Object(h.a)(this,Object(c.a)(t).call(this,e))).width=null,a.height=150,a.canvasRef=i.a.createRef(),a.state={showDead:!0,showInfected:!0,showRecovered:!0},a.componentWillReceiveProps(e),a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"updateWindowDimensions",value:function(){var e=Math.min(600,document.documentElement.clientWidth-60);
this.width!==e&&(this.width=e,this.redraw())}},{key:"componentWillReceiveProps",value:function(e,t){this.updateMaxValues(e)}},{key:"updateMaxValues",value:function(e){this.maxValue=1;
var t=[];
this.state.showInfected&&t.push(e.infectedPerDay),this.state.showRecovered&&t.push(e.recoveredPerDay),this.state.showDead&&t.push(e.deadPerDay),e.hospitalCapacity>-1&&t.push(e.capacityPerDay);
for(var a=0;
a<e.infectedPerDay.length;
a++)for(var n=0;
n<t.length;
n++){var i=t[n][a];
null!==i&&i>this.maxValue&&(this.maxValue=i)}this.maxValue*=1.1,this.maxValue=this.props.population,this.maxDay=Math.max(e.infectedPerDay.length-1,1)}},{key:"componentDidMount",value:function(){this.canvas=this.canvasRef.current,this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),this.redraw()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"showHospitalCapacity",value:function(){return this.props.hospitalCapacity>-1}},{key:"redraw",value:function(){if(null!==this.canvas&&void 0!==this.canvas){this.updateMaxValues(this.props);
var e=this.canvas.getContext("2d");
e.fillStyle=b.SUSCEPTIBLE_COLOR,e.fillRect(0,0,this.width,this.height),e.setLineDash([]),e.lineWidth=2;
for(var t=[],a=[],n=[],i=[],r=[],s=[],l=0;
l<this.props.infectedPerDay.length;
l++){var o=l,h=this.props.infectedPerDay[o],c=this.props.recoveredPerDay[o],u=this.props.deadPerDay[o],d=(this.props.population,this.props.capacityPerDay[o]);
null===h?(this.drawPath(t,a,e,b.INFECTED_COLOR),this.drawPath(a,n,e,"#A8A8A8"),this.drawPath(n,i,e,b.DEAD_COLOR),this.showHospitalCapacity()&&this.drawPath(s,s,e,"#000"),t.length=0,a.length=0,n.length=0,i.length=0,r.length=0,s.length=0):(t.push([this.xcoord(o),this.ycoord(0)]),a.push([this.xcoord(o),this.ycoord(h)]),n.push([this.xcoord(o),this.ycoord(h+c)]),i.push([this.xcoord(o),this.ycoord(h+c+u)]),r.push([this.xcoord(o),this.ycoord(this.maxValue)]),s.push([this.xcoord(o),this.ycoord(d)]))}this.drawPath(t,a,e,b.INFECTED_COLOR),this.drawPath(a,n,e,"#A8A8A8"),this.drawPath(n,i,e,b.DEAD_COLOR),this.showHospitalCapacity()&&this.drawPath(s,s,e,"#000");
for(var m=0;
m<this.props.infectedPerDay.length;
m++){var p=m;
null===this.props.infectedPerDay[p]&&(e.strokeStyle="#000",e.lineWidth=2,e.setLineDash([5,5]),this.drawLine(e,p-1,0,p-1,this.maxValue))}e.strokeStyle="#000",e.setLineDash([]),e.lineWidth=1,this.drawLine(e,0,0,0,this.maxValue),this.drawLine(e,0,0,this.maxDay,0)}}},{key:"drawPath",value:function(e,t,a,n){if(0!==e.length){a.beginPath(),a.moveTo(e[0][0],e[0][1]);
for(var i=0;
i<e.length;
i++)a.lineTo(e[i][0],e[i][1]);
if(e!==t)for(var r=t.length-1;
r>=0;
r--)a.lineTo(t[r][0],t[r][1]);
e===t?(a.strokeStyle=n,a.lineWidth=2,a.setLineDash([5,5]),a.stroke()):(a.fillStyle=n,a.fill())}}},{key:"drawSeries",value:function(e,t){for(var a=1;
a<e.length;
a++){var n=a-1,i=a,r=e[n],s=e[i];
null!==r&&null!==s&&this.drawLine(t,n,r,i,s)}}},{key:"xcoord",value:function(e){return this.width*e/this.maxDay}},{key:"ycoord",value:function(e){return(this.height-1)*(1-e/this.maxValue)}},{key:"drawBar",value:function(e,t,a,n,i){var r=this.xcoord(t),s=this.xcoord(n),l=this.ycoord(a),o=this.ycoord(i);
e.fillRect(r,l,s-r,o-l)}},{key:"drawLine",value:function(e,t,a,n,i){e.beginPath(),e.moveTo(this.xcoord(t),this.ycoord(a)),e.lineTo(this.xcoord(n),this.ycoord(i)),e.stroke()}},{key:"resetArrays",value:function(){this.props.capacityPerDay.length=0,this.props.deadPerDay.length=0,this.props.infectedPerDay.length=0,this.props.recoveredPerDay.length=0,this.redraw(),this.forceUpdate()}},{key:"render",value:function(){var e=this;
this.redraw();
var t=Math.round(this.props.infectedPerDay[this.props.infectedPerDay.length-1]/this.props.population*100),a=Math.round(this.props.recoveredPerDay[this.props.recoveredPerDay.length-1]/this.props.population*100),n=Math.round(this.props.deadPerDay[this.props.deadPerDay.length-1]/this.props.population*100);
isNaN(t)&&(t=0),isNaN(a)&&(a=0),isNaN(n)&&(n=0);
var r=i.a.createElement("span",null
,i.a.createElement(x,{type:"infected"})," \xa0Infectadas: ",t,"%"),s=i.a.createElement("span",null
,i.a.createElement(x,{type:"removed"})," \xa0Recuperadas: ",a,"%"),l=null;
this.props.showDeaths&&(l=i.a.createElement("span",null
,i.a.createElement(x,{type:"dead"})," "
,i.a.createElement("span",{style:{backgroundColor:"#FFA"}},"\xa0Muertas: ",n,"%\xa0")));
var o=this.width;
return null===o&&(o=300)
,i.a.createElement("div",null
,i.a.createElement("div",{className:"plot-container"}
,i.a.createElement("div",{className:"plot-xaxis"},"time \u27f6")
,i.a.createElement("div",{className:"plot-chart"}
,i.a.createElement("canvas",{ref:this.canvasRef,width:o,height:this.height}))
,i.a.createElement("div",{className:"plot-legend"}
,i.a.createElement("div",{className:"plot-legend-button"}
,i.a.createElement(R,{onClick:function(){e.resetArrays()}},"Clear"))
,i.a.createElement("div",{style:{display:"flex",flexDirection:"column"}}
,i.a.createElement("div",null,r)
,i.a.createElement("div",null,s)
,i.a.createElement("div",null,l)))))}}]),t}(n.Component),T=function(e){function t(e){var a;
return Object(l.a)(this,t),(a=Object(h.a)(this,Object(c.a)(t).call(this,e))).canvasRef=i.a.createRef(),a.previousSimulationParams=["foo"],a.previousDrawingParams=[],a.previousInteractionsParams=[],a.onTick=a.onTick.bind(Object(d.a)(Object(d.a)(a))),a.onEnter=a.onEnter.bind(Object(d.a)(Object(d.a)(a))),a.onLeave=a.onLeave.bind(Object(d.a)(Object(d.a)(a))),a.initializeFromProps(a.props,!0),a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"updateWindowDimensions",value:function(){var e=this.props.gridCols*this.props.nodeSize;
this.props.nodeSize>=5&&(e+=this.props.gridCols);
var t=Math.min(e,document.documentElement.clientWidth-40),a=Math.floor(t/this.props.gridCols);
t=a*this.props.gridCols,this.gridWidth===t&&this.nodeSize===a||(this.gridWidth=t,this.nodeSize=a,this.redraw(!0))}},{key:"componentWillReceiveProps",value:function(e,t){}},{key:"initializeFromProps",value:function(e,t){this.gridWidth=e.gridCols*e.nodeSize,this.nodeSize=e.nodeSize;
var a=e.randomSeed;
-1===a&&(a=Math.floor(3e6*Math.random())),this.rng=new E(a);
var n={numActiveNodes:0,playing:!1,visible:!1,daysIncubating:e.daysIncubating,daysSymptomatic:e.daysSymptomatic,deathRate:e.deathRate,hospitalCapacityPct:e.hospitalCapacityPct,immunityFraction:e.immunityFraction,longDistaceNetworkActive:e.addLinkedNodes,maxIterations:e.maxIterations,personHours:e.personHours,transmissionProbability:e.transmissionProbability,travelRadius:e.travelRadius,centerNodeNeighborsToDisplay:[],drawNodeOutlines:e.drawNodeOutlines,hospitalCapacitySliderHighlighted:!1,speed:e.speed,capacityPerDay:[],deadPerDay:[],infectedPerDay:[],recoveredPerDay:[]};
t?this.state=n:this.setState(n)}},{key:"componentDidMount",value:function(){this.canvas=this.canvasRef.current,this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),this.redraw(!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"onTick",value:function(){this.state.playing&&this.state.visible&&(this.simulateStep(),this.redraw(!0))}},{key:"onEnter",value:function(){this.setState({visible:!0}),this.redraw(!0)}},{key:"onLeave",value:function(){this.setState({visible:!1})}},{key:"regenerate",value:function(){this.generate(),this.forceUpdate()}},{key:"resetPlotVariables",value:function(){this.state.capacityPerDay=[],this.state.deadPerDay=[],this.state.infectedPerDay=[],this.state.recoveredPerDay=[]}},{key:"generate",value:function(e){var t=[];
if(e||!y.arraysEqual(this.previousSimulationParams,t)){this.previousSimulationParams=t,this.state.infectedPerDay.length>1&&null!==this.state.infectedPerDay[this.state.infectedPerDay.length-2]&&(this.state.capacityPerDay.push(null),this.state.deadPerDay.push(null),this.state.infectedPerDay.push(null),this.state.recoveredPerDay.push(null)),0!==this.state.infectedPerDay.length&&null!==this.state.infectedPerDay[this.state.infectedPerDay.length-1]||(this.state.capacityPerDay.push(this.state.hospitalCapacityPct*this.props.gridRows*this.props.gridRows),this.state.deadPerDay.push(0),this.state.infectedPerDay.push(this.props.nug),this.state.recoveredPerDay.push(0)),this.state.centerNodeNeighborsToDisplay=[];
var a=this.props.gridRows,n=this.props.gridCols;
this.grid=[];
for(var i=0;
i<a;
i++){for(var r=[],s=0;
s<n;
s++){var l=new k(this.rng,i,s);
l.immune=this.rng.random()<this.state.immunityFraction,r.push(l)}this.grid.push(r)}var o=new Set;
if(this.props.addLinkedNodes)for(var h=0;
h<3;
h++)for(var c=0;
c<3;
c++){var u=Math.floor(a/6*(2*h+1)),d=Math.floor(n/6*(2*c+1)),m=this.grid[u][d];
m.linked=!0,m.setSusceptible(),o.add(m)}if(this.props.addCities){var p=[];
p.push([Math.floor(.75*a),Math.floor(.25*n)]),p.push([Math.floor(.25*a),Math.floor(.75*n)]);
for(var v=0;
v<a;
v++)for(var f=0;
f<n;
f++)for(var g=0;
g<p.length;
g++){var E=p[g],w=E[0],b=E[1],S=Math.sqrt(Math.pow(w-v,2)+Math.pow(b-f,2));
S<=16&&(this.grid[v][f].specialDegree=8-Math.floor(S/4))}}var D=Math.floor((a-1)/2),P=Math.floor((n-1)/2);
if(1===this.props.nug)0===this.state.daysIncubating?this.grid[D][P].setInfected():this.grid[D][P].setExposed();
else if(5===this.props.nug)for(var C=-1;
C<=1;
C++)for(var I=-1;
I<=1;
I++)1===Math.abs(C)&&1===Math.abs(I)||this.grid[D+C][P+I].setExposed();
else if(20===this.props.nug)for(var O=-2;
O<=2;
O++)for(var R=-2;
R<=2;
R++)2===Math.abs(O)&&2===Math.abs(R)||this.grid[D+O][P+R].setExposed();
this.redraw(!0),this.setState({numActiveNodes:this.props.nug})}}},{key:"simulateStep",value:function(){for(var e=this.props.gridRows,t=this.props.gridCols,a=new Set,n=0;
n<e;
n++)for(var i=0;
i<t;
i++){var r=this.grid[n][i];
r.startDay(),this.state.longDistaceNetworkActive&&r.linked&&a.add(r)}for(var s=[],l=0;
l<e;
l++)for(var o=0;
o<t;
o++){var h=this.grid[l][o];
this.props.showInteractions&&this.isCenterNode(l,o)&&h.canInfectOthers()?s=this.maybeInfect(h,l,o,a):this.maybeInfect(h,l,o,a)}for(var c=0,u=0;
u<e;
u++)for(var d=0;
d<t;
d++){var m=this.grid[u][d];
m.getNextState()!==b.EXPOSED&&m.getNextState()!==b.INFECTED||c++}for(var p=this.state.hospitalCapacityPct>-1&&c>this.state.hospitalCapacityPct*(e*t),v=0;
v<e;
v++)for(var y=0;
y<t;
y++){this.grid[v][y].endDay(p,this.state.daysIncubating,this.state.daysSymptomatic,this.props.showDeaths,this.state.deathRate)}for(var f=0,g=0,E=0;
E<e;
E++)for(var w=0;
w<t;
w++){var k=this.grid[E][w];
k.getNextState()===b.REMOVED?g++:k.getNextState()===b.DEAD&&f++}this.state.capacityPerDay.push(this.state.hospitalCapacityPct*this.props.gridRows*this.props.gridRows),this.state.deadPerDay.push(f),this.state.infectedPerDay.push(c),this.state.recoveredPerDay.push(g),this.state.centerNodeNeighborsToDisplay=s,this.setState({numActiveNodes:c,playing:this.state.playing&&0!==c}),this.redraw(!0)}},{key:"isCenterNode",value:function(e,t){return e===t&&e===Math.floor(this.props.gridRows/2)}},{key:"maybeInfect",value:function(e,t,a,n){var i=[];
if((e.canInfectOthers()||this.isCenterNode(t,a))&&(i=this.getNeighbors(e,t,a,n)),e.canInfectOthers()){var r=this.state.transmissionProbability;
r=Math.pow(r,3);
var s=!0,l=!1,o=void 0;
try{for(var h,c=i[Symbol.iterator]();
!(s=(h=c.next()).done);
s=!0){var u=h.value;
e.tryToInfect(u,r)}}catch(d){l=!0,o=d}finally{try{s||null==c.return||c.return()}finally{if(l)throw o}}}return i}},{key:"chooseRandomNeighbor",value:function(e,t,a){for(var n=this.state.travelRadius,i=null;
null===i;
){var r=this.rng.randIntBetween(-n,n),s=this.rng.randIntBetween(-n,n);
if((0!==r||0!==s)&&(1!==n||1!==Math.abs(r)||1!==Math.abs(s))){var l=t+r,o=a+s;
l<0||l>=this.grid.length||o<0||o>=this.grid[0].length||(i=this.grid[l][o])}}return i}},{key:"getNeighbors",value:function(e,t,a,n){var i=[];
if(0===this.state.travelRadius);
else if(1===this.state.travelRadius&&4===this.state.personHours)t>0&&i.push(this.grid[t-1][a]),a>0&&i.push(this.grid[t][a-1]),t<this.grid.length-1&&i.push(this.grid[t+1][a]),a<this.grid[0].length-1&&i.push(this.grid[t][a+1]);
else for(;
i.length<this.state.personHours;
){var r=this.chooseRandomNeighbor(e,t,a);
i.push(r)}return i}},{key:"togglePlayback",value:function(){0===this.state.numActiveNodes&&this.generate(!0),this.setState({playing:!this.state.playing})}},{key:"inInitialPosition",value:function(){return 0===this.state.infectedPerDay.length}},{key:"redraw",value:function(e){if(null!==this.canvas&&void 0!==this.canvas){var t=[this.network,this.state.drawNodeOutlines,this.state.longDistaceNetworkActive,this.state.personHours,this.state.travelRadius];
if(e||!y.arraysEqual(this.previousDrawingParams,t)){this.previousDrawingParams=t;
var a=[this.state.personHours,this.state.travelRadius],n=!y.arraysEqual(this.previousInteractionsParams,a);
this.previousInteractionsParams=a;
var i=this.canvas.getContext("2d");
i.fillStyle="#FFF",i.fillRect(0,0,this.gridWidth,this.gridWidth);
for(var r=0;
r<this.grid.length;
r++)for(var s=0;
s<this.grid[r].length;
s++){var l=this.grid[r][s];
this.drawCell(r,s,l,i,!1)}if(this.props.showInteractions&&(n||this.inInitialPosition())){var o=Math.floor(this.props.gridRows/2),h=o,c=this.grid[o][h],u=this.getNeighbors(c,o,h,null),d=!0,m=!1,p=void 0;
try{for(var v,f=u[Symbol.iterator]();
!(d=(v=f.next()).done);
d=!0){var g=v.value;
this.drawCell(g.r,g.c,g,i,!0)}}catch(P){m=!0,p=P}finally{try{d||null==f.return||f.return()}finally{if(m)throw p}}var E=!0,w=!1,b=void 0;
try{for(var k,S=u[Symbol.iterator]();
!(E=(k=S.next()).done);
E=!0){var D=k.value;
this.drawInteraction(o,h,D.r,D.c,i)}}catch(P){w=!0,b=P}finally{try{E||null==S.return||S.return()}finally{if(w)throw b}}}}}else console.log("no canvas")}},{key:"drawInteraction",value:function(e,t,a,n,i){var r=this.nodeSize;
i.strokeStyle="#000",i.beginPath(),i.moveTo((t+.5)*r,(e+.5)*r),i.lineTo((n+.5)*r,(a+.5)*r),i.stroke()}},{key:"drawCell",value:function(e,a,n,i,r){var s=this.nodeSize,l=e*s,o=a*s;
if(n.isExposed())i.fillStyle=b.EXPOSED_COLOR;
else if(n.isInfected())i.fillStyle=b.INFECTED_COLOR;
else if(n.isRemoved())i.fillStyle=b.REMOVED_COLOR;
else if(n.isDead())i.fillStyle=b.DEAD_COLOR;
else if(i.fillStyle=b.SUSCEPTIBLE_COLOR,null!==n.specialDegree){y.assert(n.specialDegree>=4&&n.specialDegree<=8,"node.specialDegree should be between 4 and 8; was: "+n.specialDegree);
var h=(n.specialDegree-4)/4;
i.fillStyle=v.hex(v.blend(v.makeHex(t.SUSCEPTIBLE_COLOR),v.makeHex("#BBB"),h))}var c=1;
if((this.nodeSize<5||this.nodeSize<this.props.nodeSize)&&(c=0),i.fillRect(o,l,s-c,s-c),r||n.linked&&this.state.longDistaceNetworkActive){i.lineWidth=1,i.strokeStyle="#000";
var u=o-.5,d=s-c+1;
0===o&&(u=.5,d-=1);
var m=l-.5,p=s-c+1;
0===l&&(m=.5,p-=1),i.strokeRect(u,m,d,p)}}},{key:"renderSlider",value:function(e,a,n,r,s,l,o,h){var c;
c=0===o?"":o?i.a.createElement("span",null,"\xa0\xa0\xa0\xa0\xa0",t.renderPercentage(a)):i.a.createElement("span",null,"\xa0\xa0\xa0\xa0\xa0"
,i.a.createElement("strong",null,Math.round(100*a)/100));
var u="";
return h&&(u=" highlighted")
,i.a.createElement("div",{className:"slider-container"+u}
,i.a.createElement("div",{className:"slider-name"},e,c)
,i.a.createElement("div",{className:"slider-slider"}
,i.a.createElement(g.a,{classes:{container:"slider-slider-container",thumbIconWrapper:""},min:r,max:s,step:l,value:a,onChange:n})))}},{key:"render",value:function(){var e=this;
this.generate(),this.redraw();
var t=this.props.showAllControls,a=null;
(t||this.props.showTransmissionProbabilitySlider)&&(a=this.renderSlider("Tasa de transmisión",this.state.transmissionProbability,function(t,a){e.setState({transmissionProbability:a})},0,this.props.maxTransmissionRate,.01,!1,"transmissionRate"===this.props.highlight));
var n=null,r=null;
(t||this.props.showHospitalCapacitySlider)&&(r=this.renderSlider("Capacidad hospitalaria",this.state.hospitalCapacityPct,function(t,a){e.setState({hospitalCapacityPct:a})},0,1,.01,!0,!1));
var s=null;
(t||this.props.showTravelRadiusSlider)&&(s=this.renderSlider("Radio de viaje",this.state.travelRadius,function(t,a){e.setState({travelRadius:a})},0,Math.min(30,Math.floor(this.props.gridRows/2)),1,!1,!1));
var l=null;
(t||this.props.showPersonHoursSlider)&&(l=this.renderSlider("Encuentros por día",this.state.personHours,function(t,a){e.setState({personHours:a})},1,30,1,!1,!1));
var o=null;
(t||this.props.showDaysPerStateControls)&&(o=this.renderSlider("Días de incubación",this.state.daysIncubating,function(t,a){e.setState({daysIncubating:a})},0,20,1,!1,!1));
var h=null;
(t||this.props.showDaysPerStateControls)&&(h=this.renderSlider("Días con síntomas",this.state.daysSymptomatic,function(t,a){e.setState({daysSymptomatic:a})},1,20,1,!1,!1));
var c=null;
if(t||this.props.showDeathRateSlider){var u="Tasa de mortalidad";
this.state.hospitalCapacityPct>-1&&(u="Tasa de mortalidad de entrada"),c=this.renderSlider(u,this.state.deathRate,function(t,a){e.setState({deathRate:a})},0,.3,.01,!0,!1)}var d=null;
if(t||this.props.showPlaybackControls){var m=i.a.createElement(R,{onClick:function(){e.setState({playing:!1}),e.generate(!0),e.forceUpdate()}},"Reiniciar"),p=i.a.createElement("span",{style:{fontSize:"10pt"}},"\u25b7");
this.state.playing&&(p=i.a.createElement("span",null
,i.a.createElement("b",null,"||")));
var v=i.a.createElement(R,{highlighted:!this.state.playing,onClick:function(){e.togglePlayback()}},p),y=i.a.createElement(R,{onClick:function(){e.simulateStep(),e.setState({playing:!1})}},"Paso");
d=i.a.createElement("div",{className:"playback-controls-container"},m,v,y)}var f=null;
if(this.props.addLinkedNodes){var g="Long distance: disabled";
this.state.longDistaceNetworkActive&&(g="Long distance: enabled"),f=i.a.createElement("div",null
,i.a.createElement("span",{onClick:function(){e.setState({longDistaceNetworkActive:!e.state.longDistaceNetworkActive})}},g))}var E=null;
this.props.showProTip&&(E=i.a.createElement("div",{style:{color:"#666",fontSize:"12pt",marginTop:"1em"}},"\ud83d\udc46 Pro-tip: se pueden mover los controles durante la simulación."));
var b=1e3*(1-Math.pow(this.state.speed,.2));
b=Math.max(b,16);
var k=null;
"transmissionRate"===this.props.highlight?(k=a,a=null):"immunity"===this.props.highlight&&(k=n,n=null);
var D=null;
if(this.props.showAliveFraction){var P=this.props.gridRows*this.props.gridRows;
D=i.a.createElement(N,{hospitalCapacity:this.state.hospitalCapacityPct*P,capacityPerDay:this.state.capacityPerDay,deadPerDay:this.state.deadPerDay,infectedPerDay:this.state.infectedPerDay,population:P,recoveredPerDay:this.state.recoveredPerDay,showDeaths:this.props.showDeaths})}return i.a.createElement("div",{className:"widget-container",style:{display:"flex",flexDirection:"column",alignItems:"center"}}
,i.a.createElement("div",{style:{display:"flex",flexDirection:"row"}}
,i.a.createElement(S.a,{onEnter:this.onEnter,onLeave:this.onLeave,scrollableAncestor:window}
,i.a.createElement("canvas",{ref:this.canvasRef,width:this.gridWidth,height:this.gridWidth})),null),d
,i.a.createElement("div",{style:{height:"0.5em"}}),k,r,c,l,s,a,n,o,h,f,E,D
,i.a.createElement(w,{milliseconds:b,callback:this.onTick}))}}],[{key:"shuffleInPlace",value:function(e,t){for(var a=e.length-1;
a>0;
a--){var n=Math.floor(t.random()*(a+1)),i=[e[n],e[a]];
e[a]=i[0],e[n]=i[1]}return e}},{key:"renderPercentage",value:function(e){var t=Math.round(100*e);
return i.a.createElement("span",null
,i.a.createElement("strong",null,t),"%")}}]),t}(n.Component);
T.NEIGHBOR_CLASSES=[[[0,0]],[[-1,0],[1,0],[0,-1],[0,1]],[[-1,-1],[-1,1],[1,-1],[1,1]],[[-2,-2],[-2,-1],[-2,0],[-2,1],[-2,2],[-1,2],[0,2],[1,2],[2,2],[2,1],[2,0],[2,-1],[2,-2],[1,-2],[0,-2],[-1,-2]]],T.defaultProps={randomSeed:-1,addCities:!1,addLinkedNodes:!1,gridCols:1,gridRows:1,daysIncubating:7,daysSymptomatic:8,deathRate:.03,hospitalCapacityPct:-1,immunityFraction:0,maxIterations:-1,nug:20,personHours:10,transmissionProbability:.4,travelRadius:5,drawNodeOutlines:!0,speed:.5,immunitySliderName:"Immunity",maxTransmissionRate:1,showAliveFraction:!1,showAllControls:!1,showDaysPerStateControls:!1,showDeaths:!1,showDeathRateSlider:!1,showDegreeSlider:!1,showHospitalCapacitySlider:!1,showImmunityFractionSlider:!1,showInteractions:!0,showPersonHoursSlider:!1,showPlaybackControls:!0,showProTip:!1,showSimulationButtons:!1,showSpeedControls:!1,showTransmissionProbabilitySlider:!1,showTravelRadiusSlider:!1};
var A=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=null;
null!==this.props.title&&void 0!==this.props.title&&(e=i.a.createElement("div",{className:"figure-title"},this.props.title));
var t=null;
null!==this.props.caption&&void 0!==this.props.caption&&(t=i.a.createElement("div",{className:"figure-caption"},this.props.caption));
var a="figure-body";
return this.props.image&&(a="figure-body image")
,i.a.createElement("div",{className:"figure-container"},e
,i.a.createElement("div",{className:a},this.props.children),t)}}]),t}(n.Component),M=function(e){function t(e){var a;
return Object(l.a)(this,t),(a=Object(h.a)(this,Object(c.a)(t).call(this,e))).state={spoilersVisible:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"renderMainPost",value:function(){var e,t,a=this;
e=this.state.spoilersVisible?"spoiler-revealed":"spoiler",t=i.a.createElement("label",null
,i.a.createElement("span",{style:{cursor:"pointer"}}
,i.a.createElement("input",{type:"checkbox",value:this.state.spoilersVisible,onChange:function(e){a.setState({spoilersVisible:e.target.checked})}})," Mostrar spoilers"));
var n=i.a.createElement("code",{className:"code-exposed"},"tu"),r=i.a.createElement("code",{className:"code-susceptible"},"Susceptibles"),s=i.a.createElement("code",{className:"code-infectious"},"Infectadas"),l=i.a.createElement("code",{className:"code-removed"},"Recuperadas"),o=i.a.createElement("code",{className:"code-dead"},"Muertas");
return i.a.createElement("div",{className:"post-content"}
,i.a.createElement("div",null
,i.a.createElement("h1",null,"Outbreak")
,i.a.createElement("h5",{className:"author"},"por Kevin Simler"
,i.a.createElement("br",null),"(traducción "
,i.a.createElement("a",{href:"http://podemosaprender.org",style:{color: '#aaa'}},"podemosaprender.org"),")"
,i.a.createElement("br",null),"16 de Marzo de 2020"
))
,i.a.createElement("div",null
,i.a.createElement("a",{href:"https://twitter.com/Harry_Stevens"},"Harry Stevens")," publicó recientemente en el periódico The Washington Post una simulación "
,i.a.createElement("em",null,"muy")," elegante mostrando cómo se propaga una enfermedad como COVID-19. Si todavía no la viste, recomiendo "
,i.a.createElement("a",{href:"https://www.washingtonpost.com/graphics/2020/world/corona-simulator/"},"que la veas"),".")
,i.a.createElement("div",null,"Hoy quiero aportar algo en lo que estuve trabajando: "
,i.a.createElement("strong",null,"simulaciones interactivas"),' del brote de la enfermedad. "Interactivas" quiere decir que podrás cambiar parámetros como la tasa de transmisión y mortalidad y explorar cómo evoluciona la epidemia.')
,i.a.createElement("div",null,"Al final de este artículo espero que tengas una mejor comprensión — o una mejor "
,i.a.createElement("em",null,"intuición")," — de lo que hace falta para contener esta enfermedad. Pero primero ...")
,i.a.createElement("div",null
,i.a.createElement("span",{style:{backgroundColor:"#FFC"}}
,i.a.createElement("strong",null,"¡UN AVISO IMPORTANTE!")),"")
,i.a.createElement("div",null
,i.a.createElement("strong",null,"Este "
,i.a.createElement("em",null,"no es")," un intento de modelar COVID-19."))
,i.a.createElement("div",null,"Lo que sigue es un "
,i.a.createElement("em",null,"modelo simplificado")," del proceso de una enfermedad. El objetivo es entender cómo evoluciona una epidemia "
,i.a.createElement("em",null,"en general"),".")
,i.a.createElement("div",null
,i.a.createElement("span",null,"AVISO #2:")," ¡No soy un epidemiólogo! Sigo a los expertos en enfermedades infecciosas (y lo mismo deberías hacer tú). Muy probablemente haya errores en este artículo, pero los voy a corregir tan rápido como pueda. Si ves alguno, por favor "
,i.a.createElement("a",{href:"https://meltingasphalt.com/contact/"},"contáctame"),".")
,i.a.createElement("div",null,"¿De acuerdo?")
,i.a.createElement("div",null,"Manos a la obra")
,i.a.createElement("div",null
,i.a.createElement("h3",null,"Una grilla de personas"))
,i.a.createElement("div",null,"Vamos a construir nuestro modelo de a poco, un paso a la vez.")
,i.a.createElement("div",null,"Lo primero que necesita una enfermedad es una "
,i.a.createElement("strong",null,"población"),", esto es, el conjunto de personas que podría enfermarse. La nuestra va a vivir en filas y columnas, como la grilla de 9x9 que ves aquí:")
,i.a.createElement(A,null
,i.a.createElement(T,{daysIncubating:0,daysSymptomatic:1,gridRows:9,gridCols:9,nodeSize:30,nug:1,randomSeed:100,personHours:4,showPlaybackControls:!1,speed:.4,transmissionProbability:1,travelRadius:1}))
,i.a.createElement("div",null,"Cada cuadrito representa una persona. La pobre alma en el centro, como habrás adivinado, está entre las ",s,". Mientras tanto, todas las demás son ",r,".")
,i.a.createElement("div",null
,i.a.createElement("h3",null,"tiempo"))
,i.a.createElement("div",null,"Incorporemos el tiempo en nuestro modelo.")
,i.a.createElement("div",null,'El botón "Paso" (abajo) avanza la simulación 1 día por click. O puedes presionar el boton ▷ para que avance automáticamente:')
,i.a.createElement(A,null
,i.a.createElement(T,{daysIncubating:0,daysSymptomatic:1e10,gridRows:9,gridCols:9,nodeSize:30,nug:1,randomSeed:100,personHours:4,showInteractions:!1,speed:.4,transmissionProbability:1,travelRadius:1}))
,i.a.createElement("div",null,"¡Oh, no! Parece que cada persona estornudo sobre las que la rodeaban  — norte, este, sur, oeste — y todo el mundo se enfermó!")
,i.a.createElement("div",null
,i.a.createElement("h3",null,"Recuperación"))
,i.a.createElement("div",null,"Pero la gente no sigue enferma para siempre. Veamos qué pasa cuando se curan después de 2 pasos (esto es, 2 días):")
,i.a.createElement(A,null
,i.a.createElement(T,{daysIncubating:0,daysSymptomatic:2,gridRows:9,gridCols:9,nodeSize:30,nug:1,randomSeed:100,personHours:4,showInteractions:!1,speed:.4,transmissionProbability:1,travelRadius:1}))
,i.a.createElement("div",null,"¡Bien! Ahora las personas pueden pasar de ",s," a ",l,".")
,i.a.createElement("div",null,"Aquí va una guía para tener a mano:")
,i.a.createElement("div",null
,i.a.createElement("ul",null
,i.a.createElement("li",null
,i.a.createElement(x,{type:"susceptible"})," \xa0"
,i.a.createElement("b",null,"Susceptibles"))
,i.a.createElement("li",null
,i.a.createElement(x,{type:"infected"})," \xa0"
,i.a.createElement("b",null,"Infectadas"))
,i.a.createElement("li",null
,i.a.createElement(x,{type:"removed"})," \xa0"
,i.a.createElement("b",null,"Recuperadas"))))
,i.a.createElement("div",null,"A los efectos de esta simulación, una vez que una persona está ",l,", no volvería a infectarse. Esperamos que esto sea así para COVID-19, pero falta confirmarlo")
,i.a.createElement("div",null
,i.a.createElement("h3",null,"Período de Incubación"))
,i.a.createElement("div",null,"En la investigación sobre COVID-19, tal vez hayas oído que la enfermedad tiene un "
,i.a.createElement("strong",null,"período de incubación")," largo. Es el tiempo entre que una persona contrae la enfermedad y la aparición de los síntomas.")
,i.a.createElement("div",null,"Con COVID-19, se sospecha que los pacientes pueden contagiar durante el período de incubación. Pueden no notar que están enfermos, pero aún así contagiar a otras personas.")
,i.a.createElement("div",null,"Vamos a replicarlo en nuestro modelo. (¡Pero no te olvides, no vamos a modelar COVID-19 con precisión!)")
,i.a.createElement("div",null,"Así se ve el período de incubación:")
,i.a.createElement(A,null
,i.a.createElement(T,{gridRows:25,gridCols:25,nodeSize:20,nug:1,randomSeed:100,personHours:4,showDaysPerStateControls:!0,showInteractions:!1,speed:.4,transmissionProbability:1,travelRadius:1}))
,i.a.createElement("div",null,"Por la forma que elegí para modelar esta enfermedad, no hay una distinción importante entre los estados rojo y rosa. En lo que respecta al virus, ambos estados son lo mismo.")
,i.a.createElement("div",null,"Sin embargo, quise incluir el período de incubación como un recordatorio (visual) de que portadores de COVID-19 están mezclados entre nosotros, invisibles para las estadísticas oficiales, sin saber que están infectados")
,i.a.createElement("div",null,"... y sin saber que están contagiando a otras personas.")
,i.a.createElement("div",null,"¡Mientras lees esto ",n," podrías ser una de esas personas!")
,i.a.createElement("div",null
,i.a.createElement("ul",null
,i.a.createElement("li",null
,i.a.createElement(x,{type:"susceptible"})," \xa0"
,i.a.createElement("b",null,"Susceptibles"))
,i.a.createElement("li",null
,i.a.createElement(x,{type:"exposed"})," \xa0"
,i.a.createElement("b",null,"Infectedas (período de incubación, sin síntomas)"))
,i.a.createElement("li",null
,i.a.createElement(x,{type:"infected"})," \xa0"
,i.a.createElement("b",null,"Infectadas (con síntomas)"))
,i.a.createElement("li",null
,i.a.createElement(x,{type:"removed"})," \xa0"
,i.a.createElement("b",null,"Recuperadas"))))
,i.a.createElement("div",null
,i.a.createElement("h3",null,"Infección probabilística"))
,i.a.createElement("div",null,"OK, suficiente.")
,i.a.createElement("div",null,"Las enfermedades reales no se contagian al 100% de las personas que entran en contacto. Se propagan probabilísticamente.")
,i.a.createElement("div",null,"Agreguemos un parámetro para eso: la "
,i.a.createElement("strong",null,"tasa de transmisión"),". Controla la probabilidad de que la infección pase de una persona a otra.")
,i.a.createElement("div",null,"¿Podrías encontrar un valor de la tasa de transmisión que evite que la enfermedad alcance a toda la población?")
,i.a.createElement(A,null
,i.a.createElement(T,{gridRows:51,gridCols:51,maxTransmissionRate:1,nodeSize:10,nug:5,randomSeed:99,personHours:4,showDaysPerStateControls:!0,showInteractions:!1,showProTip:!0,showTransmissionProbabilitySlider:!0,speed:.9,transmissionProbability:.5,travelRadius:1}))
,i.a.createElement("div",null,"Pregunta: ¿Cuál es la tasa de transmisión "
,i.a.createElement("em",null,"más alta")," donde la enfermedad deja de propagarse para siempre (ej. llegar hasta los límites de la grilla)?")
,i.a.createElement("div",{style:{marginLeft:"2em"}},t)
,i.a.createElement("div",null,"En mis experimentos, parece ser alrededor de "
,i.a.createElement("span",{className:e},"0.35"),", tal vez "
,i.a.createElement("span",{className:e},"0.34"),". Por debajo de eso, he visto la infección disolverse cada vez. Por encima, en general infecta a todas las personas de la grilla.")
,i.a.createElement("div",null,"Así funciona la transmisión de la enfermedad en nuestro modelo.")
,i.a.createElement("div",null,"Cada día, cada persona tiene una cantidad fija de "
,i.a.createElement("strong",null,"encuentros")," con personas que la rodean.")
,i.a.createElement("div",null,"Hasta ahora, sólo dejamos que las personas interactúen con las que tienen cerca, con un límite de 4 encuentros por día. Vamos a cambiar ese supuesto más abajo.")
,i.a.createElement("div",null,"En cada encuentro, la tasa de transmisión determina la probabilidad de que una persona de las ",s," transmita la enfermedad a una de las ",r,". Cuanto más alta sea la tasa de transmisión, más alta la posibilidad de que pase de una persona a otra.")
,i.a.createElement("div",null,"En realidad hay distintos tipos de encuentro. Podés cruzarte con alguien por la calle. O sentarte a su lado en el transporte público. Tal vez compartir un cono de helado. Cada tipo de esos tiene distintas probabilidades de transmitir la infección. Pero en nuestro modelo, por simpleza, todos los encuentros tienen la misma tasa de transmisión.")
,i.a.createElement("div",null,"\u2014\u2014")
,i.a.createElement("div",null,"Mientras exploras las simulaciones (arriba y abajo) y piensas en su relación con el coronavirus/COVID-19, hay algo para tener en mente:")
,i.a.createElement("div",null,"La tasa de transmisión es parcialmente propia de "
,i.a.createElement("em",null,"cada enfermedad")," (cómo es de infecciosa), pero también del "
,i.a.createElement("em",null,"ambiente")," donde vive. Incluye los factores físicos (ej.  temperatura del aire y humedad) como sociales del ambiente (ej. el comportamiento de las personas).")
,i.a.createElement("div",null,"Por ejemplo, cuando la gente se lava las manos y usa máscaras para contener la tos, la tasa de transmisión por encuentro disminuye — aunque el virus no cambie.")
,i.a.createElement("div",null,'Entonces, para cualquier proceso de crecimiento viral, es posible encontrar una tasa de transmisión suficientemente baja para detener completamente la propagación. Se la llama "umbral crítico" y podés saber más '
,i.a.createElement("a",{href:"https://meltingasphalt.com/interactive/going-critical"},"aquí"),".")
,i.a.createElement("div",null,"Pero el COVID-19 es tan contagioso, que es difícil llegar debajo de esa tasa de transmisión crítica. Sólo podemos lavarnos las manos unas veces por día. Ni siquiera usar máscaras en público sería suficiente (aunque cada cuidado ayuda).")
,i.a.createElement("div",null,""
,i.a.createElement("em",null,"Podríamos")," vestirnos con trajes de seguridad cada vez que salimos; técnicamente debería resolver el problema de transmisión (sin cambiar nuestros patrones de interacción). Pero como es ... poco práctico ... busquemos otras maneras de evitar que esta enfermedad nos consuma.")
,i.a.createElement("div",null
,i.a.createElement("h3",null,"Viajes"))
,i.a.createElement("div",null,"Otra suposición poco realista que hicimos hasta ahora: las personas sólo interactúan con sus vecinos.")
,i.a.createElement("div",null,"¿Qué pasa si dejamos que las personas viajen más lejos? (Seguimos suponiendo 4 encuentros por día, un parámetro que vamos a explicitar en la próxima sección).")
,i.a.createElement("div",null,"A medida que deslices el control de "
,i.a.createElement("strong",null,"radio de viaje")," debajo, verás una muestra de los encuentros que la persona del centro de la grilla tiene en un día cualquiera. (No podemos dibujar los encuentros "
,i.a.createElement("em",null,"de todas las personas")," porque se haría incomprensible, vas a tener que usar tu imaginación). Notar que en nuestro modelo, a diferencia de la vida real, cada día trae nuevos encuentros al azar.")
,i.a.createElement(A,null
,i.a.createElement(T,{degree:24,gridRows:51,gridCols:51,maxTransmissionRate:1,nodeSize:10,nug:5,personHours:4,randomSeed:99,showAliveFraction:!0,showInteractions:!0,showTravelRadiusSlider:!0,speed:.8,travelRadius:15}))
,i.a.createElement("div",null,"Notar que si se restringen los viajes desde el comienzo (ej. a un radio de 2 unidades), se puede volver mucho más lenta la infección.")
,i.a.createElement("div",null,"¿Qué pasa si no se restringen los viajes al comienzo, se deja que la infección llegue a todos lados, y sólo se restringen "
,i.a.createElement("em",null,"después"),"?")
,i.a.createElement("div",null,"En otras palabras, ¿Cuán temprano en la curva de infección hace falta restringir los viajes para hacer significativamente más lento el brote de la enfermedad?")
,i.a.createElement("div",null,"Adelante, prueba. Comienza con un radio de viajes de 25. Ejecuta la simulación, deteniendola cuando el 10% de la gente esté Infectada. Luego reduce el radio a  2 y continua ejecutando. ¿Qué ocurre?")
,i.a.createElement("div",null,"Conclusión: hay que restringir los viajes desde el comienzo, al menos para aplanar la curva de crecimiento de la enfermedad. (¡Empecemos ahora!)")
,i.a.createElement("div",null,"Pero restringir los viajes puede ayudar en etapas posteriores de una irrupción, al menos por dos razones:")
,i.a.createElement("div",null
,i.a.createElement("ol",null
,i.a.createElement("li",null,"Buses, trenes, y aeropuertos son lugares donde la gente se amontona en espacios insuficientes. Cuando dejan de usar esos medios de transporte, se reducen los encuentros con gente potencialmente Infectada. (Lo exploraremos en detalle abajo.)")
,i.a.createElement("li",null,"Minimizar la cantidad de viajes es imprescindible "
,i.a.createElement("em",null,"junto con otras medidas de contención regional."),".  Si una relación tiene el brote bajo control, pero las vecinas todavía están en crisis, hay que proteger a la región controlada. (No vamos a explorar medidas de contención en este artículo, pero pronto serán importantes, y si te interesa, se puede comenzar por "
,i.a.createElement("a",{href:"https://necsi.edu/beyond-contact-tracing"},"aquí"),".)")))
,i.a.createElement("div",null
,i.a.createElement("h3",null,"Cantidad de encuentros"))
,i.a.createElement("div",null,"Ok, abramos el juego más todavía.")
,i.a.createElement("div",null,"En la simulación que sigue se puede variar la "
,i.a.createElement("strong",null,"cantidad de encuentros por día"),".")
,i.a.createElement("div",null,"Comencemos con 20. ¿Cuál es el valor mínimo para mantener el brote bajo control?")
,i.a.createElement(A,null
,i.a.createElement(T,{degree:24,gridRows:51,gridCols:51,personHours:20,nodeSize:10,nug:5,randomSeed:100,showAliveFraction:!0,showInteractions:!0,showPersonHoursSlider:!0,showTransmissionProbabilitySlider:!0,showTravelRadiusSlider:!0,speed:.8,transmissionProbability:.3,travelRadius:10}))
,i.a.createElement("div",null,"Como ves, reducir la cantidad de encuentros por día tiene un "
,i.a.createElement("em",null,"efecto dramático")," en el brote. Aplana fácilmente la curva, e incluso tiene el potencial (si se hace seriamente) de detenerlo por completo.")
,i.a.createElement("div",null,'Ese es el efecto que esperamos conseguir cuando pedimos "distanciamiento social". Por eso tantas personas le piden a sus gobernantes que prohiban los encuentros masivos y cierren las escuelas, y la razón para mantenerse lejos de bares, restaurantes, comercios, y lugares de trabajo tanto como se pueda.')
,i.a.createElement("div",null,"La NBA hizo un gran favor a sus seguidores cancelando el resto de la temporada. Tenemos que imitarlos y "
,i.a.createElement("em",null,"cancelar todo lo demás"),".")
,i.a.createElement("div",null,"A mi entender (de nuevo, no soy un experto), es la herramienta más importante que tenemos para combatir esta enfermedad.")
,i.a.createElement("div",null
,i.a.createElement("h3",null,"Muerte"))
,i.a.createElement("div",null,"No todos los pacientes se recuperan. Muchas personas terminan ",o,".")
,i.a.createElement("div",null,"Entra la "
,i.a.createElement("strong",null,"Tasa de mortalidad"),".")
,i.a.createElement("div",null,'(Tal vez hayas oído acerca de la "tasa de mortalidad por caso" en el contexto del COVID-19. No es lo mismo que la Tasa de mortalidad. La "Tasa de mortalidad por caso" '
,i.a.createElement("a",{href:"https://www.britannica.com/science/case-fatality-rate"},"se define")," como el número de muertes registradas dividida por el número de casos confirmados, cuando ambas medidas se toman en el mismo momento. Mientras que la \"Tasa de mortalidad\" se define como la probabilidad de morir si has contraído la enfermedad. TMC es un número importante para entender la enfermedad a medida que la descubrimos. Pero el número que nos interesa es la Tasa de mortalidad — las posibilidades de sobrevivir de las personas que nos importan.)")
,i.a.createElement("div",null,"La Tasa de mortalidad para el COVID-19 ha sido estimada "
,i.a.createElement("a",{href:"https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(20)30195-X/fulltext"},"entre el 1% y el 6%"),". Podría terminar siendo inferior al 1% si hubiera muchos casos sin diagnosticar. Es definitivamente más alta cuando el sistema médico está desbordado (más sobre esto en un minuto).")
,i.a.createElement("div",null,"Comencemos con una  Tasa de mortalidad del 3% para nuestro modelo, pero se pueden variar todos los parámetros a continuación:")
,i.a.createElement(A,null
,i.a.createElement(T,{gridRows:101,gridCols:101,nodeSize:5,nug:5,randomSeed:100,showAliveFraction:!0,showDeaths:!0,showDeathRateSlider:!0,showPersonHoursSlider:!0,showTransmissionProbabilitySlider:!0,showTravelRadiusSlider:!0,speed:1,transmissionProbability:.3}))
,i.a.createElement("div",null,"Esos puntitos negros desparramados no parecen mucho. Pero recuerda que cada uno es una vida humana, perdida por la enfermedad.")
,i.a.createElement("div",null
,i.a.createElement("h3",null,"Capacidad hospitalaria"))
,i.a.createElement("div",null,"Abajo encontrarás el último control deslizable. Define la "
,i.a.createElement("strong",null,"capacidad hospitalaria"),".")
,i.a.createElement("div",null,"Es la cantidad de pacientes (como porcentaje de la población) que puede atender el sistema de salud simultáneamente.")
,i.a.createElement("div",null,"¿Por qué la capacidad hospitalaria es importante?")
,i.a.createElement("div",null,"Cuando hay más pacientes de los que puede atender el sistema de salud, no pueden recibir los tratamientos que necesitan. Como resultado, terminan mucho peor. Como vimos en Italia, algunos pueden morir abandonados en los pasillos.")
,i.a.createElement("div",null,"He visto personas hablar de la capacidad hospitalaria como “cantidad de camas” o “cantidad de camas en terapia intensiva”. Mi impresión es que “camas” se pueden poner en un gimnasio con poco tiempo. Creo que el verdadero cuello de botella es el equipamiento médico — en especial respiradores mecánicos. No estoy seguro. Tal vez sea el personal médico.")
,i.a.createElement("div",null,""
,i.a.createElement("em",null,"Es muy importante"),". Necesitamos identificar cual es el cuello de botella y hacer todo para aliviar la presión allí. Para una simulación nos conformamos con suponer que la capacidad está limitada por algún punto del sistema de salud. Dijimos que no estamos modelando la realidad con todo detalle.")
,i.a.createElement("div",null,"En nuestro modelo de enfermedad, el sistema de salud falla así:")
,i.a.createElement("div",null
,i.a.createElement("strong",null,"Cuando hay más infecciones que la capacidad hospitalaria, la Tasa de mortalidad "
,i.a.createElement("em",null,"se duplica"),"."))
,i.a.createElement("div",null,"Pruébalo. Presta especial atención a la "
,i.a.createElement("em",null,"Tasa de mortalidad de entrada")," (el valor en el control deslizable), que define cuán a menudo mueren las personas incluso en las mejores circunstancias, vs. la  "
,i.a.createElement("em",null,"tasa de mortalidad real")," (destacada debajo del gráfico), que muestra cómo se comporta el sistema bajo presión.")
,i.a.createElement(A,null
,i.a.createElement(T,{gridRows:101,gridCols:101,hospitalCapacityPct:.05,nodeSize:5,nug:5,personHours:15,randomSeed:100,showAliveFraction:!0,showDeaths:!0,showDeathRateSlider:!0,showHospitalCapacitySlider:!0,speed:1,transmissionProbability:.28,travelRadius:15}))
,i.a.createElement("div",null
,i.a.createElement("h3",null,'"Aplanar la curva"'))
,i.a.createElement("div",null,"Ya lo escuchaste. Sabés que es importante. Pero ahora lo vas a sentir.")
,i.a.createElement("div",null,"Es tu última prueba por hoy.")
,i.a.createElement("div",null,"La Tasa de mortalidad de entrada está fija en el 3%. La capacidad hospitalaria está fija en el 5%.")
,i.a.createElement("div",null,"Ejecuta la simulación y nota la tasa de mortalidad real: 6%. Intenta reducir ese número.")
,i.a.createElement("div",null,"En otras palabras, intenta aplanar la curva:")
,i.a.createElement(A,null
,i.a.createElement(T,{gridRows:101,gridCols:101,hospitalCapacityPct:.05,nodeSize:5,nug:5,personHours:15,randomSeed:100,showAliveFraction:!0,showDeaths:!0,showPersonHoursSlider:!0,showTransmissionProbabilitySlider:!0,showTravelRadiusSlider:!0,speed:1,transmissionProbability:.4,travelRadius:15}))
,i.a.createElement("div",null,"Más allá de cómo haya funcionado en la simulación, la realidad va a ser "
,i.a.createElement("em",null,"Mucho. Más. Dura"),". Las personas de verdad no son ni de lejos tan obedientes como los controles deslizables de esta pantalla.")
,i.a.createElement("div",null,"Y aquí va el sacudón: incluso si logramos \"aplanar la curva\" lo suficiente para reducir la carga de pacientes en guardias y hospitales, igual vamos a perder millones de vidas.")
,i.a.createElement("div",null,"Tal vez no perdamos tanta como en el peor escenario; tal vez no las perdamos en los pasillos de los hospitales. Pero mientras el virus siga propagándose — como todo parece indicar — habrá una cantidad impensable de sufrimiento en el futuro.")
,i.a.createElement("div",null,"Salvo que hagamos las cosas bien hoy.")
,i.a.createElement("div",null,"Deja de viajar. Deja de salir. Deja de visitar familia y amigos. Deja de comer en restaurantes. Suspende todo lo que puedas. Y si estás a cargo de cosas, "
,i.a.createElement("em",null,"las cancelas."),". Suspender. Todo.")
,i.a.createElement("div",null,"Por favor: actúa decididamente ahora mismo.")
,i.a.createElement("div",null,"COVID-19 viene por todos nosotros. No lo van a detener medidas débiles.")
,i.a.createElement("div",null,"\xa0")
,i.a.createElement("div",null,"\xa0")
,i.a.createElement("div",null,"\u2014\u2014")
,i.a.createElement("div",null,"\xa0")
,i.a.createElement("div",null
,i.a.createElement("b",null,"Licencia"))
,i.a.createElement("div",null
,i.a.createElement("a",{href:"https://creativecommons.org/share-your-work/public-domain/cc0/"},"CC0")," — no hay derechos reservados. Eres libre de usar este trabajo como creas conveniente, incluyendo copiar, modificar, y distribuirlo en tu sitio. (Agradeceré un link al post original, si eres tan amable)")
,i.a.createElement("div",null
,i.a.createElement("b",null,"Modelo completo"))
,i.a.createElement("div",null,"El modelo completo, con todos los controles deslizables, se encuentra al final de la página.")
,i.a.createElement("div",null
,i.a.createElement("b",null,"Agradecimientos"))
,i.a.createElement("div",null,"Quiero agradecer a "
,i.a.createElement("a",{href:"https://twitter.com/nsbarr"},"Nick Barr"),", "
,i.a.createElement("a",{href:"https://twitter.com/origiful"},"Ian Padgham"),", "
,i.a.createElement("a",{href:"https://twitter.com/frooblor"},"Diana Huang"),", Kellie Jack, "
,i.a.createElement("a",{href:"https://twitter.com/btnaughton"},"Brian Naughton"),", "
,i.a.createElement("a",{href:"https://twitter.com/yaneerbaryam"},"Yaneer Bar-Yam"),", y a "
,i.a.createElement("a",{href:"https://twitter.com/adamdangelo"},"Adam D'Angelo")," por sus comentarios útiles y su apoyo.")
,i.a.createElement("div",null
,i.a.createElement("b",null,"Para seguir leyendo"))
,i.a.createElement("div",null
,i.a.createElement("ul",null
,i.a.createElement("li",null
,i.a.createElement("a",{href:"https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca"},"Coronavirus: Why You Must Act Now")," \u2014 Tomas Pueyo explains why we've been systematically underestimating this thing, and why that needs to change. Just read it.")
,i.a.createElement("li",null
,i.a.createElement("a",{href:"https://medium.com/@joschabach/flattening-the-curve-is-a-deadly-delusion-eea324fe9727"},'Don\u2019t "Flatten the Curve," Stop It!'),' \u2014 Joscha Bach does some calculations on hospital capacity and concludes that "flattening the curve" won\'t be enough; we have to completely stop the outbreak.')
,i.a.createElement("li",null,"The Washington Post's "
,i.a.createElement("a",{href:"https://www.washingtonpost.com/graphics/2020/world/corona-simulator/"},"excellent simulation")," \u2014 brilliant use of billiard balls to show transmission and social distancing.")
,i.a.createElement("li",null
,i.a.createElement("a",{href:"https://meltingasphalt.com/interactive/going-critical/"},"Going Critical")," \u2014 my previous exploration of diffusion and expontential growth processes, including the nuclear reactions and the growth of knowledge."))),this.renderEndOfPostDivider(!0)
,i.a.createElement("div",{className:"subscription-footer"}
,i.a.createElement("a",{href:"https://meltingasphalt.com"}
,i.a.createElement("strong",null,"Melting Asphalt"))," es mantenido por "
,i.a.createElement("span",{className:"nohyphen"},"Kevin")," "
,i.a.createElement("span",{className:"nohyphen"},"Simler"),"."
,i.a.createElement("br",null)
,i.a.createElement("br",null),"Publico "
,i.a.createElement("em",null,"con poca frecuencia"),", si quieres enterarte de nuevos posts:"
,i.a.createElement("br",null),this.renderSubscribeForm()
,i.a.createElement("br",null),"También puedes "
,i.a.createElement("a",{href:"https://twitter.com/KevinSimler"}
,i.a.createElement("strong",null,"encontrarme en Twitter")),"."
,i.a.createElement("div",null,"\xa0"))
,i.a.createElement("div",null,"\xa0")
,i.a.createElement("div",null
,i.a.createElement("h3",null,"Modelo completo"))
,i.a.createElement(A,null
,i.a.createElement(T,{gridRows:101,gridCols:101,hospitalCapacityPct:.05,nodeSize:5,nug:5,randomSeed:100,showAliveFraction:!0,showAllControls:!0,showDeaths:!0,speed:1})))}},{key:"renderSubscribeForm",value:function(){return i.a.createElement("form",{method:"post",action:"https://meltingasphalt.us8.list-manage.com/subscribe/post?u=0bc9d741e167733d20c520ea6&id=57ebd9b4a6",id:"mc4wp-form-1",className:"form mc4wp-form"}
,i.a.createElement("input",{type:"email",id:"mc4wp_email",name:"EMAIL",placeholder:"Enter your email",required:!0})
,i.a.createElement("input",{type:"submit",value:"Subscribe"})
,i.a.createElement("textarea",{name:"_mc4wp_required_but_not_really",style:{display:"none"}})
,i.a.createElement("input",{type:"hidden",name:"_mc4wp_form_submit",value:"1"})
,i.a.createElement("input",{type:"hidden",name:"_mc4wp_form_instance",value:"1"})
,i.a.createElement("input",{type:"hidden",name:"_mc4wp_form_nonce",value:"8a45344b67"}))}},{key:"renderEndOfPostDivider",value:function(e){var t="",a=i.a.createElement("span",null,"\u2014\u2014");
return e&&(t="Publicado por primera vez el 16 de Marzo de 2020.",a=i.a.createElement("img",{src:"https://meltingasphalt.com/wp-content/themes/responsive/core/images/flourish.svg",width:50,alt:"\u2014\u2014"}))
,i.a.createElement("div",{style:{textAlign:"center"}}
,i.a.createElement("div",{className:"end-of-post-divider"},a)
,i.a.createElement("div",{className:"signature-line"},t))}},{key:"renderHeader",value:function(){return i.a.createElement("div",{id:"header"}
,i.a.createElement("div",{id:"logo",className:"branded"}
,i.a.createElement("span",{className:"site-name"}
,i.a.createElement("a",{href:"https://meltingasphalt.com/",title:"Melting Asphalt",rel:"home"}
,i.a.createElement("img",{id:"nav-logo",src:"https://meltingasphalt.com/wp-content/themes/responsive/core/images/ma.svg"}),"\xa0\xa0Melting Asphalt"))))}},{key:"render",value:function(){return i.a.createElement("div",{className:"main-container"}
,i.a.createElement("div",{className:"header"},this.renderHeader())
,i.a.createElement("div",{className:"blank-l"})
,i.a.createElement("div",{className:"content"},this.renderMainPost())
,i.a.createElement("div",{className:"blank-r"})
,i.a.createElement("div",{className:"footer"}))}}]),t}(n.Component);
Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
s.a.render(i.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,t,a){},66:function(e,t,a){e.exports=a(178)},71:function(e,t,a){}},[[66,2,1]]]);

//# sourceMappingURL=main.4a7fcd8a.chunk.js.map
