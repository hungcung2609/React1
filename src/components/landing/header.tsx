import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../defaultNavbar"

export function HeroSectionTwo() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-screen min-h-screen w-screen bg-white">
        <div className="relative h-screen flex align-center flex-col justify-center text-center bg-cover" style={{backgroundImage: `url('https://cdit.ptit.edu.vn/wp-content/uploads/2022/11/banner-nghiencuu_2-1.jpg')`}}>
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800"></span>
          <Typography
            variant="h1"
            color="white"
            className="mb-4 !leading-tight lg:text-5xl z-20"
          >
            Viện Công nghệ Thông Tin Và Truyền Thông CDIT
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 w-full opacity-80 md:w-10/12 lg:w-10/12 mx-auto px-28 z-10"
          >
            Được thành lập năm 1999 trong xu thế cạnh tranh và hội nhập toàn cầu, Trung tâm Công nghệ Thông tin CDIT với vai trò là đơn vị nghiên cứu phát triển hàng đầu trong lĩnh vực công nghệ thông tin, xác định: việc lĩnh hội, đúc kết và phát huy tiềm năng, nội lực, làm chủ công nghệ là mục tiêu chiến lược nhằm thực hiện thành công định hướng gắn kết Nghiên cứu – Đào tạo – Sản xuất Kinh doanh. CDIT đã duy trì, phát triển và chiếm lĩnh thị trường trong nước với các sản phẩm đáp ứng tiêu chí: Tiên tiến – Tương thích – Toàn cầu, thay thế sản phẩm nhập khẩu, nỗ lực đóng góp cho sự phát triển của mạng lưới bưu chính viễn thông và công nghệ thông tin Việt Nam, vươn mình hòa nhập với cộng đồng CNTT trong khu vực và trên thế giới.
          </Typography>
          <div className="w-auto mx-auto">
            <div className="flex items-center">
              <Button color="gray" size="lg" className="w-full z-10">
                <a href="https://cdit.ptit.edu.vn/cac-moc-lich-su/">Show More Information</a>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
