import {RedirectRequest} from "@azure/msal-browser";
// sharepoint list
export const SITE_NXTTCORP_ID = 'e0c97bdc-1910-4198-ae2e-50d78f286e62'
export const SITE_NXTTCORP_PATH = 'sites/' + SITE_NXTTCORP_ID
export const LIST_CONTACT_FORM_ID = '01c2fb6a-2110-4da8-8e99-008819fe3e46'

export const LIST_CONTACT_FORM_PATH = SITE_NXTTCORP_PATH + '/lists/' + LIST_CONTACT_FORM_ID
export const LOGIN_REQUEST: RedirectRequest = {
    scopes: [
        // user
        'openid',
        'profile',
        "User.Read",
        //sites
        'sites.Read',
        'sites.ReadWrite',
        'Group.Read.All',
        'Group.ReadWrite.All'
    ]
};
