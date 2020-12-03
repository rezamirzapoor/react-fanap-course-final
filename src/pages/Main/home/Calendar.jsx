import React, { useState } from "react";
import { useEntriesParamsUpdater } from "./entry.context";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import jMoment from "moment-jalaali";
import JalaliUtils from "@date-io/jalaali";
import { Paper, Button } from "@material-ui/core";
jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });
export default function Clendar() {
  const [selectedDate, handleDateChange] = useState(
    jMoment("1399/8/2", "jYYYY/jM/jD").format("YYYY-M-D")
  );
  const { fetchByDate } = useEntriesParamsUpdater();
  const [disableButton, setDisableButton] = useState(true);

  const datePickerSelect = (value) => {
    if (value === "0") {
      setDisableButton(true);
      fetchByDate(value);
    } else {
      handleDateChange(value);
      const date = moment(value).valueOf();
      fetchByDate(date);
      setDisableButton(false);
    }
  };
  return (
    <Paper style={{ height: "380px" }}>
      <Button
        variant="contained"
        fullWidth
        color="secondary"
        onClick={() => datePickerSelect("0")}
        disabled={disableButton}
      >
        پاک کردن فیلتر تاریخ
      </Button>
      <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
        <DatePicker
          variant="static"
          disableToolbar
          value={selectedDate}
          onChange={datePickerSelect}
        />
      </MuiPickersUtilsProvider>
    </Paper>
  );
}
