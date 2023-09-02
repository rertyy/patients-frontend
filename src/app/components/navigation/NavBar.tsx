import NavItem from "@/app/components/navigation/NavItem";

const MENU_LIST = [
  { name: "Home", path: "/" },
  { name: "Patients", path: "/patients" },
  { name: "User", path: "/user" },
];

const NavBar = () => {
  return (
    <div className="border-2 border-green-500 bg-green-200 mt-1 mb-1 rounded sticky top-0 z-50">
      <ul>
        <div className=" pr-4 space-x-4 list-none justify-around inline-flex flex-row w-full align-middle ">
          {MENU_LIST.map((item, index) => (
            <li key={index} className="hover:font-bold hover:text-red-500">
              <NavItem name={item.name} path={item.path} />
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
