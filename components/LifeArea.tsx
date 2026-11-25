import { btnGradient, heading, pill } from "@/lib/styles";

export default function LifeArea() {
  return (
    <section className="site-container mx-auto">
      <div className="grid grid-cols-1 gap-x-[10em] text-center md:text-left lg:grid-cols-2">
        <div className="grid grid-cols-[repeat(16,minmax(10px,1fr))] grid-rows-[repeat(8,minmax(100px,1fr))]">
          {/* `rellax` is a hook class for the parallax script, not a style */}
          <div
            data-rellax-speed="2"
            className="rellax col-start-1 col-end-8 row-start-2 row-end-5 rounded-[8px] bg-[url(/assets/img1.png)] bg-cover bg-no-repeat blur-[1px]"
          />
          <div
            data-rellax-speed="-1"
            className="rellax col-start-9 col-end-16 row-start-1 row-end-4 rounded-[8px] bg-[url(/assets/img2.png)] bg-cover bg-no-repeat blur-[1px]"
          />
          <div
            data-rellax-speed="1"
            className="rellax z-[99] col-start-4 col-end-14 row-start-3 row-end-8 rounded-[8px] bg-[url(/assets/img3.png)] bg-cover bg-no-repeat"
          />
        </div>
        <div className="py-18">
          <span className={pill}>Digital Experience</span>
          <div className="font-poppins">
            <h1 className={`${heading} py-6`}>
              connect people in <br />
              digital life
            </h1>
            <p className="py-6 text-gray">
              lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect lorem
              ipsum dolor sit amet, consect
            </p>
            <p className="py-6 text-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta tempora
              assumenda similique aspernatur nam, quam incidunt ad officiis temporibus mollitia
              modi pariatur ipsam at, ipsa eligendi, saepe impedit aliquam a numquam labore iure!
              Ullam atque obcaecati incidunt rerum expedita! Ipsa eum quidem rem dolorum
              reprehenderit distinctio. Inventore, consequatur adipisci.
            </p>
            <div className="py-6">
              <a href="#" className={btnGradient}>
                More about Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
