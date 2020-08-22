var HintBox = 
{
	instance : null,
	init :  function()
	{
		this.instance = d3.select("#hintBox");
	},
	clear : function()
	{
		this.instance.text("Some Hint may show here.");
	},
	updateContent : function(content)
	{
		this.instance.text(content);
	},
	getInstance : function()
	{
		return this.instance;
	}
}

var InputField = 
{
	getContent : function()	
	{
		return d3.select("#inputTextArea").property("value")
	}
}

var ResultField = 
{
	updateContent : function(content)	
	{
		d3.select("#resultTextArea").property("value",content);
	}
}

var Modal = 
{
	instance : null,
	init : function()
	{
		this.instance = document.getElementById("myModal");
		window.onclick = function(event) {
		  if (event.target == Modal.instance) {
		    Modal.close();
		  }
		}
		document.getElementsByClassName("tclose")[0].onclick = function() {
		  Modal.close();
		}		
	},
	show : function()
	{
		this.instance.style.display = "block";
	},
	close : function()
	{
		this.instance.style.display = "none";
	}
}