import './App.css'
import LoginCard from './assets/Components/Login'
import { useEffect, useState } from 'react';
import ProfilePage from './assets/Components/Profile';


function App() {

  const [loged, setLoged] = useState(false);

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.origin === "http://localhost:3000") {
        if (event.data.displayName) {
          // Authentication is completed
          setLoged(true);
        }
      }
    });

    return () => {
      window.removeEventListener("message", (event) => {
        // Remueve el event listener cuando el componente se desmonta
      });
    }
  }, []);


  return (
    <>
      {loged === true ? <ProfilePage />: <LoginCard />}
    </>
  )
}

export default App
