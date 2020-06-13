import React from "react";
import { Route, Switch } from "react-router-dom";

import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import Home from "./pages/Home";
import Login from "./containers/Login";
import Notes from "./containers/Notes";
import Signup from "./containers/Signup";
import Settings from "./containers/Settings";
import NotFound from "./containers/NotFound";
import Physics from "./pages/Physics";
import Fluids from "./containers/Fluids";
import CarouselPage from "./components/Carousel";
import NameForm from "./components/MyForm";
import Kinematics from "./containers/Kinematics";
import Dynamics from "./containers/PhysicsContainers/Dynamics";
import UCM from "./containers/PhysicsContainers/UCM";
import Energy from "./containers/PhysicsContainers/Energy";
import Momo from "./containers/PhysicsContainers/Momo";
import Rotation from "./containers/PhysicsContainers/Rotation";
import NewBlog from "./containers/NewBlog";
import Blogs from "./containers/Blogs";


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <AuthenticatedRoute exact path="/nameform">
        <NameForm />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/settings">
        <Settings />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/blog">
        <NewBlog />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/blogs">
        <Blogs />
      </AuthenticatedRoute>
      <UnauthenticatedRoute exact path="/login">
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <Signup />
      </UnauthenticatedRoute>
      <Route exact path="/physics">
        <Physics />
      </Route>
      <UnauthenticatedRoute exact path="/kinematics">
        <Kinematics />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/dynamics">
        <Dynamics />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/ucm">
        <UCM />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/energy">
        <Energy />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/momentum">
        <Momo />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/rotation">
        <Rotation />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/fluids">
        <Fluids />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/carousel">
        <CarouselPage />
      </UnauthenticatedRoute>
      
      
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
