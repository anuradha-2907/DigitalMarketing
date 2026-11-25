import type { IconType } from "react-icons";
import {
  BsAppIndicator,
  BsApple,
  BsBuilding,
  BsChevronBarExpand,
  BsLightbulb,
  BsPhone,
} from "react-icons/bs";

interface ServiceCard {
  icon: IconType;
  title: string;
  bg: string;
  parallax?: boolean;
}

const cards: ServiceCard[] = [
  { icon: BsAppIndicator, title: "Mobile App", bg: "bg-gradient-peach" },
  { icon: BsLightbulb, title: "strategy", bg: "bg-soft-blue" },
  { icon: BsPhone, title: "eCommerce", bg: "bg-soft-red", parallax: true },
  { icon: BsApple, title: "Branding", bg: "bg-soft-yellow" },
  { icon: BsChevronBarExpand, title: "Experience Design", bg: "bg-soft-purple" },
  { icon: BsBuilding, title: "Architecture", bg: "bg-soft-yellow" },
];

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio amet ducimus maxime officia. Mollitia commodi itaque, qui veniam dignissimos eaque quidem quaerat suscipit veritatis, quod aliquid aut. Officiis, eum?";

export default function CardArea() {
  return (
    <section className="site-container mx-auto py-18">
      <div className="grid grid-cols-1 gap-x-[4em] gap-y-[2em] font-poppins lg:grid-cols-3">
        {cards.map(({ icon: Icon, title, bg, parallax }) => (
          <div
            key={title}
            className={`${bg} ${parallax ? "rellax" : ""}`}
            {...(parallax ? { "data-rellax-speed": "2" } : {})}
          >
            <div className="px-14 py-18">
              <span className="block text-display text-red">
                <Icon className="inline-block align-[-0.125em]" />
              </span>
              <h2 className="text-dark">{title}</h2>
              <p className="py-6 text-gray">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
