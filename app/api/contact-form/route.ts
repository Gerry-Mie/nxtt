import {contactForm_send} from "@/lib/ms/sites/contact-form";

export async function POST(req: Request) {
    const data = await req.json()
    const res = await contactForm_send(data)
    return new Response(JSON.stringify(res.value))
}