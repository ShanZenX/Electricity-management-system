import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export default function ColorSaveBtn({ name }) {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#f3df6d"),
    backgroundColor: "#f3df6d",
    "&:hover": {
      backgroundColor: "#f3df6d",
    },
  }));
  return (
    <ColorButton variant="outlined" type="submit" className="!ml-2 h-[40px] !border-black shadow !shadow-white">
      {name}
    </ColorButton>
  );
}
