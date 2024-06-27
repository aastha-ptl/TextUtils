import Navbar from './components/Navbar.js'
import Textform from './components/Textform.js';
// import About from './components/About.js'
import { useState } from 'react';
import Alert from './components/Alert.js';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)
 const togglemode=()=>{
  if(mode=='light'){
    setMode('dark')
    document.body.style.backgroundColor='grey'
    showAlert("Dark mode has been enabled","success")
    
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been enabled","success")
  }
 }
 const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
    return (
    <>
  {/* <Router> */}
<Navbar mode={mode} togglemode={togglemode}/>
<Alert alert={alert} />
<div className='container'>
{/* <Routes> */}
{/* <Route path="/about" element={<About/>}/> */}
{/* <Route path="/" element={<Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}/>
 */}
<Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
{/* </Routes> */}
</div>
{/* </Router> */}

    </>
  );

}

export default App;
