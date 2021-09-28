const time = 12*1000; //Tempo de espera para seguir outra pessoa(<segundos> * 1 segundo)

for(let i=0;i<document.querySelectorAll(".y3zKF").length;i++){
	let elem = document.querySelectorAll(".y3zKF")[i]
	let arroba = document.querySelectorAll(".y3zKF")[i].parentElement.parentElement.firstElementChild.lastElementChild.firstElementChild.textContent
	setTimeout(()=>{
			elem.click()
			console.log((++i)+"º ("+arroba+")")    
	},time*i)
}