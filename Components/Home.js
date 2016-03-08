var React = require('react');
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

var $ = require("jquery");

var Home = React.createClass({
	getInitialState: function(){
		return {data: []};
	},
	componentDidMount: function(){
		$.getJSON("../data/result.json", function(data){
			this.setState({data: data});
		})		
	},
	render: function () {
		var Cards = this.state.data.map(function(data){
			return(
				<Card>
					<CardHeader
					title={data.id}
					subtitle={data.rend_id}
					avatar={data.img} />
					<CardMedia
					overlay={<CardTitle title={data.title} subtitle="Overlay subtitle" />} >
						<img src={data.img} alt={data.img}/>
					</CardMedia>
					<CardTitle title={data.title} subtitle="Card subtitle" />
					<CardText>
						{data.quote}
					</CardText>
					<CardActions>
						<FlatButton label="Action1" />
						<FlatButton label="Action2" />
					</CardActions>
				</Card>
			);
		});
		return (
			<div className="content">
				{Cards}
			</div>
		);
	}
});

module.exports = Home;