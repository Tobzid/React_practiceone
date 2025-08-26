import React from "react";
import {
    Fa500Px,
    FaAccusoft,
    FaAdversal,
    FaAvianex,
    FaBitcoin,
    FaBtc,
    FaCodiepie,
    FaDocker,
    FaGithubSquare,
} from "react-icons/fa";
import {nanoid} from "nanoid";

const sublinks = [
    {
        pageId: nanoid(),
        page: "product",
        links: [
           {
            id: nanoid(),
            label: "community",
            icon: <Fa500Px/>,
            url: "/product/community"
           },
           {
            id: nanoid(),
            label: "content",
            icon: <FaAccusoft/>,
            url: "/product/content",
           },
           {
            id: nanoid(),
            label: "roles",
            icon: <FaAdversal/>,
            url: "/product/roles",
           },

        ],
    },
    {
        pageId : nanoid(),
        page: "solutions",
        links: [
            {
                id: nanoid(),
                label: "developers",
                icon: <FaAvianex/>,
                url: "solutions/developers",
            },
            {
                id: nanoid(),
                label: "content managers",
                icon: <FaBitcoin/>,
                url: "solutions/content-managers",
            },
            {
                id: nanoid(),
                label: "business teams",
                icon: <FaBtc/>,
                url: "solutions/business teams",
            },
            {
                id: nanoid(),
                label: "ecommerce",
                icon: <FaCodiepie/>,
                url: "solutions/ecommerce",
            },
            
        ]
    }
]

export default sublinks;