
var Pagination = {};

Pagination.Service = {		
	hiddenStyleClass : "hideObjects",
	visibleStyleClass : "visibleObjects",
	getItemsObj:function(ulid) {
		var ulObj = document.getElementById(ulid);
		var liObj = ulObj.getElementsByTagName("li");
		return liObj;
	},
	startPagination:function(ulid, countPerPage){
		var instance = this;
		var liObj = instance.getItemsObj(ulid);
		var liCount = liObj.length;
		var noOfPages = liCount/countPerPage;
		if(noOfPages > 1){
			for(i=0; i<countPerPage; i++){
				liObj[i].className = "";
			}
			for(i=countPerPage; i<liCount; i++){
				liObj[i].className = this.hiddenStyleClass;
			}
		}
	},
	buildPaginationDiv:function(paginationDivId, noOfPages, liCount){
		var paginationHTML = "<table id='pageTable' cellspacing='0px'><tr>";
		for(i=1; i<noOfPages; i++){
			
		}
		paginationHTML = paginationHTML + "</tr></table>";
	}
};