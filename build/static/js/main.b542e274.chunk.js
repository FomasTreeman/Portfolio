(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{167:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(23),s=a.n(c),r=(a(74),a(24)),l=a(56),o=(a(75),a(76),a(173)),d=a(61),u=a(184),j=a(3),p=function(e){function t(){return"/proj1"===e.path?Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"mx-4 my-2 mt-3",children:"Fugiat pariatur proident minim culpa elit ipsum veniam. Magna commodo id quis ipsum nostrud irure sunt. Aliquip pariatur Lorem qui tempor laborum consectetur do non velit cupidatat id anim nostrud ea. Mollit consequat do laborum incididunt anim non voluptate aute esse sint ad excepteur eiusmod pariatur."}),Object(j.jsx)("iframe",{title:"hola",className:"p-3",src:"https://codesandbox.io/embed/practical-sara-wu2i9?fontsize=14&hidenavigation=1&theme=dark&view=preview&hidedevtools=1",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})]}):(console.log(e.path),Object(j.jsx)("div",{}))}return Object(j.jsx)(o.a,{className:"p-4 p-sm-3",children:Object(j.jsx)(d.a,{children:Object(j.jsxs)(u.a,{className:"shadow-lg",children:[Object(j.jsxs)(u.a.Header,{children:[Object(j.jsxs)(u.a.Title,{style:{padding:"1rem"},children:[" ",e.label," "]}),Object(j.jsx)(u.a.Text,{children:e.description})]}),Object(j.jsx)(t,{}),Object(j.jsx)("p",{className:"mx-4 my-2 mt-3",children:"Est enim eiusmod velit duis aliquip officia velit dolor consequat aliquip excepteur excepteur amet dolore. Laboris duis incididunt id labore irure. Consequat nisi officia laboris dolore voluptate veniam ullamco adipisicing labore ut ullamco officia qui. Nisi incididunt pariatur velit reprehenderit labore culpa ut Lorem nisi duis nulla. Cillum proident voluptate ad Lorem sint dolor nostrud laborum et minim. Et enim commodo mollit adipisicing ullamco qui ullamco cupidatat consectetur est ullamco occaecat culpa. Lorem pariatur fugiat sint ad velit est dolore ullamco aliqua fugiat laboris adipisicing fugiat."}),Object(j.jsx)(u.a.Img,{style:{padding:"1.5rem"},src:e.imagePath,rounded:"true"})]})})})},m=a(174),b=a(62),h=a(180);var x=function(e){var t=Object(i.useState)(),a=Object(r.a)(t,2),n=a[0],c=a[1],s=Object(i.useState)(!1),l=Object(r.a)(s,2),d=l[0],u=l[1],p=function(){return u(!1)};return Object(i.useEffect)((function(){fetch("https://api.nomics.com/v1/currencies/ticker?key=7d5c5259f3e27e6e749ca9a2af23388fb95c8961&ids=BTC&interval=1d&convert=GBP").then((function(e){return e.json()})).then((function(e){return c(e[0].price)}))}),[]),Object(j.jsxs)(o.a,{id:"small-print",children:[Object(j.jsx)(m.a,{className:"p-5 d-flex justify-content-center",children:Object(j.jsxs)("h2",{children:[" ",e.label," "]})}),Object(j.jsxs)(m.a,{className:"d-flex justify-content-center",children:[Object(j.jsxs)(b.a,{onClick:function(){return u(!0)},children:[" Want to see BTC ","->"," GBP prices? "]}),Object(j.jsxs)(h.a,{show:d,onHide:p,children:[Object(j.jsx)(h.a.Header,{closeButton:!0,children:Object(j.jsx)(h.a.Title,{children:"BTC to GBP Price"})}),Object(j.jsx)(h.a.Body,{className:"d-flex justify-content-center p-4 ",children:n}),Object(j.jsx)(h.a.Footer,{children:Object(j.jsx)(b.a,{variant:"secondary",onClick:p,children:"Close"})})]})]})]})},O=a(181);var f=function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(""),s=Object(r.a)(c,2),l=s[0],d=s[1];return Object(j.jsx)(o.a,{className:"p-4",children:Object(j.jsx)(u.a,{children:Object(j.jsxs)(O.a,{className:"p-4",onSubmit:function(e){},children:[Object(j.jsxs)(O.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(j.jsx)(O.a.Label,{children:"Email address"}),Object(j.jsx)(O.a.Control,{type:"email",placeholder:"Enter email",value:l,onChange:function(e){var t=e.target.value;d(t)}}),Object(j.jsx)(O.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(j.jsxs)(O.a.Group,{className:"mb-3",children:[Object(j.jsx)(O.a.Label,{children:"Message"}),Object(j.jsx)(O.a.Control,{as:"textarea",rows:3,placeholder:"Type here..",value:a,onChange:function(e){var t=e.target.value;n(t)}})]}),Object(j.jsx)(b.a,{variant:"primary",type:"submit",children:"Submit"})]})})})},g=a(175),v=function(e){var t=Object(i.useState)(),a=Object(r.a)(t,2),n=a[0],c=a[1];function s(){return void 0!==n?n.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.name}),Object(j.jsx)("td",{children:e.pushed_at}),Object(j.jsxs)("td",{children:[e.url,"S"]})]},e.name)})):Object(j.jsx)("tr",{children:Object(j.jsx)("th",{children:" loading ... "})})}return Object(i.useEffect)((function(){fetch("https://api.github.com/users/FomasTreeman/repos").then((function(e){return e.json()})).then((function(e){c(e)}))}),[]),Object(j.jsx)(o.a,{className:"p-lg-4 p-sm-3",children:Object(j.jsx)(d.a,{children:Object(j.jsxs)(u.a,{className:"shadow-lg",children:[Object(j.jsx)(u.a.Header,{children:Object(j.jsxs)(u.a.Title,{style:{padding:"1rem"},children:[" ",e.label," "]})}),Object(j.jsxs)(g.a,{striped:!0,bordered:!0,hover:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Repo Name"}),Object(j.jsx)("th",{children:"Last Updated"}),Object(j.jsx)("th",{children:"Description"})]})}),Object(j.jsx)("tbody",{children:Object(j.jsx)(s,{})})]})]})})})};var q=function(){return Object(j.jsxs)(o.a,{fluid:!0,children:[Object(j.jsxs)(m.a,{className:"p-5",children:[Object(j.jsx)(d.a,{children:Object(j.jsx)("h1",{children:" Minim esse aliquip adipisicing nulla ipsum aliqua pariatur. Quis esse excepteur est ad ipsum in cillum proident amet voluptate et ex irure non. Elit eu nulla nisi duis est id exercitation duis Lorem quis nisi. Nulla labore id est esse anim deserunt ut id laborum minim ad exercitation do. Nulla enim adipisicing quis mollit nulla sunt commodo irure excepteur duis velit tempor eiusmod ea. :) "})}),Object(j.jsx)(d.a,{children:Object(j.jsx)("h1",{children:" Nisi ut non laboris in magna quis non aliquip incididunt et magna. Cillum consequat consequat cupidatat commodo reprehenderit minim qui incididunt adipisicing dolore laborum aliqua anim culpa. Voluptate aliqua pariatur eu deserunt non proident excepteur sint amet elit exercitation nulla. Et nulla velit eiusmod culpa anim. Incididunt laboris dolor dolore Lorem est anim. Sunt enim exercitation aliqua aliqua cupidatat aliqua. Esse nisi veniam est exercitation aliquip esse ex et laboris in nostrud incididunt qui duis. "})})]}),Object(j.jsxs)(m.a,{className:"p-3",children:[Object(j.jsx)(d.a,{children:Object(j.jsx)("h1",{children:" Dolore pariatur voluptate non veniam ad qui reprehenderit anim exercitation aliquip nisi. Quis nostrud Lorem culpa Lorem veniam incididunt ad nulla irure ea deserunt qui quis. Pariatur id consequat nostrud aliquip laboris laborum eu ad et sunt minim tempor id occaecat. Cupidatat laborum aute dolore magna laboris ad proident est eu. Ea incididunt aute adipisicing enim occaecat. "})}),Object(j.jsx)(d.a,{children:Object(j.jsx)("h1",{children:" Lorem nostrud irure eiusmod nostrud tempor eu culpa aliquip cillum. Sint aliquip adipisicing elit veniam pariatur eiusmod fugiat sint voluptate dolor. Consectetur irure officia esse Lorem. Velit in ad laboris ut nulla mollit do. Reprehenderit culpa Lorem exercitation culpa. Do cupidatat tempor fugiat mollit sint aute. "})})]})]})},y=a(176),N=a.p+"static/media/t.c721c19e.JPG",w=a.p+"static/media/o.3fb02cd6.JPG",C=a.p+"static/media/m.f5629717.JPG",L=a.p+"static/media/print.76b325f3.jpeg",P=a.p+"static/media/col.6f2d0264.JPG",S=a.p+"static/media/rarng.3dfb534d.png",k=a.p+"static/media/mira.abaaf2ec.jpeg",E=[N,w,C],T=[L,P,S,k];var B,G,I=function(){return Object(j.jsxs)(o.a,{fluid:!0,children:[Object(j.jsx)(m.a,{className:"p-3",fluid:!0,children:E.map((function(e){return Object(j.jsx)(d.a,{children:Object(j.jsx)(y.a,{src:e,alt:"image",thumbnail:!0})})}))}),Object(j.jsx)(m.a,{className:"p-3",children:T.map((function(e){return Object(j.jsx)(d.a,{children:Object(j.jsx)(y.a,{src:e,alt:"image",thumbnail:!0})})}))})]})},M=a.p+"static/media/image.4cd7e530.png",A=a.p+"static/media/image1.639d0661.png",H=a.p+"static/media/image2.989d14f5.jpeg",D=a(57),J=a(63),F=a(178),R=a(64),z=a(177),K=a(12),Q=a(26),U=a(182),V=a(183),W=a(179),_=Object(D.b)(B||(B=Object(l.a)(["",""])),J.tada),X=D.a.p(G||(G=Object(l.a)(["\n  animation: 1s ",";\n  animation-iteration-count: infinite;\n  margin: 0;\n  "])),_);var Y=function(){var e=Object(K.e)(),t=n.a.useState(""),a=Object(r.a)(t,2),i=a[0],c=a[1],s=[{label:"3D Project",title:"My three.js experiment",description:"My Three.js project",imagePath:[M],path:"/proj1"},{label:"Smart Brains Udemy",title:"Face Recognition App",description:"My udemy course project",imagePath:[A],path:"/proj2"},{label:"Kodi Project",title:"Kodi experiment",description:"My kodi project",imagePath:[H],path:"/proj3"},{label:"Home",path:"/home"},{label:"Graphics",path:"/graphics"},{label:"Project status",path:"/status"},{label:"About me",path:"/about"},{label:"Contact me",path:"/contact"}],l=s.filter((function(e,t){return function(e,t){if(t<3)return e}(e,t)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)(U.a,{id:"navigation",className:"justify-content-center",bg:"info",expand:"sm",sticky:"top",children:Object(j.jsxs)(o.a,{fluid:!0,className:"pr-0",children:[Object(j.jsx)(U.a.Brand,{as:Q.b,to:s[3].path,bg:"success",id:"navigation-brand",children:Object(j.jsx)(X,{children:" Tom's Portfolio "})}),Object(j.jsx)(U.a.Toggle,{className:"px-2"}),Object(j.jsxs)(U.a.Collapse,{className:"justify-content-end",children:[Object(j.jsx)(V.a,{className:"pr-3",style:{maxHeight:"100px"},children:Object(j.jsxs)(W.a,{title:"My projects ",id:"small-print",align:"end",children:[l.map((function(e,t){return Object(j.jsx)(V.a.Link,{as:Q.b,className:"px-3",id:"dropdownItem",to:e.path,children:e.label},t)})),Object(j.jsxs)("div",{className:"m-0 p-0 pl-3",children:[Object(j.jsx)(W.a.Divider,{}),Object(j.jsx)(V.a.Link,{as:Q.b,id:"dropdownItemAbout",to:s[s.length-4].path,children:s[s.length-4].label}),Object(j.jsx)(V.a.Link,{as:Q.b,id:"dropdownItemAbout",to:s[s.length-3].path,children:s[s.length-3].label}),Object(j.jsx)(V.a.Link,{as:Q.b,id:"dropdownItemAbout",to:s[s.length-2].path,children:s[s.length-2].label}),Object(j.jsx)(V.a.Link,{as:Q.b,id:"dropdownItemAbout",to:s[s.length-1].path,children:s[s.length-1].label})]},"-1")]})}),Object(j.jsxs)(O.a,{className:"d-flex",id:"small-print",onSubmit:function(t){var a=null;i&&i.length>1&&(a=s.find((function(e){return e.label.toLowerCase().includes(i.toLowerCase())}))),a?e.push(a.path):t.preventDefault()},children:[Object(j.jsx)(O.a.Control,{type:"search",placeholder:"Search",className:"mr-2","aria-label":"Search",value:i,onChange:function(e){var t=e.target.value;c(t)}}),Object(j.jsx)(b.a,{type:"submit",variant:"outline-secondary",children:Object(j.jsx)(z.a,{})})]})]})]})}),Object(j.jsxs)(o.a,{children:[Object(j.jsx)(K.a,{path:"/Home",children:Object(j.jsx)(q,{})}),l.map((function(e){return Object(j.jsx)(K.a,{path:e.path,children:function(t){var a=t.match;return Object(j.jsx)(F.a,{in:null!=a,timeout:300,classNames:"page",unmountOnExit:!0,children:Object(j.jsx)("div",{className:"projCard",children:Object(j.jsx)(p,{path:e.path,label:e.title,description:e.description,imagePath:e.imagePath})})})}},e.path)})),Object(j.jsx)(K.a,{path:"/graphics",children:Object(j.jsx)(I,{})}),Object(j.jsx)(K.a,{path:"/status",children:Object(j.jsx)(v,{label:s[s.length-3].label})}),Object(j.jsx)(K.a,{path:"/about",children:Object(j.jsx)(x,{label:s[s.length-2].label})}),Object(j.jsx)(K.a,{path:"/contact",children:Object(j.jsx)(f,{label:s[s.length-1].label})})]}),Object(j.jsx)(R.a,{type:"circle",bg:{position:"fixed",zIndex:-1,top:0,left:0}})]})};s.a.render(Object(j.jsx)(Q.a,{children:Object(j.jsx)(Y,{})}),document.getElementById("root"))},74:function(e,t,a){},76:function(e,t,a){}},[[167,1,2]]]);
//# sourceMappingURL=main.b542e274.chunk.js.map