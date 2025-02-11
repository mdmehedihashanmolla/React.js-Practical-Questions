import React from "react";


interface ConditionalRendersProps {
  isLoggedIn: boolean;
}

// Define two components for conditional rendering

const LoggedInComponent : React.FC = () => <h1>Welcome back, User!</h1>;
const LoggedOutComponent: React.FC = () => <h1>Please Login</h1>;

const ConditionalRender: React.FC<ConditionalRendersProps> = ({isLoggedIn}) =>{
  return isLoggedIn? <LoggedInComponent/> : <LoggedOutComponent/>
};


const App: React.FC = () =>{
  return(
    <div>
      <ConditionalRender isLoggedIn={true}/>
    </div>
  )
}

export default App
