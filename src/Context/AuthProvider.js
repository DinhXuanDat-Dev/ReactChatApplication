import { Spin } from 'antd';
import React, {useState}  from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/config';

export const AuthContext = React.createContext();

export default function AuthProvider({children}) {

    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();
    React.useEffect(() => {
        const unsubcribed = auth.onAuthStateChanged((user) =>{
            console.log({user});
            if(user){
                const {displayName, email, uid, photoURL} = user;
                setUser(
                    {displayName, email, uid, photoURL}
                );
                setLoading(false);
                navigate('/');
                console.log("success");
                return;
            }
            setLoading(false);
            navigate('/login');
        })
        //clean function
        return () => {
            unsubcribed();
        }
    }, [navigate]);

    return(
        <AuthContext.Provider value={user}>
            {isLoading ? <Spin/> : children}
        </AuthContext.Provider>
    )
}
