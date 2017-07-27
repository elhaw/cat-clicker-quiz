	//Model
	var model = {

			cats: [
					{
				        path: "img/cat_picture1.jpg",
				        name: 'lazy Cat',
				        click :0
				    },
				    {
				        path: "img/cat_picture2.jpeg",
				        name: 'shy Cat',
				       click :0

				    },
				    {
				        path: "img/cat_picture3.jpeg",
				        name: 'cute Cat',
				        click :0
				    },
				    {
				        path: "img/cat_picture4.jpeg",
				        name: 'wild Cat',
				       click :0

				    },
				    {
				        path: "img/cat_picture5.jpeg",
				        name: 'smily Cat',
				       click :0

				    }
		    ]
	 
	 };
/*********************************************/
	 var octopus = function (){

	    catListView.init();
	    catListView.render();
	    catView.init();
	    catView.render();
		hideAllCats();
	 }
/************************************************/

var catListView = {

    init: function() {
    	for (var i = 0; i < model.cats.length ; i ++)
	{	

		$('#catlist').append('<button id = "button'+i+'"> cat'+i+' </button>');

	}
        
    },

    render: function() {
        for (var i = 0; i < model.cats.length ; i ++)
	{	

		$( '#button'+i+'' ).click( (function(icopy) {
			return function() {
			hideAllCats();
			$('#cat-container'+icopy+'').show();
		    }
	        })(i));
	}
    }
};
var catView = {

    init: function() {
    	for (var i = 0; i < model.cats.length ; i ++)
		{	

			var containerId = "cat-container"+ i;
			var catName = model.cats[i].name;
			var imgPath = model.cats[i].path;
			var clickId = "click"+i;
			var imageId = "cat"+i;
			$('.left-container').append('<div id ="'+containerId+'">');
			$('#'+containerId+'').append('<p>'+catName+'</p>');	
			$('#'+containerId+'').append('<p id = "'+clickId+'">'+model.cats[i].click+' clicks</p>');
			$('#'+containerId+'').append('<img id ="'+imageId+'"src ="'+imgPath+'">');
		}
	},
    
 
    render: function() {
    	for (var i = 0; i < model.cats.length ; i ++)
		{	
			$( '#cat'+i+'' ).click( (function(icopy) {
			  return function() {
			    model.cats[icopy].click++;
			    $('#click'+icopy+'').text(model.cats[icopy].click +" clicks");
			  }
			})(i));

		}
        
    }
};

		function hideAllCats() {
		for (var i = 0 ; i < model.cats.length ; i++)
		{
			$('#cat-container'+i+'').hide();
		}
	}

	octopus();
	$('#cat-container0').show();


   