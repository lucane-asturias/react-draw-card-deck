(this["webpackJsonpcard-dealer"]=this["webpackJsonpcard-dealer"]||[]).push([[0],{28:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(22),s=a.n(r),i=(a(28),a(4)),o=a(5),d=a(7),u=a(6),l=a(23),h=a(3),m=a.n(h),j=a(11),b=a(8),f=(a(30),a(0)),p=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(i.a)(this,a),n=t.call(this,e);var c=Math.floor(40*Math.random()-20),r=Math.floor(40*Math.random()-20),s=Math.floor(90*Math.random()-45);return n._transform="translate(".concat(c,"px, ").concat(r,"px) rotate(").concat(s,"deg)"),n}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)("img",{style:{transform:this._transform},className:"Card",src:this.props.image,alt:this.props.name})}}]),a}(n.Component),O=(a(32),a(12)),k=a.n(O),v="https://deckofcardsapi.com/api/deck",x=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={deck:null,drawn:[],remainCards:52},n.getCard=n.getCard.bind(Object(b.a)(n)),n.cardReset=n.cardReset.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(v,"/new/shuffle/"));case 2:t=e.sent,this.setState({deck:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCard",value:function(){var e=Object(j.a)(m.a.mark((function e(){var t,a,n,c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.deck.deck_id,e.prev=1,a="".concat(v,"/").concat(t,"/draw/"),e.next=5,k.a.get(a);case 5:if((n=e.sent).data.success){e.next=8;break}throw new Error("No card remaining!");case 8:c=n.data.cards[0],r=this.state.remainCards--,this.setState((function(e){return{drawn:[].concat(Object(l.a)(e.drawn),[{id:c.code,image:c.image,name:"".concat(c.value," of ").concat(c.suit),remainCards:r}])}})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),alert(e.t0);case 16:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"cardReset",value:function(){var e=Object(j.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(v,"/new/shuffle/"));case 2:t=e.sent,this.setState({deck:t.data,drawn:[],remainCards:52});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.drawn.map((function(e){return Object(f.jsx)(p,{name:e.name,image:e.image},e.id)}));return Object(f.jsxs)("div",{children:[Object(f.jsxs)("h1",{className:"Deck-title",children:[Object(f.jsx)("span",{className:"Deck-diamond",children:"\u2666"}),"Card Dealer",Object(f.jsx)("span",{className:"Deck-diamond",children:"\u2666"})]}),Object(f.jsxs)("h2",{className:"Deck-title subtitle",children:[Object(f.jsx)("span",{className:"Deck-diamond",children:"\u2666"}),"A little demo made with React",Object(f.jsx)("span",{className:"Deck-diamond",children:"\u2666"})]}),Object(f.jsx)("button",{className:"Deck-btn",onClick:this.getCard,children:"Get Card!"}),Object(f.jsx)("button",{className:"Deck-btn cardreset",onClick:this.cardReset,children:"Reset"}),Object(f.jsxs)("h4",{className:"Deck-remaincards",children:["Cards Remaining: ",this.state.remainCards]}),Object(f.jsx)("div",{className:"Deck-cardarea",children:e})]})}}]),a}(n.Component),g=x,C=(a(51),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(g,{})})}}]),a}(n.Component)),w=C,D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,53)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root")),D()}},[[52,1,2]]]);
//# sourceMappingURL=main.89d0d079.chunk.js.map