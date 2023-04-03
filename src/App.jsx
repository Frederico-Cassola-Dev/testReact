import "./css/App.css";

import data from "./assets/data";
import UserCard from "./components/UserCard";

function App() {
  return (
    <>  
      {data.map((user) => <UserCard user={user} key={user.id} />)}
    </>
  );
}

export default App;
