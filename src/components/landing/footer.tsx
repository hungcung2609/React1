import { Typography } from "@material-tailwind/react";

type LinkItem = 
  | { name: string; link: string } 
  | string; 

const links = [
  {
    title: "Site Map",
    items: [
      { name: "Trang Chủ", link: "#" },
      { name: "Giới Thiệu", link: "https://cdit.ptit.edu.vn/category/gioi-thieu/" },
      { name: "Nghiên Cứu", link: "https://cdit.ptit.edu.vn/nghien-cuu/" },
      { name: "Sản Phẩm", link: "https://cdit.ptit.edu.vn/category/san-pham/" },
      { name: "Dịch Vụ", link: "https://cdit.ptit.edu.vn/category/dich-vu/" },
      { name: "Đào Tạo", link: "https://cdit.ptit.edu.vn/category/dao-tao/" },
      { name: "Tin Tức", link: "https://cdit.ptit.edu.vn/category/tin-tuc-moi/" },
      { name: "Tuyển Dụng", link: "https://cdit.ptit.edu.vn/cdit-tuyen-dung-nghien-cuu-vien/" },
    ] as LinkItem[], 
  },
  {
    title: "Liên Kết",
    items: [
      { name: "Bộ thông tin và truyền thông", link: "https://www.mic.gov.vn" },
      { name: "Học viện công nghệ bưu chính viễn thông", link: "https://ptit.edu.vn" },
    ] as LinkItem[], 
  },
  {
    title: "Liên Hệ",
    items: [
      "Viện công nghệ Thông tin và Truyền thông CDIT",
      "Địa chỉ: Tầng 3 nhà A1, Học viện Công Nghệ Bưu Chính Viễn Thông, Km 10, Đường Nguyễn Trãi, Hà Đông, Hà Nội",
      "Email: cdit@ptit.edu.vn",
      "Điện thoại: (84-24) 3574 2856",
      "Fax: (84-24) 3574 2857",
    ] as LinkItem[], 
  },
];

const currentYear = new Date().getFullYear();

export function FooterTwo() {
  return (
    <footer className="mt-10 px-8 pt-20 bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h4" className="mb-6" color="white">
            Viện công nghệ Thông tin và Truyền thông CDIT
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {links.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="white"
                  className="mb-3 font-medium opacity-80"
                >
                  {title}
                </Typography>
                {items.map((item) => (
                  <li key={typeof item === 'string' ? item : item.name}>
                    {typeof item === 'string' ? (
                      <Typography
                        color="gray"
                        className="py-1.5 font-normal transition-colors hover:text-white cursor-default"
                      >
                        {item}
                      </Typography>
                    ) : (
                      <Typography
                        as="a"
                        href={item.link}
                        color="gray"
                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-100"
                      >
                        {item.name}
                      </Typography>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-end justify-end gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-end">
          <Typography color="white" className="text-end font-normal">
            &copy; {currentYear} Made by Hưng Nguyễn
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default FooterTwo;
