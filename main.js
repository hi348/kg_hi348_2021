// Kargo Assessment

var str = "";

for (i = 2; i < process.argv.length; i++) 
{
    if (i > 2) {str = str+","}
    
    for (j = 0; j < process.argv[i].length; j++) 
    {
	switch(process.argv[i].charAt(j))
	{
	    case '0':
	        str = str+"Zero";
	        break;
	    case '1':
	        str = str+"One";
	        break;
	    case '2':
	        str = str+"Two";
	        break;
	    case '3':
	        str = str+"Three";
	        break;
	    case '4':
	        str = str+"Four";
	        break;
	    case '5':
	        str = str+"Five";
	        break;
	    case '6':
	        str = str+"Six";
	        break;
	    case '7':
	        str = str+"Seven";
	        break;
	    case '8':
	        str = str+"Eight";
	        break;
	    case '9':
	        str = str+"Nine";
	        break;
	}
    }
}

process.stdout.write(str+"\n");
