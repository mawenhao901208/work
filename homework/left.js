


var React = require('React')

		
var Left = React.createClass({
	render:function(){
		var sty = {'display':'flex'};
		var sty1 = {'flex':'1'};  
		return(				
			<div className="col-md-2 nav0">
				<div className="nav1">
					<ul className="nav nav-pills" style={sty}>
					   <li role="presentation" style={sty1}><a href="#">HH</a></li>
					   <li role="presentation"  style={sty1}><a href="#">PP</a></li>
					   <li role="presentation" style={sty1}><a href="#">MM</a></li>
					   <li role="presentation" style={sty1}><a href="#">MM</a></li>
					</ul>
				</div>
				
				<div className="nav2">
					<ul className="list-group">
					  <li className="list-group-item">
					    <span className="badge">^</span>
					    Cras justo odio
					  </li>
					  <li className="list-group-item">
					    <span className="badge">^</span>
					    Cras justo odio
					  </li>
					  <li className="list-group-item">
					    <span className="badge">^</span>
					    Cras justo odio
					  </li>
					  <li className="list-group-item">
					    <span className="badge">^</span>
					    Cras justo odio
					  </li>
					  <li className="list-group-item">
					    <span className="badge">^</span>
					    Cras justo odio
					  </li>
					  <li className="list-group-item">
					    <span className="badge">^</span>
					    Cras justo odio
					  </li>
					  <li className="list-group-item">
					    <span className="badge">^</span>
					    Cras justo odio
					  </li>
					  <li className="list-group-item">
					    <span className="badge">^</span>
					    Cras justo odio
					  </li>
					  <li className="list-group-item">
					    <span className="badge">^</span>
					    Cras justo odio
					  </li>
					</ul>				
				</div>  		
			</div>
		);
	}
})






module.exports = Left;