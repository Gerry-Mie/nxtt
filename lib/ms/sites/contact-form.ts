import {graph} from "@/lib/ms/graph";
import {LIST_CONTACT_FORM_PATH} from "@/constants/microsoft";
import {ContactFormFields} from "@/types/contact-form-interface";


export const contactForm_send = async (fields: ContactFormFields)=> {
   return graph.api(LIST_CONTACT_FORM_PATH+'/items').post({fields})
}