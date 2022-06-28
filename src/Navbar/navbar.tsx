import { LogoTitle, StyledNavbar } from "./style";

const Navbar = ({ title }: { title: string }) => {
  return (
    <StyledNavbar>
      <LogoTitle>{title}</LogoTitle>
    </StyledNavbar>
  );
};
export default Navbar;
