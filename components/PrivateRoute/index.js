import { useSession, signIn } from "next-auth/react";


const withPrivateRoute = Component => {
    const Auth = (props) => {
      // Login data added to props via redux-store (or use react context for example)
      const {data: session} = useSession()
      
      // If user is not logged in, return login component
       if(session === undefined) return null;
       if (!session) {
        return (
          signIn()
        );
      }
      // If user is logged in, return original component
      else {
        return (
          <Component {...props} />
        );
      } 
    };
  
    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
      Auth.getInitialProps = Component.getInitialProps;
    }
  
    return Auth;
  };
  
  export default withPrivateRoute;