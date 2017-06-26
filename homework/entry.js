var Left = require('./left.js');
var Kuai = require('./kuai.js');



var React = require('react');
var ReactDOM = require('react-dom');





var Zong = React.createClass({
	
	render:function(){
		return(
			<div className = "box">
				<div className="container-fluid">
					<div className="row">
						<Left/>
						<Kuai/>
					</div>
				</div>
			</div>
		)
	}
		
})





ReactDOM.render(<Zong/>,document.getElementById('out'));



