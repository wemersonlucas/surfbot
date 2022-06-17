import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuItems from "../NavItems";
export default function AppBarBasic() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#17222D' }}>
        <Toolbar>
        </Toolbar>
       <MenuItems/>
    </AppBar>
  );
}
