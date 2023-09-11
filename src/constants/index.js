 import { card1, card2, card3, post1, post2, post3, post4 } from "../assets/images";
export const CARDS =[
    {
     id: 1,
     imgCard: card1,
     catId: [
        1
     ],
     breadcrumbs: "Alec Whitten • 17 Jan 2022",
     titulo: "Bill wals leadership lessons",
     parrafo: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
    },
    {
    id: 2,
    catId: [
        2,3
     ],
    imgCard: card2,
    breadcrumbs: "Demi WIlkinson • 16 Jan 2022",
    titulo: "PM mental models",
    parrafo: "Mental models are simple expressions of complex processes or relationships."
    },
    {
    id: 3,
    catId: [
        1,3
     ],
    imgCard: card3,
    breadcrumbs: "Candice Wu • 15 Jan 2022",
    titulo: "What is Wireframing?",
    parrafo: "Introduction to Wireframing and its Principles. Learn from the best in the industry."
    }
];

export const CATEGORIES = [
    {
        id: 1,
        name: "Design",
        color: "#C11574"
    },
    {
        id: 2,
        name: "Research",
        color: "#027A48"
    },
    {
        id: 3,
        name: "Presentation",
        color: "#026AA2"
    },
    {
        id: 4,
        name: "Leadership",
        color: "#C4320A"
    },
    {
        id: 5,
        name: "Management",
        color: "#fcfc4b"
    },
];


export const POSTS =[
    {
     id: 1,
     postImg: post1,
     catId: [
        1
     ],
     breadcrumbs: "Olivia Rhye • 20 Jan 2022",
     titulo: "UX review presentations",
     parrafo: "How do you create compelling presentations that wow your colleagues and impress your managers?"
    },
    {
    id: 2,
    catId: [
        2,3
     ],
     postImg: post2,
    breadcrumbs: "Phoenix Baker • 19 Jan 2022",
    titulo: "Migrating to Linear 101",
    parrafo: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..."
    },
    {
    id: 3,
    catId: [
        1,3
     ],
     postImg: post3,
    breadcrumbs: "Lana Steiner • 18 Jan 2022",
    titulo: "Building your API Stack",
    parrafo: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
    },
    {
        id: 4,
        catId: [
            4,5
         ],
         postImg: post4,
        breadcrumbs: "Melisa Wrobel • 25 Ago 2023",
        titulo: "¿Cómo se realiza una Gestion de Dispositivos IOS?",
        parrafo: "Si tu organización trabaja con activos de Apple, es momento de poner en marcha la Gestión de Dispositivos iOS."
        }
];
