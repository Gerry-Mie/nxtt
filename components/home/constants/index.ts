import web from "@/app/assets/web1.png"
import mobile from "@/app/assets/mobile.png"
import solution from "@/app/assets/solution.png"
import security from "@/app/assets/security2.png"
import webTemplate from "@/app/assets/web-template.png"
import webAnim from "@/app/animation/code-dark.json"
import mobileAnim from "@/app/animation/mobile-app-development.json"
import solutionsAnim from "@/app/animation/web-skills.json"
import securityAnim from "@/app/animation/security.json"
import electronicsAnim from "@/app/animation/maintain.json"
export const navLinks = [
    {
        id: "about",
        title: "About"
    },
    {
        id: "services",
        title: "Services"
    },
    {
        id: "contact",
        title: "Contact"
    }
]

export const services=[
    {
        title: "Web App Development",
        id: "webdev",
        icon: webAnim
    },
    {
        title: "Mobile App Development",
        id: "mobdev",
        icon: mobileAnim
    },
    {
        title: "IT Solutions",
        id: "solutions",
        icon: solutionsAnim
    }, 
    {
        title: "Security Installations",
        id: "security",
        icon: securityAnim
    },
    {
        title: "Electronics Repair",
        id: "electronics",
        icon: electronicsAnim
    }
]