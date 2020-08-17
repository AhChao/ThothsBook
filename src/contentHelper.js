function countLength()
{
	d3.select("#hintBox").text(d3.select("#inputTextArea").property("value").length);
}

function rgbToHex()
{
	var rgbCollection = d3.select("#inputTextArea").property("value").split(",");
	var hexString = "#";
	for(var index in rgbCollection)
	{
		hexString += parseInt(rgbCollection[index]).toString(16);
	}
	d3.select("#hintBox").style("background-color",hexString);
	d3.select("#resultTextArea").property("value",hexString);
}