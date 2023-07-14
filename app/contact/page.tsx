"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactForm, ContactForm } from "@/lib/validations/contact-form";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Modal from "@/components/home/Modal";

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const f = useForm<ContactForm>({ resolver: zodResolver(contactForm) });
  const mutation = useMutation((data: any) =>
    fetch("/api/contact-form", {
      method: "POST",
      body: JSON.stringify(data),
    })
  );

  function submit(data: ContactForm) {
    mutation.mutateAsync(data);
  }

  useEffect(() => {
    if (mutation.isSuccess) {
      setShowModal(true);
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }, [mutation.isSuccess]);

  return (
    <div className="h-screen p-10 relative mt-32">
      <Modal
        type="message"
        iconType="animation"
        success={success}
        show={showModal}
        onHide={() => setShowModal(false)}
        title="Sent"
        message={`Thank you for contacting us! We appreciate your message and will respond promptly. Expect to hear from us soon.
                  Warm Regards, Next Team`}
      />
      {/* <div className="absolute top-0 right-12 blur-2xl z-[-1] bg-blue-400 w-64 h-64 opacity-20 rounded-full" /> */}
      <div className="z-[-1] fixed w-full h-full pointer-events-none top-0 left-0 bg-[#ffffffad] backdrop-blur-3xl"></div>
      <div className="z-[-2] circle1 fixed top-5 right-[-100px] w-[397px] h-[397px] rounded-full bg-[#25D12C]"></div>
      <div>
        <h1 className="text-4xl">Get in touch</h1>
        <div
          className={
            "flex justify-between mt-10 gap-12 flex-col-reverse lg:flex-row"
          }
        >
          <form onSubmit={f.handleSubmit(submit)} className="lg:w-1/2">
            <div className="flex flex-col gap-3">
              <label>
                <p className="ml-4 mb-1">Email</p>
                <Input {...f.register("email")} />
              </label>
              <label>
                <p className="ml-4 mb-1 mt-2">Name</p>
                <Input {...f.register("name")} />
              </label>
              <label>
                <p className="ml-4 mb-1 mt-2">Subject</p>
                <Input {...f.register("Title")} />
              </label>

              <label>
                <p className="ml-4 mb-1 mt-2">Message</p>
                <Textarea {...f.register("content")} />
              </label>
              <Button
                className="mt-10 gradient-button"
                disabled={mutation.isLoading}
                name=""
                type="submit"
              >
                {mutation.isLoading ? "Sending..." : "Send"}
              </Button>
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
