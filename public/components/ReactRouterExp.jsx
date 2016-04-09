/**
 * Created by xiedonghao on 16/2/19.
 */
import React                    from 'react'
import ReactDom                 from 'react-dom'

class About extends React.Component{
    render () {
        return (
            <span>关于我</span>
        )
    }
}

class Inbox extends React.Component{
    render () {
        return (
            <div>
                <span>Inbox</span>
                {this.props.children}
            </div>
        )
    }
}

const Message = React.createClass({
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
})

class SimpleRouter extends React.Component {
    render () {
        var style = {
            marginLeft : "20px"
        }
        return (
            <div>
                <h1>APP</h1>
                <ul>
                    <li>
                        <Link to="/SimpleRouter/about">About</Link>
                    </li>
                    <li>
                        <Link to="/SimpleRouter/inbox">inbox</Link>
                        <ul style={style}>
                            <li>
                                <Link to="/SimpleRouter/inbox/messages/2">messages</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export {About,Inbox,Message,SimpleRouter}

//http://localhost:3000/#/inbox/messages/fadfdsfadfasdfasf312?_k=joobpy