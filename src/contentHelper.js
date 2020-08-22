function countLength()
{
	HintBox.updateContent(InputField.getContent().length);
}

function rgbToHex()
{
	var rgbCollection = InputField.getContent().split(",");
	var hexString = "#";
	for(var index in rgbCollection)
	{
		hexString += parseInt(rgbCollection[index]).toString(16);
	}
	HintBox.getInstance().style("background-color",hexString);
	ResultField.updateContent(hexString);
}