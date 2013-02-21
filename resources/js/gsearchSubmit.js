var gApiKey = 'AIzaSyA6EsTVoHkSqLy90nhmWiPC3cQW-tD951s';
var cx = '010919441867849597489:xkps8-xnl_g';
var urlReq = "https://www.googleapis.com/customsearch/v1?key="+gApiKey+"&cx="+cx;
var startIndex = 1;
var query = "";
var num = "20"; //see https://developers.google.com/custom-search/docs/xml_results?hl=en#wsRequestLimits you can have 20 per page.

$('form.searchPageForm').submit(function(){
	$('.searchFormSubmitA').click();
	return false;
	
});

$('.searchFormSubmitA').click(function(event){
	event.preventDefault();
	query = $('input[name=gsearch]').val();
	urlReq = "https://www.googleapis.com/customsearch/v1?key="+gApiKey+"&cx="+cx+"&q="+query+"&start=1&filter=0";
	$('.gpaging ul li a').html("");
	$('.gpaging .pagingClick.curr').removeClass("curr");
	$('.gpaging ul li:nth-child(1) a').addClass("curr");
	gsearch(urlReq);
});

$('.gpaging .pagingClick').click(function(event){
	event.preventDefault();
	$('.gpaging .pagingClick.curr').removeClass("curr");
	$(this).addClass("curr");
	var startIndex = ((parseInt($(this).text())-1)*10)+1;
	urlReq = "https://www.googleapis.com/customsearch/v1?key="+gApiKey+"&cx="+cx+"&q="+query+"&start="+startIndex+"&filter=0";
	gsearch(urlReq);
});

function gsearch(urlReq){
	$.ajax({ 
	      type: 'GET', 
	      url: urlReq, 
	      data: { get_param: 'value' },
		  dataType:'json',
		  success: function (data) { 
		  	$('#googleSearchResults').html("");
			
			var response = data;
			console.log(response);

			//show search result statistics (total results & search time);
			var searchTime = response.searchInformation.formattedSearchTime;
			var totalResults = response.searchInformation.formattedTotalResults;
			var resultsUnformatted = response.searchInformation.totalResults;
			
			$('.resultCount').html("About "+totalResults+" results ("+searchTime+" seconds)");
			if(resultsUnformatted <= 10){
				displayResults(response);
				createPaging(response);
			}
			else if(resultsUnformatted > 10){
				displayResults(response);
				createPaging(response);
				/*after pagination is generated, center it on the page*/
				var pagingWidth = $('.gpaging ul').width();
				var gmarginLeft = ($('.container').width()/2) - (pagingWidth/2);
				$('.gpaging ul').css('marginLeft', gmarginLeft+'px');
			}
			else{
				$('#googleSearchResults').append("NO RESULTS FOUND");
			}
			
		  } 
	                
	 });
}

function displayResults(response){
	for (var i = 0; i < response.items.length; i++) {
	     //grab each response item
		var breadTitle = "";
		var breadLink = "";
		 var item = response.items[i];
		if(item.pagemap != undefined){
			if(item.pagemap.breadcrumb != undefined){
				var breadcrumb = item.pagemap.breadcrumb;
			}
		    else{
				var breadcrumb = undefined;
			}
		}
		else{
			var breadcrumb = undefined;
		}
		var displayUrl = "";
		 if(breadcrumb == undefined){
			displayUrl = '<a href="'+item['link']+'">'+item['htmlFormattedUrl']+'</a>';
		  }
		 else{
			for(var j = 0; j < breadcrumb.length; j++){
				breadTitle = breadcrumb[j]['title'];
				breadLink = item['link'];
				if(j == breadcrumb.length-1){
					displayUrl = displayUrl+'<a href="'+breadLink+'">'+breadTitle+'</a>'
				}
				else{
					displayUrl = displayUrl+'<a href="'+breadLink+'">'+breadTitle+'</a> <span>></span>'
				}
			}
			displayUrl = '<span>'+item['displayLink']+' ></span>'+ displayUrl;
		 }
	 	$('#googleSearchResults').append("<div class='searchResult'><a href='"+item['link']+"'><h3>"+item['htmlTitle']+"</h3><p class='resultDesc'>"+item['snippet']+"</p></a><p class='resultUrl'>"+displayUrl+"</p></a></div>");
	  	
	
		/* started including script to add thumbnail to results that have them..need to test first to see if they have the pagemap object and THEN print it
		if(item.pagemap.cse_thumbnail.length > 0){
			$('.searchResult').append('<img src="'+item.pagemap.cse_thumbnail[0]['src']+'">');
		}*/
	}
}

function createPaging(response){
	/*check how many pages will need to be generated*/
	var totalResults =  response.searchInformation.totalResults;
	var numPages = 0;
	if(totalResults > 10){
		if(totalResults > 100){
			numPages = 11;
		}
		else{
			numPages = Math.ceil(totalResults/10);
		}	
	}
	else{
		numPages = 1;
	}
	/*find out what the current page is using startIndex*/
	
	//var currPage = startIndex%10;
	
	console.log(urlReq);
		for(var i=1; i < numPages; i++){
			$('.gpaging ul li:nth-child('+i+') a').html(i);
		}
	
}

