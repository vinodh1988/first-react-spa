import {msgbox} from './types'
 const MessageBox=({message,changeMessage}:msgbox)=>{
    return(
        <div className="card">
        <div className="card-body">
          <h4 className="card-title">Message Box</h4>
          <p className="card-text">
                {message}
          </p>
          <button className="btn btn-success" onClick={changeMessage}>
              Get New Message</button>
        </div>
      </div>
    );
}

export default MessageBox;