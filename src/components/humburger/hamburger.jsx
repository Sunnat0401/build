import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import './hamburger.css';

export default function TemporaryDrawer({changelang}) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const changelangHandlerHamburger = (e) =>{
    changeLang(e.target.value)
 }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List className="hamburger-open">
           <ul className="hamburger-lists">
            <li className="hamburger-list"><a className="hamburger-link" href="#info">Malumotlar</a></li>
            <li className="hamburger-list"><a className="hamburger-link" href="#news">Biz haqimizda</a></li>
            <li className="hamburger-list"><a className="hamburger-link" href="#services">Xizmatlar</a></li>
            <li className="hamburger-list"><a className="hamburger-link" href="#advantages">Afzalliklarimiz</a></li>
            <li className="hamburger-list"><a className="hamburger-link" href="#news">Yangiliklar</a></li>
            <li className="hamburger-list"><a className="hamburger-link" href="#connect">Aloqa</a></li>
           </ul>
           <select className='navbar-select hamburger-select' onClick={changelangHandlerHamburger} >
                                <option value="uz">Uz</option>
                                <option value="en">En</option>
            </select>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <img src="/public/icon.svg" alt="hamburger " />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
