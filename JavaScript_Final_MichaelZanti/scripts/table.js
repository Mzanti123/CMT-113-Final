
            
            var array = [ ["","","","",""],
                         ["College Writing II","ENG 112","","3","ENG 111"],
				         ["College Writing I","ENG 11","","3","ENG or placement and ESL098 or RDG095 or placement"],
                         ["College Writing II","ENG 112","","3","ENG 111"],
                         ["Individual and Society","From Area 2","","3",""],
                         ["Intro to Mass media","VMA111 satifies Area 3 requirements","","3","ENG095 and MAT093"],
                         ["Quantitatuve Thought","From Area 4","","3","MAT097 or placement"],
                         ["Science and Technology","From Area 5","","3",""],
                         ["Humanities","From Area 6","","4",""],
						 ["Concentration  Courses","","","",""],
						 ["Oral Communication","ENG 171","","3",""],
                         ["HTML5","CMT 111","1","3","prerequisite/corequisite CMT125"],
                         ["CSS","CMT 125","1","3","prerequisite/corequisite CMT111"],
                         ["Digital Imaging with Photoshop","VMA105","1","3","ENG095 and MAT093 or placement"],
						 ["","","","",""],
						 ["Java Script","CMT113","2","3","CMT111 and CMT 125"],
                         ["SQL Programming","CIT236","3","3","CIT110 or CIT113 or CMT120 or Chair Approval"],
                         ["XML","CMT 117","3","4","CMT111 and CMT125 "],
						  ["","","","",""],
						  ["jQuery","CMT1xx","3","4","CMT113"],
						  ["PHP/MySql","CMT241","3","4","CMT113 and CIT236"],
						  ["Career Elective I","see Note*","3","4","As defined by chosen elective"],
						  ["Node JS","CMT2xx","3","4","CMT117"],
						  ["","","","",""],
						  ["JavaScript Object Notation JSON)","CMT2xx","4","4","CMT113"],
						  ["Mobile Web","CMT2xx","4","4","CMT241"],
						  ["Career Elective II","see Note **","4","4","As defined by chosen elective"],
						  ["","","Total","64",""],
						 ]
                table = document.getElementById("table");
        
       document.write("<link href='styles /styles_Four.css' rel='stylesheet'>")	
           
           for(var i = 0; i < array.length; i++)
           {
               // create a new row
               var newRow = table.insertRow(table.length);
               for(var j = 0; j < array[i].length; j++)
               {
                   // create a new cell
                   var cell = newRow.insertCell(j);
                   
                   // add value to the cell
                   cell.innerHTML = array[i][j];
               }
           }
        