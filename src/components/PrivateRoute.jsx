import React, { useEffect } from "react";
import { Route } from "react-router";
import { useAuth } from "hooks";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { user, logout } = useAuth();
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || !user) {
      logout();
    } else setLoading(false);
  }, [user, logout]);
  if (loading) return <>loading</>;
  return <Route render={(props) => <Component {...props} />} {...rest} />;
}
