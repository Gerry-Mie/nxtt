'use client'
import React from 'react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import {MsalProvider} from "@azure/msal-react";
import {msalInstance} from "@/lib/ms/msal";

const queryClient = new QueryClient()

const Provider = (props: any) => {
    return (
        <QueryClientProvider client={queryClient}>
            <MsalProvider instance={msalInstance}>
                {props.children}
            </MsalProvider>
        </QueryClientProvider>
    );
};

export default Provider;
