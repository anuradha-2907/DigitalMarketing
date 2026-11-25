import type { IconType } from "react-icons";
import { BsBricks, BsMegaphone, BsMouse } from "react-icons/bs";

interface Service {
  icon: IconType;
  title: string;
  text: string;
}

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatem sapiente odit c";

const services: Service[] = [
  { icon: BsBricks, title: "Grow Your Business", text },
  { icon: BsMegaphone, title: "Digital Marketing", text },
  { icon: BsMouse, title: "Search Engine Optimization", text },
];

export default function AgencyArea() {
  return (
    <section className="py-[5em]">
      <div className="site-container mx-auto text-center font-poppins">
        <span className="text-red">join our Agency</span>
        <div>
          <div className="text-heading text-dark">
            We Design and build beautiful digital <br />
            products that make a difference.
          </div>
        </div>
        <div className="grid grid-cols-1 py-18 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="px-6">
              <div className="text-center text-icon text-red">
                <Icon className="inline-block align-[-0.125em]" />
              </div>
              <div className="text-center">
                <h4 className="py-4 text-md">{title}</h4>
                <p className="text-gray">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
