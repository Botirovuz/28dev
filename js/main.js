//Uzbekistan Junior

function writeComment(){
	//Input Element
	const input = document.getElementById("inputText").value;
	//Ordered List
	let ol = document.getElementById("item");
	
	if (input !== "") {
		//List Item
		let li = document.createElement("li");
		//Img Item
		let img = document.createElement("img");
		//List Value
		let li_text = document.createTextNode(input);
		//Source Img & Class img
		img.setAttribute("src","avatar.jpg");
		img.setAttribute("class", "avatar");
		//Append
		li.appendChild(img);
		li.appendChild(li_text);
		ol.appendChild(li);
		//Input
		document.getElementById("inputText").value = "";
		return true;
	} else {
		return false;
	}
}