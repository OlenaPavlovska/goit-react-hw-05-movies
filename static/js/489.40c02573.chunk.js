"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[489],{256:function(t,r,e){e.d(r,{Df:function(){return s},TP:function(){return f},jP:function(){return m},z1:function(){return o},zv:function(){return l}});var n=e(861),a=e(757),c=e.n(a),u=e(243),i="fb80b48b1255806de867923f1e41971b";function s(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function t(){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(i),t.next=4,u.Z.get(r);case 4:return e=t.sent,t.abrupt("return",e.data.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function o(t){return h.apply(this,arguments)}function h(){return h=(0,n.Z)(c().mark((function t(r){var e,n,a,s=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:1,t.prev=1,n="https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(r,"&page=").concat(e),t.next=5,u.Z.get(n);case 5:return a=t.sent,t.abrupt("return",a.data.results);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[1,9]])}))),h.apply(this,arguments)}function f(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(i),t.next=4,u.Z.get(e);case 4:return n=t.sent,t.abrupt("return",n.data);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(i),t.next=4,u.Z.get(e);case 4:return n=t.sent,t.abrupt("return",n.data);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(i),t.next=4,u.Z.get(e);case 4:return n=t.sent,t.abrupt("return",n.data);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}},489:function(t,r,e){e.r(r);var n=e(439),a=e(256),c=e(791),u=e(184);r.default=function(t){var r=t.movieId,e=(0,c.useState)([]),i=(0,n.Z)(e,2),s=i[0],p=i[1],o=(0,c.useState)(null),h=(0,n.Z)(o,2),f=h[0],v=h[1];(0,c.useEffect)((function(){(0,a.zv)(r).then((function(t){p(t)})).catch((function(t){v("Error fetching trending movies: "+t.message)}))}),[r]);return(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Cast"}),f?(0,u.jsxs)("p",{children:["Error: ",f]}):(0,u.jsx)("div",{children:s.map((function(t){return(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w200/".concat(t.profile_path):"https://cdn-icons-png.flaticon.com/512/4054/4054617.png",alt:t.name,width:230}),(0,u.jsx)("p",{children:t.name})]},t.id)}))})]})}}}]);
//# sourceMappingURL=489.40c02573.chunk.js.map