(this.webpackJsonpbus=this.webpackJsonpbus||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var c=n(12),a=n(2),i=n.n(a),r=n(46),s=n.n(r),o=(n(60),n(47)),u=n(48),j=n(54),l=n(53),b=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={date:new Date},e}return Object(u.a)(n,[{key:"interval",value:function(){var e=this;setInterval((function(){e.setState({date:new Date})}),1e3)}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"time",children:[Object(c.jsx)("h3",{children:"Current Local Time"}),Object(c.jsx)("h3",{children:this.state.date.toLocaleTimeString()}),this.interval()]})}}]),n}(a.Component),d=n(23),h=n(31),O=n(16),p=n(52),x=n(51);n(111),n(45);var f=function(){var e=Object(a.useState)({width:"100vw",height:"100vh",latitude:25.599349,longitude:-80.34819,zoom:13}),t=Object(h.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)([]),s=Object(h.a)(r,2),o=s[0],u=s[1],j=Object(a.useState)(null),l=Object(h.a)(j,2),b=l[0],f=l[1],m=Object(x.a)("https://miami-transit-api.herokuapp.com/api/Buses.json",(function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))})),v=m.data;m.error,Object(a.useEffect)((function(){v&&u(v.RecordSet.Record)}),[v]);var g=Object(a.useRef)(),y=Object(a.useCallback)((function(e){return i(e)}),[]),k=Object(a.useCallback)((function(e){return y(Object(d.a)(Object(d.a)({},e),{transitionDuration:800}))}),[]);return Object(c.jsx)("div",{children:Object(c.jsxs)(O.e,Object(d.a)(Object(d.a)({ref:g},n),{},{mapboxApiAccessToken:"pk.eyJ1IjoibHlkaWVjaGVyaWx1cyIsImEiOiJja2gxMnEyOTcwYmVsMnJscXc4bnk0bXh3In0.YY_RlS5y_fAxP0ir_MPuzg",onViewportChange:y,mapStyle:"mapbox://styles/mapbox/streets-v11",children:[o.map((function(e,t){return Object(c.jsx)(O.b,{latitude:parseFloat(e.Latitude),longitude:parseFloat(e.Longitude),children:Object(c.jsx)("button",{onClick:function(t){t.preventDefault(),f(e)},children:Object(c.jsx)("img",{src:"/bus-svg.html",alt:"bus"})})},t)})),b?Object(c.jsx)(O.d,{className:"popup",latitude:parseFloat(b.Latitude),longitude:parseFloat(b.Longitude),onClose:function(){f(null)},children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h5",{children:b.TripHeadsign}),Object(c.jsx)("p",{children:Object(c.jsx)("strong",{children:b.ServiceDirection})})]})}):null,Object(c.jsx)(p.a,{mapRef:g,mapboxApiAccessToken:"pk.eyJ1IjoibHlkaWVjaGVyaWx1cyIsImEiOiJja2gxMnEyOTcwYmVsMnJscXc4bnk0bXh3In0.YY_RlS5y_fAxP0ir_MPuzg",onViewportChange:k,zoom:12,trackProximity:"true",placeholder:"enter your address",position:"top-right"}),Object(c.jsx)("div",{className:"navigation-control",children:Object(c.jsx)(O.c,{})})]}))})};var m=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Miami Dade Bus Real-Time Locations"}),Object(c.jsx)(b,{}),Object(c.jsx)(f,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,114)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),v()},45:function(e,t,n){},60:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.779acd41.chunk.js.map