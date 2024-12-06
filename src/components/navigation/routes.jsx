import React, { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "./error-element";
import { Layout } from "./layout";
import { Profile } from "../../pages/profile/profile";
import { Main } from "../../pages/main";
import { Cards } from "../../pages/cards/cards";
import { Basket } from "../../pages/basket/basket";



const authPages = [
  {
    path: "/profile",
    Component: Profile,
  },
  
  {
    path: "/basket",
    Component: Basket,
  },
  {
    path: "/cards",
    Component: Cards,
  }
];

const notAuthPages = [
  {
    path: "/cards",
    Component: Cards,
  }
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
