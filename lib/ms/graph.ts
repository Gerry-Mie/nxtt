import {ClientSecretCredential} from "@azure/identity";
import {Client} from "@microsoft/microsoft-graph-client";
import {TokenCredentialAuthenticationProvider, TokenCredentialAuthenticationProviderOptions}
    from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";
import {AD_CLIENT_ID, AD_CLIENT_SECRET, AD_TENANT_ID} from "@/constants/env";

const tokenCredential = new ClientSecretCredential(AD_TENANT_ID!, AD_CLIENT_ID!, AD_CLIENT_SECRET!);

const options: TokenCredentialAuthenticationProviderOptions = {scopes: ['https://graph.microsoft.com/.default']};

export const authProvider = new TokenCredentialAuthenticationProvider(tokenCredential, options);
export const graph = Client.initWithMiddleware({
    debugLogging: false,
    authProvider,
});
