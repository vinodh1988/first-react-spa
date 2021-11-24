import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import MessageBox from '../../ReduxLayerComponents/MessageBox'
import { messageAction } from '../Actions/MessageAction'


const mapStateToProps=(state:any)=>{
    return {message: state.messageData.message}
}

const mapActionToProps=(dispatch:any)=>{
    return bindActionCreators({changeMessage:messageAction},dispatch)
}

const MessageBoxHOC=connect(mapStateToProps,mapActionToProps)(MessageBox)

export default MessageBoxHOC