





var React=require('react');


var Kuai=React.createClass({
	render:function(){
		var str={
			str1:{'background':'#FFFFFF','height': '482px'},
			str2:{	'height': '58px','borderBottom':'1px dashed #e5e5e5','margin':' 0 20px'},
			str3:{'height': '423px','borderBottom': '1px dashed #e5e5e5','margin':' 0 20px'},
			str4:{'height': '72px','border': '1px solid #d6e9c6','marginTop': '12px','background': '#dff0d8'},
			str5:{'margin':'30px 32px 0 0'}
		}
		return(
			
			<div style={str.str1} className = "col-md-10">
				<p style={str.str2}>Dashboard  overview & stats</p>
				<div style={str.str3}>
					<p style={str.str4}> Welcome to Ace (v1.4) , лёгкий, многофункциональный и простой в использовании шаблон для админки на bootstrap 3.3.6. Загрузить исходники с github (with minified ace js/css files).</p>
					<img style={str.str5} src="./dist/tu1.jpg"/>
				</div>
			</div>
			
			
		)
	}
})



module.exports=Kuai;
