var removeDuplicates = function (arr) {
	return arr.filter(function(item, index){
		return arr.indexOf(item) >= index;
	});
};

export default removeDuplicates;
