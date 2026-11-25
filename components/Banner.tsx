import { btnGradient, pill } from "@/lib/styles";

const fadeDown = "animate__animated animate__bounce animate__fadeInDown";

export default function Banner() {
  return (
    <section className="relative z-[-99] w-full bg-[url(/assets/bgimg1.png)] bg-right bg-no-repeat font-poppins">
      <div className="site-container mx-auto h-[95vh] pt-[16em]">
        <div>
          <span className={`${pill} ${fadeDown}`}>Digital Experience</span>
          <div className="py-4 text-heading font-bold text-dark">
            <span className={`block ${fadeDown} animate__faster`}>Branding, Digital</span>
            <span className={`block ${fadeDown} animate__fast`}>Marketing and</span>
            <span className={`block ${fadeDown}`}>business Solutions</span>
          </div>
          <div className={`py-6 ${fadeDown}`}>
            <p className="text-gray">Lorem Ipsum is simply dummy text of the printing</p>
            <p className="text-gray">Brands grow in an age of Digital transformation</p>
          </div>
          <div className={`py-6 ${fadeDown}`}>
            <a href="#" className={btnGradient}>
              Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
