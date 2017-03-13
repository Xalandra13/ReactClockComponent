var React = require('react');

var Clock = React.createClass({

    setTime: function() {
        var currentdate = new Date();
        var hours = currentdate.getUTCHours() + parseInt(this.props.UTCOffset - 1);

        // correct for number over 24, and negatives
        if( hours >= 24 ){ hours -= 24; }
        if( hours < 0   ){ hours += 12; }

        // add leading zero, first convert hours to string
        hours = hours + "";
        if( hours.length == 1 ){ hours = "0" + hours; }

        // minutes are the same on every time zone
        var minutes = currentdate.getUTCMinutes();

        // add leading zero, first convert minutes to string
        minutes = minutes + "";
        if( minutes.length == 1 ){ minutes = "0" + minutes; }

        var seconds = currentdate.getUTCSeconds();

        // add leading zero, first convert seconds to string
        seconds = seconds + "";
        if( seconds.length == 1 ) { seconds = "0" + seconds; }

        // console.log(hours, minutes, seconds);
        this.setState({
            hours: hours,
            minutes: minutes,
            seconds: seconds
        });
    },

    componentWillMount: function(){
        this.setTime();
    },

    componentDidMount: function(){
        window.setInterval(function () {
            this.setTime();
        }.bind(this), 1000);
    },

    render: function(){
        return (
            <div>
                <h1>React Clock Component</h1>
                <h2>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</h2>
            </div>
        );
    }
});

module.exports = Clock;