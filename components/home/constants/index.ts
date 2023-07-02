
import webAnim from "@/animation/code-dark.json"
import mobileAnim from "@/animation/mobile-app-development.json"
import solutionsAnim from "@/animation/web-skills.json"
import securityAnim from "@/animation/security.json"
import electronicsAnim from "@/animation/maintain.json"
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