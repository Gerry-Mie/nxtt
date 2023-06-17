import {SharepointRow} from "@/types/sharepoint-row";

export interface ContactFormFields {
    Title: string
    email: string
    name: string
    content: string
    response?: string
    respondent?: string
}

export type ContactFormInterface = SharepointRow<ContactFormFields>