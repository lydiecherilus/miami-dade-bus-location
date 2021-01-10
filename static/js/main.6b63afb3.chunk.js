(this.webpackJsonpbus=this.webpackJsonpbus||[]).push([[0],{113:function(e,t,n){"use strict";n.r(t);var c=n(12),i=n(2),a=n.n(i),r=n(46),o=n.n(r),s=(n(60),n(47)),j=n(48),b=n(54),l=n(53),u=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={date:new Date},e}return Object(j.a)(n,[{key:"interval",value:function(){var e=this;setInterval((function(){e.setState({date:new Date})}),1e3)}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"time",children:[Object(c.jsx)("h3",{children:"Current Local Time"}),Object(c.jsx)("h3",{children:this.state.date.toLocaleTimeString()}),this.interval()]})}}]),n}(i.Component),d=n(23),A=n(31),h=n(16),O=n(52),g=n(51);n(111),n(112),n(45);var p=function(){var e=Object(i.useState)({width:"100vw",height:"100vh",latitude:25.599349,longitude:-80.34819,zoom:13}),t=Object(A.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)([]),o=Object(A.a)(r,2),s=o[0],j=o[1],b=Object(i.useState)(null),l=Object(A.a)(b,2),u=l[0],p=l[1],x=Object(g.a)("https://miami-transit-api.herokuapp.com/api/Buses.json",(function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))})),I=x.data;x.error,Object(i.useEffect)((function(){I&&j(I.RecordSet.Record)}),[I]);var m=Object(i.useRef)(),v=Object(i.useCallback)((function(e){return a(e)}),[]),D=Object(i.useCallback)((function(e){return v(Object(d.a)(Object(d.a)({},e),{transitionDuration:800}))}),[]);return Object(c.jsx)("div",{children:Object(c.jsxs)(h.e,Object(d.a)(Object(d.a)({ref:m},n),{},{mapboxApiAccessToken:"pk.eyJ1IjoibHlkaWVjaGVyaWx1cyIsImEiOiJja2gxMnEyOTcwYmVsMnJscXc4bnk0bXh3In0.YY_RlS5y_fAxP0ir_MPuzg",onViewportChange:v,mapStyle:"mapbox://styles/lydiecherilus/ckh2a7qju1ucw1amvlxj3xo78",children:[s.map((function(e,t){return Object(c.jsx)(h.b,{latitude:parseFloat(e.Latitude),longitude:parseFloat(e.Longitude),children:Object(c.jsx)("button",{onClick:function(t){t.preventDefault(),p(e)},children:Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkFFMzZGODQwNzFBMTFFMTgxQ0FEMDQ0OTYxQUFFNDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkFFMzZGODUwNzFBMTFFMTgxQ0FEMDQ0OTYxQUFFNDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RDI3NDk2QjA3MTkxMUUxODFDQUQwNDQ5NjFBQUU0MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RDI3NDk2QzA3MTkxMUUxODFDQUQwNDQ5NjFBQUU0MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoY5fCIAAAFYSURBVHja5FbrbQIxDE4qBqAb0A0q3f3nOgErwAidoGIC2ABGgAkIA5w6ArdBb4P0i+QgN40vuYeQqkaybBHb3/kZtLVWPeI8qQedmRe01r8ui6KYg91A84Sftq7r59iFz5i+CwEQQBZgH6A1qIGjF+FDPkFO9x10gl6TDQQHzvlhQIZaBwiwYxIIIBXYZWRJ3gBmONAsorRj8hZkKHVNzCOl2FFFqVbEDdf7ERHl/IvujnC+6RMG7A9UUwVbzSMK2/uVyecBKTsz0KprjhZMNgOAjOBLBHI1afuikE3TCUS5XHqgER3nbZc5K+g6Auias+t8AVfUtqpn1zmbVeBLnCPffTcY/r3t/b+ANrRGctZQUlfzp7wsS8uGT7NusolBjeq636VdF75Jd55o66SuGNEUJyuiKQ4f+hBoPyHOnj+WsafcSoVOfH3Urit1rSDn/DER7b4FGADLCZ/P8CC6oAAAAABJRU5ErkJggg==",alt:"bus"})})},t)})),u?Object(c.jsx)(h.d,{className:"popup",latitude:parseFloat(u.Latitude),longitude:parseFloat(u.Longitude),onClose:function(){p(null)},children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h5",{children:u.TripHeadsign}),Object(c.jsx)("p",{children:Object(c.jsx)("strong",{children:u.ServiceDirection})})]})}):null,Object(c.jsx)(O.a,{mapRef:m,mapboxApiAccessToken:"pk.eyJ1IjoibHlkaWVjaGVyaWx1cyIsImEiOiJja2gxMnEyOTcwYmVsMnJscXc4bnk0bXh3In0.YY_RlS5y_fAxP0ir_MPuzg",onViewportChange:D,zoom:12,trackProximity:"true",placeholder:"enter your address",position:"top-right"}),Object(c.jsx)("div",{className:"navigation-control",children:Object(c.jsx)(h.c,{})})]}))})};var x=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Miami Dade Bus Real-Time Locations"}),Object(c.jsx)(u,{}),Object(c.jsx)(p,{})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),I()},45:function(e,t,n){},60:function(e,t,n){}},[[113,1,2]]]);
//# sourceMappingURL=main.6b63afb3.chunk.js.map