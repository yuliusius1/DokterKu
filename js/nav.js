const usernav = document.getElementById('usernav');


let username = JSON.parse(localStorage.getItem('user'));

if (username != null){
	
	usernav.innerHTML = ' <a role="button" id="close" class="btn btn-outline-primary">Logout</a>';
	welcome.innerHTML = '<nav class="bg-primary py-2 px-4 text-white"> <h5> Welcome Back '+username[0].userr+'</h5></nav>'
	const close = document.getElementById('close');
	close.addEventListener('click',function(){
	localStorage.clear('user');
	location.href='login.html';
})

} else {
	usernav.innerHTML = ' <a role="button" href="login.html"  class="btn btn-outline-primary">Login</a>';
};