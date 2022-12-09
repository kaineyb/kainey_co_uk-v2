import { Config } from "./models/Config";
import { NavLink } from "./models/NavLinks";

export const config = new Config();

// Year
config.email = "kaineyb@gmail.com";
config.name = "Kaine Bruce";
config.copyRightYear = 2022;

// Nav Links
config.navLinks.push(new NavLink("Home", "/"));
config.navLinks.push(new NavLink("Projects", "/projects"));
config.navLinks.push(new NavLink("Github", "https://github.com/kaineyb"));
config.navLinks.push(new NavLink("About", "/about"));
config.navLinks.push(new NavLink("Contact Me", "/contact-me"));
