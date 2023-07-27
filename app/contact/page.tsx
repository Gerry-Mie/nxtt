"use client";
import React from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {contactForm, ContactForm} from "@/lib/validations/contact-form";
import {useMutation} from "@tanstack/react-query";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import Modal from "@/components/home/Modal";

const ContactForm = () => {

    const f = useForm<ContactForm>({resolver: zodResolver(contactForm)});
    const mutation = useMutation((data: any) =>
        fetch("/api/contact-form", {
            method: "POST",
            body: JSON.stringify(data),
        })
    );

    function submit(data: ContactForm) {
        if (!mutation.isSuccess)
            mutation.mutate(data);
    }

    function onModalClose() {
        mutation.reset()
        f.reset()
    }

    return (
        <div className="p-10 relative mt-32">
            <Modal
                type="message"
                iconType="animation"
                success={mutation.isSuccess}
                show={mutation.isSuccess}
                onHide={onModalClose}
                // title={success ? "Sent" : "Failed"}
                title="Sent"
                message={
                    // success
                    //   ?
                    `Thank you for contacting us! We appreciate your message and will respond promptly. Expect to hear from us soon.
                  Warm Regards, Next Team`
                    // : `We regret to inform you that we encountered an issue while attempting to send your message through our website's contact form. We apologize for the inconvenience caused. Please double-check your internet connection and try submitting your message again. If the problem persists, kindly contact us directly via email or phone to ensure your message reaches us. We appreciate your patience and understanding`
                }
            />
            {/* <div className="absolute top-0 right-12 blur-2xl z-[-1] bg-blue-400 w-64 h-64 opacity-20 rounded-full" /> */}
            <div className="z-[-1] fixed w-full h-full pointer-events-none top-0 left-0 bg-[#ffffffad] backdrop-blur-3xl"/>
            <div className="z-[-2] circle1 fixed top-5 right-[-100px] w-[397px] h-[397px] rounded-full bg-[#25D12C]"/>
            <div>
                <h1 className="text-4xl">Get in touch</h1>
                <div className={"flex justify-between mt-10 gap-12 flex-col-reverse lg:flex-row"}>
                    <form onSubmit={f.handleSubmit(submit)} className="lg:w-1/2">
                        <div className="flex flex-col gap-3">
                            <label>
                                <p className="ml-4 mb-1">Email</p>
                                <Input required  {...f.register("email")} />
                            </label>
                            <label>
                                <p className="ml-4 mb-1 mt-2">Name</p>
                                <Input required {...f.register("name")} />
                            </label>
                            <label>
                                <p className="ml-4 mb-1 mt-2">Subject</p>
                                <Input required {...f.register("Title")} />
                            </label>

                            <label>
                                <p className="ml-4 mb-1 mt-2">Message</p>
                                <Textarea required {...f.register("content")} />
                            </label>
                            <div className='mt-5'>
                                {mutation.isError && (
                                    <p className='text-red-600 text-center'>Something went wrong, please try again</p>
                                )}
                                <Button
                                    className="mt-5 gradient-button w-full"
                                    disabled={mutation.isLoading}
                                    name=""
                                    type="submit"
                                >
                                    {mutation.isLoading ? "Sending..." : "Send"}
                                </Button>
                            </div>
                        </div>
                    </form>
                    <div className="max-w-md mt-20 lg:mt-0">
                        <h3 className="text-2xl">Want to reach us directly?</h3>
                        <p className="mt-5">
                            Leave us a message directly through the contact form on your
                            screen, and our team will get back to you promptly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
