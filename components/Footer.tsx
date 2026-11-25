const columns = [
  { title: "About", links: ["About us", "Blog", "Portfolio", "Careers", "Partners"] },
  { title: "Services", links: ["eCommerce", "Branding", "Strategy", "Design", "Digital marketing"] },
];

const column = "text-center text-gray md:text-left";

export default function Footer() {
  return (
    <footer className="mt-[8em]">
      <section className="site-container mx-auto">
        <div className="grid gap-x-[3em] border-b-2 border-light py-[6em] font-poppins md:grid-cols-2 lg:grid-cols-4">
          <div className={column}>
            <span>4345 vadlapudi visakhapatnam-53005</span>
            <span className="block">+91 9390671273</span>
            <span className="text-red">anuradha@gmail.com</span>
          </div>

          {columns.map(({ title, links }) => (
            <div key={title} className={column}>
              <h3 className="text-dark">{title}</h3>
              <div className="py-6">
                {links.map((link) => (
                  <a key={link} href="#" className="block">
                    <span className="text-gray">{link}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className={column}>
            <h3 className="text-dark">Newsletter </h3>
            <div className="flex py-6">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="border-none bg-light p-[1em] font-poppins text-[1em] text-dark2 focus:border-none focus:outline-none"
              />
              <button
                type="button"
                className="cursor-pointer border-none bg-light px-[2em] font-poppins hover:bg-dark2 hover:text-offwhite"
              >
                Go
              </button>
            </div>
          </div>
        </div>
        <div className="font-poppins">
          <p className="py-6 text-center text-gray">All rights reserved to chinta anuradha</p>
        </div>
      </section>
    </footer>
  );
}
