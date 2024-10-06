// ActionIcons.tsx
import ProfileIcon from "@/components/ProfileIcon";
import CartIcon from "@/components/CartIcon";
import SearchIcon from "../SearchIcon";

const ActionIcons = () => {
  return (
    <div className="flex">
      <SearchIcon />
      <CartIcon />
      <ProfileIcon />
    </div>
  );
};

export default ActionIcons;
