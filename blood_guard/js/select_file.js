var table = document.getElementById('outputTable');
	
function parseCSV(text, lineTerminator, cellTerminator) {
	  
//break the lines apart
	var lines = text.split(lineTerminator);
	
	for(var j = 0; j<lines.length; j++){
		  
		if(lines[j] != ""){
		
				//create a table row 
			var tableRow = table.appendChild(document.createElement('tr'));
		
			//split the rows at the cellTerminator character
			var information = lines[j].split(cellTerminator);
		
			for(var k = 0; k < information.length; k++){
					//append the cell to the row
				var cell = tableRow.appendChild(document.createElement('td'));
				cell.appendChild(document.createTextNode(information[k]));
		
			}
		
		}
  
	}
	  
}
		
function handleFileSelect(evt) {
	var files = evt.target.files; // FileList object

	// Loop through the FileList and populate the 'outputTable' with the data
	for (var i = 0, f; f = files[i]; i++) {

		var reader = new FileReader();

		// Closure to capture the file information.
		reader.onload = (function(theFile) {
			return function(e) {
			
				//call the parse function with the proper line terminator and cell terminator
				parseCSV(e.target.result, '\n', ',');
			
			};
		})(f);

		  // Read the file as text
		reader.readAsText(f);
		  
	}
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);
