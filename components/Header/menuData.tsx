import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Services",
    // path: "/services",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "SERVICES",
        path: "/services",
        newTab: false,
      },
      {
        id: 12,
        title: "Computer Support",
        path: "/computer-support",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "Support",
    // path: "/contact",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "help desk",
        path: "/help-desk",
        newTab: false,
      },
      {
        id: 52,
        title: "call",
        path: "/call",
        newTab: false,
      },
      {
        id: 53,
        title: "phone",
        path: "/phone",
        newTab: false,
      },
    ],
  },
  {
    id: 6,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 63,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 64,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 65,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      // {
      //   id: 66,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      // {
      //   id: 67,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
      {
        id: 68,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
