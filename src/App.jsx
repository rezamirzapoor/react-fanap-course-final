import React from "react";
import { RTLProvider, ToastProvider, AuthProvider } from "providers";
import { Main, Auth } from "layouts";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import { Toast, PrivateRoute } from "components";

export default function App() {
  return (
    <RTLProvider>
      <ToastProvider>
        <AuthProvider>
          <Toast />
          <Router>
            <Switch>
              <Route path="/authentication" component={Auth} />
              <PrivateRoute path="/" component={Main} />
            </Switch>
          </Router>
        </AuthProvider>
      </ToastProvider>
    </RTLProvider>
  );
}
