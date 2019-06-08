function myFunction(){
				var x = document.getElementById('check-class');
				if (x.style.display === "none"){
					x..style.display="block";
				}else{
					x.style.display="none";
				}
			}



/*let togglenavstatus= false;

let tooglenav = function(){
	let getsidebar=document.querySelector(".mobile");
	let getsidebarul = document.querySelector(".mobile ul");
	let getsidebartq = document.querySelectorAll(".mobile a");

	if(togglenavstatus === false){
		getsidebarul.style.visibility = "visible";
		getsidebar.style.width = "272px" ;
		getsidebartq.style.opacity = "0.5";

		let arraylength = getsidebartq.length;
		for(let i=0;i< array.length; i++){
			getsidebartq[i].style.opacity = "1";
		}

		togglenavstatus = true ;
	}
}