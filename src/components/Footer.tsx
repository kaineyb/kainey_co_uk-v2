import styled from "styled-components";
import type { NavLink } from "../../models/NavLinks";

import { config } from "../../config";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export interface Props {
  links: NavLink[];
}

function Footer(props: Props) {
  const { links } = props;
  return (
    <div>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
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
