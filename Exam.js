function verify()	{
		if(document.form1.name1.value=="")	{
			alert("Enter your username");
			return false;
		}
		if((document.form1.pwd.value.length<6))	{
			alert("Password must be at least 6 characters long!!!");
			return false;
		}
	}