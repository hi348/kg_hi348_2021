// Kargo Assessment

var str = "";
var invalid = false; // flag indicating whether input is valid

for (i = 2; i < process.argv.length; i++) // loops through command line arguments
{
    if (invalid) {break;}
    if (i > 2) {str = str+","}
    
    for (j = 0; j < process.argv[i].length; j++) // checks each character of argument string
    {
	if (invalid) {break;}
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
	    default:
	        invalid = true; // case where character is not an integer
	        break;
	}
    }
}

if (invalid) {process.stdout.write("Invalid input. All arguments must be positive integers."+"\n");}
else {process.stdout.write(str+"\n");}
