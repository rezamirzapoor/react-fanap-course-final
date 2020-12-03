import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Grid,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Edit as EditIcon, Add as AddIcon } from "@material-ui/icons";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    height: 380,
    overflowY: "scroll",
  },
  addIcon: {
    textAlign: "right",
  },
}));
export default function DataTable({
  title, // String
  tableHead, // Array
  tableBody, // Array
  pathname, // String
  onSelect, // Function
}) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={6}>
          <Typography component="h3" variant="h6" color="primary">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.addIcon}>
          <Link color="primary" to={`${pathname}/create`}>
            <AddIcon />
          </Link>
        </Grid>
      </Grid>
      <RadioGroup onChange={onSelect} defaultValue={"0"}>
        {onSelect ? (
          <p>
            <Radio size="small" value={"0"} />
            عدم اعمال فیلتر
          </p>
        ) : null}
        <Table size="small">
          <TableHead>
            <TableRow>
              {onSelect ? <TableCell></TableCell> : null} {/* selection*/}
              {Array.isArray(tableHead) &&
                tableHead.map((cell, i) => (
                  <TableCell key={i}>{cell}</TableCell>
                ))}
              <TableCell colSpan={1}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(tableBody) ? (
              tableBody.map((row, i) => (
                <TableRow key={i}>
                  {onSelect ? (
                    <TableCell>
                      <Radio size="small" value={row[0]} />
                    </TableCell>
                  ) : null}
                  {row.map((cell, index) => (
                    <TableCell key={index}>{cell}</TableCell>
                  ))}
                  <TableCell>
                    <Link to={`${pathname}/${row[0]}/edit`}>
                      <EditIcon fontSize="small" color="primary" />
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <>
                {/* Show Skeleton if data isn't loaded still */}
                {[1, 2, 3, 4, 5].map((item, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Skeleton />
                    </TableCell>
                    {tableHead.map((el, index) => (
                      <TableCell key={index}>
                        <Skeleton />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </RadioGroup>
    </Paper>
  );
}
