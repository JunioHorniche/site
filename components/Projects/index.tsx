import React from "react"
import Image from "next/image"
import profile from "../../public/profile.jpeg";

const Projects = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Projects
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Projects;