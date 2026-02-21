// import { testFirebase } from "./testFirebase";

// import { saveUserProfile } from "./services/userService";

import { signup, getCurrentUser } from "./services/authService";
import { saveUserProfile } from "./services/userService";

function App() {

  const handleCreateTestUser = async () => {
    try {
      // create test account
      await signup("testuser@gmail.com", "123456");

      const user = getCurrentUser();

      // save profile linked to auth user
      await saveUserProfile(user.uid, {
        name: "Raaj",
        skillsHave: ["React", "Firebase"],
        skillsWant: ["UI Design"],
        role: "Developer",
        workStyle: "Fast-paced",
        sleep: "All-nighter"
      });

      console.log("User + profile saved");

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>SwipeIt Test</h1>
      <button onClick={handleCreateTestUser}>
        Create Test User
      </button>
    </div>
  );
}

export default App;




// function App() {

//   const handleTestSave = () => {
//     saveUserProfile("testUser123", {
//       name: "Raaj",
//       skillsHave: ["React", "Firebase"],
//       skillsWant: ["UI Design"],
//       role: "Developer",
//       workStyle: "Fast-paced",
//       sleep: "All-nighter"
//     });
//   };

//   return (
//     <div>
//       <h1>SkillSwap Test</h1>

//       <button onClick={handleTestSave}>
//         Save Test User
//       </button>

//     </div>
//   );
// }

// export default App;








// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
