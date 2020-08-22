function formTableView()
{
	var contentByLines = InputField.getContent().split("\n");
	var rowCount = contentByLines.length;
	var colCount = contentByLines[0].split("	").length;
	var contentByColByLines;
	console.log(rowCount,colCount);
	var tableContent = "";
	var tableStructureStart = "<table><tbody>";
	var tableStructureEnd = "</tbody></table>";
	tableContent += tableStructureStart; 
	tableContent += "<tr>";
	tableContent += "<td>";
	tableContent += "</td>";
	for(var col in contentByLines[0].split("	"))
	{		
		tableContent += "<td>";
		tableContent += "col "+(col+1);
		tableContent += "</td>";		
	}
	for(var lineIndex in contentByLines)
	{
		tableContent += "<tr>";
		tableContent += "<td>";
		tableContent += "row "+(lineIndex+1);
		tableContent += "</td>";
		contentByColByLines = contentByLines[lineIndex].split("	");
		for(var col in contentByColByLines)
		{
			tableContent += "<td>";
			tableContent += contentByColByLines[col];
			tableContent += "</td>";
		}
		tableContent += "</tr>";	
	}
	tableContent += tableStructureEnd;
	d3.select("#modalContent").html(tableContent);
	Modal.show();
}