import React from "react";
import { logo } from "../assets/images"
import "./../styles/header.css"
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

const Header = () => {

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 ml-5 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
            <Typography
                as="li"
                variant="small"
                className="p-1 block  font-sans text-base font-normal leading-normal text-black antialiased"
            >
                <a href="#" className="flex items-center">
                    Products
                    <i className="material-icons">expand_more</i>
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 block  font-sans text-base font-normal leading-normal text-black antialiased"
            >
                <a href="#" className="flex items-center">
                    Solutions
                    <i className="material-icons">expand_more</i>
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 block  font-sans text-base font-normal leading-normal text-black antialiased"
            >
                <a href="#" className="flex items-center">
                    Pricing
                    <i className="material-icons">expand_more</i>
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 block  font-sans text-base font-normal leading-normal text-black antialiased"
            >
                <a href="#" className="flex items-center">
                    Blog
                </a>
            </Typography>
        </ul>
    );

    return (

        <Navbar className="mx-auto max-w-full sticky inset-0 z-10 block h-20 py-2 px-0 lg:px-8 lg:py-4 shadow-md">
            <div className="container max-w-[1380px] mx-auto h-[4rem] lg:h-auto flex items-center text-blue-gray-900 px-4">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-medium"
                >
                    <img src={logo} alt="" />
                </Typography>
                <div className="hidden lg:block mr-auto">{navList}</div>
                <Typography
                    as="li"
                    variant="small"
                    className="p-1 block  font-sans text-base font-normal leading-normal text-black antialiased"
                >
                    <a href="#" className="hidden items-center lg:flex">
                        Contact us
                    </a>
                </Typography>
                <Button variant="gradient" size="sm" className="hidden lg:block mb-2 mx-5 capitalize rounded-lg bg-gradient-to-tr from-[#08A1FF] to-[#08A1FF] py-2 my-0 px-4 font-sans text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    <span>Subscribe</span>
                </Button>
                <i className="material-icons text-black hidden lg:flex cursor-pointer">language</i>
                <IconButton
                    variant="text"
                    className="icon-mobile ml-auto h-6 w-6 text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className=" bg-white p-6 h-auto w-full shadow-md">
                    {navList}
                    <Button variant="gradient" size="sm" fullWidth className="mb-2 rounded-lg capitalize bg-gradient-to-tr from-[#08A1FF] to-[#08A1FF] py-2 px-4 font-sans text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        <span>Subscribe</span>
                    </Button>
                </div>
            </MobileNav>
        </Navbar>
    );
}

export default Header