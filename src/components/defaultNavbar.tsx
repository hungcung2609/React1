import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

import ThemeProvider from "./theme-provider";

 
const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};
 
// Nav list Nghien cuu
const accountItems = [
  {
    title: "Lĩnh Vực Nghiên Cứu",
    href: "https://cdit.ptit.edu.vn/toan-thong-tin/"
  },
  {
    title: "Đề Tài Nghiên Cứu",
    href: "https://cdit.ptit.edu.vn/de-tai-nghien-cuu/"
  },
  {
    title: "Chuyên Đề Khoa Học Công Nghệ",
    href: "https://cdit.ptit.edu.vn/chuyen-de-khoa-hoc-cong-nghe/"
  }
];

function AccountListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };
 
  const renderItems = accountItems.map(({ title, href }) => (
    <a href={href} key={title}>
      <MenuItem>
        <Typography variant="paragraph" color="blue-gray" className="mb-1 font-normal">
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal outline-none focus:outline-none">
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Nghiên cứu{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <ul className="col-span-12 flex w-full flex-col gap-1 outline-none focus:outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Nghiên cứu{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// navlist Gioi thieu
const navListMenuItems = [
  {
    title: "Thông điệp của viện trưởng",
    href: "https://cdit.ptit.edu.vn/thong-diep-vien-truong-2/"
  },
  {
    title: "Sứ mệnh và tầm nhìn",
    href: "https://cdit.ptit.edu.vn/su-menh-va-tam-nhin-2/"
  },
  {
    title: "Mô hình tổ chức",
    href: "https://cdit.ptit.edu.vn/mo-hinh-to-chuc-cdit/"
  },
  {
    title: "Lịch sử",
    href: "https://cdit.ptit.edu.vn/lich-su-4/"
  },
  {
    title: "Thành tựu",
    href: "https://cdit.ptit.edu.vn/thanh-tuu-4/"
  }
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };
 
  const renderItems = navListMenuItems.map(({ title, href }) => (
    <a href={href} key={title}>
      <MenuItem>
        <Typography variant="paragraph" color="blue-gray" className="mb-1 font-normal">
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal outline-none focus:outline-none">
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Giới Thiệu{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <ul className="col-span-12 flex w-full flex-col gap-1 outline-none focus:outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Giới Thiệu{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

//navlistSPham
const navListMenuItemsSpham = [
  {
    title: "ezCheck – Giải pháp xác thực nguồn gốc sản phẩm bằng tem điện tử",
    href: "https://cdit.ptit.edu.vn/ezcheck-giai-phap-xac-thuc-nguon-goc-san-pham-bang-tem-dien-tu/"
  },
  {
    title: "Hệ thống hỗ trợ du lịch thông minh",
    href: "https://cdit.ptit.edu.vn/ar-cho-du-lich-thong-minh/"
  },
  {
    title: "Triển lãm số “Hoàng Sa, Trường Sa của Việt Nam – những bằng chứng lịch sử và pháp lý”",
    href: "https://cdit.ptit.edu.vn/trien-lam-so-3d-ve-bien-dao-viet-nam/"
  },
  {
    title: "ezSite – Giải pháp quản lý thông tin nhà trạm di động",
    href: "https://cdit.ptit.edu.vn/giai-phap-quan-ly-thong-tin-nha-tram-di-dong-ezsite/"
  },
  {
    title: "ezLife – Giải pháp Kết nối cho Đô thị thông minh",
    href: "https://cdit.ptit.edu.vn/ezlife_giai-phap-ket-noi-cho-do-thi-thong-minh/"
  }
];
 
function NavListMenuSpham() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };
 
  const renderItems = navListMenuItemsSpham.map(({ title, href }) => (
    <a href={href} key={title}>
      <MenuItem>
        <Typography variant="paragraph" color="blue-gray" className="mb-1 font-normal">
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal outline-none focus:outline-none">
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Sản Phẩm{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <ul className="col-span-12 flex w-full flex-col gap-1 outline-none focus:outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Sản Phẩm{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

//Dịch vụ
const navListMenuItemsDvu = [
  {
    title: "ezWork – Giải pháp quản lý trực ca thông minh",
    href: "https://cdit.ptit.edu.vn/giai-phap-quan-ly-truc-ca-thong-minh-ezwork/"
  },
  {
    title: "ezWater – Giải pháp ghi chỉ số và quản lý đồng hồ nước thông minh",
    href: "https://cdit.ptit.edu.vn/giai-phap-ghi-chi-so-dong-ho-nuoc-bang-ma-qr-ezwater/"
  },
  {
    title: "Dịch vụ thiết kế web 360”",
    href: "https://cdit.ptit.edu.vn/dich-vu-so-hoa-360-do/"
  },
  {
    title: "Dịch vụ số hóa và thiết kế 3D",
    href: "https://cdit.ptit.edu.vn/dich-vu-so-hoa-3d/"
  },
  {
    title: "ezFeedback – Giải pháp thu thập dữ liệu phản hồi từ khách hàng hiệu quả",
    href: "https://cdit.ptit.edu.vn/ezfeedback-giai-phap-thu-thap-du-lieu-phan-hoi-tu-khach-hang-hieu-qua/"
  }
];
 
function NavListMenuDvu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };
 
  const renderItems = navListMenuItemsDvu.map(({ title, href }) => (
    <a href={href} key={title}>
      <MenuItem>
        <Typography variant="paragraph" color="blue-gray" className="mb-1 font-normal">
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal outline-none focus:outline-none">
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Dịch Vụ{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <ul className="col-span-12 flex w-full flex-col gap-1 outline-none focus:outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Dịch Vụ{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

//Đào Tạo
const navListMenuItemsDaotao= [
  {
    title: "Thông tin chương trình đào tạo, bồi dưỡng nguồn nhân lực cho doanh nghiệp nhỏ và vừa năm 2024",
    href: "https://cdit.ptit.edu.vn/thong-tin-chuong-trinh-dao-tao-boi-duong-nguon-nhan-luc-cho-doanh-nghiep-nho-va-vua-nam-2024/"
  },
  {
    title: "Chương trình đào tạo theo yêu cầu",
    href: "https://cdit.ptit.edu.vn/category/chuong-trinh-dao-tao-theo-yeu-cau/"
  }
];
 
function NavListMenuDaotao() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };
 
  const renderItems = navListMenuItemsDaotao.map(({ title, href }) => (
    <a href={href} key={title}>
      <MenuItem>
        <Typography variant="paragraph" color="blue-gray" className="mb-1 font-normal">
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal outline-none focus:outline-none">
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Đào Tạo{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <ul className="col-span-12 flex w-full flex-col gap-1 outline-none focus:outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Đào Tạo{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavListMenu />
      <AccountListMenu />
      <NavListMenuSpham />
      <NavListMenuDvu />
      <NavListMenuDaotao />
      <Typography
        as="a"
        href="https://cdit.ptit.edu.vn/category/tin-tuc-moi/"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <CubeTransparentIcon className="h-[18px] w-[18px]" />
          Tin Tức
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="https://cdit.ptit.edu.vn/cdit-tuyen-dung-nghien-cuu-vien/"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <CubeTransparentIcon className="h-[18px] w-[18px]" />
          Tuyển Dụng
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="https://cdit.ptit.edu.vn/lien-he/"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <CubeTransparentIcon className="h-[18px] w-[18px]" />
          Liên Hệ
        </ListItem>
      </Typography>
    </List>
  );
}
 
export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  return (
    <ThemeProvider>
      <Navbar className="absolute mx-auto left-0 right-0 top-3 max-w-screen-2xl px-4 py-2 z-10">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="./"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            Trang chủ
          </Typography>
          <div className="hidden lg:block">
            <NavList />
            
          </div>
          <div className="hidden gap-2 lg:flex">
            <a href="./login">
              <Button variant="text" size="sm" color="blue-gray">
                Sign In
              </Button>
            </a>
            <a href="/astro-launch-ui/signup">
              <Button size="sm" color="gray">
                Sign Up
              </Button>
            </a>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <a href="/astro-launch-ui/login">
              <Button variant="outlined" size="sm" color="gray" fullWidth>
                Sign In
              </Button>
            </a>
            <a href="/astro-launch-ui/signup">
              <Button size="sm" fullWidth color="gray">
                Sign Up
              </Button>
            </a>
          </div>
        </Collapse>
      </Navbar>
    </ThemeProvider>
  );
}