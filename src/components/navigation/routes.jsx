import React, { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "./error-element";
import { Layout } from "./layout";
import { Profile } from "../../pages/profile/profile";
import { Main } from "../../pages/main";



const authPages = [
  {
    path: "/profile",
    Component: Profile,
  },
];

const notAuthPages = [
  {
    path: "/",
    Component: Main,
  },
  
];

export const getRoutes = (isAuth) => {
  return createBrowserRouter([
    {
      Component: Layout,
      errorElement: <ErrorElement />,
      children: [
        {
          path: "/",
          Component: Main,
        },

        ...(isAuth ? authPages : notAuthPages),
      ],
    },
  ]);
};
