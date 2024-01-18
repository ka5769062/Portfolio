"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className=" padding-container relative z-30 rounded-lg bg-white shadow-xl ring-1 ring-slate-100 py-4">
      <div className="flexBetween max-container ">
        <Link href="/" className="bold-28 capitalize relative ">
          Kam<span className="text-blue-700">ran</span>
          <span className="absolute top-[-0.3rem] right-[-1rem] h-5 w-5 linearGradient rounded-full -z-10 "></span>
        </Link>
        <ul className="hidden h-full gap-6 lg:flex px-6 py-3 ">
          {NAV_LINKS.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.key}
                className="flexCenter text-[15px] font-[500] text-black
            hover:bg-blue-500 hover:text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-300"
              >
                {link.label}
              </Link>
            );
          })}
           <Link href="https://github.com/ka5769062?tab=repositories" target="_Blank">
          <Button
            type="button"
            title="Github Profile"
            variant="btn_dark_rounded"
          />
          </Link>
        </ul>
        {/* <Image
        src="menu.svg"
        width={28}
        height={28}
        className="inline-block cursor-pointer lg:hidden"
        /> */}

        <div className="inline-block cursor-pointer lg:hidden">
          <DrawerMobileNavigation />
        </div>
      </div>
    </nav>
  );
};

function DrawerMobileNavigation() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}
        >
          <ModalClose id="close-icon" sx={{ position: "initial" }} />
        </Box>
        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            "& > div": { justifyContent: "center" },
          }}
        >
          <ListItemButton sx={{ fontWeight: "lg" }}>Home</ListItemButton>
          <ListItemButton>About</ListItemButton>
          <ListItemButton>Skills</ListItemButton>
          <ListItemButton>Portfolio</ListItemButton>
          <ListItemButton>Testimonial</ListItemButton>
          <ListItemButton>Contact</ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default NavBar;
