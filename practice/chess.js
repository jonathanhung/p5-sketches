

function printChess (num) {

  for (i=0; i<= num; i++) {
	   if (i %2 ==0) {
    	  // console.log(" # # # #")


        var output="";


    		for (k = 0 ; k<=num; k++) {
      			if (k % 2 ==0) {
        			// add a space
        			output = output + " ";
      			}
      			else {
        			// add a hash
        			output = output + "#";
      			}
    		}

        console.log(output);

	} else  {
		var output="";


		for (k = 0 ; k<=num; k++) {


			if (k % 2 ==0) {

			// add a space
			output = output + "#";
			}

			else {

			// add a hash
			output = output + " ";
			}

		}

		console.log(output);

		}

	}
}

printChess(24);
