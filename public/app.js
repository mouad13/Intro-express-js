$(document).ready(function(){

	$("#submit").click(function(){

		var user = {
			login : $("#log").val(),
			mdp: $("#password").val(),
		};
		console.log(user);
		$.ajax({
			url:'/auth',
			type:'POST',
			data: user,
			

			success : function(data){
			alert ('Vos identifiants ont bien été envoyé');
			}
		})
	});
})