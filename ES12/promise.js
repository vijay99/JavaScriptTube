const rejectMe = new Promise((_,reject)  => reject("Url path issue"));
const resolveMe = new Promise(resolve => resolve());

//previously race was designed like that if any one of promises rejected then we always 
//used to get reject.But in this case now we have any it means if any of the promise being successful handled 
//we can keep on working that and we dont get see that error.
Promise.any([rejectMe,resolveMe,rejectMe])
Promise.race([rejectMe,resolveMe,rejectMe])
.then( () => console.log("handle resolve"))
.catch( e => console.log("rejected"))