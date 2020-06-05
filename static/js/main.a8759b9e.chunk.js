(this["webpackJsonpbest-routes-demo"]=this["webpackJsonpbest-routes-demo"]||[]).push([[0],{184:function(e,t,n){e.exports=n(317)},189:function(e,t,n){},190:function(e,t,n){},317:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),i=n(22),s=n.n(i),c=n(21),d=(n(189),n(190),n(80)),l=n(46),u=n(72),p=n(81),m=n(78),g=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).calculateAndDisplayRoute=function(t){var n=[];t.forEach((function(e){n.push({location:e.location,stopover:!0})})),e.directionsService.route({origin:t[0].location,destination:t[t.length-1].location,waypoints:n,optimizeWaypoints:!0,travelMode:"DRIVING"},(function(t,n){"OK"===n?e.directionsRenderer.setDirections(t):window.alert("Directions request failed due to "+n)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.addressStore;return e.addresses.length>0&&this.calculateAndDisplayRoute(e.addresses),o.a.createElement("div",{id:"map"})}},{key:"componentDidMount",value:function(){this.directionsService=new window.google.maps.DirectionsService,this.directionsRenderer=new window.google.maps.DirectionsRenderer,this.map=new window.google.maps.Map(document.getElementById("map"),Object(d.a)({},this.props.options)),this.directionsRenderer.setMap(this.map)}}]),n}(o.a.Component),f=Object(c.b)((function(e){return{addressStore:e.addressStore}}))(Object(c.c)(g)),h=n(325),v=n(326),b=n(327),E=n(102),y=n.n(E),w=n(77),j=n(154);function O(e,t){(r=new window.google.maps.places.Autocomplete(t.current,{types:[],componentRestrictions:{country:"us"}})).setFields(["geometry","formatted_address"]),r.addListener("place_changed",(function(){return function(e){return S.apply(this,arguments)}(e)}))}function S(){return(S=Object(j.a)(y.a.mark((function e(t){var n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r.getPlace(),a={id:+n.geometry.location.lat()+ +n.geometry.location.lng(),formatted_address:n.formatted_address,lat:n.geometry.location.lat(),lng:n.geometry.location.lng(),location:n.geometry.location},t(a);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=Object(c.b)((function(e){return{addressStore:e.addressStore}}))((function(e){var t=e.addressStore,n=Object(a.useState)(""),r=Object(w.a)(n,2)[1],i=Object(a.useRef)(null);return Object(a.useEffect)((function(){return O(t.add,i)}),[t]),o.a.createElement("input",{ref:i,type:"search",onChange:function(e){return r(e.target.value)},placeholder:"Enter an address"})})),R=n(55),k=n(328);var x=Object(c.b)((function(e){return{addressStore:e.addressStore}}))(Object(c.c)((function(e){var t=e.addressStore;return t.addresses.map((function(e,n,r){return o.a.createElement(R.b,{key:e.id,draggableId:String(e.id),index:n},(function(a,i){return o.a.createElement(v.a,{innerRef:a.innerRef},o.a.createElement(b.a.Item,Object.assign({},a.draggableProps,a.dragHandleProps,{style:(s=i.isDragging,c=a.draggableProps.style,Object(d.a)({userSelect:"none",borderRadius:"4px",padding:"4px",background:s?"darkblue":"transparent"},c))}),o.a.createElement(b.a.Content,{floated:"right"},o.a.createElement(k.a,{onClick:function(){return t.remove(n)},icon:"times",inverted:!0})),o.a.createElement(b.a.Content,{verticalAlign:"middle"},o.a.createElement(b.a.Header,null,0===n?"(Origin)":"",n===r.length-1?"(Destination)":""),o.a.createElement(b.a.Description,null,e.formatted_address))));var s,c}))}))}))),A={float:"left",width:"40%",height:"100vh",overflow:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},I={marginTop:"50px",width:"90%"},C=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).onDragEnd=function(e){var t=r.props.addressStore;e.destination&&t.reorder(t.addresses,e.source.index,e.destination.index)},r.state={addresses:r.props.addressStore.addresses},r}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(R.a,{onDragEnd:this.onDragEnd},o.a.createElement("div",{style:A},o.a.createElement(h.a,{style:I,inverted:!0},o.a.createElement(h.a.Field,null,o.a.createElement("label",null,"Search Address"),o.a.createElement(D,null))),o.a.createElement(R.c,{droppableId:"droppable"},(function(e,t){return o.a.createElement(v.a,{innerRef:e.innerRef},o.a.createElement(b.a,Object.assign({divided:!0,verticalAlign:"middle"},e.droppableProps,{style:(t.isDraggingOver,{marginTop:"50px",width:"90%",padding:"8px 0"}),inverted:!0}),o.a.createElement(x,{provided:e,snapshot:t}),e.placeholder))}))))}}]),n}(o.a.Component),M=Object(c.b)((function(e){return{addressStore:e.addressStore}}))(Object(c.c)(C)),P=n(170);var _=function(){return o.a.createElement("div",{id:"mainContainer"},o.a.createElement(P.a,{loadingComponent:o.a.createElement("div",null,"Google Maps loading..."),scripts:["https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyBjv2EjfX5AzUMqi-HPZTLLwAERAnOX6Ys","&v=3&libraries=places&language=en&region=US")]},o.a.createElement(M,null),o.a.createElement(f,{options:{center:{lat:39,lng:-95},zoom:5,mapTypeId:"roadmap"}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=n(10),B=function e(){var t=this;Object(l.a)(this,e),this.addresses=[],this.add=function(e){t.addresses.find((function(t){return t.id===e.id}))||t.addresses.push(e)},this.reorder=function(e,n,r){var a=Array.from(e),o=a.splice(n,1),i=Object(w.a)(o,1)[0];a.splice(r,0,i),t.addresses=a},this.remove=function(e){t.addresses.splice(e,1)}};Object(z.decorate)(B,{addresses:z.observable,add:z.action,reorder:z.action,remove:z.action});var T=B;n(314);s.a.render(o.a.createElement(c.a,{addressStore:new T},o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[184,1,2]]]);
//# sourceMappingURL=main.a8759b9e.chunk.js.map