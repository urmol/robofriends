(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),c=n.n(a),i=n(7),s=n(5),l=n(14),u=n(15),d=(n(26),n(1)),h=n(2),f=n(4),b=n(3),p=function(e){e.searchField;var t=e.searchChange;return console.log("Rendering searchbox"),o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots by name",onChange:t}))},g=function(e){var t=e.id,n=e.name,a=e.email;return o.a.createElement(r.Fragment,null,o.a.createElement("div",{id:t,className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"robot"}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,a))))},m=function(e){var t=e.robots;return console.log("Rendering CardList"),o.a.createElement(r.Fragment,null,t.map((function(e,n){return o.a.createElement(g,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})})))},E=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",height:"500px"}},e.children)},v=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oops. This was not expected"):this.props.children}}]),n}(r.Component),O=(n(27),function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(){return{count:e.state.count+1}}))},e.state={count:0},e}return Object(h.a)(n,[{key:"shouldComponentUpdate",value:function(e,t,n){return console.log(e,t),this.state.count!==t.count}},{key:"render",value:function(){return console.log("Rendering CounterButton"),o.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),n}(r.PureComponent)),y=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return console.log("Rendering header"),o.a.createElement("div",null,o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(O,{color:"red"}))}}]),n}(r.Component),w=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.robots,c=e.isPending,i=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return c?o.a.createElement("h1",{className:"tc"},"Loading..."):o.a.createElement(r.Fragment,null,o.a.createElement("div",{className:"tc"},o.a.createElement(y,null),o.a.createElement(p,{searchChange:n}),o.a.createElement(E,null,o.a.createElement(v,null,o.a.createElement(m,{robots:i})))))}}]),n}(r.Component),R=Object(i.b)((function(e){return{isPending:e.requestRobots.isPending,robots:e.requestRobots.robots,searchField:e.searchRobots.searchField,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING",payload:[]}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(w),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var S={searchField:""},k={isPending:!1,robots:[],error:""},_=(n(28),Object(l.createLogger)()),T=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{isPending:!1,robots:t.payload});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{isPending:!1,error:t.payload});default:return e}}}),F=Object(s.d)(T,Object(s.a)(u.a,_));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:F},o.a.createElement(R,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.9dd3dd1c.chunk.js.map