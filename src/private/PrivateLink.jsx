import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../context_provider/Contexts';
import { Navigate, useLocation } from 'react-router';

const PrivateLink = ({children}) => {
    const {user , isLoading} = useContext(AuthContext)
    const location = useLocation()
    if(isLoading){
        return <p></p>
    }
    if(user){
        return (children);
    }
    return  <Navigate to={'/login'} state={location.pathname}></Navigate>
};

PrivateLink.propTypes = {
    children: PropTypes.node
};

export default PrivateLink;