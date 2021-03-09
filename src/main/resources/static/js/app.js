var mock = apimock;
var app = (function(){
	
	var mapeo = function(lista){
		return mapped = lista.map(function(blueprint){
			return {name:blueprint.name, pts:blueprint.points.length};
			
		})
	}
	var table = function(bps){
		if(bps === undefined){
			alert("Author does not exist");
		}else{
			bps = mapeo(bps);
			var r = bps.reduce(function(a, b){
				
                return a.pts + b.pts;
            })
		
		$("#totalPoints").text("Total points: " + r);
		mapped.map(function(bp){
			var markup = "<tr><th>"+bp.name+"</td><th>"+bp.pts;
			$("table > tbody").append(markup);
		});
		}
		
	}
	var queue = function(author){
		mock.getBlueprintsByAuthor(author, table);
	}
	return{
		queue : queue
		
	};
	
})();