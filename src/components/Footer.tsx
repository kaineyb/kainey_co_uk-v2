import type { NavLink } from "../../models/NavLinks";

import { config } from "../../config";

export interface Props {
  links: NavLink[];
}

function Footer(props: Props) {
  const { links } = props;
  return (
    <div>
      <a href="#">To the top</a>

      <ul>
        {links.map((navLink: NavLink, index: number) => {
          if (navLink.display.footer === true)
            return (
              <li key={index}>
                <a href={navLink.href}>{navLink.label}</a>
              </li>
            );
        })}
      </ul>

      <p>{config.copyRightText}</p>
    </div>
  );
}

export default Footer;
