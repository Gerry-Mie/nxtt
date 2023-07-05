'use client'
import React from 'react';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import {contactForm, ContactForm} from "@/lib/validations/contact-form";
import {useMutation} from "@tanstack/react-query";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";


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
        <div className='h-screen p-10 relative mt-32'>
            <div className='absolute top-0 right-12 blur-2xl z-[-1] bg-blue-400 w-64 h-64 opacity-20 rounded-full'/>
            <div>
                <h1 className='text-4xl'>Get in touch</h1>
                <div className={'flex justify-between mt-10 gap-12 flex-col lg:flex-row'}>

                    <form onSubmit={f.handleSubmit(submit)} className='lg:w-1/2'>
                        <div className='flex flex-col gap-3'>
                            <label>
                                <p className='ml-4 mb-1'>Email</p>
                                <Input {...f.register('email')}/>
                            </label>
                            <label>
                                <p className='ml-4 mb-1 mt-2'>Name</p>
                                <Input {...f.register('name')}/>
                            </label>
                            <label>
                                <p className='ml-4 mb-1 mt-2'>Subject</p>
                                <Input {...f.register('Title')}/>
                            </label>

                            <label>
                                <p className='ml-4 mb-1 mt-2'>Message</p>
                                <Textarea {...f.register('content')}/>
                            </label>
                            <Button className='mt-10' disabled={mutation.isLoading} name=''
                                    type='submit'>{mutation.isLoading ? 'Sending...' : 'Send'}
                            </Button>
                        </div>
                    </form>
                    <div className='max-w-md mt-20 lg:mt-0'>
                        <h3 className='text-2xl'>Want to reach us directly?</h3>
                        <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
                            pharetra elementum sit id sagittis non donec egestas.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactForm;
