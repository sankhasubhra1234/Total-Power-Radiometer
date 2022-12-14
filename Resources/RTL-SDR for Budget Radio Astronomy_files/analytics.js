var GfyAnalytics=function(){var utc=0,stc=0;function generateUUID(){var b=new Date().getTime();var a='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(e){var d=(b+Math.random()*16)%16|0;b=Math.floor(b/16);return(e=='x'?d:(d&3|8)).toString(16);});return a;}
function createCookie(c,d,e){var a='';if(e){var b=new Date();b.setTime(b.getTime()+(e*1000));a='; expires='+b.toGMTString();}
document.cookie=c+'='+d+a+';domain=.gfycat.com;path=/';}
function readCookie(b){var e=b+'=';var a=document.cookie.split(';');for(var d=0;d<a.length;d++){var f=a[d];while(f.charAt(0)==' '){f=f.substring(1,f.length);}
if(f.indexOf(e)===0){return f.substring(e.length,f.length);}}
return null;}
function generateUserSessionID(){if(!utc){utc=readCookie('_utc');if(!utc){utc=generateUUID();createCookie('_utc',utc,31536000);}}
if(!stc){stc=readCookie('_stc');if(!stc){stc=generateUUID();createCookie('_stc',stc,1800);}}}
function sendViewCount(gfyid,data){generateUserSessionID();var _utc=encodeURIComponent(utc);var _stc=encodeURIComponent(stc);var viewDataString="";for(var key in data){if(data[key]){viewDataString+=('&'+key+'='+data[key]);}}
var url='https://px.gfycat.com/pix.gif?gfyid='+gfyid+viewDataString+
'&utc='+_utc+'&stc='+_stc+'&rand='+Math.random()*100000;var xhr=createCORSRequest('GET',url);if(!xhr)throw new Error('CORS is not supported in your browser');xhr.onerror=function(){console.log('CORS Error');};xhr.send();if(typeof ga!=='undefined'){ga('gfyTracker.send','pageview',location.href);}}
function createCORSRequest(method,url){var xhr=new XMLHttpRequest();if('withCredentials'in xhr){xhr.open(method,url,true);}
else if(typeof XDomainRequest!='undefined'){xhr=new XDomainRequest();xhr.open(method,url);}
else{xhr=null;}
return xhr;}
function encodeParameters(data){return Object.keys(data).map(function(key){return[key,data[key]].map(encodeURIComponent).join("=");}).join("&");}
var sendEvent=function(kv){generateUserSessionID();var ref='https://www.gfycat.com';if(typeof document.referrer!='undefined'&&document.referrer.length>1){ref=document.referrer;}
kv.utc=utc;kv.stc=stc;kv.ref=ref;var i=new Image();i.src='https://metrics.gfycat.com/pix.gif?'+encodeParameters(kv);if(typeof ga!=='undefined'&&kv.hasOwnProperty('event')){ga('gfyTracker.send','event','gfyEvent',kv.event);}};var sendEventWithCallback=function(kv,callback){generateUserSessionID();var ref='https://www.gfycat.com';if(typeof document.referrer!='undefined'&&document.referrer.length>1){ref=document.referrer;}
kv.utc=utc;kv.stc=stc;kv.ref=ref;var i=new Image();i.src='https://metrics.gfycat.com/pix.gif?'+encodeParameters(kv);if(typeof ga!=='undefined'&&kv.hasOwnProperty('event')){ga('gfyTracker.send','event','gfyEvent',kv.event,{'hitCallback':callback});}};var initGA=function(){if(typeof ga!=='undefined'){ga(function(){if(!ga.getByName('gfyTracker')){ga('create','UA-40130883-1','auto','gfyTracker');}});}else{ga=undefined;}};return{sendEvent:sendEvent,sendEventWithCallback:sendEventWithCallback,sendViewCount:sendViewCount,initGA:initGA};}();