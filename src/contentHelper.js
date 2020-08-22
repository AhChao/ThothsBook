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

function sumTheNums()
{
	var nums = InputField.getContent().split("\n");
	var result = 0;
	for(var index in nums)
	{
		result += Number(nums[index]);
	}
	HintBox.updateContent("Sum is "+result+" !");
}

function avgTheNums()
{
	var nums = InputField.getContent().split("\n");
	var result = 0;
	for(var index in nums)
	{
		result += Number(nums[index]);
	}
	HintBox.updateContent("Avg is "+result/nums.length+" !");
}