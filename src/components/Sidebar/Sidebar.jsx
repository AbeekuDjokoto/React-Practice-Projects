import { Link, useLocation } from "react-router-dom";
import {
  ArrowIcon,
  AuthIcon,
  CartsIcon,
  CommentIcon,
  DynamicImageIcon,
  PostIcon,
  QuoteIcon,
  RecipeIcon,
  StoreFrontIcon,
  TodoIcon,
  UserIcon,
} from "../../assets/icons/icons";

const Menus = [
  {
    title: "Dynamic Image",
    src: <DynamicImageIcon />,
    id: 0,
    route: "/dashboard",
  },
  { title: "Auth", src: <AuthIcon />, id: 1, route: "auth" },
  {
    title: "Products",
    src: <StoreFrontIcon />,
    id: 2,
    route: "products",
  },
  { title: "Carts", src: <CartsIcon />, id: 3, route: "carts" },
  {
    title: "Recipes",
    src: <RecipeIcon />,
    id: 4,
    route: "recipes",
  },
  { title: "Users", src: <UserIcon />, id: 5, route: "users" },
  { title: "Posts", src: <PostIcon />, id: 6, route: "posts" },
  {
    title: "Comments",
    src: <CommentIcon />,
    id: 7,
    route: "comments",
  },
  { title: "Todos", src: <TodoIcon />, id: 8, route: "to-do" },
  {
    title: "Quotes",
    src: <QuoteIcon />,
    id: 9,
    route: "quotes",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  console.log({ pathname });
  return (
    <div className="py-2 px-[38.875px] flex flex-col bg-[#f5f5f5] rounded-lg ">
      <div className="flex flex-col gap-2 pt-4 ">
        <p className="text-[30.4px] leading-11 font-bold">Welcome, Accra!</p>
        <p>Account Balance</p>
      </div>
      <div>
        <div className="py-4 font-bold leading-6 text-[#211E22]">
          <p className="text-base">Project Routes</p>
        </div>
        <div className="flex flex-col gap-2">
          {Menus.map((menuItem) => {
            return (
              <Link
                to={`${menuItem.route}`}
                className={`px-4 bg-white rounded-lg h-[52px] flex items-center justify-between ${
                  pathname.endsWith(menuItem.route)
                    ? "border-[#7b189f] border text-[#7b189f]"
                    : ""
                }`}
                key={menuItem.id}
                end
              >
                <div className="flex items-center gap-2">
                  {menuItem.src}
                  <p className="text-base">{menuItem.title}</p>
                </div>
                <div className="max-w-7 w-full h-7">
                  <ArrowIcon />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
