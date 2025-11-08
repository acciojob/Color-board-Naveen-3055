//your JS code here. If required.
const container = document.querySelector('.container')
for(let i=0;i<800;i++){
	const box = document.createElement('div');
	box.classList.add('box')
	
	container.append(box);
	box.addEventListener('mouseover',()=>{
		box.style.backgroundColor = 'blue'
	})
	box.addEventListener('mouseout',()=>{
		setTimeout(()=>{
			box.style.backgroundColor = 'white';
		},1000)
	})
}

