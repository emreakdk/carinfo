
window.addEventListener('load', fg_load)

function fg_load() {
    document.getElementById('loading').style.display = 'none'
}


window.onscroll =  (e) => {
    var scrollTop = window.pageYOffset;
		console.log(scrollTop);
		if( scrollTop > 50 ){			
document.getElementById('button').style.visibility="visible";
		}
		else
		{
			document.getElementById('button').style.visibility="none";
		}
        console.log();
}

