(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(38),s=a.n(r),o=(a(61),a(7)),l=a(8),u=a(10),c=a(9),d=a(11),m=a(120),h=a(118),p=a(114),g=a(36),v="http://localhost:8080/agenceVoyageTomcat",y=450,f=4500,b=/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/,E=/^[a-z]+$/,C=[{re:/[a-zA-Z]/g,msg:"Votre mot de passe doit avoir des lettres en minuscule et majuscule"},{re:/\d/g,msg:"Votre mot de passe doit avoir des chiffres"},{re:/[^A-Za-z0-9]/g,count:1,msg:"Votre mot de passe doit poss\xe9der au moins 1 caract\xe8re sp\xe9cial"},{re:/^.{6,}$/,msg:"Votre mot de passe doit \xeatre plus grand ou \xe9gal \xe0 6 caract\xe8res"}],_=(a(62),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null," - 404 - Vous vous \xeates perdus dans un trou noir du site :-/")}}]),t}(n.Component)),w=a(25),j=a(29),O=a.n(j),k=a(119),P=a(12),L=a.n(P),S=(a(88),a(89),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={history:a.props.history,showIndex:!0,showBullets:!0,infinite:!0,showThumbnails:!1,showFullscreenButton:!0,showGalleryFullscreenButton:!0,showPlayButton:!0,showGalleryPlayButton:!0,showNav:!1,isRTL:!1,slideDuration:y,slideInterval:f,showVideo:{},showMore:null},a.images=[],a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;L()({url:v+"/ImagesAcceuil",method:"post"}).then(function(t){if(""!==t.data){console.log(t);for(var a=0;a<t.data.length;a++)e.images[a].push({id:t.data[a].id,original:"".concat("").concat(t.data[a].image),originalClass:"featured-slide",annonce:t.data[a].description,onclick:e._redirect})}})}},{key:"componentDidUpdate",value:function(e,t){this.state.slideInterval===t.slideInterval&&this.state.slideDuration===t.slideDuration||(this._imageGallery.pause(),this._imageGallery.play())}},{key:"_redirect",value:function(){var e=this._imageGallery.getCurrentIndex(),t=this.images[e];this.state.history.push({pathname:"/voyage",state:{image:t}})}},{key:"_renderCustomControls",value:function(){return i.a.createElement("button",{className:"image-gallery-custom",type:"button","aria-label":"Open Info",onClickCapture:this._redirect.bind(this)})}},{key:"_handleInputChange",value:function(e,t){this.setState(Object(w.a)({},e,t.target.value))}},{key:"_handleCheckboxChange",value:function(e,t){this.setState(Object(w.a)({},e,t.target.checked))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"pub"},i.a.createElement("section",null,i.a.createElement(O.a,{ref:function(t){return e._imageGallery=t},items:this.images,autoPlay:!0,lazyLoad:!1,onClick:this._redirect.bind(this),infinite:this.state.infinite,showBullets:this.state.showBullets,showFullscreenButton:this.state.showFullscreenButton&&this.state.showGalleryFullscreenButton,showPlayButton:this.state.showPlayButton&&this.state.showGalleryPlayButton,showIndex:this.state.showIndex,showNav:this.state.showNav,isRTL:this.state.isRTL,slideDuration:parseInt(this.state.slideDuration),slideInterval:parseInt(this.state.slideInterval),additionalClass:"app-image-gallery",renderCustomControls:this._renderCustomControls.bind(this)})))}}]),t}(n.Component)),M=Object(k.a)(S),I=a(117),V=a(116),B=a(115),U=a(113),x=a(51),N=a.n(x),R=a(112);a(91);function q(e,t){return!!b.test(String(e).toLowerCase())||(t.errorMsg="Votre mail est incorrect",!1)}function T(e,t,a){if(!q(e,a))return!1;for(var n=0;n<C.length;n++){var i=C[n],r=t.match(i.re);if(null===r||r.length<i.count)return a.errorMsg=i.msg,!1}return!0}var G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={showModal:!1,loggedIn:null,loading:!1,error:null,initialTab:null,errorMsg:null,recoverPasswordSuccess:null},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onLogin",value:function(){var e=this;this.startLoading();var t=document.querySelector("#email").value.toLowerCase(),a=document.querySelector("#mdp").value;this.errorMsg=null,T(t,a,this)?L()({method:"post",url:v+"/Connexion",data:{email:t,motdepasse:a}}).then(function(t){console.log(t),null===t.data?(e.errorMsg="impossible de s'authentifier",e.setState({error:!0})):(e.setState({error:!1}),e.props.updateuser(t.data.id),e.onLoginSuccess(t.data.nom+" "+t.data.prenom))}):this.setState({error:!0}),this.finishLoading()}},{key:"onRegister",value:function(){var e=this,t=document.querySelector("#nom").value.toLowerCase(),a=document.querySelector("#prenom").value.toLowerCase(),n=document.querySelector("#email").value.toLowerCase(),i=document.querySelector("#mdp").value;this.errorMsg=null,!function(e,t,a,n,i){return E.test(e)?E.test(t)?!!T(a,n,i):(i.errorMsg="Votre prenom doit uniquement contenir des lettres",!1):(i.errorMsg="Votre nom doit uniquement contenir des lettres",!1)}(t,a,n,i,this)?this.setState({error:!0}):(this.setState({error:!1}),L()({url:v+"/Inscription",method:"post",data:{nom:t,prenom:a,email:n,motdepasse:i}}).then(function(n){""===n.data?(e.errorMsg="impossible de s'enregistrer",e.setState({error:!0})):(console.log(n),e.props.updateuser(n.data),e.onLoginSuccess(t+" "+a))}))}},{key:"onRecoverPassword",value:function(){var e=document.querySelector("#email").value;this.errorMsg=null,q(e,this)?this.setState({error:null,recoverPasswordSuccess:!0}):this.setState({error:!0,recoverPasswordSuccess:!1})}},{key:"openModal",value:function(e){var t=this;this.setState({initialTab:e},function(){t.setState({showModal:!0})})}},{key:"onLoginSuccess",value:function(e,t){this.closeModal(),this.setState({loggedIn:e,loading:!1})}},{key:"onLoginFail",value:function(e,t){this.setState({loading:!1,error:t})}},{key:"startLoading",value:function(){this.setState({loading:!0})}},{key:"finishLoading",value:function(){this.setState({loading:!1})}},{key:"afterTabsChange",value:function(){this.setState({error:null,recoverPasswordSuccess:!1})}},{key:"closeModal",value:function(){this.setState({showModal:!1,error:null})}},{key:"render",value:function(){var e=this,t=this.state.loggedIn,a=this.state.loading;return i.a.createElement("div",null,i.a.createElement(I.a,{bg:"dark",variant:"dark"},i.a.createElement(I.a.Brand,{href:"/"},"Odyssea Spatium"),i.a.createElement(V.a,{className:"mr-auto"},i.a.createElement("li",{className:"Lien"},i.a.createElement(R.a,{to:"/agenceVoyageTomcat/acceuil"},"Acceuil")),t?i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:"Lien"},i.a.createElement(R.a,{to:"/agenceVoyageTomcat/Historique"},"Historique")),i.a.createElement("li",{className:"Lien"},i.a.createElement(R.a,{to:"/agenceVoyageTomcat/Panier"},"Panier"))):null),t?i.a.createElement("div",{className:"login"},t):i.a.createElement(B.a,{inline:!0},i.a.createElement(U.a,{onClick:function(){return e.openModal()},variant:"outline-info"},"Connexion"))),i.a.createElement(N.a,{visible:this.state.showModal,onCloseModal:this.closeModal.bind(this),loading:a,initialTab:this.state.initialTab,error:this.state.error,tabs:{afterChange:this.afterTabsChange.bind(this),loginLabel:"Connexion",registerLabel:"S'enregistrer"},loginError:{label:this.errorMsg},registerError:{label:this.errorMsg},recoverPasswordError:{label:this.errorMsg},startLoading:this.startLoading.bind(this),finishLoading:this.finishLoading.bind(this),form:{onLogin:this.onLogin.bind(this),onRegister:this.onRegister.bind(this),onRecoverPassword:this.onRecoverPassword.bind(this),recoverPasswordSuccessLabel:this.state.recoverPasswordSuccess?{label:"Un message a \xe9t\xe9 envoy\xe9 sur votre bo\xeete mail."}:null,recoverPasswordAnchor:{label:"Mot de passe oubli\xe9 ?"},loginBtn:{label:"Se connecter"},registerBtn:{label:"S'inscrire"},recoverPasswordBtn:{label:"Envoyer"},loginInputs:[{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"},{containerClass:"RML-form-group",label:"Mot de passe",type:"password",inputClass:"RML-form-control",id:"mdp",name:"mdp",placeholder:"Mot de passe"}],registerInputs:[{containerClass:"RML-form-group",label:"Nom",type:"text",inputClass:"RML-form-control",id:"nom",name:"nom",placeholder:"Nom"},{containerClass:"RML-form-group",label:"Pr\xe9nom",type:"text",inputClass:"RML-form-control",id:"prenom",name:"prenom",placeholder:"Pr\xe9nom"},{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"},{containerClass:"RML-form-group",label:"Mot de passe",type:"password",inputClass:"RML-form-control",id:"mdp",name:"mdp",placeholder:"Mot de passe"}],recoverPasswordInputs:[{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"}]}}))}}]),t}(n.Component),A=a(17),D=(a(105),function(e){function t(e){var a;Object(o.a)(this,t),a=Object(u.a)(this,Object(c.a)(t).call(this,e));var n=null;return console.log(a.props),Object(A.isNullOrUndefined)(a.props.state)||(n=a.props.state.utilisateur),a.state={history:a.props.history,id_Utilisateur:n.id,id_Voyage:a.props.state.id_Voyage,prix:a.tprops.state.prix,panier:null,id_Panier:n.id_panier},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;L()({url:v+"/AjoutPanier",method:"post",data:{id_Voyage:this.state.id_Voyage,id_Utilisateur:this.state.id_Utilisateur,id_Panier:this.state.id_Panier}}),L()({url:v+"/RecupererPanier",method:"post",data:{id_Panier:this.state.id_Panier}}).then(function(t){if(""!==t.data){console.log(t);for(var a=[],n=0;n<t.data.length;n++)a.push("<p>"+t.data[n].annonce+"</p><hr/>");e.setState({panier:a})}})}},{key:"validerPanier",value:function(){var e=this;L()({url:v+"/ValiderPanier",method:"post",data:{id_Utilisateur:this.state.id_Utilisateur,id_Panier:this.state.id_Panier}}).then(function(t){e.state.history.push({pathname:"/acceuil"})})}},{key:"render",value:function(){var e=this.state.id_Utilisateur;return i.a.createElement("div",null,e?i.a.createElement("div",null,i.a.createElement("div",null,"Panier"),i.a.createElement("hr",null),i.a.createElement("div",null,this.state.panier),i.a.createElement("div",null,i.a.createElement("button",{id:"Valider_Panier",type:"submit",value:"Valider",onClick:this.validerPanier}))):this.state.history.push({pathname:"/404"}))}}]),t}(n.Component)),F=Object(k.a)(D),z=(a(106),function(e){function t(e){var a;Object(o.a)(this,t),a=Object(u.a)(this,Object(c.a)(t).call(this,e));var n=null;return console.log(a.props),Object(A.isNullOrUndefined)(a.props.state)||(n=a.props.state.utilisateur),a.state={history:a.props.history,id_Utilisateur:n.id},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"redirectCommentaires",value:function(){this.state.history.push({pathname:"/historiqueCommentaires",id_Utilisateur:this.state.id_Utilisateur,history:this.state.history})}},{key:"redirectPaniers",value:function(){this.state.history.push({pathname:"/historiquePanier",id_Utilisateur:this.state.id_Utilisateur,history:this.state.history})}},{key:"render",value:function(){var e=this.state.id_Utilisateur;return i.a.createElement("div",null,e?i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("td",{colSpan:"2"},i.a.createElement("h1",null,"Choisir L'historique \xe0 afficher"))),i.a.createElement("tr",null,i.a.createElement("td",{className:"titres"},i.a.createElement("h1",null,"L'Historique des Commentaires")),i.a.createElement("td",null,i.a.createElement("h1",null,"L'Historique des Paniers")))),i.a.createElement("tbody",null,i.a.createElement("tr",{className:"ligneBouttons"},i.a.createElement("td",null,i.a.createElement("button",{className:"commentaires",onClick:this.redirectCommentaires.bind(this)})),i.a.createElement("td",null,i.a.createElement("button",{className:"paniers",onClick:this.redirectPaniers.bind(this)}))))):this.state.history.push({pathname:"/404"}),";")}}]),t}(n.Component)),H=Object(k.a)(z),W=(a(107),function(e){function t(e){var a;Object(o.a)(this,t),a=Object(u.a)(this,Object(c.a)(t).call(this,e));var n=null;return console.log(a.props),Object(A.isNullOrUndefined)(a.props.state)||(n=a.props.state.utilisateur),a.state={history:a.props.history,id_Utilisateur:n.id,Commentaires:null},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;L()({url:v+"/RecupererCommentaires",method:"post",data:{id_Utilisateur:this.state.id_Utilisateur}}).then(function(t){if(""!==t.data){console.log(t);for(var a=[],n=0;n<t.data.length;n++){a.push("<p>"+t.data[n].commentaire+"</p>");try{a.push("<img src='"+t.data[n].image+"'></img>")}catch(i){}a.push("<hr/>")}e.setState({Commentaires:a})}})}},{key:"render",value:function(){var e=this.state.id_Utilisateur;return i.a.createElement("div",null,e?i.a.createElement("div",null,i.a.createElement("div",null,"Historique Commentaire"),i.a.createElement("hr",null),i.a.createElement("div",null,this.state.Commentaires)):this.state.history.push({pathname:"/404"}),";")}}]),t}(n.Component)),$=Object(k.a)(W),J=(a(108),function(e){function t(e){var a;Object(o.a)(this,t),a=Object(u.a)(this,Object(c.a)(t).call(this,e));var n=null;return console.log(a.props),Object(A.isNullOrUndefined)(a.props.state)||(n=a.props.state.utilisateur),a.state={history:a.props.history,id_Utilisateur:n.id,id_Panier:n.id_Panier,panier:null},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;L()({url:v+"/RecupererPanier",method:"post",data:{id_Utilisateur:this.state.id_Utilisateur,id_Panier:this.state.id_Panier}}).then(function(t){if(""!==t.data){console.log(t);for(var a=[],n=0;n<t.data.length;n++)a.push("<p>"+t.data[n].annonce+"</p><p>"+t.data[n].prix+"</p><hr/>");e.setState({panier:a})}})}},{key:"render",value:function(){var e=this.state.id_Utilisateur;return i.a.createElement("div",null,e?i.a.createElement("div",null,i.a.createElement("div",null,"Historique Panier"),i.a.createElement("hr",null),i.a.createElement("div",null,this.state.panier)):this.state.history.push({pathname:"/404"}),";")}}]),t}(n.Component)),Z=Object(k.a)(J),K=a(55),Q=(a(109),function(e){function t(e){var a;Object(o.a)(this,t),a=Object(u.a)(this,Object(c.a)(t).call(this,e));var n=null;return Object(A.isNullOrUndefined)(a.props.state)||(n=a.props.state.utilisateur),a.state={history:a.props.history,id:a.props.location.state.image.id,image:a.props.location.state.image.original,annonce:a.props.location.state.image.description,id_Utilisateur:n.id,showIndex:!0,showBullets:!0,infinite:!0,showThumbnails:!1,showFullscreenButton:!0,showGalleryFullscreenButton:!0,showPlayButton:!0,showGalleryPlayButton:!0,showNav:!1,isRTL:!1,slideDuration:y,slideInterval:f,showVideo:{},showMore:null,Commentaires:null,prix:null,descriptionVoyage:null},a.images=[],a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;L()({url:v+"/GetImagesVoyage",method:"post",data:{id_Voyage:this.state.id_Voyage}}).then(function(t){if(""!==t.data){console.log(t);for(var a=0;a<t.data.length;a++)e.images[a].push({original:"".concat("").concat(t.data[a].image),originalClass:"featured-slide"})}}),L()({url:v+"/GetVoyage",method:"post",data:{id_Voyage:this.state.id_Voyage}}).then(function(t){""!==t.data&&(console.log(t),e.setState({descriptionVoyage:t.data[0].descriptionVoyage}),e.setState({prix:t.data[0].prix}))}),L()({url:v+"/GetCommentaires",method:"post",data:{id_Voyage:this.state.id_Voyage}}).then(function(t){if(""!==t.data){console.log(t);for(var a=[],n=0;n<t.data.length;n++){a.push("<p>"+t.data[n].commentaire+"</p>");try{a.push("<img src='"+t.data[n].image+"'></img>")}catch(i){}a.push("<hr/>")}e.setState({Commentaires:a})}})}},{key:"componentDidUpdate",value:function(e,t){this.state.slideInterval===t.slideInterval&&this.state.slideDuration===t.slideDuration||(this._imageGallery.pause(),this._imageGallery.play())}},{key:"uploadImage",value:function(){}},{key:"uploadCommentaire",value:function(){L()({url:v+"/UploadCommentaire",method:"post",data:{id_Voyage:this.state.id_Voyage,id_Utilisateur:this.state.id_Utilisateur,commentaire:document.getElementById("commentaire").value}}).then(function(e){""!==e.data&&(console.log(e),document.getElementById("Ajouter_Commentaire_retour").innerHTML="Sucess"),document.getElementById("Ajouter_Commentaire_retour").innerHTML="Echec"})}},{key:"_redirect",value:function(){this.state.history.push({pathname:"/panier",state:{id_Utilisateur:this.id_Utilisateur,id_Voyage:this.id_Voyage,prix:this.state.prix}})}},{key:"_handleInputChange",value:function(e,t){this.setState(Object(w.a)({},e,t.target.value))}},{key:"_handleCheckboxChange",value:function(e,t){this.setState(Object(w.a)({},e,t.target.checked))}},{key:"render",value:function(){var e=this,t=this.state.id_Utilisateur;return i.a.createElement("div",null,i.a.createElement("table",{className:"description-achat-voyage"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{colSpan:"3"},i.a.createElement(K.Parallax,{bgImage:this.state.image,strength:500},i.a.createElement("div",{style:{height:"400px"}},i.a.createElement("div",{className:"insideStyles"},this.state.annonce))))),i.a.createElement("tr",null,i.a.createElement("td",{className:"Contenant-images"},i.a.createElement("section",null,i.a.createElement(O.a,{ref:function(t){return e._imageGallery=t},items:this.images,lazyLoad:!1,autoPlay:!0,infinite:this.state.infinite,showBullets:this.state.showBullets,showFullscreenButton:this.state.showFullscreenButton&&this.state.showGalleryFullscreenButton,showPlayButton:this.state.showPlayButton&&this.state.showGalleryPlayButton,showIndex:this.state.showIndex,showNav:this.state.showNav,isRTL:this.state.isRTL,slideDuration:parseInt(this.state.slideDuration),slideInterval:parseInt(this.state.slideInterval),additionalClass:"app-image-gallery"}))),i.a.createElement("td",null,this.state.descriptionVoyage),i.a.createElement("td",{className:"contenant-prix"},i.a.createElement("div",null,"prix :",this.state.prix),t?i.a.createElement("div",{className:"contenant-cadis"},i.a.createElement("button",{className:"image-cadis",type:"button","aria-label":"Ajout cadis",onClickCapture:this._redirect.bind(this)})):null)))),i.a.createElement("br",null),i.a.createElement("hr",null),i.a.createElement("br",null),i.a.createElement("table",{className:"description-achat-voyage"},t?i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("p",null,"Ajout commentaire: ",i.a.createElement("button",{id:"Ajouter_Commentaire",type:"submit",value:"Ajouter",onClick:this.uploadCommentaire})),i.a.createElement("p",{id:"Ajouter_Commentaire_retour"}),i.a.createElement("textarea",{id:"commentaire",name:"commentaire",rows:"5",cols:"55"}))),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("p",null," Ajout images a votre commentaire:"),i.a.createElement("input",{type:"file",id:"Ajout_image",name:"Ajout_image",accept:"image/png, image/jpeg"})))):null),i.a.createElement("br",null),i.a.createElement("hr",null),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("p",null,"Commentaires:"),i.a.createElement("div",null,this.state.Commentaires)))}}]),t}(n.Component)),X=Object(k.a)(Q),Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).updateuser=function(e){a.setState({utilisateur:e})},a.state={utilisateur:null},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,{history:Object(g.a)(),utilisateur:this.state.utilisateur},i.a.createElement("div",null,i.a.createElement(G,{updateuser:this.updateuser}),i.a.createElement(h.a,null,i.a.createElement(p.a,{exact:!0,path:"/",component:M}),i.a.createElement(p.a,{path:"/index.html",component:M}),i.a.createElement(p.a,{path:"/panier",component:F}),i.a.createElement(p.a,{path:"/historique",component:H}),i.a.createElement(p.a,{path:"/historiquePanier",component:Z}),i.a.createElement(p.a,{path:"/historiqueCommentaires",component:$}),i.a.createElement(p.a,{path:"/voyage",component:X}),i.a.createElement(p.a,{path:"/acceuil",component:M}),i.a.createElement(p.a,{component:_}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,a){e.exports=a(110)},61:function(e,t,a){},62:function(e,t,a){},88:function(e,t,a){},91:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.f47e048f.chunk.js.map