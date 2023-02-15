import { useState, useLayoutEffect, useEffect } from "react";
import { Router } from "react-router-dom";
import { BrowserHistory } from "history";
import basePath from "./constants";

interface CustomRouterHistory {
  history: BrowserHistory;
  basename?: string;
  children?: React.ReactNode;
}

export function CustomRouter({ history, ...props }: CustomRouterHistory) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useEffect(() => {
    console.log(state.location);
  }, [state]);

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      basename={basePath}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
}
