'use client'
import React from 'react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'

const queryClient = new QueryClient()

const Provider = (props: any) => {
    return (
        <QueryClientProvider client={queryClient}>
            {props.children}
        </QueryClientProvider>
    );
};

export default Provider;
