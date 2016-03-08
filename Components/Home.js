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
		var temp = [{"title":"蒼の彼方のFour Rhythm　９\r","rand_id":" [16/03/08(火)02:21 ID:uUPQ4RZo] ","id":"No.789672","quote":"本文なし","img":"http://img.2cat.org/~tedc21thc/live/thumb/1457374916784s.jpg"},{"title":"シュヴァルツェスマーケン #09\r","rand_id":" [16/03/07(月)01:02 ID:A7FSIDQs] ","id":"No.788848","quote":"本文なし","img":"http://img.2cat.org/~tedc21thc/live/thumb/1457283751163s.jpg"},{"title":"最弱無敗の神装機竜 09「約束」\r","rand_id":" [16/03/07(月)22:55 ID:s46tXpUI] ","id":"No.789454","quote":"脚本：中西やすひろ　絵コンテ：大原実　演出：野亦則行　作画監督：森山雄治/石田啓一/飯飼一幸/市川美帆","img":"http://img.2cat.org/~tedc21thc/live/thumb/1457362547807s.jpg"},{"title":"うたわれるもの 偽りの仮面 22話 「救出」\r","rand_id":" [16/03/06(日)00:32 ID:C6xw2RFk] ","id":"No.787477","quote":"先開串等會再補圖...","img":"http://img.2cat.org/~tedc21thc/live/thumb/1457195535720s.jpg"},{"title":"GATE(ゲート) 自衛隊 彼の地にて、斯く戦えり 第21話 デッドライン\r","rand_id":" [16/03/05(土)01:21 ID:b2yLfXPM] ","id":"No.786649","quote":"本文なし","img":"http://img.2cat.org/~tedc21thc/live/thumb/1457112067900s.jpg"},{"title":"GOD EATER  EPISODE 10 散華\r","rand_id":" [16/03/05(土)19:55 ID:LZ3sBf6g] ","id":"No.787063","quote":"本文なし","img":"http://img.2cat.org/~tedc21thc/live/thumb/1457178956326s.jpg"},{"title":"【おそ松さん】第22話「希望の星、トド松」「ファイナルシェー」\r","rand_id":" [16/03/08(火)02:44 ID:Vu.0iCSQ] ","id":"No.789710","quote":"遲來的官方名稱(誤","img":"http://img.2cat.org/~tedc21thc/live/thumb/1457376264770s.jpg"},{"title":"灰と幻想のGRIMGAR　８\r","rand_id":" [16/02/28(日)23:32 ID:if7/HX9Q] ","id":"No.782094","quote":"本文なし","img":"http://img.2cat.org/~tedc21thc/live/thumb/1456673533491s.jpg"},{"title":"ヘヴィーオブジェクト #21\r","rand_id":" [16/03/05(土)01:05 ID:k2vdC9Jo] ","id":"No.786615","quote":"第21話 名誉に値段はつけられないビクトリア島緊急追撃戦Ⅱ脚本：高山カツヒコ　絵コンテ：岡村正弘/鈴木洋平/櫻井親良　","img":"http://img.2cat.org/~tedc21thc/live/thumb/1457111106052s.jpg"},{"title":"無彩限のファントム・ワールド 09 幕末ファントム異聞\r","rand_id":" [16/03/02(水)22:00 ID:DpyydB/o] ","id":"No.784471","quote":"脚本：志茂文彦絵コンテ：石原立也演出：三好一郎作画監督：角田有希","img":"http://img.2cat.org/~tedc21thc/live/thumb/1456927225870s.jpg"}]
		this.setState({data: temp})
		$.getJSON("data/result.json", function(result){
			this.setState({data: result});
		}.bind(this));
	},
	render: function () {
		var Cards = this.state.data.map(function(data){
			return(
				<Card key={data.id} className="content">
					<CardHeader
					title={data.id}
					subtitle={data.rand_id}
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
			<div >
				{Cards}
			</div>
		);
	}
});

module.exports = Home;