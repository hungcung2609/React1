import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";

interface NewsArticle {
  title: string;
  img: string;
  href: string;
  description: string;
}

const newsArticles: NewsArticle[] = [
  {
    title: "Thư cảm ơn nhân kỷ niệm 25 năm thành lập Viện công nghệ Thông tin và Truyền thôngCDIT",
    img: "https://cdit.ptit.edu.vn/wp-content/uploads/2024/03/logo25nam-1-1-960x645.png", 
    href: "https://cdit.ptit.edu.vn/thu-chuc-mung-cua-tap-the-lanh-dao-hoc-vien-gui-vien-cong-nghe-thong-tin-va-truyen-thong-cdit/",
    description: "Thư cảm ơn nhân kỷ niệm 25 năm ngày thành lập Viện CDIT  ",
  },
  {
    title: "Thư chúc mừng của Tập thể Lãnh đạo Học viện gửi Viện công nghệ Thông tin và Truyền thông CDIT",
    img: "https://cdit.ptit.edu.vn/wp-content/uploads/2024/03/logo25nam-1-1-960x645.png", 
    href: "https://cdit.ptit.edu.vn/thu-chuc-mung-cua-tap-the-lanh-dao-hoc-vien-gui-vien-cong-nghe-thong-tin-va-truyen-thong-cdit/",
    description: "Thư chúc mừng của Tập thể Lãnh đạo Học viện gửi Viện công nghệ Thông tin và Truyền thông CDIT nhân dịp kỷ niệm 25 năm",
  },
  {
    title: "Viện công nghệ thông tin và Truyền thông CDIT ký kết biên bản ghi nhớ hợp tác với Sở Nông nghiệp và Phát triển nông thôn Thanh Hóa về việc triển khai giải pháp Nhật ký điện tử (AgriNote) cho các Hợp tác xã, doanh nghiệp tại Thanh Hóa",
    img: "https://cdit.ptit.edu.vn/wp-content/uploads/2024/01/3-960x720.jpg", 
    href: "https://cdit.ptit.edu.vn/vien-cong-nghe-thong-tin-va-truyen-thong-cdit-ky-ket-bien-ban-ghi-nho-hop-tac-voi-so-nong-nghiep-va-phat-trien-nong-thon-thanh-hoa-ve-viec-trien-khai-giai-phap-nhat-ky-dien-tu-agrinote-cho-cac-hop-t/",
    description: "Ngày 19/10/2023, UBND tỉnh Thanh Hóa phối hợp với Bộ Thông tin và Truyền thông khai mạc Triển lãm các sản phẩm, giải pháp, mô hình",
  },
  {
    title: "Viện CDIT tham gia triển lãm “Không gian Ứng dụng công nghệ số vì cộng đồng” chào mừng Đại hội Đoàn toàn quốc lần thứ XII",
    img: "https://cdit.ptit.edu.vn/wp-content/uploads/2022/12/image001-960x641.jpg", 
    href: "https://cdit.ptit.edu.vn/vien-cdit-tham-gia-trien-lam-khong-gian-ung-dung-cong-nghe-so-vi-cong-dong-chao-mung-dai-hoi-doan-toan-quoc-lan-thu-xii/",
    description: "Hệ thống Hỗ trợ thực hành tiền lâm sàng Nhi khoa dựa trên công nghệ thực tế ảo; Trang cổng thông tin điện tử tích hợp",
  },
  {
    title: "EZWATER LÊN SÓNG BẢN TIN CHUYỂN ĐỔI SỐ CỦA ĐÀI TRUYỀN HÌNH HÀ NỘI",
    img: "https://cdit.ptit.edu.vn/wp-content/uploads/2022/12/PV2-960x720.png", 
    href: "https://cdit.ptit.edu.vn/ezwater-len-song-ban-tin-chuyen-doi-so-cua-dai-truyen-hinh-ha-noi/",
    description: "Với những đóng góp thiết thực cho công tác chuyển đổi số ngành nước sạch tại Thủ đô Hà Nội và các tỉnh, thành khác trong",
  },
  {
    title: "NHA TRANG – ĐIỂM ĐẾN NỐI DÀI HÀNH TRÌNH CỦA ezWater TRÊN CẢ NƯỚC",
    img: "https://cdit.ptit.edu.vn/wp-content/uploads/2022/11/nhatrang.jpg", 
    href: "https://cdit.ptit.edu.vn/nha-trang-diem-den-noi-dai-hanh-trinh-cua-ezwater-tren-ca-nuoc-2/",
    description: "Cuối tháng 8/2022, ezWater đã đến với Nha Trang, tiếp nối hành trình triển khai Giải pháp ghi và quản lý chỉ số đồng hồ nước",
  },
];

export function NewsSection() {
  return (
    <section className="py-8 px-8">
      <div className="container mx-auto">
      <a href="https://cdit.ptit.edu.vn/category/tin-tuc-moi/" className="flex justify-center mb-6">
        <button className="w-30 bg-red-500 text-white py-2 px-5 rounded">
          <Typography variant="h2" className="text-center">
            Tin Tức
          </Typography>
        </button>
      </a>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {newsArticles.map((article, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader floated={false} shadow={false} className="relative">
                <img src={article.img} alt={article.title} className="w-full h-48 object-contain rounded-t-lg" />
              </CardHeader>
              <CardBody className="flex flex-col justify-between flex-1">
                <Typography variant="h5" className="text-black mb-2">{article.title}</Typography>
                <Typography variant="small" className="text-gray-400 mb-4">{article.description}</Typography>
                <a href="" className="text-blue">
                Read More
                </a>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
