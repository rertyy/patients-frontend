import Link from "next/link";

export interface NavItemProps {
  name: string;
  path: string;
}

const NavItem = ({ name, path }: NavItemProps) => {
  return (
    <div>
      <Link href={{ pathname: path }}>
        <div>{name}</div>
      </Link>
    </div>
  );
};

export default NavItem;
