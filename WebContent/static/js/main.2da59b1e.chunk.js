(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(37),l=a.n(i),s=(a(61),a(7)),o=a(8),c=a(10),u=a(9),d=a(11),m=a(118),h=a(119),p=a(114),g=a(35),b=(a(62),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"404")}}]),t}(n.Component)),v=a(24),y=a(28),f=a.n(y),E=a(120),w=(a(70),a(71),""),j="http://localhost:8080/agenceVoyageTomcat",C=450,O=4500,k=/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/,L=/^[a-z]+$/,_=[{re:/[a-zA-Z]/g,msg:"Votre mot de passe doit avoir des lettres en minuscule et majuscule"},{re:/\d/g,msg:"Votre mot de passe doit avoir des chiffres"},{re:/[^A-Za-z0-9]/g,count:1,msg:"Votre mot de passe doit poss\xe9der au moins 1 caract\xe8re sp\xe9cial"},{re:/^.{6,}$/,msg:"Votre mot de passe doit \xeatre plus grand ou \xe9gal \xe0 6 caract\xe8res"}],S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={history:a.props.history,showIndex:!0,showBullets:!0,infinite:!0,showThumbnails:!1,showFullscreenButton:!0,showGalleryFullscreenButton:!0,showPlayButton:!0,showGalleryPlayButton:!0,showNav:!1,isRTL:!1,slideDuration:C,slideInterval:O,showVideo:{},showMore:null},a.images=[{id:1,original:"".concat(w,"saturn.jpg"),originalClass:"featured-slide",description:"Voyage pour saturne une opportunit\xe9 a ne pas louper",onclick:a._redirect},{id:2,original:"".concat(w,"kepler-452b.jpg"),originalClass:"featured-slide",description:"Le nouvel eldorado kepler-452b, 100 premiers vols a 50%",onclick:a._redirect},{id:3,original:"".concat(w,"exoplanet.jpg"),originalClass:"featured-slide",description:"Planete BRZ, Partez pour bronzer !",onclick:a._redirect}],a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.state.slideInterval===t.slideInterval&&this.state.slideDuration===t.slideDuration||(this._imageGallery.pause(),this._imageGallery.play())}},{key:"_redirect",value:function(){var e=this._imageGallery.getCurrentIndex(),t=this.images[e].id;this.state.history.push({pathname:"/voyage",state:{id_Voyage:t}})}},{key:"_renderCustomControls",value:function(){return r.a.createElement("button",{className:"image-gallery-custom",type:"button","aria-label":"Open Info",onClickCapture:this._redirect.bind(this)})}},{key:"_handleInputChange",value:function(e,t){this.setState(Object(v.a)({},e,t.target.value))}},{key:"_handleCheckboxChange",value:function(e,t){this.setState(Object(v.a)({},e,t.target.checked))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"pub"},r.a.createElement("section",null,r.a.createElement(f.a,{ref:function(t){return e._imageGallery=t},items:this.images,autoPlay:!0,lazyLoad:!1,onClick:this._redirect.bind(this),infinite:this.state.infinite,showBullets:this.state.showBullets,showFullscreenButton:this.state.showFullscreenButton&&this.state.showGalleryFullscreenButton,showPlayButton:this.state.showPlayButton&&this.state.showGalleryPlayButton,showIndex:this.state.showIndex,showNav:this.state.showNav,isRTL:this.state.isRTL,slideDuration:parseInt(this.state.slideDuration),slideInterval:parseInt(this.state.slideInterval),additionalClass:"app-image-gallery",renderCustomControls:this._renderCustomControls.bind(this)})))}}]),t}(n.Component),M=Object(E.a)(S),B=a(117),P=a(116),I=a(115),N=a(113),R=a(51),U=a.n(R),x=a(112),q=a(39),T=a.n(q);a(91);function V(e,t){return!!k.test(String(e).toLowerCase())||(t.errorMsg="Votre mail est incorrect",!1)}function G(e,t,a){if(!V(e,a))return!1;for(var n=0;n<_.length;n++){var r=_[n],i=t.match(r.re);if(null===i||i.length<r.count)return a.errorMsg=r.msg,!1}return!0}var A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={showModal:!1,loggedIn:null,loading:!1,error:null,initialTab:null,errorMsg:null,recoverPasswordSuccess:null},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"onLogin",value:function(){var e=this;this.startLoading();var t=document.querySelector("#email").value.toLowerCase(),a=document.querySelector("#mdp").value;this.errorMsg=null,G(t,a,this)?T()({method:"post",url:j+"/Connexion",data:{email:t,motdepasse:a}}).then(function(t){console.log(t),null===t.data?(e.errorMsg="impossible de s'authentifier",e.setState({error:!0})):(e.setState({error:!1}),e.props.updateuser(t.data.id),e.onLoginSuccess(t.data.nom+" "+t.data.prenom))}):this.setState({error:!0}),this.finishLoading()}},{key:"onRegister",value:function(){var e=this,t=document.querySelector("#nom").value.toLowerCase(),a=document.querySelector("#prenom").value.toLowerCase(),n=document.querySelector("#email").value.toLowerCase(),r=document.querySelector("#mdp").value;this.errorMsg=null,!function(e,t,a,n,r){return L.test(e)?L.test(t)?!!G(a,n,r):(r.errorMsg="Votre prenom doit uniquement contenir des lettres",!1):(r.errorMsg="Votre nom doit uniquement contenir des lettres",!1)}(t,a,n,r,this)?this.setState({error:!0}):(this.setState({error:!1}),T()({url:j+"/Inscription",method:"post",data:{nom:t,prenom:a,email:n,motdepasse:r}}).then(function(n){""===n.data?(e.errorMsg="impossible de s'enregistrer",e.setState({error:!0})):(console.log(n),e.props.updateuser(n.data.id),e.onLoginSuccess(t+" "+a))}))}},{key:"onRecoverPassword",value:function(){var e=document.querySelector("#email").value;this.errorMsg=null,V(e,this)?this.setState({error:null,recoverPasswordSuccess:!0}):this.setState({error:!0,recoverPasswordSuccess:!1})}},{key:"openModal",value:function(e){var t=this;this.setState({initialTab:e},function(){t.setState({showModal:!0})})}},{key:"onLoginSuccess",value:function(e,t){this.closeModal(),this.setState({loggedIn:e,loading:!1})}},{key:"onLoginFail",value:function(e,t){this.setState({loading:!1,error:t})}},{key:"startLoading",value:function(){this.setState({loading:!0})}},{key:"finishLoading",value:function(){this.setState({loading:!1})}},{key:"afterTabsChange",value:function(){this.setState({error:null,recoverPasswordSuccess:!1})}},{key:"closeModal",value:function(){this.setState({showModal:!1,error:null})}},{key:"render",value:function(){var e=this,t=this.state.loggedIn,a=this.state.loading;return r.a.createElement("div",null,r.a.createElement(B.a,{bg:"dark",variant:"dark"},r.a.createElement(B.a.Brand,{href:"/"},"Odyssea Spatium"),r.a.createElement(P.a,{className:"mr-auto"},r.a.createElement("li",{className:"Lien"},r.a.createElement(x.a,{to:"/acceuil"},"Acceuil")),r.a.createElement("li",{className:"Lien"},r.a.createElement(x.a,{to:"/Historique"},"Historique")),r.a.createElement("li",{className:"Lien"},r.a.createElement(x.a,{to:"/Panier"},"Panier"))),t?r.a.createElement("div",{className:"login"},t):r.a.createElement(I.a,{inline:!0},r.a.createElement(N.a,{onClick:function(){return e.openModal()},variant:"outline-info"},"Connexion"))),r.a.createElement(U.a,{visible:this.state.showModal,onCloseModal:this.closeModal.bind(this),loading:a,initialTab:this.state.initialTab,error:this.state.error,tabs:{afterChange:this.afterTabsChange.bind(this),loginLabel:"Connexion",registerLabel:"S'enregistrer"},loginError:{label:this.errorMsg},registerError:{label:this.errorMsg},recoverPasswordError:{label:this.errorMsg},startLoading:this.startLoading.bind(this),finishLoading:this.finishLoading.bind(this),form:{onLogin:this.onLogin.bind(this),onRegister:this.onRegister.bind(this),onRecoverPassword:this.onRecoverPassword.bind(this),recoverPasswordSuccessLabel:this.state.recoverPasswordSuccess?{label:"Un message a \xe9t\xe9 envoy\xe9 sur votre bo\xeete mail."}:null,recoverPasswordAnchor:{label:"Mot de passe oubli\xe9 ?"},loginBtn:{label:"Se connecter"},registerBtn:{label:"S'inscrire"},recoverPasswordBtn:{label:"Envoyer"},loginInputs:[{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"},{containerClass:"RML-form-group",label:"Mot de passe",type:"password",inputClass:"RML-form-control",id:"mdp",name:"mdp",placeholder:"Mot de passe"}],registerInputs:[{containerClass:"RML-form-group",label:"Nom",type:"text",inputClass:"RML-form-control",id:"nom",name:"nom",placeholder:"Nom"},{containerClass:"RML-form-group",label:"Pr\xe9nom",type:"text",inputClass:"RML-form-control",id:"prenom",name:"prenom",placeholder:"Pr\xe9nom"},{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"},{containerClass:"RML-form-group",label:"Mot de passe",type:"password",inputClass:"RML-form-control",id:"mdp",name:"mdp",placeholder:"Mot de passe"}],recoverPasswordInputs:[{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"}]}}))}}]),t}(n.Component),D=a(16),z=(a(105),function(e){function t(e){var a;Object(s.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e));var n=null;return console.log(a.props),Object(D.isNullOrUndefined)(a.props.state)||(n=a.props.state.id_Utilisateur),a.state={history:a.props.history,id_Utilisateur:n},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"Panier"),r.a.createElement("hr",null),r.a.createElement("div",null))}}]),t}(n.Component)),F=Object(E.a)(z),H=(a(106),function(e){function t(e){var a;Object(s.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e));var n=null;return console.log(a.props),Object(D.isNullOrUndefined)(a.props.state)||(n=a.props.state.id_Utilisateur),a.state={history:a.props.history,id_Utilisateur:n},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"redirectCommentaires",value:function(){this.state.history.push({pathname:"/historiqueCommentaires",id_Utilisateur:this.state.id_Utilisateur,history:this.state.history})}},{key:"redirectPaniers",value:function(){this.state.history.push({pathname:"/historiquePanier",id_Utilisateur:this.state.id_Utilisateur,history:this.state.history})}},{key:"render",value:function(){return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"2"},r.a.createElement("h1",null,"Choisir L'historique \xe0 afficher"))),r.a.createElement("tr",null,r.a.createElement("td",{className:"titres"},r.a.createElement("h1",null,"L'Historique des Commentaires")),r.a.createElement("td",null,r.a.createElement("h1",null,"L'Historique des Paniers")))),r.a.createElement("tbody",null,r.a.createElement("tr",{className:"ligneBouttons"},r.a.createElement("td",null,r.a.createElement("button",{className:"commentaires",onClick:this.redirectCommentaires.bind(this)})),r.a.createElement("td",null,r.a.createElement("button",{className:"paniers",onClick:this.redirectPaniers.bind(this)})))))}}]),t}(n.Component)),Z=Object(E.a)(H),$=(a(107),function(e){function t(e){var a;Object(s.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e));var n=null;return console.log(a.props),Object(D.isNullOrUndefined)(a.props.state)||(n=a.props.state.id_Utilisateur),a.state={history:a.props.history,id_Utilisateur:n},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"Historique Commentaire"),r.a.createElement("hr",null),r.a.createElement("div",null))}}]),t}(n.Component)),J=Object(E.a)($),W=(a(108),function(e){function t(e){var a;Object(s.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e));var n=null;return console.log(a.props),Object(D.isNullOrUndefined)(a.props.state)||(n=a.props.state.id_Utilisateur),a.state={history:a.props.history,id_Utilisateur:n},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"Historique Panier"),r.a.createElement("hr",null),r.a.createElement("div",null))}}]),t}(n.Component)),K=Object(E.a)(W),Q=a(55),X=(a(109),null),Y=function(e){function t(e){var a;Object(s.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e));var n=null;return Object(D.isNullOrUndefined)(a.props.state)||(n=a.props.state.id_Utilisateur),a.state={history:a.props.history,id:a.props.location.state.id_Voyage,id_Utilisateur:n,showIndex:!0,showBullets:!0,infinite:!0,showThumbnails:!1,showFullscreenButton:!0,showGalleryFullscreenButton:!0,showPlayButton:!0,showGalleryPlayButton:!0,showNav:!1,isRTL:!1,slideDuration:C,slideInterval:O,showVideo:{},showMore:null,description:""},a.images=[{original:"".concat(w,"sat_ceinture.jpg"),originalClass:"featured-slide"},{original:"".concat(w,"sat_proche.jpg"),originalClass:"featured-slide"},{original:"".concat(w,"sat_rose.jpg"),originalClass:"featured-slide",description:"Soir\xe9e rose"}],a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){switch(this.state.id){case 1:X="".concat(w,"saturn.jpg"),this.setState({description:"Voyage pour saturne une opportunit\xe9 a ne pas louper"});break;case 2:X="".concat(w,"kepler-452b.jpg"),this.setState({description:"Le nouvel eldorado kepler-452b, 100 premiers vols a 50%"});break;case 3:X="".concat(w,"exoplanet.jpg"),this.setState({description:"Planete BRZ, Partez pour bronzer !"})}}},{key:"componentDidUpdate",value:function(e,t){this.state.slideInterval===t.slideInterval&&this.state.slideDuration===t.slideDuration||(this._imageGallery.pause(),this._imageGallery.play())}},{key:"_redirect",value:function(){this.state.history.push({pathname:"/panier",state:{id_Utilisateur:this.id_Utilisateur,id_Voyage:this.id}})}},{key:"_handleInputChange",value:function(e,t){this.setState(Object(v.a)({},e,t.target.value))}},{key:"_handleCheckboxChange",value:function(e,t){this.setState(Object(v.a)({},e,t.target.checked))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("table",{className:"description-achat-voyage"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"3"},r.a.createElement(Q.Parallax,{bgImage:X,strength:500},r.a.createElement("div",{style:{height:"400px"}},r.a.createElement("div",{className:"insideStyles"},this.state.description))))),r.a.createElement("tr",null,r.a.createElement("td",{className:"Contenant-images"},r.a.createElement("section",null,r.a.createElement(f.a,{ref:function(t){return e._imageGallery=t},items:this.images,lazyLoad:!1,autoPlay:!0,infinite:this.state.infinite,showBullets:this.state.showBullets,showFullscreenButton:this.state.showFullscreenButton&&this.state.showGalleryFullscreenButton,showPlayButton:this.state.showPlayButton&&this.state.showGalleryPlayButton,showIndex:this.state.showIndex,showNav:this.state.showNav,isRTL:this.state.isRTL,slideDuration:parseInt(this.state.slideDuration),slideInterval:parseInt(this.state.slideInterval),additionalClass:"app-image-gallery"}))),r.a.createElement("td",null,"Bla Bla description",r.a.createElement("br",null),"Bla",r.a.createElement("br",null),"Bla",r.a.createElement("br",null),"Bla",r.a.createElement("br",null),"Bla"),r.a.createElement("td",{className:"contenant-prix"},r.a.createElement("div",null,"Bla Bla prix :"),r.a.createElement("div",{className:"contenant-cadis"},r.a.createElement("button",{className:"image-cadis",type:"button","aria-label":"Ajout cadis",onClickCapture:this._redirect.bind(this)})))))),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("table",{className:"description-achat-voyage"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("form",{method:"POST"},"Ajout images:",r.a.createElement("input",{type:"file",id:"Ajout_image",name:"Ajout_image",accept:"image/png, image/jpeg"}),r.a.createElement("input",{id:"Ajouter_image",type:"submit",value:"Ajouter"})))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("form",{method:"POST"},r.a.createElement("p",null,"Ajout commentaire: ",r.a.createElement("input",{id:"Ajouter_Commentaire",type:"submit",value:"Ajouter"})),r.a.createElement("textarea",{id:"commentaires",name:"commentaires",rows:"5",cols:"55"})))))),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("p",null,"Commentaires:"),r.a.createElement("div",null,"bla ",r.a.createElement("br",null),"bla ",r.a.createElement("br",null),"bla ",r.a.createElement("br",null),"bla ",r.a.createElement("br",null))))}}]),t}(n.Component),ee=Object(E.a)(Y),te=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).updateuser=function(e){a.setState({id_Utilisateur:e})},a.state={id_Utilisateur:null},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{history:Object(g.a)(),id_Utilisateur:this.state.id_Utilisateur},r.a.createElement("div",null,r.a.createElement(A,{updateuser:this.updateuser}),r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:M}),r.a.createElement(p.a,{path:"/panier",component:F}),r.a.createElement(p.a,{path:"/historique",component:Z}),r.a.createElement(p.a,{path:"/historiquePanier",component:K}),r.a.createElement(p.a,{path:"/historiqueCommentaires",component:J}),r.a.createElement(p.a,{path:"/voyage",component:ee}),r.a.createElement(p.a,{path:"/agenceVoyageTomcat/index.html",component:M}),r.a.createElement(p.a,{path:"/acceuil",component:M}),r.a.createElement(p.a,{component:b}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,a){e.exports=a(110)},61:function(e,t,a){},62:function(e,t,a){},70:function(e,t,a){},91:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.2da59b1e.chunk.js.map