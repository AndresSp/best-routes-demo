(this["webpackJsonpbest-routes-demo"]=this["webpackJsonpbest-routes-demo"]||[]).push([[0],{178:function(e,t,n){e.exports=n(307)},183:function(e,t,n){},184:function(e,t,n){},307:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),i=n(36),s=n.n(i),c=n(22),d=(n(183),n(184),n(166)),l=n(68),u=n(144),m=n(167),p=n(164),f=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).calculateAndDisplayRoute=function(t){var n=[];t.forEach((function(e){n.push({location:e.location,stopover:!0})})),e.directionsService.route({origin:t[0].location,destination:t[t.length-1].location,waypoints:n,optimizeWaypoints:!0,travelMode:"DRIVING"},(function(t,n){"OK"===n?e.directionsRenderer.setDirections(t):window.alert("Directions request failed due to "+n)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.addressStore;return e.addresses.length>0&&this.calculateAndDisplayRoute(e.addresses),o.a.createElement("div",{id:"map"})}},{key:"componentDidMount",value:function(){this.directionsService=new window.google.maps.DirectionsService,this.directionsRenderer=new window.google.maps.DirectionsRenderer,this.map=new window.google.maps.Map(document.getElementById("map"),Object(d.a)({},this.props.options)),this.directionsRenderer.setMap(this.map)}}]),n}(o.a.Component),h=Object(c.b)((function(e){return{addressStore:e.addressStore}}))(Object(c.c)(f)),g=n(317),v=n(319),y=n(94),w=n.n(y),b=n(165),E=n(145);function j(e,t){(a=new window.google.maps.places.Autocomplete(t.current,{types:[],componentRestrictions:{country:"us"}})).setFields(["geometry","formatted_address"]),a.addListener("place_changed",(function(){return function(e){return O.apply(this,arguments)}(e)}))}function O(){return(O=Object(E.a)(w.a.mark((function e(t){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.getPlace(),r={id:+n.geometry.location.lat()+ +n.geometry.location.lng(),formatted_address:n.formatted_address,lat:n.geometry.location.lat(),lng:n.geometry.location.lng(),location:n.geometry.location},t(r);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=Object(c.b)((function(e){return{addressStore:e.addressStore}}))((function(e){var t=e.addressStore,n=Object(r.useState)(""),a=Object(b.a)(n,2)[1],i=Object(r.useRef)(null);return Object(r.useEffect)((function(){return j(t.add,i)}),[t]),o.a.createElement("input",{ref:i,type:"search",onChange:function(e){return a(e.target.value)},placeholder:"Enter an address"})})),k=Object(c.b)((function(e){return{addressStore:e.addressStore}}))(Object(c.c)((function(e){var t=e.addressStore,n={marginTop:"50px",width:"90%"};return o.a.createElement("div",{style:{float:"left",width:"40%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},o.a.createElement(g.a,{style:n,inverted:!0},o.a.createElement(g.a.Field,null,o.a.createElement("label",null,"Search Address"),o.a.createElement(S,null))),o.a.createElement(g.a,{style:n,inverted:!0},t.addresses.map((function(e,n){return o.a.createElement(g.a.Field,{key:e.id},o.a.createElement(v.a,{onClick:function(){return t.remove(n)},labelPosition:"right",icon:"times",fluid:!0,content:e.formatted_address,inverted:!0}))}))))}))),R=n(162);var A=function(){return o.a.createElement("div",{id:"mainContainer"},o.a.createElement(R.a,{loadingComponent:o.a.createElement("div",null,"Google Maps loading..."),scripts:["https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyBjv2EjfX5AzUMqi-HPZTLLwAERAnOX6Ys","&v=3&libraries=places&language=en&region=US")]},o.a.createElement(k,null),o.a.createElement(h,{options:{center:{lat:39,lng:-95},zoom:5,mapTypeId:"roadmap"}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=n(10),I=function e(){var t=this;Object(l.a)(this,e),this.addresses=[],this.add=function(e){t.addresses.find((function(t){return t.id===e.id}))||t.addresses.push(e)},this.remove=function(e){t.addresses.splice(e,1)}};Object(D.i)(I,{addresses:D.n,add:D.f,remove:D.f});var M=I;s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,{addressStore:new M},o.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[178,1,2]]]);
//# sourceMappingURL=main.43813974.chunk.js.map