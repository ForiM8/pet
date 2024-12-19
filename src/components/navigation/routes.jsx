import React, { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "./error-element";
import { Layout } from "./layout";
import { Profile } from "../../pages/profile/profile";
import { Main } from "../../pages/main";
import { Cards } from "../../pages/cards/cards";
import { Basket } from "../../pages/basket/basket";
import { Checkout } from "../../pages/checkout/checkout";
import { UserOrders } from "../../pages/userOrders/userOrders";



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
  },
  {
    path: '/checkout',
    Component: Checkout
  },
  {
    path: "/userOrders",
    Component: UserOrders,
  },
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
        {
          path: '/checkout',
          Component: Checkout
        },
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
        },
        ,
        {
          path: "/userOrders",
          Component: UserOrders,
        },

        ...(isAuth ? authPages : notAuthPages),
      ],
    },
  ]);
};
