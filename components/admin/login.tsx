'use client'
import {useMsal} from "@azure/msal-react";
import {LOGIN_REQUEST} from "@/constants/microsoft";
import {InteractionStatus} from "@azure/msal-browser";

const Login = () => {

    const {instance, inProgress} = useMsal();

    const login = async () => {
        if (inProgress === InteractionStatus.None)
            await instance.loginRedirect(LOGIN_REQUEST)
    }

    return (
        <>
            <button onClick={login}>Login</button>
        </>
    );
};

export default Login;
