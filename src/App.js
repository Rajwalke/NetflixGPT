/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Browser from "./components/Browser";
import { addUser,removeUser } from "./utils/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './App.css';
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { useEffect } from "react";
import app from "./utils/firebase";
const App=()=> {

//  const nevigate=useNavigate();


  const appRouter=createBrowserRouter([
      {
        path:"/",
        element:<Body/>

      },
      {
        path:"/browser",
        element:<Browser/>
      }
  ],
  {
    future: {
      //  v7_startTransition: true,
      v7_startTransition: true,
// Enable React.startTransition fr state updates
      v7_fetcherPersist: true, // Enable opersistence behavior for fetchers
      v7_normalizeFormMethod: true, // Normalize formMethod fields to uppercase
      v7_partialHydration: true, // Enable new RouterProvider hydration behavior
      v7_skipActionErrorRevalidation: true, // Update revalidation behavior for 4xx/5xx responses
      v7_relativeSplatPath: true, // Enable relative splat path changes
    },
  }
)

useEffect(()=>{
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName,photoURL} = user;
      appStore.dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      // nevigate("/browser");

      // ...
    } else {
      appStore.dispatch(removeUser());
      // nevigate("/browser");
      // User is signed out
      // ...
    }
  });

},[])

  return (
    <Provider store={appStore}>
    <div className="">
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}
 
export default App;
