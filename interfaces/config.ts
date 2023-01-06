import type { NavLink } from "./navLinks";

export interface Config {
  navLinks: NavLink[];
  name: string;
  email: string;
  copyRightYear: number;
  copyRightText: string;
  linkedInLink: string;
  gitHubLink: string;
}
