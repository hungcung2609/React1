import ThemeProvider from "../theme-provider";
import {
  Typography,
  Button,
} from "@material-tailwind/react";

export function HeroSectionFour() {
  return (
    <ThemeProvider>
      <header className="container mx-auto rounded-2xl overflow-hidden mb-[50px]">
        <div className="flex flex-col h-full">
          {/* Phần video với tiêu đề ở trên */}
          <div className="relative flex-1 h-full flex align-center flex-col justify-center text-left p-4">
            <Typography
              variant="h1"
              color="black"
              className="mb-4 z-20 lg:text-5xl"
            >
              Video
            </Typography>
            <iframe
              className="w-full h-[500px] z-0"
              src="https://www.youtube.com/embed/Z9UeE2wVSCI" 
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-10">
              <Button color="red" size="lg" className="w-full z-10 relative">
              <a href="https://cdit.ptit.edu.vn/doi-tac/">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 z-20 lg:text-4xl"
              >
                Đối Tác
              </Typography>
              </a>
              </Button>
            </div>

            <div className="relative h-10">
              <Typography
                variant="h1"
                color="black"
                className="mb-4 z-20 lg:text-4xl"
              >
                Fanpage
              </Typography>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64">
              <img
                src="https://cdit.ptit.edu.vn/wp-content/uploads/2022/11/Nokia-Logo.jpg" 
                alt="ảnh đối tác"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center" 
              />
            </div>
            <div className="relative h-64">
              <img
                src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/298494121_485825093549428_7502668366727777833_n.jpg?stp=dst-jpg_s350x350&_nc_cat=102&ccb=1-7&_nc_sid=4cb600&_nc_ohc=h6S5rwhHtKcQ7kNvgFghpib&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&edm=ADwHzz8EAAAA&_nc_gid=AsvwBP8B5ojidLOWhh9iryb&oh=00_AYCtBwEpIzVSSr_8r7DnPyb0SNpBAJBIrp68LuTGOnfMzQ&oe=672B965C" 
                alt="Ảnh fanpage"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
              />
              <div className="absolute inset-0 flex justify-center items-center p-4 bg-black bg-opacity-50">
                <img
                  src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/433104512_938874404911159_5366477866688162539_n.jpg?stp=cp0_dst-jpg_s50x50&_nc_cat=108&ccb=1-7&_nc_sid=6738e8&_nc_ohc=bdEhdw1UG3sQ7kNvgFar6ko&_nc_zt=24&_nc_ht=scontent.fhan17-1.fna&edm=ADwHzz8EAAAA&_nc_gid=AsvwBP8B5ojidLOWhh9iryb&oh=00_AYCqj4aTxdLUGQXo1FjDYyioubOjTZCenWyb_S4lGS9FOg&oe=672B86C1"
                  alt="Fanpage Avatar"
                  className="h-16 w-16 rounded-full mr-4"
                />
                <div className="flex flex-col text-white">
                  <span className="font-bold">CDIT</span>
                  <span className="text-sm">1.147 Người theo dõi</span> 
                </div>
                <a
                  href="https://www.facebook.com/CDITpage/?ref=embed_page" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 bg-blue-500 text-white rounded px-4 py-1 text-sm"
                >
                  Visit Fanpage
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionFour;
