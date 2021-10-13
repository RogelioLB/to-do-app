import {Switch,Route,Redirect} from "react-router-dom";
import {lazy, Suspense, useContext} from "react"
import { UserContext } from "./context/UserContext";

const Home = lazy(()=>import("./pages/Home"))
const Index = lazy(()=>import("./pages/Index"))
const Register = lazy(()=>import("./pages/Register"))
const Login = lazy(()=>import("./pages/Login"))
const Add = lazy(()=>import("./pages/Add"))

function App() {
  const {user} = useContext(UserContext)
  return (
    <Suspense fallback={<></>}>
      <Switch>
      <Route exact path="/register">
          {user ? <Redirect to="/home"/> : <Register />}
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/home" /> : <Login />}
        </Route>
        <Route exact path="/add">
          {!user ? <Redirect to="/login" /> : <Add />}
        </Route>
        <Route exact path="/">
          {user ? <Redirect to="/home"/> : <Index />}
        </Route>
        <Route exact path="/home">
          {!user ? <Redirect to="/"/> : <Home />}
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
