



	var cats = [{
	        path: "img/cat.jpg",
	        name: 'lazy Cat',
	        click :0
	    },
	    {
	        path: "img/cat1.jpg",
	        name: 'shy Cat',
	       click :0

	    }
	 ]


	for (var i = 0; i < cats.length ; i ++)
	{	
		var containerId = "cat-container"+ i;
		var catName = cats[i].name;
		var imgPath = cats[i].path;
		var clickId = "click"+i;
		var imageId = "cat"+i;
		$('#catlist').append('<button id = "button'+i+'"> cat'+i+' </button>')
		$('.left-container').append('<div id ="'+containerId+'">');
		$('#'+containerId+'').append('<p>'+catName+'</p>');	
		$('#'+containerId+'').append('<p id = "'+clickId+'">'+cats[i].click+'</p>');
		$('#'+containerId+'').append('<img id ="'+imageId+'"src ="'+imgPath+'">');


		$( '#cat'+i+'' ).click( (function(icopy) {
		  return function() {
		    cats[icopy].click++;
		    $('#click'+icopy+'').text(cats[icopy].click);
		  }
		})(i));
		

		$( '#button'+i+'' ).click( (function(icopy) {
			return function() {
			hideAllCats();
			$('#cat-container'+icopy+'').show();
		    }
	        })(i));
	}

	function hideAllCats() {
		for (var i = 0 ; i < cats.length ; i++)
		{
			$('#cat-container'+i+'').hide();
		}
	}
	//
	 hideAllCats();
     $('#cat-container0').show();

   