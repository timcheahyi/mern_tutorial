import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error</h1>
      <Link to="/">Main Page</Link>
    </div>
  );
};
export default Error;
