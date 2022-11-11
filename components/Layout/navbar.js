import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";

import KecilinLogo from "../../assets/Images/kecilin-logo.svg";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
    const styleTextNav="font-PoppinsRegular text-xs sm:text-base lg:text-sm xl:text-base cursor-pointer text-black hover:text-green px-3 py-2"
	
	return (
		<div>
			<nav className="w-full bg-white pt-2 xl:pt-0 px-7 sm:px-16 lg:px-28 xl:px-52 2xl:px-80 z-50">
				<div className="w-full xl:container xl:mx-auto">
					<div className="w-full flex items-center h-16 xl:h-20">
						<div className="w-full flex items-center justify-between">
							<div className="flex justify-center items-center">
								<Link href="/">
									<Image
										src={KecilinLogo.src}
                                        width={45}
                                        height={45}
                                        priority
										alt="Kecilin logo"
									/>
								</Link>
							</div>
							<div className="hidden lg:flex justify-start">
								<div className="flex space-x-2 lg:space-x-6 2xl:space-x-11">
									<a 
                                        className={styleTextNav}
                                        href="#!"
                                    >
                                        Product and Service
									</a>
									<a 
                                        className={styleTextNav}
                                        href="#!"
                                    >
                                        About Kecilin
									</a>
									<a 
                                        className={styleTextNav}
                                        href="#!"
                                    >
                                        Enterprise
									</a>
									<a 
                                        className={styleTextNav}
                                        href="#!"
                                    >
                                        English
									</a>
								</div>
							</div>
							<div className="hidden lg:flex justify-center items-center space-x-5">
                                <button className="font-PoppinsMedium uppercase px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-900 rounded-full text-xs cursor-pointer">
                                    <a href="#!">
                                        Compress now
                                    </a>
                                </button>
							</div>
						</div>
						<div className="flex lg:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-white inline-flex items-center justify-center rounded-md text-black"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								{!isOpen ? (
									<svg
										className="block h-[25px] w-[25px]"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-[25px] w-[25px]"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
						<div className="lg:hidden" id="mobile-menu">
							<div className="grid grid-cols-4">
								<div className="col-end-5 col-span-3 sm:col-span-2">
									<div
										className="grid pt-2 pb-3 space-y-5 text-right font-eudoxusMedium text-base cursor-pointer text-black hover:text-green py-2"
									>
										<a href="#!">
                                            Product and Service
										</a>
										<a href="#!">
                                            About Kecilin
										</a>
										<a href="#!">
                                            Enterprise
										</a>
										<a href="#!">
                                            English
										</a>
                                        <div className="flex lg:hidden justify-end">
                                            <button className="font-PoppinsMedium uppercase px-6 py-3 text-white bg-gradient-to-r from-cyan-600 to-blue-900 rounded-full text-xs cursor-pointer">
                                                <a href="#!">
                                                    Compress now
                                                </a>
                                            </button>
                                        </div>
									</div>
								</div>
							</div>
						</div>
				</Transition>
			</nav>
		</div>
	);
}

export { Navbar };