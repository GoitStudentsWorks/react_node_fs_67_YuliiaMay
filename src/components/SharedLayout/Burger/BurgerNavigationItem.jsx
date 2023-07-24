import PropTypes from "prop-types";
import { BurgerNavItem } from "./BurgerNavigationItem.styled";

const BurgerNavigationItem = ({ to, children, toggleMenu }) => {
  const handleClick = () => {
    // Close the burger menu when a navigation item is clicked
    toggleMenu();
  };

  return (
    <BurgerNavItem to={to} onClick={handleClick}>
      {children}
    </BurgerNavItem>
  );
};

export default BurgerNavigationItem;
BurgerNavigationItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
