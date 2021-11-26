import {connect} from 'react-redux'
import Isolated from '../../ReactComponents/Isolated'

export default connect((state:any)=>{
   return {data:state.messageData.message}
},null)(Isolated)