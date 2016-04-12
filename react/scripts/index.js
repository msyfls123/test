//计时器
  var Timer=React.createClass({
    getInitialState:function(){
      return {time:this.props.start,disabled:true};
    },
    startTick:null,
    tick:function(){
      if (this.state.time>1) {
        this.setState({time:this.state.time-1,disabled:true});
      }else{
        this.setState({time:0,disabled:false});
        clearInterval(this.startTick);
      }
    },
    componentDidMount:function(){
      this.startTick=setInterval(this.tick,1000);
    },
    triggerTick:function(){
      this.setState({time:this.props.start});
      clearInterval(this.startTick);
      this.startTick=setInterval(this.tick,1000);
    },
    render:function(){
      return (
        <div>
          <div className="timer" style={{width:this.state.time/this.props.start*100+'%'}}></div>
          <div>{this.state.time}秒</div>
          <button onClick={this.triggerTick}  disabled={this.state.disabled?"disabled":""}>{this.state.disabled?"Wait Up":"Go Now!"}</button>
        </div>
      );
    }
  });
  ReactDOM.render(
    <Timer start={60} />,
    document.getElementById("content")
  )
//角色栏
  var Char=React.createClass({
    getInitialState:function(){
      return {data:[
        {name:this.props.data+".kimi",zone:"chn",vote:2999,id:0},
        {name:this.props.data+".mom",zone:"usa",vote:1799,id:1},
        {name:this.props.data+".dad",zone:"jp",vote:899,id:2}
      ]}
    },
    addData:function(){
      var tempData=this.state.data;
      var tempId=tempData.length;
      tempData.push({name:this.props.data+".pass",zone:"kr",vote:0,id:tempId})
      this.setState({data:tempData})
    },
    addVote:function(idx,e){

      var tempData=this.state.data;
      tempData[idx].vote++;
      this.setState({data:tempData})
    },
    render:function(){
      var that=this;
      var charNodes=this.state.data.map(function(char){
        return (
          <li key={char.id} className="char">
            <span>Name:{char.name}</span>
            <span>Zone:{char.zone}</span>
            <span>Vote:{char.vote}</span>
            <span className="vote" onClick={that.addVote.bind(null,char.id)}>[ Vote for me ]</span>
          </li>
        )
      })
      return (
        <div>
          <h1>{this.props.data}</h1>
          <ul>
            {charNodes}
          </ul>
          <button onClick={this.addData}>+</button>
        </div>
      )
    }
  });

  //大tab框
  var dataSet=["Apple","Banana","Orange","Grape"];
  var Main = React.createClass({
    getInitialState: function() {
      return {item:0};
    },
    handleClick:function(idx,e){
      this.setState({item:idx})
    },
    render:function(){
      var that=this;
      var items = this.props.items.map(function(item, i) {
        var classTemp=(that.state.item==i)?"tab on":"tab"
        return (
          <li className={classTemp} onClick={this.handleClick.bind(this, i)} key={item}>
            {item}
          </li>
        );
      }.bind(this));
      var tabNodes = this.props.items.map(function(item, i) {
        var classTemp=(that.state.item==i)?"active me":"hidden me"
        return (
          <div className={classTemp} key={item+i}>
            <Char data={item} />
          </div>
        );
      }.bind(this));
      return (
        <div>
        <ul>
          {items}
        </ul>
          {tabNodes}
        </div>
      )
    }
  });
  ReactDOM.render(
    <Main items={dataSet}/>,
    document.getElementById("main")
  );

var Modal=React.createClass({
  getInitialState:function(){
    return {display:false}
  },
  handleClick:function(){
    this.setState({display:false})
  },
  comEnter:function(context){
    this.setState({display:true,context:context})
  },
  componentDidMount:function(){
    myObject.started.add(this.comEnter)
  },
  render:function(){
    var divStyle={
      display:this.state.display?"block":"none",
      zIndex:this.state.display?999:"auto"
    }
    return (
      <div id="j-modal" style={divStyle}>
        <div className="content">
        Content Here:{this.state.context}
        </div>
        <div className="close" onClick={this.handleClick}>Close
        </div>
      </div>
    )
  }
})
ReactDOM.render(
  <Modal/>,
  document.getElementById('modal')
)
