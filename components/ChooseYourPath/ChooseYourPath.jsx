import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import { red, blue } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import { useColorContext } from "../../hooks/Colorcontext";

const PathSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: blue[600],
    "&:hover": {
      backgroundColor: alpha(blue[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: blue[600],
  },
  "& .MuiSwitch-switchBase": {
    color: red[600],
    "&:hover": {
      backgroundColor: alpha(red[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase + .MuiSwitch-track": {
    backgroundColor: red[600],
  },
}));

const label = { inputProps: { "aria-label": "Color switch demo" } };

export default function ChooseYourPath() {
  const { isJedi, setIsJedi } = useColorContext();

  const handleSwitchChange = (event) => {
    setIsJedi(event.target.checked);
  };

  return (
    <div className="center white-color">
      <p>Choose your path</p>
      <PathSwitch {...label} defaultChecked onChange={handleSwitchChange} />
      <p>{isJedi ? "Jedi Knight" : "Sith Lord"}</p>
    </div>
  );
}
