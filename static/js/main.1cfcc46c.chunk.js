(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(7),o=n.n(s),a=(n(12),n(2)),i=n(3),h=n(5),l=n(4),d=n(0),b=function(e){return Object(d.jsxs)("div",{className:"bg-washed-red dib br3 ma2 grow bw2 shadow-5 tc",children:[Object(d.jsx)("img",{src:"https://robohash.org/".concat(e.id,"?200x200")}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsx)("p",{children:e.email})]})]})},u=function(e){var t=e.robots,n=t.map((function(e,n){return Object(d.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(d.jsxs)("div",{children:[n,";"]})},j=function(e){e.searchField;var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},O=function(e){return Object(d.jsxs)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:[e.children,";"]})},f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)("h1",{children:"Ooops!! something went wrong"}):this.props.children}}]),n}(r.Component),p=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{children:"RoboFriends"}),Object(d.jsx)(j,{searchChange:this.onSearchChange}),Object(d.jsx)(O,{children:Object(d.jsx)(f,{children:Object(d.jsx)(u,{robots:r})})})]}):Object(d.jsx)("h1",{children:"Loading"})}}]),n}(r.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};n(15);o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.1cfcc46c.chunk.js.map