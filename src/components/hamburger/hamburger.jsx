import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import './hamburger.css';
import { useTranslation } from "react-i18next";
export default function TemporaryDrawer({changeLanguages}) {

  const changeLanguageHandlerHamburger = (e) =>{
    changeLanguages(e.target.value)
 }

  const {t} = useTranslation()
  const [open, setOpen] = React.useState(false);

  const toggleDrawer =  () => {
    setOpen(true);
  };
  const onCloseD = () =>{
    setOpen(false)
  }
  

  const DrawerList = (
    <Box sx={{ width: 250 }}  >
      <List className="hamburger-open">
           <ul className="hamburger-lists">
            <li onClick={onCloseD} className="hamburger-list"><a className="hamburger-link" href="#info">{t("data")}</a></li>
            <li  onClick={onCloseD} className="hamburger-list"><a className="hamburger-link" href="#news">{t("aboutUs")}</a></li>
            <li  onClick={onCloseD} className="hamburger-list"><a className="hamburger-link" href="#services">{t("services")}</a></li>
            <li   onClick={onCloseD} className="hamburger-list"><a className="hamburger-link" href="#advantages">{t("ourAdvantages")}</a></li>
            <li  onClick={onCloseD} className="hamburger-list"><a className="hamburger-link" href="#news">{t("news")}</a></li>
            <li  onClick={onCloseD} className="hamburger-list"><a className="hamburger-link" href="#connect">{t("contact")}</a></li>
           </ul>
           <select  onChange={changeLanguageHandlerHamburger} className='navbar-select hamburger-select'  >
                                <option onClick={onCloseD} value="uz">Uz</option>
                                <option onClick={onCloseD}  value="en">En</option>
            </select>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer}>
        <img src="/icon.svg" alt="hamburger " />
      </Button>
      <Drawer open={open} onClose={onCloseD}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
