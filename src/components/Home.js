import Note from "./Note";
import { Redirect } from "react-router-dom"



export const Home = () => {
  const token= localStorage.getItem("token");
  if (token!=null) {
        console.log()
  } else {
    return <Redirect to='/first' />
  }
    
    return (
    <div>
      
     <Note/>
    </div>
  );
};

export default Home;
