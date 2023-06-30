"use client";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "./theme-provider";

const queryClient = new QueryClient();

const Provider = (props: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {props.children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Provider;
