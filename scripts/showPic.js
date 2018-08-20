function showPic(whichpic){
	if (!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	if (document.getElementById("decription")){
		var text=whichpic.getAttribute("title");
		var description=document.getElementById("description");
		description.firstChild.nodeValue=text;
	}
	return true;
}

function countBodyChildren(){
	var body_element=document.getElementsByTagName("body")[0];
	alert (body_element.nodeType);
}

function prepareGallery(){
	if (!document.getElementById ||!document.getElementsByTagName){
		return false;
	}
	if (!document.getElementById("imagegallery")){
		return false;
	}
	var gallery=document.getElementById("imagegallery");
	var links=gallery.getElementsByTagName("a");
	for (var i=0;i < links.length;i++){
		links[i].onclick=function(){
			return !showPic(this);
		}
	}
}

function addLoadEvent(func){
	var oldonload=window.onload;
	if (typeof window.onload != "function") {
		window.onload=func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

addLoadEvent(countBodyChildren);
addLoadEvent(prepareGallery);





















