var React = require('react');


var NotFound = React.createClass({
	render: function () {
		var middleStyle={
			textAlign: "center" 
		}
		return (
			<div className="content">
				<h1>Not Found This Page！</h1>
				<img src="image/hjs93j062.png" alt="粗乃玩" />
			</div>
		);
	}
});

module.exports = NotFound;