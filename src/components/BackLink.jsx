import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyle = makeStyles((theme) => ({
  link: {
    color: "white",
    textDecoration: "none",
  },
}));
export default function BackLink({ children, ...props }) {
  const classes = useStyle();
  return (
    <Link className={classes.link} {...props}>
      <Button variant="contained" color="secondary">
        {children}
      </Button>
    </Link>
  );
}
