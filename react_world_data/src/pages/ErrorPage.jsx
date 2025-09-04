import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const ErrorPage = () => {
  const Error = useRouteError();

  return (
    <div>
      <h1> Oops ! An Error occurred</h1>

      {Error && (
        <>
          <p>Status:{Error.status}</p>
          <p>{Error.data}</p>
        </>
      )}
      <NavLink to="/">
        <button> Go Home</button>
      </NavLink>
    </div>
  );
};
