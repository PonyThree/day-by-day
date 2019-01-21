var stringvalue='Lorem ipsum dolor sit dolor sit amet,consecteur adipsicing elit';
var position=new Array();

function getCharIndexs(str,character){
	var pos=stringvalue.indexOf(character);
	while(pos>=0){
		position.push(pos);
		pos=stringvalue.indexOf(character,pos+1);
	}
	return position;
}

var res=getCharIndexs(stringvalue,'e');
for(var key in res){
	console.log(stringvalue.charAt(res[key]));
}
console.log(res);