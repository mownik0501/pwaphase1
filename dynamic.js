function getfile(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("Application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status=="200"){


			callback(xhr.responseText);
		}
	}
    xhr.send(null);
}
getfile("dynamic.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	carrier(data.carrier);
	education(data.education);
	languages(data.languages);
})
var left=document.querySelector(".left");
function profile(e){
	var img=document.createElement("img");
	img.src=e.img;
	left.appendChild(img);
	var h2=document.createElement("h2");
	h2.textContent=e.name;
	left.appendChild(h2);
	var h21=document.createElement("h3");
    h21.textContent=e.roll;
    left.appendChild(h21);
    var h22=document.createElement("h4");
    h22.textContent=e.place;
    left.appendChild(h22);
    var h23=document.createElement("h5");
    h23.textContent=e.des;
    left.appendChild(h23);


}
var right=document.querySelector(".right");
function carrier(e){
	var h1=document.createElement("h1");
	h1.innerHTML="RESUME BUILDING";
	right.append(h1);
 	var e1=document.createElement("h2");
 	e1.textContent="carrierobjective";
	right.appendChild(e1);

	var hr=document.createElement("hr");
 	right.appendChild(hr);
    var p=document.createElement("p");
    p.textContent=e.info;
    right.appendChild(p);
}
 function education(e){
 	var h2=document.createElement("h2");
 	h2.innerHTML="EDUCATION DETAILS";
 	right.appendChild(h2);
 	var ww=document.createElement("hr");
 	right.appendChild(ww);
 	var table=document.createElement("table");
 	table.border="1";
 	var tr1="<tr><td>sno</td><td>degree</td><td>institute</td><td>per</td><td>yop</td></tr>";
 	var tr2="";
 	for(i=0;i<e.length;i++)
 	{
		tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].per+"</td><td>"+e[i].yop+"</td><tr>";

 	}
	table.innerHTML=tr1+tr2;
	right.appendChild(table);

}
function languages(e){
	var e2=document.createElement("h2");
	e2.textContent="known languages";
	right.appendChild(e2);
	var e3=document.createElement("hr");
	right.appendChild(e3);
	var ul=document.createElement("ul");
	for(i=0;i<e.length;i++)
	{
		var li=document.createElement("li");
		li.textContent=e[i].lang;
		ul.append(li);
	}
	right.appendChild(ul);

}

