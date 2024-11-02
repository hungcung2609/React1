import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

interface CategoriesCardPropsType {
  img: string;
  href: string;
}

function CategoriesCard({ img, href }: CategoriesCardPropsType) {
  return (
    <a href={href} >
    <Card
      shadow={false}
      className="relative grid h-[10rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center
      transition-transform duration-300 transform hover:scale-105"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t border-2 border-black" />
      </CardHeader>
    </Card>
    </a>
  );
}

const categories = [
  {
    img: "https://cdit.ptit.edu.vn/wp-content/uploads/2019/03/logo-ezCheck.jpg",
    href: "https://cdit.ptit.edu.vn/ezcheck-giai-phap-xac-thuc-nguon-goc-san-pham-bang-tem-dien-tu/",
  },
  {
    img: "https://cdit.ptit.edu.vn/wp-content/uploads/2019/03/logo-bien-dao1.jpg",
    href: "https://cdit.ptit.edu.vn/trien-lam-so-3d-ve-bien-dao-viet-nam/",
  },
  {
    img: "https://cdit.ptit.edu.vn/wp-content/uploads/2019/03/logo-du-lich-thong-minh1.jpg",
    href: "https://cdit.ptit.edu.vn/ar-cho-du-lich-thong-minh/",
  },
  {
    img: "https://cdit.ptit.edu.vn/wp-content/uploads/2019/03/logo-ezsite.jpg",
    href: "https://cdit.ptit.edu.vn/giai-phap-quan-ly-thong-tin-nha-tram-di-dong-ezsite/",
  },
  {
    img: "https://cdit.ptit.edu.vn/wp-content/uploads/2019/03/logo-ezlife.jpg",
    href: "https://cdit.ptit.edu.vn/ezlife_giai-phap-ket-noi-cho-do-thi-thong-minh/",
  },
];

export function TeamSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-8 w-1/2">
          <a href="https://cdit.ptit.edu.vn/san-pham-dich-vu/">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Các Sản Phẩm Tiêu Biểu
          </Typography>
          </a>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((props, key) => (
            <CategoriesCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSectionOne;
