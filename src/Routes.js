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

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <UnauthenticatedRoute exact path="/login">
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <Signup />
      </UnauthenticatedRoute>
      <AuthenticatedRoute exact path="/physics">
        <Physics />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/kinematics">
        <Kinematics />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/dynamics">
        <Dynamics />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/ucm">
        <UCM />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/energy">
        <Energy />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/momentum">
        <Momo />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/rotation">
        <Rotation />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/fluids">
        <Fluids />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/carousel">
        <CarouselPage />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/nameform">
        <NameForm />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/settings">
        <Settings />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/notes/:id">
        <Notes />
      </AuthenticatedRoute>
      
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
