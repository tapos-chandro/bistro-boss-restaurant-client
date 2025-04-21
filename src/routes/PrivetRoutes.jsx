import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";


const PrivetRoutes = ({children}) => {
    const {user, loading}  = useAuth();
    const location = useLocation();

    if(user?.email){
        return children;
    }

    if(loading){
        return <Loading></Loading>
    }

    return <Navigate to="/login" state={{from: location}} replace ></Navigate>

};

export default PrivetRoutes;