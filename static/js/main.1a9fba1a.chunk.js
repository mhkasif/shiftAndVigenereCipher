(this["webpackJsonpcipher-algos"]=this["webpackJsonpcipher-algos"]||[]).push([[0],{176:function(e,t,r){e.exports=r(311)},181:function(e,t,r){},182:function(e,t,r){},183:function(e,t,r){},184:function(e,t,r){},303:function(e,t,r){},304:function(e,t,r){},305:function(e,t,r){},306:function(e,t,r){},311:function(e,t,r){"use strict";r.r(t);for(var n=r(0),a=r.n(n),i=r(43),o=r.n(i),l=(r(181),r(103)),c=r(74),h=r(75),p=r(82),s=r(81),u=(r(182),r(327)),f=r(326),g=(r(183),function(e){var t=e.text;return a.a.createElement("div",{className:"nav"},t?t.toUpperCase():"Cryptonic")}),v=r(324),m=[{key:"shiftCipher",text:"shift Cipher",value:"shift cipher"},{key:"vigenereCipher",text:"vigenere Cipher",value:"vigenere cipher"},{key:"substitutionCipher",text:"substitutionCipher",value:"substitution cipher"},{key:"playFairCipher",text:"playFair Cipher",value:"playFair cipher"},{key:"railFenceCipher",text:"railFence Cipher",value:"railFence cipher"}],d=(r(184),function(e){var t=e.handleCipherTypeChange;return a.a.createElement("div",{className:"dropdown"},a.a.createElement(v.a,{onChange:function(e,r){return t(r.value)},style:{width:"50%"},placeholder:"Select Cipher",selection:!0,options:m}))}),y=r(323),C=r(322),x=(r(303),function(e){var t=e.plainText,r=e.cipherText,n=e.onTextChange;return a.a.createElement(y.a,{style:{margin:"0px",padding:"0px",height:"100%"}},a.a.createElement("div",{className:"labels"},a.a.createElement("h3",{style:{marginTop:"40px",width:"40vw",textAlign:"center"}},"Plain Text"),a.a.createElement("h3",{style:{marginTop:"40px",width:"40vw",textAlign:"center"}},"Cipher Text")),a.a.createElement("div",{className:"text-area-container"},a.a.createElement(C.a,{name:"plainText",style:{width:"45%",height:"150%"},rows:8,placeholder:"Write Plain Text Here",onChange:n,value:t}),a.a.createElement(C.a,{onChange:n,name:"cipherText",value:r,style:{width:"45%",height:"150%"},rows:8,placeholder:"Cypher Text To Be Here"})))}),w=(r(304),r(313)),b=(r(305),[]),T="a".charCodeAt(0);T<="z".charCodeAt(0);T++)b.push(String.fromCharCode(T));for(var E=[],k="a".charCodeAt(0);k<="z".charCodeAt(0);k++)E.push(String.fromCharCode(k));var O=[],S=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];!function(){for(;O.length<26;){var e=Math.floor(Math.random()*S.length);O.includes(S[e])||O.push(S[e])}}();var j=function(){for(var e=new Array(5),t=0;t<5;t++)e[t]=new Array(5);return e}(),N=function(e){for(var t=e.toLowerCase().replace(/\s/g,""),r=t.length,n=0,a=97,i=0;i<5;i++)for(var o=0;o<5;o++)n<r?j.flat().includes(t[n])||"j"===t[n]?(n++,--o):j[i][o]=t[n++]:j.flat().includes(String.fromCharCode(a))||"j"===String.fromCharCode(a)?(a++,o--):j[i][o]=String.fromCharCode(a++)},V=function(e){var t=e.error,r=e.onEncrypt,n=e.onReset,i=e.onDecrypt,o=e.cipherType,l=e.keyVal,c=e.plainText,h=e.cipherText;return a.a.createElement("div",{className:"button-div"},a.a.createElement(w.a,{onClick:function(){switch(o){case"vigenere cipher":r(function(e,t){for(var r=t.split(""),n=e.split(""),a="",i=0,o=0;o<e.length;o++)if(" "!==n[o]){var l=(E.indexOf(n[o])+E.indexOf(r[i%r.length]))%26;a+=E[l],i++}else a+=" ";return console.log(a),a}(c,l));break;case"playFair cipher":r(function(e,t){e=(e=(e=e.toLowerCase()).replace(/[^\s a-z]/g,"")).replace(/  +/g," "),console.log(e);var r=[],n=[];N(t);var a="";e.split("").map((function(e,t){" "===e?r.push(t):e.match(/[^a-z]/g)&&n.push([e,t])}));for(var i=e.replace(/\s/g,""),o=0;o<i.length-1;o++)i[o]===i[o+1]&&(i=i.slice(0,o+1)+"x"+i.slice(o+1));i.length%2!==0&&(i+="x");var l=(i=i.replace(/j/g,"i")).match(/.{1,2}/g);console.log(l.length);for(var c=0;c<l.length;c++){for(var h=l[c],p={row:0,col:0},s={row:0,col:0},u=0;u<h.length;u++)for(var f=0;f<5;f++)for(var g=0;g<5;g++)h[u]===j[f][g]&&(0===u?(p.row=f,p.col=g):(s.row=f,s.col=g));if(p.row!==s.row&&p.col!==s.col){var v=p.col;p.col=s.col,s.col=v}p.row===s.row&&(p.col=(p.col+1)%5,s.col=(s.col+1)%5),p.col===s.col&&(p.row=(p.row+1)%5,s.row=(s.row+1)%5),a+=j[p.row][p.col],a+=j[s.row][s.col]}for(var m=0;m<r.length;m++)a=a.slice(0,r[m])+" "+a.slice(r[m]);return a}(c,l));break;case"substitution cipher":r(c.split("").reduce((function(e,t){var r=S.indexOf(t);return e+(O[r]||" ")}),""));break;default:r(function(e,t){for(var r=e.split(""),n="",a=0;a<e.length;a++)if(" "!==r[a]){var i=(b.indexOf(r[a])+Number(t))%26;n+=b[i]}else n+=" ";return n}(c,l))}},disabled:t,style:{margin:"50px"},content:"encrypt",primary:!0}),a.a.createElement(w.a,{onClick:function(){switch(o){case"vigenere cipher":i(function(e,t){for(var r=t.split(""),n=e.split(""),a="",i=0,o=0;o<e.length;o++)if(" "===n[o])a+=" ";else if(E.indexOf(n[o])-E.indexOf(r[i%r.length])<0){var l=(E.indexOf(n[o])-E.indexOf(r[i%r.length])+26)%26;a+=E[l],i++}else if(" "!==n[o]){var c=(E.indexOf(n[o])-E.indexOf(r[i%r.length]))%26;a+=E[c],i++}return a}(h,l));break;case"playFair cipher":i(function(e,t){e=e.toLowerCase();var r=[];N(t);var n="";e.split("").map((function(e,t){return" "===e?r.push(t):e.match(/[^a-z]/g)?f.push([e,t]):r}));for(var a=e.replace(/\s/g,"").match(/.{1,2}/g),i=0;i<a.length;i++){for(var o=a[i],l={row:0,col:0},c={row:0,col:0},h=0;h<o.length;h++)for(var p=0;p<5;p++)for(var s=0;s<5;s++)o[h]===j[p][s]&&(0===h?(l.row=p,l.col=s):(c.row=p,c.col=s));if(l.row!==c.row&&l.col!==c.col){var u=l.col;l.col=c.col,c.col=u}l.row===c.row&&((l.col-1)%5<0||(c.col-1)%5<0?(l.col=(l.col-1+5)%5,c.col=(c.col-1+5)%5):(l.col=Math.abs((l.col-1)%5),c.col=Math.abs((c.col-1)%5))),l.col===c.col&&((l.row-1)%5<0||(c.row-1)%5<0?(l.row=(l.row-1+5)%5,c.row=(c.row-1+5)%5):(l.row=Math.abs((l.row-1)%5),c.row=Math.abs((c.row-1)%5))),n+=j[l.row][l.col],n+=j[c.row][c.col]}var f=[];n.length%2===0&&(n=n.slice(0,n.length-1).toString());for(var g=0;g<n.length-2;g++)n[g]===n[g+2]&&"x"===n[g+1]&&(n=n.slice(0,g+1)+n.slice(g+2));for(var v=0;v<r.length;v++)n=n.slice(0,r[v])+" "+n.slice(r[v]);return n=n.replace(/i/g,"j")}(h,l));break;case"substitution cipher":i(h.split("").reduce((function(e,t){var r=O.indexOf(t);return e+(S[r]||" ")}),""));break;default:i(function(e,t){for(var r=e.split(""),n="",a=0;a<e.length;a++)if(" "===r[a])n+=" ";else if(b.indexOf(r[a])-Number(t)<0){var i=(b.indexOf(r[a])-Number(t)+26)%26;n+=b[i]}else if(" "!==r[a]){var o=(b.indexOf(r[a])-Number(t))%26;n+=b[o]}return n}(h,l))}},disabled:t,style:{margin:"50px"},content:"Decrypt",color:"teal"}),a.a.createElement(w.a,{onClick:n,style:{margin:"50px"},content:"Reset"}))},A=r(321),R=(r(306),function(e){var t=e.type,r=e.keyVal,n=e.onInputChange,i=e.error;return a.a.createElement("div",{className:"input"},t?a.a.createElement(A.a,{value:r,label:"KEY",error:i,onChange:n,type:"number",max:"25",min:"0"}):a.a.createElement(A.a,{value:r,label:"KEY",error:i,onChange:n}))}),F=r(325),M=function(){return a.a.createElement(F.a,{compact:!0,celled:!0,definition:!0},a.a.createElement(F.a.Body,null,a.a.createElement(F.a.Row,null,a.a.createElement(F.a.Cell,{collapsing:!0},"ALPHABETS"),S.map((function(e){return a.a.createElement(F.a.Cell,{key:12*Math.random()*77},e)}))),a.a.createElement(F.a.Row,null,a.a.createElement(F.a.Cell,{collapsing:!0},"KEY"),O.map((function(e){return a.a.createElement(F.a.Cell,{key:12*Math.random()*33},e)})))))},D=function(e){Object(p.a)(r,e);var t=Object(s.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){var e=this.props,t=e.cipherType,r=e.cipherText,n=e.plainText,i=e.error,o=e.onReset,l=e.onTextChange,c=e.keyVal,h=e.onInputChange,p=e.handleCipherTypeChange,s=e.onEncrypt,v=e.onDecrypt,m=e.animation,y=e.duration,C=e.visible;return a.a.createElement(u.a,{animation:m,duration:y,visible:C},a.a.createElement(f.a,{style:{width:"70vw",height:"70vh"}},a.a.createElement(g,{text:t}),a.a.createElement(d,{handleCipherTypeChange:p}),"substitution cipher"===t?a.a.createElement(M,null):a.a.createElement(R,{type:"shift cipher"===t?"number":"",keyVal:c,onInputChange:h,error:i}),a.a.createElement(x,{onTextChange:l,cipherText:r,plainText:n}),a.a.createElement(V,{plainText:n,cipherText:r,keyVal:c,onEncrypt:s,onDecrypt:v,cipherType:t,error:i,onReset:o})))}}]),r}(n.Component),I=function(e){Object(p.a)(r,e);var t=Object(s.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={cipherType:"",keyVal:"",plainText:"",cipherText:"",error:!0,animation:"tada",duration:500,visible:!0},e.handleCipherTypeChange=function(t){e.setState({cipherType:t})},e.onTextChange=function(t){var r,n=t.target,a=n.name,i=n.value,o=i[i.length-1];isNaN(o),e.setState((r={},Object(l.a)(r,a,i),Object(l.a)(r,"error",!1),r))},e.onReset=function(){e.setState({keyVal:void 0,plainText:"",cipherText:"",error:!0})},e.onInputChange=function(t){var r=t.target.value,n=r[r.length-1];"shift cipher"===e.state.cipherType?r<26&&r>=0?e.setState({keyVal:r,error:!1}):(e.toggleVisibility(),e.setState({error:!0})):isNaN(n)?e.setState({keyVal:r,error:!1}):e.toggleVisibility()},e.onEncrypt=function(t){e.setState({cipherText:t})},e.onDecrypt=function(t){e.setState({plainText:t})},e.toggleVisibility=function(){return e.setState((function(e){return{visible:!e.visible}}))},e}return Object(h.a)(r,[{key:"render",value:function(){var e=this.state,t=e.cipherType,r=e.keyVal,n=e.cipherText,i=e.plainText,o=e.animation,l=e.duration,c=e.visible;return a.a.createElement("div",{className:"app"},a.a.createElement(D,{animation:o,duration:l,visible:c,keyVal:r,plainText:i,onInputChange:this.onInputChange,cipherType:t,onTextChange:this.onTextChange,onReset:this.onReset,cipherText:n,handleCipherTypeChange:this.handleCipherTypeChange,onEncrypt:this.onEncrypt,onDecrypt:this.onDecrypt}))}}]),r}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(310);o.a.render(a.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[176,1,2]]]);
//# sourceMappingURL=main.1a9fba1a.chunk.js.map