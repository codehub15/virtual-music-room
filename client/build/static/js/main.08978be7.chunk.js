(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{312:function(e,t){},382:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(29),c=a.n(s),l=a(1),o=a(2),i=(a(76),a(77),a(78),a(3)),u=r.a.createContext();function m(){return r.a.createElement("div",{className:"msg-container"},r.a.createElement("h3",{className:"heading"},"404"),r.a.createElement("p",null,"Sorry, the page is not found."))}var g=a(12),v=a(13),p=a(17),d=a(16),h=function(e){var t,a,n={},r=e.getContext("2d"),s=function(){function t(e,a,n,r,s,c,l,o,i){Object(g.a)(this,t),this.pointX=e,this.pointY=a,this.moveX=n,this.moveY=r,this.name=s,this.particleSize=l,this.particleColor=c,this.textSize=i,this.textColor=o,this.halfTextWidth=0}return Object(v.a)(t,[{key:"plot",value:function(){r.beginPath(),this.particleSize>0&&(r.arc(this.pointX,this.pointY,this.particleSize,0,2*Math.PI),r.fillStyle=this.particleColor,r.fill()),r.font="".concat(this.textSize,"px Orbitron"),r.fillStyle=this.textColor,this.halfTextWidth=r.measureText(this.name).width/2,r.fillText(this.name,this.pointX,this.pointY)}},{key:"update",value:function(){(this.pointX>e.width-this.halfTextWidth||this.pointX<this.halfTextWidth)&&(this.moveX=-this.moveX),(this.pointY>e.height||this.pointY<this.textSize)&&(this.moveY=-this.moveY),this.pointX+=this.moveX,this.pointY+=this.moveY,this.plot()}}]),t}();function c(a){t=[],r.textAlign="center";for(var n=a.textList.length,c=0;c<n;c++){var l=Math.random()*(e.width-200)+100,o=Math.random()*(e.height-200)+100,i=Math.random()*(a.maxSpeed-a.minSpeed)+a.minSpeed,u=Math.random()*(a.maxSpeed-a.minSpeed)+a.minSpeed;t.push(new s(l,o,i,u,a.textList[c],a.particleColor,a.particleSize,a.textColor,a.textSize))}}function l(){r.clearRect(0,0,e.width,e.height);for(var a=t.length,n=0;n<a;n++)t[n].update();!function(){for(var a,n=e.width*e.height,s=0;s<t.length;s++)for(var c=s;c<t.length;c++){var l=(t[s].pointX-t[c].pointX)*(t[s].pointX-t[c].pointX)+(t[s].pointY-t[c].pointY)*(t[s].pointY-t[c].pointY);l<n&&(a=1-l/5e4,r.strokeStyle="rgb(122, 90, 141, ".concat(a,")"),r.lineWidth=3.5,r.beginPath(),r.moveTo(t[s].pointX,t[s].pointY),r.lineTo(t[c].pointX,t[c].pointY),r.stroke())}}(),window.requestAnimationFrame(l)}return(n=a={}).maxSpeed=a.speed||2,n.minSpeed=-a.speed||-2,n.particleColor=a.particleColor||"orange",n.particleSize=a.particleSize||0,n.textColor=a.textColor||"gray",n.textList=(a.textList||"Marty: Keyboard, Natashka: Drums, Thomas: Cello, Juan: Piano, Alex: Bass, Nicholas: Guitar, Mary: Violin").split(", "),n.textSize=a.textSize||20,c(n),window.requestAnimationFrame(l),function(){return c(n)}},f=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).setSize=function(){var e=h(n.canvas.current);n.canvas.current.width=window.innerWidth,n.canvas.current.height=window.innerHeight,e()},n.canvas=r.a.createRef(),n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.setSize(),window.addEventListener("resize",this.setSize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setSize)}},{key:"render",value:function(){return r.a.createElement("canvas",{ref:this.canvas,width:300,height:300})}}]),a}(r.a.Component),E=a(57),b=a.n(E),j=a(22),y=a.n(j),N=a(58),k=a.n(N),O=a(59),x=a.n(O),S=a(60),C=a.n(S),w=a(61),I=a.n(w),L=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).playAll=function(){n.a1.current.play(),n.a2.current.play(),n.a3.current.play(),n.a4.current.play()},n.handleDrag=function(e,t){var a=.5*(t.x+100),r=.5*(t.y+100),s=function(e,t){var n=Math.sqrt(Math.pow(a-e,2)+Math.pow(r-t,2));return Math.max(100-n,0)/100},c=s(0,0),l=s(100,0),o=s(100,100),i=s(0,100);n.setState({vol1:c,vol2:l,vol3:o,vol4:i,drag:!0}),n.a1.current.volume=c,n.a2.current.volume=l,n.a3.current.volume=o,n.a4.current.volume=i},n.handleStop=function(){n.state.drag||(n.a1.current.pause(),n.a2.current.pause(),n.a3.current.pause(),n.a4.current.pause()),n.setState({drag:!1})},n.state={drag:!1,isPlaying:!1},n.a1=r.a.createRef(),n.a2=r.a.createRef(),n.a3=r.a.createRef(),n.a4=r.a.createRef(),n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.a1.current.addEventListener("play",(function(){e.setState({isPlaying:!0})})),this.a1.current.addEventListener("pause",(function(){e.setState({isPlaying:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.vol1,a=e.vol2,n=e.vol3,s=e.vol4,c=e.isPlaying;return r.a.createElement("div",{className:"audio-room-section"},r.a.createElement("div",{className:"audio-room-inner-section"},r.a.createElement("p",{className:"instruments-name drummer-name"},"drummer"),r.a.createElement("p",{className:"instruments-name guitar-name"},"guitar player"),r.a.createElement("p",{className:"instruments-name bass-name"},"bass player"),r.a.createElement("p",{className:"instruments-name keyboard-name"},"keyboards/vocals"),r.a.createElement("div",{className:"audioRoom-control"},r.a.createElement(b.a,{bounds:{top:-100,left:-100,right:100,bottom:100},onDrag:this.handleDrag,onStart:this.playAll,onStop:this.handleStop},r.a.createElement("div",{className:"audioRoom-control__knob"},c?r.a.createElement("i",{className:"far fa-pause-circle audio-icon"}):r.a.createElement("i",{className:"far fa-play-circle audio-icon"}))),r.a.createElement("audio",{ref:this.a1,preload:"true",loop:!0,id:"a1"},r.a.createElement("source",{src:x.a,type:"audio/mpeg"})),r.a.createElement("audio",{ref:this.a2,preload:"true",loop:!0,id:"a2"},r.a.createElement("source",{src:C.a,type:"audio/mpeg"})),r.a.createElement("audio",{ref:this.a3,preload:"true",loop:!0,id:"a3"},r.a.createElement("source",{src:k.a,type:"audio/mpeg"})),r.a.createElement("audio",{ref:this.a4,preload:"true",loop:!0,id:"a4"},r.a.createElement("source",{src:I.a,type:"audio/mpeg"})),r.a.createElement(y.a,{id:"audio-canvas",className:"audioRoom-control__spectrum",height:200,width:250,audioId:"a1",capColor:"#222",capHeight:3,meterWidth:3,meterCount:512,meterColor:[{stop:0,color:"red"},{stop:.5,color:"darkred"},{stop:1,color:"black"}],gap:4}),r.a.createElement(y.a,{id:"audio-canvas2",className:"audioRoom-control__spectrum",height:200,width:250,audioId:"a2",capColor:"#222",capHeight:3,meterWidth:3,meterCount:512,meterColor:[{stop:0,color:"red"},{stop:.5,color:"#7523b9"},{stop:1,color:"blue"}],gap:4}),r.a.createElement(y.a,{id:"audio-canvas3",className:"audioRoom-control__spectrum",height:200,width:250,audioId:"a3",capColor:"#222",capHeight:3,meterWidth:3,meterCount:512,meterColor:[{stop:0,color:"#28b923"},{stop:.5,color:"rgb(29, 95, 20)"},{stop:1,color:"red"}],gap:4}),r.a.createElement(y.a,{id:"audio-canvas4",className:"audioRoom-control__spectrum",height:200,width:250,audioId:"a4",capColor:"#222",capHeight:3,meterWidth:3,meterCount:512,meterColor:[{stop:0,color:"rgba(63, 16, 16, 0.75)"},{stop:.5,color:"rgb(206, 206, 5)"},{stop:1,color:"black"}],gap:4}),r.a.createElement("div",{style:{transform:"scale(".concat(t+.5,", ").concat(t+.5,")")},className:"audioRoom-control__avatar audioRoom-control__avatar--1"}),r.a.createElement("div",{style:{transform:"scale(".concat(a+.5,", ").concat(a+.5,")")},className:"audioRoom-control__avatar audioRoom-control__avatar--2"}),r.a.createElement("div",{style:{transform:"scale(".concat(n+.5,", ").concat(n+.5,")")},className:"audioRoom-control__avatar audioRoom-control__avatar--3"}),r.a.createElement("div",{style:{transform:"scale(".concat(s+.5,", ").concat(s+.5,")")},className:"audioRoom-control__avatar audioRoom-control__avatar--4"}))))}}]),a}(r.a.Component),P=a(62),_=a.n(P),T=a(63),z=a.n(T);var M=function(){var e=Object(n.useContext)(u),t=e.isLoggedIn,a=e.token,s=Object(n.useState)(""),c=Object(l.a)(s,2),o=c[0],i=c[1],m=r.a.useState(null),g=Object(l.a)(m,2),v=(g[0],g[1],Object(n.useState)([])),p=Object(l.a)(v,2),d=p[0],h=p[1],f=Object(n.useState)(!1),E=Object(l.a)(f,2),b=(E[0],E[1],Object(n.useState)(!1)),j=Object(l.a)(b,2),y=j[0],N=j[1];Object(n.useEffect)((function(){fetch("/users",{headers:{"x-auth":a}}).then((function(e){return e.json()})).then((function(e){h(e.users)}))}),[a]),console.log("allMusicians:",d);var k=d&&d.map((function(e,t){if(e.name.toLowerCase()===o.toLowerCase())return r.a.createElement("div",{key:t,className:"musician"},r.a.createElement("span",{onClick:function(){return N(!1)},className:"close-user"},"X"),r.a.createElement("img",{src:e.profileImage,alt:"Profile",width:"100",height:"100"}),r.a.createElement("h3",null,e.name),r.a.createElement("p",null,"Level: ",e.level," "),r.a.createElement("p",null,"Role: ",e.role," "),r.a.createElement("p",null,"Collaborations/Tracks uploaded"),r.a.createElement("img",{src:z.a,alt:"",width:"230"}));console.log("user not found")}));return r.a.createElement("div",{className:"search-container"},t?r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{type:"search",name:"search-user",placeholder:"search for a user...",onChange:function(e){i(e.target.value)},onClick:function(){return N(!0)}})),y&&r.a.createElement("div",{className:"user-found"},k)):null)};var R=function(){return r.a.createElement("div",{className:"home-component"},r.a.createElement("div",{className:"gif-logo-div"},r.a.createElement("img",{src:_.a,alt:"Title Logo",className:"gif-logo",width:"450",height:"50"})),r.a.createElement("div",{className:"body-background"},r.a.createElement("div",{className:"slogan"},r.a.createElement("h1",null,"- Virtual Music Room -")),r.a.createElement("div",{className:"particles-map"},r.a.createElement(M,null),r.a.createElement(f,null)),r.a.createElement(L,null)))},D=a(5),Y=a.n(D),A=a(10),U=a(69);a(308);function W(e){var t=Object(n.useContext)(u),a=t.setIsLoggedIn,s=t.userId,c=t.setUserId,o=t.setToken,m=Object(n.useState)(null),g=Object(l.a)(m,2),v=g[0],p=g[1],d=Object(n.useState)(null),h=Object(l.a)(d,2),f=h[0],E=h[1],b=Object(n.useState)(null),j=Object(l.a)(b,2),y=j[0],N=j[1],k=Object(n.useState)(null),O=Object(l.a)(k,2),x=O[0],S=O[1],C=Object(n.useState)(null),w=Object(l.a)(C,2),I=w[0],L=w[1],P=Object(n.useState)(null),_=Object(l.a)(P,2),T=_[0],z=_[1],M=function(){var e=Object(A.a)(Y.a.mark((function e(t){var n,r,s,l,i;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:v,profileImage:"https://cdn.pixabay.com/photo/2018/05/31/23/57/cranium-3445434_960_720.png",email:y,password:x,level:f,role:I,country:T},r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},e.next=5,fetch("/users",r);case 5:return s=e.sent,console.log("response data from register:",s),e.next=9,s.json();case 9:(l=e.sent).success?(alert("your account has been successfully created."),o(l.user.tokens.pop().token),i=l.user._id,c(i),a(!0)):alert("Your account cannot be created. Please check if all input data is correct.");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();console.log("setCountry:",T);return r.a.createElement("div",{className:"form-container"},e.isLoggedIn?r.a.createElement(i.a,{to:"/musicianAccount",userId:s}):r.a.createElement("div",{className:"register-form-container"},r.a.createElement("h2",null,"Sign up"),r.a.createElement("form",{onSubmit:M,className:"register-form"},r.a.createElement("input",{type:"text",name:"name",placeholder:"* Enter Your First name or Nickname",required:!0,minLength:"2",maxLength:"25",onChange:function(e){p(e.target.value)}}),r.a.createElement("input",{type:"email",name:"email",placeholder:"* Enter Email",required:!0,onChange:function(e){return N(e.target.value)}}),r.a.createElement("div",{className:"country-selection-div"},r.a.createElement("h4",null,"Your Country"),r.a.createElement(U.a,{defaultCountry:"DE",searchable:!0,className:"country-selection",onSelect:function(e){console.log(e),z(e)}})),r.a.createElement("div",{className:"radio-btns"},r.a.createElement("div",{className:"inp-radio-btn skills"},r.a.createElement("h4",null,"Your Skills:"),r.a.createElement("input",{type:"radio",name:"level",value:"Beginner",id:"beginner",onChange:function(e){return E(e.target.value)}}),r.a.createElement("label",{htmlFor:"beginner"},"Beginner"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"level",value:"Skilled",id:"skilled",onChange:function(e){return E(e.target.value)}}),r.a.createElement("label",{htmlFor:"skilled"},"Skilled"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"level",value:"Specialist",id:"specialist",onChange:function(e){return E(e.target.value)}}),r.a.createElement("label",{htmlFor:"specialist"},"Specialist"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"level",value:"Expert",id:"expert",onChange:function(e){return E(e.target.value)}}),r.a.createElement("label",{htmlFor:"expert"},"Expert")),r.a.createElement("div",{className:"inp-radio-btn role"},r.a.createElement("h4",null,"Your Expertise / Role:"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"role",value:"Musician",onChange:function(e){return L(e.target.value)}}),r.a.createElement("span",null,"Musician")),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"role",value:"Producer",onChange:function(e){return L(e.target.value)}}),r.a.createElement("span",null,"Producer")),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"role",value:"Sound Engineer",onChange:function(e){return L(e.target.value)}}),r.a.createElement("span",null,"Sound Engineer")))),r.a.createElement("input",{type:"password",name:"password",placeholder:"* Enter Password",required:!0,minLength:"6",maxLength:"20",onChange:function(e){S(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"btn-style"},"Sign up"))))}function X(e){var t=Object(n.useContext)(u),a=t.setIsLoggedIn,s=t.setToken,c=t.userId,o=t.setUserId,m=Object(n.useState)(null),g=Object(l.a)(m,2),v=g[0],p=g[1],d=Object(n.useState)(null),h=Object(l.a)(d,2),f=h[0],E=h[1],b=function(){var e=Object(A.a)(Y.a.mark((function e(t){var n,r,c,l,i;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={email:v,password:f},r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},e.next=5,fetch("/users/login",r);case 5:return c=e.sent,e.next=8,c.json();case 8:(l=e.sent).success?(s(l.user.tokens.pop().token),i=l.user._id,o(i),a(!0)):alert("wrong login data");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"form-container"},e.isLoggedIn?r.a.createElement(i.a,{to:"/musicianAccount",userId:c}):r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:b},r.a.createElement("input",{type:"text",name:"email",placeholder:"Enter Email",onChange:function(e){return p(e.target.value)},required:!0}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter Password",onChange:function(e){return E(e.target.value)},required:!0}),r.a.createElement("button",{type:"submit",className:"btn-style"},"Login"))))}function q(){var e=Object(n.useContext)(u),t=e.isLoggedIn,a=e.setIsLoggedIn,s=e.setToken;return a(!1),s(),t&&alert("You have successfully logged out."),r.a.createElement("div",{className:"component-container"},r.a.createElement("p",null,"You have successfully logged out."),r.a.createElement(i.a,{to:"/"}))}function F(e){var t=Object(n.useContext)(u),a=t.isLoggedIn,s=t.token,c=Object(n.useState)([]),m=Object(l.a)(c,2),g=m[0],v=m[1];if(Object(n.useEffect)((function(){fetch("/users",{headers:{"x-auth":s}}).then((function(e){return e.json()})).then((function(e){v(e.users)}))}),[s]),console.log(g),!a)return r.a.createElement(i.a,{to:"/login"});if(!g)return"loading";var p=g&&g.map((function(e,t){return r.a.createElement("div",{key:t,className:"musician"},r.a.createElement("img",{src:e.profileImage,alt:"Profile",width:"150",height:"100"}),r.a.createElement("h3",null,e.name),r.a.createElement("p",null,"Level: ",e.level," "),r.a.createElement("p",null,"Role: ",e.role," "),r.a.createElement(o.b,{to:"/profile/"+e._id,className:"btn-visit"},"view"))}));return r.a.createElement("div",null,r.a.createElement("div",{className:"musician-container"},r.a.createElement("h2",null,"- All Musicians -"),r.a.createElement("div",{className:"musician-profile"},p)))}a(43);var B=a(65),J=a.n(B),H=a(66),V=a.n(H);function G(e){var t=Object(n.useContext)(u),a=t.isLoggedIn,s=t.token,c=Object(n.useState)(""),m=Object(l.a)(c,2),g=m[0],v=m[1],p=Object(n.useState)([]),d=Object(l.a)(p,2),h=d[0],f=d[1],E=function(){fetch("/projects",{headers:{"x-auth":s}}).then((function(e){return e.json()})).then((function(e){f(e.projects)}))};if(Object(n.useEffect)((function(){E()}),[s]),!a)return r.a.createElement(i.a,{to:"/login"});var b=function(){var e=Object(A.a)(Y.a.mark((function e(t){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/projects",{method:"POST",headers:{"Content-Type":"application/json","x-auth":s},body:JSON.stringify({name:g})});case 3:v(""),E();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"projects-container"},r.a.createElement("h2",null,"- All Projects -"),r.a.createElement("div",{className:"projects-container-inner"},r.a.createElement("ul",null,h.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement(o.b,{to:"/projects/"+e._id,className:"middle"},e.name))}))),r.a.createElement("form",{onSubmit:b},r.a.createElement("img",{src:J.a,alt:"img",className:"img-deco img-deco-one"}),r.a.createElement("input",{value:g,onChange:function(e){v(e.target.value)},type:"text"}),r.a.createElement("button",{type:"submit",className:"btn-style"},"Create project"),r.a.createElement("img",{src:V.a,alt:"img",className:"img-deco img-deco-two"}))))}var K=a(67),$=a.n(K),Q=a(21);a(56);function Z(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),s=a[0],c=a[1],o=Object(n.useContext)(u).token;return r.a.createElement("div",{className:"track-upload-container"},r.a.createElement(Q.FilePond,{name:"file",files:s,onupdatefiles:c,server:{url:"/projects/"+e.projectId+"/upload",process:{headers:{"x-auth":o}}},maxFiles:1,className:"filepath"}))}var ee=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).initWaveformPlaylist=function(){var e=$()({samplesPerPixel:1e3,waveHeight:100,container:n.playlist.current,timescale:!0,state:"cursor",isAutomaticScroll:!0,colors:{waveOutlineColor:"#E0EFF1"},controls:{show:!0,width:200},zoomLevels:[500,1e3,3e3,5e3]}),t=n.state.project.tracks.map((function(e){return{src:"/uploads/tracks/"+e.path,name:e.trackName,gain:.8}}));e.load(t).then((function(){n.setPlaylist(e.getEventEmitter())}))},n.fetchProject=function(){fetch("/projects/"+n.props.match.params.id,{headers:{"x-auth":n.props.token}}).then((function(e){return e.json()})).then((function(e){n.setProject(e.project)}))},n.setProject=function(e){return n.setState({project:e},n.initWaveformPlaylist)},n.setPlaylist=function(e){return n.setState({playlist:e})},n.emit=function(e){return n.state.playlist.emit(e)},n.play=function(){return n.emit("play")},n.stop=function(){return n.emit("stop")},n.pause=function(){return n.emit("pause")},n.delete=function(){window.confirm("Delete project?")&&fetch("/projects/"+n.props.match.params.id,{method:"DELETE",headers:{"x-auth":n.props.token}}).then((function(){n.props.history.push("/projects")}))},n.state={},n.playlist=r.a.createRef(),n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.fetchProject()}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"render",value:function(){var e=this.state.project;return this.props.isLoggedIn?e?(console.log("project:",e),console.log("props:",this.props),r.a.createElement("div",{className:"single-project-container-outer"},r.a.createElement("div",{className:"single-project-container",style:{flex:"1 1",width:"90%"}},r.a.createElement(o.b,{to:"/projects",className:"back-btn"},"Back to all projects"),r.a.createElement("div",{className:"project-title"},r.a.createElement("h3",null),r.a.createElement("h2",null,e.name," "),r.a.createElement("h3",null," by ",e.owner.name)),r.a.createElement("button",{onClick:this.delete,className:"btn btn-warning btn-delete-project",type:"button"},"Delete"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"track"},this.state.playlist&&r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example"},r.a.createElement("button",{onClick:this.play,type:"button",className:"btn btn-info play"},"Play"),r.a.createElement("button",{onClick:this.pause,type:"button",className:"btn btn-secondary pause"},"Pause"),r.a.createElement("button",{onClick:this.stop,type:"button",className:"btn btn-danger stop"},"Stop")),r.a.createElement("div",{ref:this.playlist}),r.a.createElement(Z,{projectId:e._id}))))):"Loading":r.a.createElement(i.a,{to:"/login"})}}]),a}(r.a.Component),te=Object(i.g)(ee),ae=a(68),ne=a.n(ae);a(381);function re(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),s=a[0],c=a[1];return r.a.createElement("div",{className:"profile-img-upload"},r.a.createElement(Q.FilePond,{name:"profile",files:s,onupdatefiles:c,server:"/users/"+e.userId+"/upload",maxFiles:1,className:"filepath"}))}Object(Q.registerPlugin)(ne.a);var se=a(70);function ce(){var e=Object(n.useContext)(u),t=e.isLoggedIn,a=e.token,s=e.userCountry,c=e.setUserCountry,m=e.setUserEmail,g=Object(n.useState)(),v=Object(l.a)(g,2),p=v[0],d=v[1];return Object(n.useEffect)((function(){fetch("/users/currentUser",{headers:{"x-auth":a}}).then((function(e){return e.json()})).then((function(e){d(e.user)}))}),[a]),p?(console.log("musicianData:",p),c(p.country),console.log("userCountry:",s),m(p.email),r.a.createElement("div",{className:"musician-container-account-outer"},r.a.createElement("h2",null,"My Account"),t?r.a.createElement("div",{className:"musician-account-container"},r.a.createElement("div",{className:"account"},r.a.createElement("div",{className:"musician-account"},r.a.createElement("h3",null,p.name),r.a.createElement("img",{src:p.profileImage,alt:"Profile",width:"150",height:"150"}),r.a.createElement("p",null,"Email: ",p.email),r.a.createElement("p",null,"Level: ",p.level),r.a.createElement("p",null),r.a.createElement(se.a.DE,{title:"United States",className:"country-flag"}))),r.a.createElement("div",{className:"account-manager"},r.a.createElement("h2",null,"Account Manager"),r.a.createElement(o.b,{to:"/delete-account"},r.a.createElement("i",{className:"fas fa-user-times"})," delete account"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/edit-account"},r.a.createElement("i",{className:"fas fa-user-edit"})," edit account"),r.a.createElement("div",{className:"profile-img-container"},r.a.createElement("h3",null,"Upload Profile Image"),r.a.createElement(re,{userId:p._id})))):r.a.createElement(i.a,{to:"/"}))):"loading"}function le(e){var t=Object(n.useContext)(u),a=t.isLoggedIn,s=t.token,c=Object(n.useState)(),o=Object(l.a)(c,2),i=o[0],m=o[1];return console.log("checking user:",i),Object(n.useEffect)((function(){fetch("/users/"+e.match.params.id,{headers:{"x-auth":s}}).then((function(e){return e.json()})).then((function(e){m(e.user)}))}),[e.match.params.id,s]),i?(console.log("user data:",i),r.a.createElement("div",{className:"musician-container"},r.a.createElement("h2",null,"Musician Profile"),r.a.createElement("div",{className:"musician-profile-container"},r.a.createElement("h3",null,i.name),r.a.createElement("img",{src:i.profileImage,alt:"Profile",width:"100",height:"100"}),r.a.createElement("p",null,"Expertise/Role:  ",i.role),r.a.createElement("p",null,"Level: ",i.level),i.tracks[0]?r.a.createElement("p",null,i.tracks[0].trackName," "):null,r.a.createElement("p",null,a?"Online":"Offline"," "),r.a.createElement("a",{href:"mailto:"+i.email,className:"btn-link-mailto"},"send me a message")))):"Loading"}function oe(){var e=Object(n.useContext)(u),t=e.setIsLoggedIn,a=e.userId,s=e.token,c=Object(n.useState)(""),o=Object(l.a)(c,2),i=o[0],m=o[1],g=Object(n.useState)(!1),v=Object(l.a)(g,2),p=v[0],d=v[1];return r.a.createElement("div",null,p?r.a.createElement("div",{className:"msg"},i.split("\n").map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,e))}))):r.a.createElement("div",{className:"msg-container"},r.a.createElement("h4",{className:"heading"},"Delete Account"),r.a.createElement("p",null,"Deleting your account is permanent and will remove all content including tracks!"),r.a.createElement("button",{onClick:function(){window.confirm("Do you really want to delete your account for ever?")?(m("Your account has been deleted. \nThank you for have been part of our community and you are welcome back any time!"),fetch("/users/"+a,{headers:{"x-auth":s},method:"DELETE"}).then((function(e){return e.json()})).then((function(e){console.log("deleted",e)})),t(!1),d(!0)):(m("Your account is still active."),d(!1))},className:"btn-delete"},"delete"),r.a.createElement("div",{className:"msg"},r.a.createElement("p",null,i))))}var ie=a(37);function ue(){var e=Object(n.useContext)(u),t=e.isLoggedIn,a=e.token,s=Object(n.useState)(),c=Object(l.a)(s,2),o=c[0],m=c[1],g=Object(n.useState)(!1),v=Object(l.a)(g,2),p=v[0],d=v[1],h=Object(n.useState)(""),f=Object(l.a)(h,2),E=f[0],b=f[1];Object(n.useEffect)((function(){fetch("/users/currentUser",{headers:{"x-auth":a}}).then((function(e){return e.json()})).then((function(e){m(e.user)}))}),[a]);var j=function(){var e=Object(A.a)(Y.a.mark((function e(t){var n,r;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"PUT",headers:{"Content-Type":"application/json","x-auth":a},body:JSON.stringify(o)},e.next=4,fetch("/users/"+o._id,n);case 4:return r=e.sent,e.next=7,r.json();case 7:e.sent.success?(b("Your account has been successfully updated."),d(!0)):(b("Your account was not updated. Please check your input data."),d(!1));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){return m(Object(ie.a)(Object(ie.a)({},o),e))};return o?r.a.createElement("div",{className:"edit-account-container"},t?r.a.createElement("div",{className:"edit-account"},r.a.createElement("h2",{className:"heading"},"Edit Profile Data"),p?r.a.createElement("div",{className:"msg"},r.a.createElement("p",null,E)):r.a.createElement("form",{onSubmit:j},r.a.createElement("label",null,r.a.createElement("span",{className:"edit-data"},"Name:"),r.a.createElement("input",{type:"text",name:"name",placeholder:"Update first name/nickname",minLength:"2",maxLength:"25",value:o.name,onChange:function(e){return y({name:e.target.value})}})),r.a.createElement("label",null,r.a.createElement("span",{className:"edit-data"},"Email:"),r.a.createElement("input",{type:"email",name:"email",placeholder:"Update email",id:"email",value:o.email,onChange:function(e){return y({email:e.target.value})}})),r.a.createElement("label",null,r.a.createElement("span",{className:"edit-data"},"Level:"),r.a.createElement("input",{type:"text",name:"level",placeholder:"Level",value:o.level,onChange:function(e){return y({level:e.target.value})}})),r.a.createElement("button",{type:"submit",className:"btn-style btn-edit"},"save changes"))):r.a.createElement(i.a,{to:"/"})):"Loading"}function me(){return r.a.createElement("div",{className:"service-container"},r.a.createElement("h2",{className:"heading"},"Services"),r.a.createElement("p",null," We provide different services to help unknown artists everywhere."),r.a.createElement("div",{className:"service-offer"},r.a.createElement("div",{className:"services"},r.a.createElement("p",null,"Technical support to help you upload your tracks in the better way possible."),r.a.createElement(o.b,{to:"/support"},r.a.createElement("i",{class:"fas fa-headset"})," Support")),r.a.createElement("div",{className:"services"},r.a.createElement("p",null,"Free templates to help you display your material in a professional way."),r.a.createElement("a",{href:"https://musician-portfolio.netlify.app/",target:"_blank",className:"link-portfolio"},r.a.createElement("i",{class:"far fa-id-card"}),"Musician Portfolio Template"))))}function ge(){var e=Object(n.useContext)(u).userEmail,t=Object(n.useState)(""),a=Object(l.a)(t,2),s=a[0],c=a[1],o=Object(n.useState)(""),i=Object(l.a)(o,2),m=i[0],g=i[1],v=Object(n.useState)(""),p=Object(l.a)(v,2),d=p[0],h=p[1],f=function(){var e=Object(A.a)(Y.a.mark((function e(t){var a,n,r,c;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={email:s,subject:m,emailTxt:d},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},e.next=5,fetch("/support",n);case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,console.log("support data:",c),c.success?alert("email send"):alert("something went wrong");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"support-container"},r.a.createElement("h2",{className:"heading"},"Welcome to our tech support"),r.a.createElement("p",null,"Please tell us how we can help, send your request to us."),r.a.createElement("form",{onSubmit:f},r.a.createElement("input",{type:"text",name:"support-user-email",placeholder:"* Email",value:e,onChange:function(e){return c(e.target.value)},required:!0}),r.a.createElement("input",{type:"text",name:"support-user-subject",placeholder:"* Subject",onChange:function(e){return g(e.target.value)},required:!0}),r.a.createElement("textarea",{name:"support-user-msg",placeholder:"* Message",cols:"25",rows:"5",onChange:function(e){return h(e.target.value)},required:!0}),r.a.createElement("button",{type:"submit",className:"btn-style"},"Send")))}function ve(){var e=Object(n.useContext)(u),t=e.isLoggedIn,a=e.setIsLoggedIn,s=e.token;return r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:R}),r.a.createElement(i.b,{path:"/signup",render:function(e){return r.a.createElement(W,Object.assign({},e,{isLoggedIn:t,setIsLoggedIn:a}))}}),r.a.createElement(i.b,{path:"/login",render:function(e){return r.a.createElement(X,Object.assign({},e,{isLoggedIn:t,setIsLoggedIn:a}))}}),r.a.createElement(i.b,{exact:!0,path:"/logout",component:q}),r.a.createElement(i.b,{path:"/musicianAccount",render:function(e){return r.a.createElement(ce,e)}}),r.a.createElement(i.b,{exact:!0,path:"/musicians",component:F}),r.a.createElement(i.b,{exact:!0,path:"/projects",component:G}),r.a.createElement(i.b,{exact:!0,path:"/service",component:me}),r.a.createElement(i.b,{exact:!0,path:"/support",component:ge}),r.a.createElement(i.b,{path:"/projects/:id",render:function(e){return r.a.createElement(te,Object.assign({},e,{isLoggedIn:t,token:s}))}}),r.a.createElement(i.b,{exact:!0,path:"/profile/:id",component:le}),r.a.createElement(i.b,{path:"/edit-account",render:function(e){return r.a.createElement(ue,Object.assign({},e,{isLoggedIn:t,setIsLoggedIn:a}))}}),r.a.createElement(i.b,{path:"/delete-account",render:function(e){return r.a.createElement(oe,Object.assign({},e,{isLoggedIn:t,setIsLoggedIn:a}))}}),r.a.createElement(i.b,{component:m}))}function pe(){var e=Object(n.useContext)(u).isLoggedIn;return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",{className:"link-background"},r.a.createElement(o.c,{className:"main-nav-link middle",to:"/",exact:!0,activeClassName:"active"},"VMR Home")),e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"link-background"},r.a.createElement(o.c,{className:"main-nav-link middle",to:"/musicians",exact:!0,activeClassName:"active"},"Musicians")),r.a.createElement("li",{className:"link-background"},r.a.createElement(o.c,{className:"main-nav-link middle",to:"/projects",exact:!0,activeClassName:"active"},"Projects")),r.a.createElement("li",{className:"link-background"},r.a.createElement(o.c,{className:"main-nav-link middle",to:"/service",exact:!0,activeClassName:"active"},"Services"))),e?r.a.createElement("div",{className:"nav-li-div"},r.a.createElement("li",{className:"link-background"},r.a.createElement(o.c,{className:"main-nav-link middle",to:"/musicianAccount",exact:!0,activeClassName:"active"},"My Account")),r.a.createElement("li",{className:"link-background nav-item-left"},r.a.createElement(o.c,{className:"main-nav-link middle",to:"/logout",exact:!0,activeClassName:"active"},"Logout"))):r.a.createElement("div",{className:"nav-li-div nav-item-left"},r.a.createElement("li",{className:"link-background"},r.a.createElement(o.c,{className:"main-nav-link middle",to:"/signup",exact:!0,activeClassName:"active"},"Sign up")),r.a.createElement("li",{className:"link-background"},r.a.createElement(o.c,{className:"main-nav-link middle",to:"/login",exact:!0,activeClassName:"active"},"Login")))))}var de=a(23),he=a.n(de);var fe=function(){var e=Object(n.useState)(he.a.get("token")),t=Object(l.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(function(){var e=he.a.get("isLoggedIn");return!(!e||"false"===e)}()),i=Object(l.a)(c,2),m=i[0],g=i[1],v=Object(n.useState)(null),p=Object(l.a)(v,2),d=p[0],h=p[1],f=Object(n.useState)(null),E=Object(l.a)(f,2),b=E[0],j=E[1],y=Object(n.useState)(null),N=Object(l.a)(y,2),k=N[0],O=N[1],x=Object(n.useState)(""),S=Object(l.a)(x,2),C=S[0],w=S[1],I=Object(n.useState)(!1),L=Object(l.a)(I,2),P=L[0],_=L[1],T=Object(n.useState)({}),z=Object(l.a)(T,2),M=z[0],R=z[1];return r.a.createElement(u.Provider,{value:{token:a,setToken:function(e){he.a.set("token",e),s(e)},isLoggedIn:m,setIsLoggedIn:function(e){he.a.set("isLoggedIn",e),g(e)},userId:d,setUserId:h,name:b,setName:j,userEmail:k,setUserEmail:O,userCountry:C,setUserCountry:w,userData:M,setUserData:R,isAdmin:P,setIsAdmin:_}},r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(pe,null),r.a.createElement("div",{className:"app-container"},r.a.createElement(ve,null))," ")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,t,a){var n={"./ad.svg":86,"./ae.svg":87,"./af.svg":88,"./ag.svg":89,"./ai.svg":90,"./al.svg":91,"./am.svg":92,"./ao.svg":93,"./ar.svg":94,"./as.svg":95,"./at.svg":96,"./au.svg":97,"./aw.svg":98,"./az.svg":99,"./ba.svg":100,"./bb.svg":101,"./bd.svg":102,"./be.svg":103,"./bf.svg":104,"./bg.svg":105,"./bh.svg":106,"./bi.svg":107,"./bj.svg":108,"./bm.svg":109,"./bo.svg":110,"./br.svg":111,"./bs.svg":112,"./bt.svg":113,"./bw.svg":114,"./by.svg":115,"./bz.svg":116,"./ca.svg":117,"./cd.svg":118,"./cf.svg":119,"./cg.svg":120,"./ch.svg":121,"./ci.svg":122,"./ck.svg":123,"./cl.svg":124,"./cm.svg":125,"./cn.svg":126,"./co.svg":127,"./cr.svg":128,"./cu.svg":129,"./cv.svg":130,"./cw.svg":131,"./cy.svg":132,"./cz.svg":133,"./de.svg":134,"./dj.svg":135,"./dk.svg":136,"./dm.svg":137,"./do.svg":138,"./dz.svg":139,"./ec.svg":140,"./ee.svg":141,"./eg.svg":142,"./er.svg":143,"./es.svg":144,"./et.svg":145,"./fi.svg":146,"./fj.svg":147,"./fk.svg":148,"./fm.svg":149,"./fo.svg":150,"./fr.svg":151,"./ga.svg":152,"./gb.svg":153,"./gd.svg":154,"./ge.svg":155,"./gg.svg":156,"./gh.svg":157,"./gi.svg":158,"./gl.svg":159,"./gm.svg":160,"./gn.svg":161,"./gq.svg":162,"./gr.svg":163,"./gt.svg":164,"./gu.svg":165,"./gw.svg":166,"./hk.svg":167,"./hn.svg":168,"./hr.svg":169,"./ht.svg":170,"./hu.svg":171,"./id.svg":172,"./ie.svg":173,"./il.svg":174,"./im.svg":175,"./in.svg":176,"./io.svg":177,"./iq.svg":178,"./ir.svg":179,"./is.svg":180,"./it.svg":181,"./je.svg":182,"./jm.svg":183,"./jo.svg":184,"./jp.svg":185,"./ke.svg":186,"./kg.svg":187,"./kh.svg":188,"./ki.svg":189,"./km.svg":190,"./kn.svg":191,"./kp.svg":192,"./kr.svg":193,"./kw.svg":194,"./ky.svg":195,"./kz.svg":196,"./la.svg":197,"./lb.svg":198,"./li.svg":199,"./lk.svg":200,"./lr.svg":201,"./ls.svg":202,"./lt.svg":203,"./lu.svg":204,"./lv.svg":205,"./ly.svg":206,"./ma.svg":207,"./mc.svg":208,"./md.svg":209,"./me.svg":210,"./mg.svg":211,"./mh.svg":212,"./mk.svg":213,"./ml.svg":214,"./mm.svg":215,"./mn.svg":216,"./mo.svg":217,"./mp.svg":218,"./mq.svg":219,"./mr.svg":220,"./ms.svg":221,"./mt.svg":222,"./mu.svg":223,"./mv.svg":224,"./mw.svg":225,"./mx.svg":226,"./my.svg":227,"./mz.svg":228,"./na.svg":229,"./nato.svg":230,"./ne.svg":231,"./nf.svg":232,"./ng.svg":233,"./ni.svg":234,"./nl.svg":235,"./no.svg":236,"./np.svg":237,"./nr.svg":238,"./nu.svg":239,"./nz.svg":240,"./om.svg":241,"./pa.svg":242,"./pe.svg":243,"./pf.svg":244,"./pg.svg":245,"./ph.svg":246,"./pk.svg":247,"./pl.svg":248,"./pn.svg":249,"./pr.svg":250,"./ps.svg":251,"./pt.svg":252,"./pw.svg":253,"./py.svg":254,"./qa.svg":255,"./ro.svg":256,"./rs.svg":257,"./ru.svg":258,"./rw.svg":259,"./sa.svg":260,"./sb.svg":261,"./sc.svg":262,"./sd.svg":263,"./se.svg":264,"./sg.svg":265,"./si.svg":266,"./sk.svg":267,"./sl.svg":268,"./sm.svg":269,"./sn.svg":270,"./so.svg":271,"./sr.svg":272,"./ss.svg":273,"./st.svg":274,"./sv.svg":275,"./sx.svg":276,"./sy.svg":277,"./sz.svg":278,"./tc.svg":279,"./td.svg":280,"./tg.svg":281,"./th.svg":282,"./tibet.svg":283,"./tj.svg":284,"./tk.svg":285,"./tm.svg":286,"./tn.svg":287,"./to.svg":288,"./tr.svg":289,"./tt.svg":290,"./tv.svg":291,"./tw.svg":292,"./tz.svg":293,"./ua.svg":294,"./ug.svg":295,"./us.svg":296,"./uy.svg":297,"./uz.svg":298,"./ve.svg":299,"./vi.svg":300,"./vn.svg":301,"./vu.svg":302,"./ws.svg":303,"./ye.svg":304,"./za.svg":305,"./zm.svg":306,"./zw.svg":307};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=41},43:function(e,t,a){},58:function(e,t,a){e.exports=a.p+"static/media/BASS 2 PSICO.84a0cd5e.mp3"},59:function(e,t,a){e.exports=a.p+"static/media/BATERA 2  PSICO.b4a8cb5a.mp3"},60:function(e,t,a){e.exports=a.p+"static/media/GUITARS 2 PSICO.60495e28.mp3"},61:function(e,t,a){e.exports=a.p+"static/media/VOCES TECLAS 2 PSICO.dbcb41e1.mp3"},62:function(e,t,a){e.exports=a.p+"static/media/vmr.6a5d2bc3.gif"},63:function(e,t,a){e.exports=a.p+"static/media/waves.461d8fd1.png"},65:function(e,t,a){e.exports=a.p+"static/media/monkey-2.63b42ea7.png"},66:function(e,t,a){e.exports=a.p+"static/media/monkey-1.307a8d02.png"},71:function(e,t,a){e.exports=a(382)},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.08978be7.chunk.js.map