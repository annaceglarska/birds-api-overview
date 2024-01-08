import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import styles from "./ConfigBar.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  setRegion,
  setDate,
  selectRegion,
  selectDate,
} from "../../slices/config/config.slice";

export const ConfigBar = () => {
  const dispatch = useAppDispatch();
  const region = useAppSelector(selectRegion);
  const date = useAppSelector(selectDate);

  const handleRegionCodeChange = (event: SelectChangeEvent<string>) => {
    dispatch(setRegion(event.target.value));
  };

  const handleDateChange = (value: Dayjs | null) => {
    dispatch(setDate(value?.toISOString() || null));
  };

  return (
    <div className={styles.mt}>
      <FormControl>
        <InputLabel id="region-code">Region Code</InputLabel>
        <Select
          labelId={"region-code"}
          value={region}
          label="Region Code"
          onChange={handleRegionCodeChange}
        >
          <MenuItem value={"PL"}>Poland</MenuItem>
          <MenuItem value={"DE"}>Germany</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <DatePicker
          label="Date"
          value={dayjs(date)}
          onChange={handleDateChange}
        />
      </FormControl>
    </div>
  );
};
