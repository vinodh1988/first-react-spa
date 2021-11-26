import PubSub from 'pubsub-js'
/*  
   Reducer is a javascript function which returns a javascript object
   it carries usually two parameter one is state , second is action 

   very first time reducer is called state will not be passed so there must be default
   value from second time onward the old state returned by reducer will passed

   the second paramter action will have a value if and only if an action is 
   executed

   every action is followed by execution of the all the reducers 

   since action returns an object, the currently returned object by the
   currently execution action will be passed as second parameter to all the reducers
*/ 
const cities=['Chennai','Mumbai','Delhi','Hyderabad']
export const firstReducer =(state={message:" Hello Redux !!!",cities:cities},action)=>{
      
    switch(action.type){
        case "MESSAGE_ACTION":
                  PubSub.publish('message-generated',action.data);
                  return {message:action.data}
        default:
                  return state;
    }
}

export const secondReducer= (state={neverUsed:"Dummydata"},action)=>{
    switch(action.type){
        case "DUMMY_ACTON":
                  return {naveUser:action.data}
        default:
                  return state;
    }
}

