import { heading, pill } from "@/lib/styles";

const stats = [
  { value: "21+", label: "Total Top services" },
  { value: "29+", label: "Countries" },
  { value: "21%", label: "Positive Feedback" },
  { value: "3798", label: "Usual Users" },
];

export default function CountingArea() {
  return (
    <div className="site-container mx-auto py-[7em]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="text-center md:text-left">
          <span className={pill}>Digital Experience</span>
          <div className="font-poppins">
            <h1 className={`${heading} py-6`}>
              The Hundred of <br />
              Completed works <br />
              still counting
            </h1>
            <p className="mx-auto w-[80%] text-gray md:m-0">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et impedit architecto
              tenetur optio ratione itaque tempora sunt laboriosam aliquam incidunt, ex ducimus
              esse numquam atque nam reprehenderit ab officiis enim eaque! Voluptatibus aliquam
              ipsum repellendus dolore quos voluptates? Et, in
            </p>
          </div>
        </div>
        <div>
          <div className="my-[2em] flex justify-center">
            <div className="inline-grid gap-[2px] rounded-[20px] bg-light font-poppins lg:grid-cols-2">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-white px-[2.5em] py-[2em] text-center">
                  <h1 className="text-display text-dark">{value}</h1>
                  <span className="text-gray">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
