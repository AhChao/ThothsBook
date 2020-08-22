function clearLeftSpace()
{
	var contentByLines = InputField.getContent().split("\n");
	for(var lineIndex in contentByLines)
	{
		contentByLines[lineIndex] = contentByLines[lineIndex].trim();
	}
	ResultField.updateContent(contentByLines.join("\n"));
}