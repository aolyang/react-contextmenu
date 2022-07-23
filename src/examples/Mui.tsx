import { Box, Button, useTheme } from "@mui/material";
import { Menu } from "@anti-lib/rc-menu";
import { useState } from "react";

export default function MuiDemo() {
  const theme = useTheme()
  const [anchor, setAnchor] = useState<HTMLElement>()
  return <Box sx={{
    width: 400,
    height: 400,
    border: `1px solid ${theme.palette.primary.main}`
  }}>
    Mui Demo
    <Menu anchor={anchor}
          onClose={(reason) => {
            console.log("close reason", reason)
            setAnchor(undefined)
          }}
    >
      items
    </Menu>
    <Button variant={"contained"} disableElevation onClick={e => {
      if (anchor) {
        setAnchor(undefined)
      } else {
        setAnchor(e.currentTarget)
      }

    }}>Menu</Button>
  </Box>
}
