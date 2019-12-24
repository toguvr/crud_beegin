import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import CampaignHome from "../CampaignHome";

const routes = {
  home: "/",
  edit: "/campaign/edit",
  new: "/campaign/new"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.home} component={CampaignHome} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
