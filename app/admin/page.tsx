'use client'
import React from 'react';
import {
    AuthenticatedTemplate,
    UnauthenticatedTemplate
} from '@azure/msal-react';
import Login from "@/components/admin/login";

const Page = () => {
    return (
        <>
            <AuthenticatedTemplate>
                <p>This will only render if a user is signed-in.</p>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <p>This will only render if a user is not signed-in.</p>
                <Login/>
            </UnauthenticatedTemplate>
        </>
    );
};

export default Page;
