import type { Config as IConfig } from "../interfaces/config";
import type { NavLink } from "../interfaces/navLinks";

export class Config implements IConfig {
  navLinks: NavLink[] = [];
}
