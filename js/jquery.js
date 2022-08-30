document.onkeydown=function(){if(window.event&&window.event.keyCode==123){event.keyCode=0;event.returnValue=false;}
if(window.event&&window.event.keyCode==13){window.event.keyCode=505;}
if(window.event&&window.event.keyCode==8){alert(str+"\n请使用Del键进行字符的删除操作！");window.event.returnValue=false;}
if(window.event&&window.event.keyCode==83){window.event.keyCode=0;window.event.returnValue=false;}
if(window.event&&window.event.keyCode==85){window.event.keyCode=0;window.event.returnValue=false;}}
document.oncontextmenu=function(event){if(window.event){event=window.event;}try{var the=event.srcElement;if(!((the.tagName=="INPUT"&&the.type.toLowerCase()=="text")||the.tagName=="TEXTAREA")){return false;}
return true;}catch(e){return false;}}
document.onpaste=function(event){if(window.event){event=window.event;}try{var the=event.srcElement;if(!((the.tagName=="INPUT"&&the.type.toLowerCase()=="text")||the.tagName=="TEXTAREA")){return false;}
return true;}catch(e){return false;}}
document.oncopy=function(event){if(window.event){event=window.event;}try{var the=event.srcElement;if(!((the.tagName=="INPUT"&&the.type.toLowerCase()=="text")||the.tagName=="TEXTAREA")){return false;}
return true;}catch(e){return false;}}
document.oncut=function(event){if(window.event){event=window.event;}try{var the=event.srcElement;if(!((the.tagName=="INPUT"&&the.type.toLowerCase()=="text")||the.tagName=="TEXTAREA")){return false;}
return true;}catch(e){return false;}}
document.onselectstart=function(event){if(window.event){event=window.event;}try{var the=event.srcElement;if(!((the.tagName=="INPUT"&&the.type.toLowerCase()=="text")||the.tagName=="TEXTAREA")){return false;}
return true;}catch(e){return false;}}
function addFavorite(){var url="https://www.mimiwangzhan.com/";var title=document.title;var ua=navigator.userAgent.toLowerCase();if(ua.indexOf("msie 8")>-1){external.AddToFavoritesBar(url,title,'');}else{try{window.external.addFavorite(url,title);}catch(e){try{window.sidebar.addPanel(title,url,"");}catch(e){alert("请使用Ctrl+D进行添加收藏,加入收藏不迷路！");}}}}