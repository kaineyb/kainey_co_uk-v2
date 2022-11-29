import { Config } from "./models/Config";
import { NavLink } from "./models/NavLinks";

export const config = new Config();

// Nav Links
config.navLinks.push(new NavLink("Home", "/"));
config.navLinks.push(new NavLink("Projects", "/projects"));
config.navLinks.push(new NavLink("Github", "https://github.com/kaineyb"));
config.navLinks.push(new NavLink("About", "/about"));
config.navLinks.push(new NavLink("Contact Me", "/contact"));
config.navLinks.push(
  new NavLink("Don't see me", "/", { navBar: false, footer: false })
);
