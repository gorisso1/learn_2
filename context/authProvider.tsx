
import {createContext, useContext, useEffect, useState} from "react";
import {AuthContextProps} from "interface/layout.props";


const AuthContext = createContext<AuthContextProps>({
    isAuthenticated: false,
});



export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);



    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}


