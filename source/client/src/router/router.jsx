import { createBrowserRouter, useRouteError, isRouteErrorResponse } from 'react-router-dom'
import CartSummary from "../components/Checkout";
import GroceriesList from "../components/GroceriesList";
import App from '../App';
import GroceriesView from '../components/GroceriesView';



const router = createBrowserRouter([
 
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <GroceriesView/>,
        // errorElement:<ErrorBoundary/>
      },
      {
        path: "/GroceriesList",
        index: true,
        element: <GroceriesList/>,
          // errorElement:<ErrorBoundary/>
      },
      {
        path: "/CartSummary",
        index: true,
        element: <CartSummary/>,
          // errorElement:<ErrorBoundary/>
      },
      {
        path:"*",
        element:<NoMatch/>,
        errorElement:<ErrorBoundary/>
      }
    ]
  }
],{
  basename:'/'
});




function ErrorBoundary(){
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 401) {
    // the response json is automatically parsed to
    // `error.data`, you also have access to the status
    return (
      <div>
        <h1>{error.status}</h1>
        <h2>{error.data.sorry}</h2>
        <p>
          Go ahead and email {error.data.hrEmail} if you
          feel like this is a mistake.
        </p>
      </div>
    );
  }
  throw error;
}


function NoMatch(){
  return (<div>
    <h2>404 - not found</h2>
  </div>)
}

export default router;