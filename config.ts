import { Config } from "./models/Config";
import { NavLink } from "./models/NavLinks";

export const config = new Config();

// Year
config.email = "kaineyb@gmail.com";
config.name = "Kaine Bruce";
config.copyRightYear = 2023;

// Various Links
config.gitHubLink = "https://github.com/kaineyb";
config.linkedInLink = "https://www.linkedin.com/in/kaine-bruce-a48a0b36/";

// Nav Links
config.navLinks.push(new NavLink("Home", "/", { navBar: false, footer: true }));
config.navLinks.push(new NavLink("Projects", "/projects"));
// config.navLinks.push(new NavLink("Github", "https://github.com/kaineyb"));
config.navLinks.push(new NavLink("Blog", "/blog"));
config.navLinks.push(new NavLink("About", "/about"));
// config.navLinks.push(new NavLink("Contact Me", "/contact-me"));
