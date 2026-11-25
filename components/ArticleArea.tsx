import { heading } from "@/lib/styles";

const articles = [
  { src: "/assets/articles/img1.png", animation: "animate__animated animate__bounce animate__fadeInLeft" },
  { src: "/assets/articles/img2.png", animation: "" },
  { src: "/assets/articles/img3.png", animation: "animate__animated animate__bounce animate__fadeInRight" },
];

export default function ArticleArea() {
  return (
    <section className="site-container mx-auto py-18">
      <div className="text-center font-poppins">
        <span className="text-red">Our Recent Activities</span>
        <h1 className={heading}>Article daily updated</h1>
      </div>
      <div className="grid grid-cols-1 gap-x-[5em] py-18 font-poppins lg:grid-cols-3">
        {articles.map(({ src, animation }) => (
          <div key={src} className={animation}>
            <article className="rounded-[10px] shadow-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="w-full" />
              <div className="px-6 py-6">
                <span className="text-gray" />
                <a href="#">
                  <h2 className="text-dark">Free Advertizing of your online business</h2>
                </a>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
