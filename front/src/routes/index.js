/** @format */
import React from "react";
import { Route } from "react-router-dom";
import AddPolitician from "../pages/AddPolitician";
import EditPolitician from "../pages/EditPolitician";
import PoliticiansList from "../pages/PoliticianList";
import Politician from "../pages/Politician";
import AddPolicy from "../pages/AddPolicy";
import EditPolicy from "../pages/EditPolicy";
import PoliciesList from "../pages/PolicyList";
import Policy from "../pages/Policy";
import CreateUser from "../pages/CreateUser";
import EditUser from "../pages/EditUser";
import UserList from "../pages/UserProfile";
import User from "../pages/User";
import LoginUser from "../pages/LoginUser";
import AddParty from "../pages/AddParty";
import EditParty from "../pages/EditParty";
import PartyList from "../pages/PartyList";
import Party from "../pages/Party";
import { RoutePaths } from "./route-paths";
import Landing from "../pages/Landing";


const Routes = () => {
  const paths = RoutePaths;

  return (
    <>
      <Route path="/politicians" exact component={PoliticiansList} />
      <Route path="/dashPolitician" exact component={Politician} />
      <Route path={`${paths.editPolitician}:id`} component={EditPolitician} />
      <Route path={paths.createPolitician} component={AddPolitician} />
      <Route path="/policies" exact component={PoliciesList} />
      <Route path="/dashPolicy" exact component={Policy} />
      <Route path={`${paths.editPolicy}:id`} component={EditPolicy} />
      <Route path={paths.createPolicy} component={AddPolicy} />
      <Route path="/user" exact component={UserList} />
      <Route path="/dashUser" exact component={User} />
      <Route path="/login" exact component={LoginUser} />
      <Route path={`${paths.editUser}:id`} component={EditUser} />
      <Route path={paths.createUser} component={CreateUser} />
      <Route path="/parties" exact component={PartyList} />
      <Route path="/dashParty" exact component={Party} />
      <Route path={`${paths.editParty}:id`} component={EditParty} />
      <Route path={paths.createParty} component={AddParty} />
      <Route path="/dashLanding" exact component={Landing} />
    </>
  );
};

export default Routes;
