import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useToast } from "hooks";
export default function Toast() {
  const { isOpen, message, closeToast, severity } = useToast();
  return (
    <Snackbar open={isOpen} onClose={closeToast}>
      <Alert onClose={closeToast} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}
