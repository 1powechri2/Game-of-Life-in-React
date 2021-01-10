(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t),function(e){var t=n(2),r=n(3),a=function(){function e(n,r){Object(t.a)(this,e),this.height=n,this.width=r}return Object(r.a)(e,[{key:"world",value:function(){var e,t=[];for(e=0;e<this.height;e++){t[e]=new Array;var n=0;for(n=0;n<this.width;n++)t[e][n]=Math.round(Math.random())}return t}},{key:"emptyWorld",value:function(){var e,t,n=[];for(e=0;e<this.height;e++)for(n[e]=new Array,t=0;t<this.width;t++)n[e][t]=null;return n}},{key:"checkBoundaries",value:function(e,t){return-1==e?t-1:e==t?0:e}},{key:"cellVal",value:function(e,t,n){var r=n.length,a=n[0].length,c=this.checkBoundaries(e,r),l=this.checkBoundaries(t,a);return n[c][l]}},{key:"neighborsCount",value:function(e,t,n){var r,a,c=e+1,l=t+1,i=0,o=this.cellVal(e,t,n);for(r=e-1;r<=c;r++)for(a=t-1;a<=l;a++)i+=this.cellVal(r,a,n);return i-=o}},{key:"checkEvolution",value:function(e,t){return 1!=e||2!=t&&3!=t?0==e&&3==t?"Live":"Dead":"Live"}},{key:"readWorld",value:function(e){var t,n,r=this.emptyWorld();for(t=0;t<e.length;t++)for(n=0;n<e[t].length;n++){var a=this.cellVal(t,n,e),c=this.neighborsCount(t,n,e),l=this.checkEvolution(a,c);r[t][n]="Live"==l?1:0}return r}}]),e}();e.exports=a}.call(this,n(16)(e))},8:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(3),c=n(5),l=n(4),i=n(0),o=n(1),u=n.n(o),s=n(7),h=n.n(s),f=(n(14),new(n(15))(100,100)),v=f.world(),d=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(i.jsx)("span",{className:"cell",style:{backgroundColor:this.props.color},children:Object(i.jsx)("span",{className:"bullseye"})})}}]),n}(u.a.Component),b=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={cells:v},a}return Object(a.a)(n,[{key:"renderCell",value:function(e){var t=null;return t=0==e?"black":"#EE34D2",Object(i.jsx)(d,{value:e,color:t})}},{key:"evolveGame",value:function(){var e=f.readWorld(this.state.cells);this.setState({cells:e})}},{key:"render",value:function(){var e=this;setInterval((function(){e.evolveGame()}),500);var t=this.state.cells.flat();return Object(i.jsx)("div",{className:"world",children:t.map((function(t){return e.renderCell(t)}))})}}]),n}(u.a.Component),j=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(i.jsx)("section",{className:"game-of-life",children:Object(i.jsx)(b,{})})}}]),n}(u.a.Component);h.a.render(Object(i.jsx)(j,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.84ab8c44.chunk.js.map