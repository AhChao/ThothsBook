function clearLeftSpace()
{
	var contentByLines = d3.select("#inputTextArea").property("value").split("\n");
	for(var lineIndex in contentByLines)
	{
		contentByLines[lineIndex] = contentByLines[lineIndex].trim();
	}
	d3.select("#resultTextArea").property("value",contentByLines.join("\n"));
}