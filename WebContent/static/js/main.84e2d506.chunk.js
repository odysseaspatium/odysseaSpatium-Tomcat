(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},123:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(28),o=a.n(r),s=(a(70),a(9)),l=a(10),u=a(12),c=a(11),m=a(13),d=a(142),h=a(141),p=a(137),g=a(41),y="/agenceVoyageTomcat",v="http://localhost:8080/agenceVoyageTomcat",f=450,b=4500,E=/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/,_=/^[a-z]+$/,C=[{re:/[a-zA-Z]/g,msg:"Votre mot de passe doit avoir des lettres en minuscule et majuscule"},{re:/\d/g,msg:"Votre mot de passe doit avoir des chiffres"},{re:/[^A-Za-z0-9]/g,count:1,msg:"Votre mot de passe doit poss\xe9der au moins 1 caract\xe8re sp\xe9cial"},{re:/^.{6,}$/,msg:"Votre mot de passe doit \xeatre plus grand ou \xe9gal \xe0 6 caract\xe8res"}],w=(a(71),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null," - 404 - Vous vous \xeates perdus dans un trou noir du site :-/")}}]),t}(n.Component)),j=a(30),S=a(34),O=a.n(S),k=a(143),I=a(14),L=a.n(I),M=(a(97),a(98),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={history:a.props.history,showIndex:!0,showBullets:!0,infinite:!0,showThumbnails:!1,showFullscreenButton:!0,showGalleryFullscreenButton:!0,showPlayButton:!0,showGalleryPlayButton:!0,Utilisateur:JSON.parse(sessionStorage.getItem("utilisateur")),showNav:!1,isRTL:!1,slideDuration:f,slideInterval:b,showVideo:{},showMore:null,voyages:null},a.images=[],a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;L()({url:v+"/Bridge",method:"post",data:{route:"Voyage/getTousVoyages"}}).then(function(t){if(""!==t.data){for(var a=0;a<t.data.length;a++)e.setState({voyages:t.data}),e.images.push({id:t.data[a].id_voyage,original:t.data[a].lien_photo_annonce[0],originalClass:"featured-slide",description:t.data[a].annonce_voyage,onclick:e._redirect});console.log(e.images)}})}},{key:"componentDidUpdate",value:function(e,t){this.state.slideInterval===t.slideInterval&&this.state.slideDuration===t.slideDuration||(this._imageGallery.pause(),this._imageGallery.play())}},{key:"_redirect",value:function(){var e=this._imageGallery.getCurrentIndex();this.state.history.push({pathname:y+"/voyage",state:{image:this.state.voyages[e]}})}},{key:"_renderCustomControls",value:function(){return i.a.createElement("button",{className:"image-gallery-custom",type:"button","aria-label":"Open Info",onClickCapture:this._redirect.bind(this)})}},{key:"_handleInputChange",value:function(e,t){this.setState(Object(j.a)({},e,t.target.value))}},{key:"_handleCheckboxChange",value:function(e,t){this.setState(Object(j.a)({},e,t.target.checked))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"pub"},i.a.createElement("section",null,i.a.createElement(O.a,{ref:function(t){return e._imageGallery=t},items:this.images,autoPlay:!0,lazyLoad:!1,onClick:this._redirect.bind(this),infinite:this.state.infinite,showBullets:this.state.showBullets,showFullscreenButton:this.state.showFullscreenButton&&this.state.showGalleryFullscreenButton,showPlayButton:this.state.showPlayButton&&this.state.showGalleryPlayButton,showIndex:this.state.showIndex,showNav:this.state.showNav,isRTL:this.state.isRTL,slideDuration:parseInt(this.state.slideDuration),slideInterval:parseInt(this.state.slideInterval),additionalClass:"app-image-gallery",renderCustomControls:this._renderCustomControls.bind(this)})))}}]),t}(n.Component)),B=Object(k.a)(M),P=a(140),N=a(139),x=a(138),V=a(136),R=a(58),q=a.n(R),D=a(135);a(100);function F(e,t){return!!E.test(String(e).toLowerCase())||(t.errorMsg="Votre mail est incorrect",!1)}function U(e,t,a){if(!F(e,a))return!1;for(var n=0;n<C.length;n++){var i=C[n],r=t.match(i.re);if(null===r||r.length<i.count)return a.errorMsg=i.msg,!1}return!0}var T=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={showModal:!1,loggedIn:null,loading:!1,error:null,initialTab:null,errorMsg:null,recoverPasswordSuccess:null};var n=JSON.parse(sessionStorage.getItem("utilisateur"));try{a.setState({loggedIn:n.nom+" "+n.prenom})}catch(i){}return console.log(a.state),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onLogin",value:function(){var e=this;this.startLoading();var t=document.querySelector("#email").value.toLowerCase(),a=document.querySelector("#mdp").value;this.errorMsg=null,U(t,a,this)?L()({method:"post",url:v+"/Connexion",data:{email:t,motdepasse:a}}).then(function(t){console.log(t),null===t.data?(e.errorMsg="impossible de s'authentifier",e.setState({error:!0})):(e.setState({error:!1}),sessionStorage.setItem("utilisateur",JSON.stringify(t.data)),e.onLoginSuccess(t.data.nom+" "+t.data.prenom))}):this.setState({error:!0}),this.finishLoading()}},{key:"onRegister",value:function(){var e=this,t=document.querySelector("#nom").value.toLowerCase(),a=document.querySelector("#prenom").value.toLowerCase(),n=document.querySelector("#email").value.toLowerCase(),i=document.querySelector("#mdp").value;this.errorMsg=null,!function(e,t,a,n,i){return _.test(e)?_.test(t)?!!U(a,n,i):(i.errorMsg="Votre prenom doit uniquement contenir des lettres",!1):(i.errorMsg="Votre nom doit uniquement contenir des lettres",!1)}(t,a,n,i,this)?this.setState({error:!0}):(this.setState({error:!1}),L()({url:v+"/Inscription",method:"post",data:{nom:t,prenom:a,email:n,motdepasse:i}}).then(function(n){""===n.data?(e.errorMsg="impossible de s'enregistrer",e.setState({error:!0})):(sessionStorage.setItem("utilisateur",JSON.stringify(n.data)),e.onLoginSuccess(t+" "+a))}))}},{key:"onRecoverPassword",value:function(){var e=document.querySelector("#email").value;this.errorMsg=null,F(e,this)?this.setState({error:null,recoverPasswordSuccess:!0}):this.setState({error:!0,recoverPasswordSuccess:!1})}},{key:"openModal",value:function(e){var t=this;this.setState({initialTab:e},function(){t.setState({showModal:!0})})}},{key:"onLoginSuccess",value:function(e,t){this.closeModal(),this.setState({loggedIn:e,loading:!1})}},{key:"onLoginFail",value:function(e,t){this.setState({loading:!1,error:t})}},{key:"startLoading",value:function(){this.setState({loading:!0})}},{key:"finishLoading",value:function(){this.setState({loading:!1})}},{key:"afterTabsChange",value:function(){this.setState({error:null,recoverPasswordSuccess:!1})}},{key:"closeModal",value:function(){this.setState({showModal:!1,error:null})}},{key:"deconnection",value:function(){this.setState({loggedIn:null,loading:!1}),sessionStorage.removeItem("utilisateur")}},{key:"render",value:function(){var e=this,t=this.state.loggedIn,a=this.state.loading;return i.a.createElement("div",null,i.a.createElement(P.a,{bg:"dark",variant:"dark"},i.a.createElement(P.a.Brand,null,"Odyssea Spatium"),i.a.createElement(N.a,{className:"mr-auto"},i.a.createElement("li",{className:"Lien"},i.a.createElement(D.a,{to:y+"/acceuil"},"Acceuil")),t?i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:"Lien"},i.a.createElement(D.a,{to:y+"/Historique"},"Historique")),i.a.createElement("li",{className:"Lien"},i.a.createElement(D.a,{to:y+"/Panier"},"Panier"))):null),t?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"login"},t),i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{inline:!0},i.a.createElement(V.a,{onClick:function(){return e.deconnection()},variant:"outline-info"},"Deconnection")))):i.a.createElement(x.a,{inline:!0},i.a.createElement(V.a,{onClick:function(){return e.openModal()},variant:"outline-info"},"Connexion"))),i.a.createElement(q.a,{visible:this.state.showModal,onCloseModal:this.closeModal.bind(this),loading:a,initialTab:this.state.initialTab,error:this.state.error,tabs:{afterChange:this.afterTabsChange.bind(this),loginLabel:"Connexion",registerLabel:"S'enregistrer"},loginError:{label:this.errorMsg},registerError:{label:this.errorMsg},recoverPasswordError:{label:this.errorMsg},startLoading:this.startLoading.bind(this),finishLoading:this.finishLoading.bind(this),form:{onLogin:this.onLogin.bind(this),onRegister:this.onRegister.bind(this),onRecoverPassword:this.onRecoverPassword.bind(this),recoverPasswordSuccessLabel:this.state.recoverPasswordSuccess?{label:"Un message a \xe9t\xe9 envoy\xe9 sur votre bo\xeete mail."}:null,recoverPasswordAnchor:{label:"Mot de passe oubli\xe9 ?"},loginBtn:{label:"Se connecter"},registerBtn:{label:"S'inscrire"},recoverPasswordBtn:{label:"Envoyer"},loginInputs:[{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"},{containerClass:"RML-form-group",label:"Mot de passe",type:"password",inputClass:"RML-form-control",id:"mdp",name:"mdp",placeholder:"Mot de passe"}],registerInputs:[{containerClass:"RML-form-group",label:"Nom",type:"text",inputClass:"RML-form-control",id:"nom",name:"nom",placeholder:"Nom"},{containerClass:"RML-form-group",label:"Pr\xe9nom",type:"text",inputClass:"RML-form-control",id:"prenom",name:"prenom",placeholder:"Pr\xe9nom"},{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"},{containerClass:"RML-form-group",label:"Mot de passe",type:"password",inputClass:"RML-form-control",id:"mdp",name:"mdp",placeholder:"Mot de passe"}],recoverPasswordInputs:[{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"}]}}))}}]),t}(n.Component),A=(a(112),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={history:a.props.history,Utilisateur:JSON.parse(sessionStorage.getItem("utilisateur")),id_Voyage:a.props.location.state.id_Voyage,prix:a.props.location.state.prix,id_panier:a.props.location.state.id_panier,panier:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;console.log(this.state.Utilisateur),L()({url:v+"/Bridge",method:"post",data:{id_panier:this.state.id_panier,route:"Panier/contenu"}}).then(function(t){if(""!==t.data){console.log(t);for(var a=[],n=0;n<t.data.length;n++)a.push(i.a.createElement("div",{id:t.data[n].id_article},i.a.createElement("p",null,"Nom du voyage : ",t.data[n].nom_voyage,", prix : ",t.data[n].prix_voyage),i.a.createElement("hr",null)));e.setState({panier:a})}})}},{key:"supprimer_voyage",value:function(e){L()({url:v+"/Bridge",method:"post",data:{id_article:e,route:"Article/supprimerVoyage"}}).then(function(t){document.getElementById(e).style.display="none"})}},{key:"validerPanier",value:function(){var e=this;L()({url:v+"/Bridge",method:"post",data:{id_panier:this.state.id_panier,route:"Panier/valider"}}).then(function(t){e.state.history.push({pathname:y+"/acceuil"})})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,"Panier"),i.a.createElement("hr",null),i.a.createElement("div",null,this.state.panier),i.a.createElement("div",null,i.a.createElement("button",{id:"Valider_Panier",type:"submit",value:"Valider",onClick:this.validerPanier},"Valier panier")))}}]),t}(n.Component)),G=Object(k.a)(A),J=(a(113),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={history:a.props.history,Utilisateur:JSON.parse(sessionStorage.getItem("utilisateur"))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"redirectCommentaires",value:function(){this.state.history.push({pathname:y+"/historiqueCommentaires",history:this.state.history})}},{key:"redirectPaniers",value:function(){this.state.history.push({pathname:y+"/historiquePanier",history:this.state.history})}},{key:"render",value:function(){return i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("td",{colSpan:"2"},i.a.createElement("h1",null,"Choisir L'historique \xe0 afficher"))),i.a.createElement("tr",null,i.a.createElement("td",{className:"titres"},i.a.createElement("h1",null,"L'Historique des Commentaires")),i.a.createElement("td",null,i.a.createElement("h1",null,"L'Historique des Paniers")))),i.a.createElement("tbody",null,i.a.createElement("tr",{className:"ligneBouttons"},i.a.createElement("td",null,i.a.createElement("button",{className:"commentaires",onClick:this.redirectCommentaires.bind(this)})),i.a.createElement("td",null,i.a.createElement("button",{className:"paniers",onClick:this.redirectPaniers.bind(this)})))))}}]),t}(n.Component)),z=Object(k.a)(J),H=(a(114),a(117),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={history:a.props.history,Utilisateur:JSON.parse(sessionStorage.getItem("utilisateur")),Commentaires:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;L()({url:v+"/RecupererCommentaires",method:"post",data:{id_Utilisateur:this.state.Utilisateur.id_user}}).then(function(t){if(""!==t.data){console.log(t);for(var a=[],n=0;n<t.data.length;n++){a.push("<p>"+t.data[n].commentaire+"</p>");try{a.push("<img src='"+t.data[n].image+"'></img>")}catch(i){}a.push("<hr/>")}e.setState({Commentaires:a})}})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,"Historique Commentaire"),i.a.createElement("hr",null),i.a.createElement("div",null,this.state.Commentaires))}}]),t}(n.Component)),W=Object(k.a)(H),$=(a(118),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={history:a.props.history,Utilisateur:JSON.parse(sessionStorage.getItem("utilisateur")),panier:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;L()({url:v+"/RecupererPanier",method:"post",data:{id_Utilisateur:this.state.Utilisateur.id_user,id_Panier:this.state.Utilisateur.id_panier_user}}).then(function(t){if(""!==t.data){console.log(t);for(var a=[],n=0;n<t.data.length;n++)a.push("<p>"+t.data[n].annonce+"</p><p>"+t.data[n].prix+"</p><hr/>");e.setState({panier:a})}})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,"Historique Panier"),i.a.createElement("hr",null),i.a.createElement("div",null,this.state.panier))}}]),t}(n.Component)),Z=Object(k.a)($),K=a(62),Q=a(46),X=a(45),Y=a.n(X),ee=(a(123),function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(u.a)(this,Object(c.a)(t).call(this,e)),console.log(a.props.location.state),a.state={history:a.props.history,id_Voyage:a.props.location.state.image.id_voyage,image_annonce:a.props.location.state.image.lien_photo_annonce,images_voyages:a.props.location.state.image.lien_photos_voyage,annonce:a.props.location.state.image.annonce_voyage,dateDebut:a.props.location.state.image.dateDebut_voyage,dateFin:a.props.location.state.image.dateFin_voyage,Utilisateur:JSON.parse(sessionStorage.getItem("utilisateur")),showIndex:!0,showBullets:!0,infinite:!0,showThumbnails:!1,showFullscreenButton:!0,showGalleryFullscreenButton:!0,showPlayButton:!0,showGalleryPlayButton:!0,showNav:!1,isRTL:!1,slideDuration:f,slideInterval:b,showVideo:{},showMore:null,Commentaires:null,prix:a.props.location.state.image.prix_voyage,descriptionVoyage:a.props.location.state.image.description_voyage,id_panier:null},a.image=[],console.log(a.state),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){for(var e=this,t=0;t<this.state.images_voyages.length;t++)this.image.push({original:this.state.images_voyages[t],originalClass:"featured-slide"});console.log(this.image),null!=this.state.Utilisateur&&L()({url:v+"/Bridge",method:"post",data:{id_utilisateur:this.state.Utilisateur.id,route:"Panier/idPanier"}}).then(function(t){""!==t.data&&(console.log(t),e.setState({id_panier:t.data[0].id_panier_user}))}),L()({url:v+"/Bridge",method:"post",data:{id_voyage:this.state.id_Voyage,route:"Commentaire/getCommentaire"}}).then(function(t){if(""!==t.data){console.log(t);for(var a=[],n=0;n<t.data.length;n++){a.push("<p>"+t.data[n].texte_commentaire+"</p>");try{a.push("<img src='"+t.data[n].lien_photos_commentaire+"'></img>")}catch(i){}a.push("<hr/>")}e.setState({Commentaires:a})}})}},{key:"componentDidMount",value:function(){(new Date).getDate()<=this.state.dateFin?document.getElementById("tab_ajout_commentaire").style.display="none":document.getElementById("tab_ajout_commentaire").style.display="block"}},{key:"componentDidUpdate",value:function(e,t){this.state.slideInterval===t.slideInterval&&this.state.slideDuration===t.slideDuration||(this._imageGallery.pause(),this._imageGallery.play())}},{key:"uploadCommentaire",value:function(){var e=[];null!=document.getElementById("Ajout_image").value&&e.push(document.getElementById("Ajout_image").value),console.log(e),null!=this.state.Utilisateur&&L()({url:v+"/Bridge",method:"post",data:{id_voyage:this.state.id_Voyage,id_utilisateur:this.state.Utilisateur.id_user,commentaire:document.getElementById("commentaire").value,route:"Commentaire/addCommentaire",image:e}}).then(function(e){""!==e.data&&(console.log(e),document.getElementById("Ajouter_Commentaire_retour").innerHTML="Sucess"),document.getElementById("Ajouter_Commentaire_retour").innerHTML="Echec"})}},{key:"_redirect",value:function(){L()({url:v+"/Bridge",method:"post",data:{id_panier:this.state.id_panier,id_voyage:this.state.id_Voyage,route:"Article/ajoutVoyage"}}),this.state.history.push({pathname:y+"/panier",state:{id_Voyage:this.state.id_Voyage,id_panier:this.state.id_panier,prix:this.state.prix}})}},{key:"_handleInputChange",value:function(e,t){this.setState(Object(j.a)({},e,t.target.value))}},{key:"_handleCheckboxChange",value:function(e,t){this.setState(Object(j.a)({},e,t.target.checked))}},{key:"render",value:function(){var e=this,t=this.state.Utilisateur;return i.a.createElement("div",null,i.a.createElement("table",{className:"description-achat-voyage"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{colSpan:"3"},i.a.createElement(K.Parallax,{bgImage:this.state.image_annonce,strength:500},i.a.createElement("div",{style:{height:"400px"}},i.a.createElement("div",{className:"insideStyles"},this.state.annonce))))),i.a.createElement("tr",null,i.a.createElement("td",{className:"Contenant-images"},i.a.createElement("section",null,i.a.createElement(O.a,{ref:function(t){return e._imageGallery=t},items:this.image,lazyLoad:!1,autoPlay:!0,infinite:this.state.infinite,showBullets:this.state.showBullets,showFullscreenButton:this.state.showFullscreenButton&&this.state.showGalleryFullscreenButton,showPlayButton:this.state.showPlayButton&&this.state.showGalleryPlayButton,showIndex:this.state.showIndex,showNav:this.state.showNav,isRTL:this.state.isRTL,slideDuration:parseInt(this.state.slideDuration),slideInterval:parseInt(this.state.slideInterval),additionalClass:"app-image-gallery"}))),i.a.createElement("td",null,i.a.createElement("p",null,"Debut: ",i.a.createElement(Q.a,{className:"datepick",selected:this.state.dateDebut,readOnly:!0,locale:Y.a})),i.a.createElement("p",null,"Fin prevue:",i.a.createElement(Q.a,{className:"datepick",selected:this.state.dateFin,readOnly:!0,locale:Y.a})),i.a.createElement("p",null,this.state.descriptionVoyage)),i.a.createElement("td",{className:"contenant-prix"},i.a.createElement("div",null,"prix :",this.state.prix),t?i.a.createElement("div",{className:"contenant-cadis"},i.a.createElement("button",{className:"image-cadis",type:"button","aria-label":"Ajout cadis",onClickCapture:this._redirect.bind(this)})):null)))),i.a.createElement("br",null),i.a.createElement("hr",null),i.a.createElement("br",null),i.a.createElement("table",{className:"description-achat-voyage",id:"tab_ajout_commentaire"},t?i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("p",null,"Ajout commentaire: ",i.a.createElement("button",{id:"Ajouter_Commentaire",type:"submit",onClick:this.uploadCommentaire.bind(this)},"Ajouter Commentaire")),i.a.createElement("p",{id:"Ajouter_Commentaire_retour"}),i.a.createElement("textarea",{id:"commentaire",name:"commentaire",rows:"5",cols:"55"}))),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("p",null," Ajout images a votre commentaire:"),i.a.createElement("input",{type:"file",id:"Ajout_image",name:"Ajout_image",accept:"image/png, image/jpeg"})))):null),i.a.createElement("br",null),i.a.createElement("hr",null),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("p",null,"Commentaires:"),i.a.createElement("div",null,this.state.Commentaires)))}}]),t}(n.Component)),te=Object(k.a)(ee),ae=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={utilisateur:JSON.parse(sessionStorage.getItem("utilisateur"))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.utilisateur;return console.log(this.state.utilisateur),i.a.createElement(d.a,{history:Object(g.a)()},i.a.createElement("div",null,i.a.createElement(T,null),i.a.createElement(h.a,null,i.a.createElement(p.a,{exact:!0,path:"/",component:B}),i.a.createElement(p.a,{path:y+"/acceuil",component:B}),i.a.createElement(p.a,{path:y+"/index.html",component:B}),i.a.createElement(p.a,{path:y+"/voyage",component:te}),e?i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{path:y+"/panier",component:G}),i.a.createElement(p.a,{path:y+"/historique",component:z}),i.a.createElement(p.a,{path:y+"/historiquePanier",component:Z}),i.a.createElement(p.a,{path:y+"/historiqueCommentaires",component:W})):null,i.a.createElement(p.a,{component:w}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,t,a){e.exports=a(133)},70:function(e,t,a){},71:function(e,t,a){},97:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.84e2d506.chunk.js.map