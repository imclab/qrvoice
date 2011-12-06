/* Copyright (c) 2011, Marcel Duran */
YUI.add("lang/qrvoice_es-419",function(a){"use strict",a.Intl.add("qrvoice","es-419",{direction:"ltr",tagline:"cuando una imagen vale más que mil palabras",help:"ayuda",faq:"preguntas frecuentes",faqFile:"faq_en-US.html",placeholder:"Diga algo!",msgTitle:"texto a voz (100 caracteres máximo)",genLabel:"generar",genTitle:"generar qr-voice",whichLang:"en {lang}",spokenLang:"Idioma",langs:{af:"afrikaans",sq:"albanés",ar:"árabe",hy:"armenio",ca:"catalán",zh:"chino",hr:"croata",cs:"checo",da:"danés",nl:"holandés",en:"inglés",fi:"finlandés",fr:"francés",de:"alemán",el:"griego",ht:"criollo haitiano",hi:"hindi",hu:"húngaro",is:"islandés",id:"indonesio",it:"italiano",ja:"japonés",ko:"coreano",la:"latin",lv:"lituano",mk:"macedonio",no:"noruego",pl:"polaco",pt:"portugués",ro:"rumano",ru:"ruso",sr:"serbio",sk:"eslovaco",es:"español",sw:"suajili",sv:"sueco",ta:"tamil",tr:"turco",vi:"vietnamita",cy:"galés"},langsNote:"idioma sólo para reproducción, no para traducción",resizeTitle:"cambiar el tamaño del qr-code",linkTitle:"enlace a esta imagen qr-code",imgTitle:"qr-code para reproducir el mensaje, guardar/escanear esta imagen o copiar el enlace de arriba",facebookButton:"Me gusta",twitterButton:"Twittear",intls:{"en-US":{name:"inglés (Estados Unidos)",ownName:"English (United States)"},"es-419":{name:"español (Latinoamérica)"},ja:{name:"japonés",ownName:"日本語"},"pt-BR":{name:"portugués (Brasil)",ownName:"português (Brasil)"}},intlsTitle:"idioma de la interfaz de usuario",disclaimer:"exención de responsabilidad: qrvoice no está afiliado con Yahoo!&trade; Inc., Google&trade; Inc. o bitly&trade; Inc. de ninguna manera."})},"0.0.5b");YUI.add("qrvoice",function(a){"use strict";var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q="qrvoice",r=q,s="R_039525bc02a0dbe1e6456752fdc17997",t="http://my.qrvoice.net/",u="http://api.bitly.com/v3/shorten?login="+r+"&apiKey="+s+"&longUrl={url}&format=json&callback={callback}",v="http://translate.google.com/translate_tts?ie=UTF-8&q={msg}&tl={lang}",w="http://chart.apis.google.com/chart?cht=qr&choe=UTF-8&chs={size}x{size}&chl={url}",x="http://www.facebook.com/sharer.php?t=QR%20voice&u=http%253A%252F%252Fqrvoice.net%2F%3Fid%3D{id}",y="http://twitter.com/share?source=tweetbutton&text=QR%20voice&url=http%3A%2F%2Fqrvoice.net%2F%3Fid%3D{id}",z=33,A=547,B=10,C="hidden",D="lng-sel",E="invis",F=".lbl",G="body",H="#qrlink",I="#qrcopy",J="#help",K="#lang",L=a.one,M=a.Intl,N=M.get(q),O=a.Lang,P=O.sub,Q=a.config.win,R=Q.location,S=Q.navigator,T=a.StorageLite,U=T.getItem,V=T.setItem,W=a.Node,X=W.create,Y=a.Object.each,Z=a.Array,$=W.getDOMNode,_=encodeURIComponent,ba=Math.round,bb=null,bc="value",bd="lang",be="placeholder",bf="title",bg="click",bh="size",bi="rtl",bj="id",bk="href",bl=/[\d\w\-_]/g,bm=N.langs,bn=S.userLanguage||S.language,bo=bn.slice(0,2).toLowerCase(),bp=0,bq=L(G),br=L("#form"),bs=L("#msg"),bt=L("#size"),bu=L("#slider-thumb"),bv=L("#qrcode-wrp"),bw=L(H),bx=L(I),by=$(bx),bz=L("#slider-box"),bA=L("#lang-lst"),bB=L("#lang-name"),bC=L("#social .facebook"),bD=L("#social .twitter"),bE=L("#help-panel"),bF=(new a.apm.SimpleSlider({node:bz})).render(),bG=function(){var a=Q.history;return a&&a.replaceState?function(b){a.replaceState(bb,bb,b?"?"+b:"/")}:function(a){R.hash=a}}(),bH=function(a,b){bs.get(bc)||f.setXY(b||bs.getXY()),a&&a.halt()},bI=function(a){return a.toLowerCase().replace(/[áãâ]/g,"a").replace(/[éê]/g,"e").replace(/[í]/g,"i").replace(/[ô]/g,"o").replace(/[ú]/g,"u").replace(/[ç]/g,"c").replace(/[ñ]/g,"n")},bJ=function(){return k==="zh"?"zh-CN":k},bK=function(a){bm.hasOwnProperty(a)||(a="en"),k=a,bs.set(bd,bJ()),bB.setContent(P(N.whichLang,{lang:bm[a]})),V(bd,a)},bL=function(a,b){var c,d,e=a&&a.data;if(!e)return;c=e.url,d=e.hash,p||(p=X(P('<img id="qrcode" alt="{alt}">',{alt:N.imgTitle})),bv.append(p)),p.set("src",c),bv.set(bk,c),bw.set(bk,c).setContent(c),bC.set(bk,P(x,{id:d})),bD.set(bk,P(y,{id:d})),b||bG("id="+d)},bM=function(b){var c,d,e=b&&b.data;if(!e)return;c=P(w,{size:h,url:_(e.url)}),d=P(u,{url:_(c)}),a.jsonp(d,{on:{success:bL}})},bN=function(b){var c,d,e=bs.get(bc),f=bJ();b.halt(),e&&(l!==e||m!==f)&&(l=e,m=f,e=_(e),c=P(v,{msg:e,lang:f}),d=P(u,{url:_(c)}),a.jsonp(d,{on:{success:bM}}))};bq.setStyle("visibility","visible"),br.on("submit",bN),bq.delegate(bg,function(a){a.halt(),bA.toggleClass(C)},K),bq.delegate(bg,function(a){a.halt(),bE.setStyle("background","url(/images/help.jpg) no-repeat").toggleClass(E)},J),bq.delegate(bg,function(a){a.target.ancestor(K)||bA.addClass(C),a.target.test(J)||bE.addClass(E)},G),bq.delegate(bg,function(a){var b=a.target;a.preventDefault(),L("#lng-"+k).removeClass(D),b.addClass(D),bK(b.get(bj).slice(4))},".lng"),bq.delegate("mouseover",function(){bw.addClass(E),bx.removeClass(E).set(bc,bw.getContent()),by.focus(),by.select()},H),bq.delegate("mouseout",function(){bw.removeClass(E),bx.addClass(E)},I),bF.on("valueChange",function(a){var c=o||ba(a.newVal[0]*b)+z;o=0,c=c<z?z:c>A?A:c,h=c,V(bh,c),bt.setContent(c+"x"+c),bv.setStyles({height:c,width:c})}),d=R.search,c=d.lastIndexOf("/"),c=c>-1?c:d.length,e=d.slice(1,c).split("&").concat(R.hash.slice(1).split("&")),Z.some(e,function(a){var b=a.split("="),c=b[1];if(b[0]===bj&&bl.test(c))return bL({data:{url:t+c,hash:c}},1),1}),N.direction===bi&&bq.addClass(bi),L(J).setContent(N.help).set(bk,N.faqFile).removeClass(C),L("#faq").setContent(N.faq).set(bk,N.faqFile),L("#tagline").setContent(N.tagline),bs.set(be,N.placeholder).set(bf,N.msgTitle),L("#lbl-msg").setContent(N.msgTitle),L("#gen").set(bf,N.genTitle),L("#lbl-gen").setContent(N.genLabel),bu.set(bf,N.resizeTitle),bw.set(bf,N.linkTitle),bv.set(bf,N.imgTitle),L("#lbl-intls").setContent(N.intlsTitle),L("#disclaimer").setContent(N.disclaimer),bC.one(F).setContent(N.facebookButton),bD.one(F).setContent(N.twitterButton),O.isUndefined($(X("<input>"))[be])&&(f=X(P('<label class="{cls}" for="msg">{lbl}</label>',{cls:be,lbl:N.placeholder})),br.append(f),bH(),bs.on("focus",bH,bb,[0,-1e4]),bs.on("blur",bH)),j="",g=M.getLang(q),Y(N.intls,function(a,b){var c=a.ownName;j+=P('<option value="{key}"{sel}>{opt}</option>',{key:b,sel:b===g?" selected":"",opt:a.name+(c?" - "+c:"")})}),i=X(P('<select id="intls" title="{title}">{opts}</select>',{title:N.intlsTitle,opts:j})),bq.one("#intls-wrp").append(i),i.on("change",function(){var a=i.get("options").item(i.get("selectedIndex")).get(bc);V("intl",a),R.reload()}),T.on("storage-lite:ready",function(){var a=[];n=parseInt(bz.getStyle("width"),10),b=(A-z+1)/n,h=U(bh),h?o=h:h=n,bF.update([ba((h-z)/b),0]),bu.removeClass(C),bv.removeClass(C),bK(U(bd)||bo),j=P('<div id="lang-hd">{title}</div><ul class="lang-col">',{title:N.spokenLang}),Y(bm,function(b,c){a.push({id:c,name:b})}),a.sort(function(a,b){var c=bI(a.name),d=bI(b.name);return c<d?-1:1}),Z.each(a,function(a){var b=a.id;j+=P('<li><a class="lng{cls}" href="#" id="lng-{id}">{name}</a></li>',{cls:b===k?" "+D:"",id:b,name:a.name}),bp+=1,bp%B===0&&(j+='</ul><ul class="lang-col">')}),j+=P('</ul><div id="lang-ft">{note}</div>',{note:N.langsNote}),bA.setContent(j)})},"0.0.5b",{lang:["en-US","es-419","ja","pt-BR"],requires:["node","json","jsonp","dd-constrain","gallery-center","gallery-simpleslider","gallery-storage-lite"]})