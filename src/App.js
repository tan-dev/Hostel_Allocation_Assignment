import './App.css';
import ChooseHostel from './ChooseHostel';

// import { fbProvider, googleProvider } from "./config/authMethod";
// import { fbProvider } from "./config/authMethod";
// import socailMediaAuth from './service/auth';

// import firebase from 'firebase';
// import firebaseConfig from "./config/firebase-config";
// firebase.initializeApp(firebaseConfig);

function App() {
  // const handleOnClick = async (provider) => {
  //   const res = await socailMediaAuth(provider);
  //   // console.log("The response is:", res.Im.displayName);
  //   console.log("The response is:", res);
  // };
  return (
    <div className="App">

      <ChooseHostel />

      
      {/* <button onClick = {()=> handleOnClick(fbProvider)}>Facebook Login</button>
      <button onClick = {()=> handleOnClick(googleProvider)}>Google Login</button> */}
      
    </div>
  );
}

export default App;
