import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import "./App.css";
import bw from "../img/bw.png";

import * as React from "react";
import PropTypes from "prop-types";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import { styled } from "@mui/system";
import { PopperUnstyled } from "@mui/base";

const Form = () => {
  //Select option styling
  const blue = {
    100: "#DAECFF",
    200: "#99CCF3",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#f6f8fa",
    100: "#eaeef2",
    200: "#d0d7de",
    300: "#afb8c1",
    400: "#8c959f",
    500: "#6e7781",
    600: "#57606a",
    700: "#424a53",
    800: "#32383f",
    900: "#24292f",
  };

  const StyledButton = styled("button")(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    min-width: 320px;
    padding: 12px;
    border-radius: 12px;
    text-align: left;
    line-height: 1.5;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    }
  
    &.${selectUnstyledClasses.focusVisible} {
      border-color: ${blue[400]};
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[500] : blue[200]
      };
    }
  
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: '▴';
      }
    }
  
    &::after {
      content: '▾';
      float: right;
    }
    `
  );

  const StyledListbox = styled("ul")(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 320px;
    max-height: 400px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    box-shadow: 0px 4px 30px ${
      theme.palette.mode === "dark" ? grey[900] : grey[200]
    };
    `
  );

  const StyledOption = styled(OptionUnstyled)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: ${
        theme.palette.mode === "dark" ? blue[900] : blue[100]
      };
      color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: ${
        theme.palette.mode === "dark" ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: ${
        theme.palette.mode === "dark" ? blue[900] : blue[100]
      };
      color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: ${
        theme.palette.mode === "dark" ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
  
    & img {
      margin-right: 10px;
    }
    `
  );

  const StyledPopper = styled(PopperUnstyled)`
    z-index: 1;
  `;

  const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
    const slots = {
      root: StyledButton,
      listbox: StyledListbox,
      popper: StyledPopper,
      ...props.slots,
    };

    return <SelectUnstyled {...props} ref={ref} slots={slots} />;
  });

  CustomSelect.propTypes = {
    /**
     * The components used for each slot inside the Select.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    slots: PropTypes.shape({
      listbox: PropTypes.elementType,
      popper: PropTypes.func,
      root: PropTypes.elementType,
    }),
  };

  const styles = {
    width: "430px",
    height: "650px",
    align: "center",
  };

  const Industry = [
    {
      value: "Agriculture",
      label: "Agriculture",
    },
    {
      value: "Basic Metal Production",
      label: "Metal Production",
    },
    {
      value: "Chemical industries",
      label: "Chemical industries",
    },
    {
      value: "Commerce",
      label: "Commerce",
    },
    {
      value: "Construction",
      label: "Construction",
    },
    {
      value: "Education",
      label: "Education",
    },
    {
      value: "Financial services",
      label: "Financial services",
    },
    {
      value: "Food; drink; tobacco",
      label: "Food; drink; tobacco",
    },
  ];
   
    //Form Values
    const [companyName,setCompanyName]=useState("");
    const [industry,setIndustry]=useState("");
  return (
    <div style={styles} className="form-login">
      <div>
        <DialogTitle className="Heading-box" sx={{ align: "center" }}>
          <img src={bw} sx={{ width: 3, height: 3 }} className="icon"/>
          <h3 sx={{ align: "center" }}>It's delight to have you Onboard</h3>
          <h3 sx={{ align: "center" }} className="head-2">Onboard</h3>
          <div className="para">
            <p className="head2">Help Us know you better.</p>
            <p>(This how we optimize Wotbot as per your buisness need)</p>
          </div>
        </DialogTitle>
        
          <FormLabel >Company Name</FormLabel>
          <br></br>
          <TextField
            id="outlined-basic"
            label="e.g Example Inc"
            variant="outlined"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
           
          />
           <br></br><br></br>
          <FormLabel>Industry</FormLabel>
          <br></br>
          <CustomSelect>
            {Industry.map((c) => (
              <StyledOption key={c.label} value={c.value} label={c.label} onChange={(e) => setIndustry(e.target.value)}>
                {c.label}
              </StyledOption>
            ))}
          </CustomSelect>
          <br></br><br></br>

          {/*Radio Buttons*/}
          <FormLabel sx={{margin:'30px'}}>Company Size</FormLabel>
          <br></br><br></br>
          <div className="wrapper" >
            <input type="radio" name="select" id="option-1" />
            <input type="radio" name="select" id="option-2" />
            <input type="radio" name="select" id="option-3" />
            <input type="radio" name="select" id="option-4" />
            <input type="radio" name="select" id="option-5" />
            <label for="option-1" class="option option-1">
              <div className="dot"></div>
              <span>1-20</span>
            </label>
            <label for="option-2" className="option option-2">
              <div className="dot"></div>
              <span>21-50</span>
            </label>
            <label for="option-3" className="option option-3">
              <div className="dot"></div>
              <span>51-200</span>
            </label>

            <label for="option-4" class="option option-4">
              <div class="dot"></div>
              <span>201-500</span>
            </label>
            <label for="option-5" class="option option-5">
              <div class="dot"></div>
              <span>500+</span>
            </label>
          </div><br></br><br></br><br></br>
          <Button variant="contained" aria-label="select merge strategy" className="started" sx={{align:'center',width: '200px'}}>
              Get Started
           </Button>
         <br></br>
         <br></br>
      </div>
    </div>
  );
};
export default Form;
