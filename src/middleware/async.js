
// this is a  custom middle ware not using redux promise

export default function({dispatch}){
  return next => action =>{

// if we don not want to change anyting
// next will pass to the next middleware else it will go to reducer
  if(!action.payload || !action.payload.then){
    // checking for promise and payload
    console.log('action', action);
    return next(action);
  }
console.log('called');
// Make sure the action resolves
action.payload.then(response => {
const newAction = {...action,payload:response};
console.log('newAction',newAction);
dispatch(newAction);
})

  };
}
