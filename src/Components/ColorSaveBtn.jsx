import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export default function ColorSaveBtn({ name }) {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[800]),
    backgroundColor: grey[900],
    "&:hover": {
      backgroundColor: grey[700],
    },
  }));
  return (
    <ColorButton variant="contained" type="submit">
      {name}
    </ColorButton>
  );
}
