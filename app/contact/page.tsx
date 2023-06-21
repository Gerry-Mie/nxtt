'use client'
import React from 'react';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import {contactForm, ContactForm} from "@/lib/validations/contact-form";
import {useMutation} from "@tanstack/react-query";


const ContactForm = () => {
    const f = useForm<ContactForm>({resolver: zodResolver(contactForm)})
    const mutation = useMutation((data: any) => fetch('/api/contact-form', {
        method: 'POST',
        body: JSON.stringify(data)
    }))

    function submit(data: ContactForm) {
        mutation.mutateAsync(data)
    }

    if (mutation.isSuccess) {
        return <div>Thank for contacting us. We will get back to you soon.</div>
    }

    return (
        <div className='h-screen'>
            <form onSubmit={f.handleSubmit(submit)}>
                <div className='flex flex-col gap-3'>
                    <label>
                        <p>Email</p>
                        <input {...f.register('email')}/>
                    </label>
                    <label>
                        <p>Name</p>
                        <input {...f.register('name')}/>
                    </label>
                    <label>
                        <p>Subject</p>
                        <input {...f.register('Title')}/>
                    </label>

                    <label>
                        <p>Body</p>
                        <textarea {...f.register('content')}/>
                    </label>
                    <button disabled={mutation.isLoading} name=''
                            type='submit'>{mutation.isLoading ? 'Sending...' : 'Send'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
