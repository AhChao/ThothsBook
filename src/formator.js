function clearLeftSpace()
{
	var contentByLines = InputField.getContent().split("\n");
	for(var lineIndex in contentByLines)
	{
		contentByLines[lineIndex] = contentByLines[lineIndex].trim();
	}
	ResultField.updateContent(contentByLines.join("\n"));
}

function jsonfyTheData()
{
	ResultField.updateContent(JSON.stringify(JSON.parse(InputField.getContent()),undefined,4));
}

function jsonfyTheDataAndCompaer()
{
	var strA = JSON.stringify(JSON.parse(InputField.getContent()),undefined,4);
	var strB = JSON.stringify(JSON.parse(InputField.getContent()),undefined,4);
}

//can high light the text with this, maybe add a modal to show(can not display in inputbox, need in native html)
//refer to https://stackoverflow.com/questions/4810841/pretty-print-json-using-javascript
function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}