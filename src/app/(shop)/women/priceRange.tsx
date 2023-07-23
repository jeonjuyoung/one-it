import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdExpandMore } from "react-icons/md";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiRadio-root": {
      width: 20,
      height: 20,
      color: "#4376E3",
      // marginRight: '10px',
    },
    "& .MuiFormControlLabel-label": {
      fontSize: "12px",
      color: "#000",
    },
    "& svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-1hbvpl3-MuiSvgIcon-root":
      {
        fill: "#CCD0D8",
      },
  },
});

export default function PriceRange() {
  const classes = useStyles();
  const [value, setValue] = useState("female");
  const [expanded, setExpanded] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const onChangeMenu = (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  return (
    <div className="category_left_bar">
      <Accordion onChange={onChangeMenu} expanded={expanded}>
        <AccordionSummary
          expandIcon={<MdExpandMore size="25" color="#000" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="title">가격대</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="content">
            <div className="price__box">
              <input type="text" placeholder="50,000"></input>
              &#126;
              <input type="text" placeholder="130,000"></input>
            </div>
            <FormControl className={classes.root}>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <div className="radio__section">
                  <FormControlLabel
                    value="underTen"
                    control={<Radio />}
                    label="10만원 이하"
                  />
                  <FormControlLabel
                    value="underThirty"
                    control={<Radio />}
                    label="10만원 ~ 30만원 이하"
                  />
                  <FormControlLabel
                    value="underFifty"
                    control={<Radio />}
                    label="30만원 ~ 50만원 이하"
                  />
                  <FormControlLabel
                    value="overFifty"
                    control={<Radio />}
                    label="50만원 이상"
                  />
                </div>
              </RadioGroup>
            </FormControl>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
