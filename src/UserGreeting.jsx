
function UserGreetings(props) {
 
    if(props.isLoggedIn) {
         return <h1>Welcome back, {props.username}!</h1>; 
        } 
        else {
               return  <h1>Welcome, Guest!</h1>
            }
    
}   

export default UserGreetings; 