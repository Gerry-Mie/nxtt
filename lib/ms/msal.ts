import {Configuration, PublicClientApplication, LogLevel} from "@azure/msal-browser";
import {AD_CLIENT_ID, AD_REDIRECT_URL, AD_TENANT_ID} from "@/constants/env";

export const msalConfig: Configuration = {
    auth: {
        clientId: AD_CLIENT_ID!,
        authority: 'https://login.microsoftonline.com/' + AD_TENANT_ID,
        redirectUri: AD_REDIRECT_URL
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            }
        }
    }
}

export const msalInstance = new PublicClientApplication(msalConfig)