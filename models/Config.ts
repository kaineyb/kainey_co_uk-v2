import type { Config as IConfig } from "../interfaces/config";
import type { NavLink } from "../interfaces/navLinks";

export class Config implements IConfig {
  navLinks: NavLink[] = [];
  name: string = "Mr John Smith";
  email: string = "change@me.email";
  copyRightYear: number = 0;
  get copyRightText(): string {
    return `${this.name} @ ${this.copyRightYear}`;
  }
}
