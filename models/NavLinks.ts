import type { Display } from "../interfaces/display";
import type { NavLink as INavLink } from "../interfaces/navLinks";

export class NavLink implements INavLink {
  label: string;
  href: string;
  display: Display;

  constructor(
    label: string,
    href: string = "",
    display: Display = { navBar: true, footer: true }
  ) {
    this.href = href;
    this.label = label;
    this.display = display;
  }
}
