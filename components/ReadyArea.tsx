import { btn, btnGradient, heading } from "@/lib/styles";

export default function ReadyArea() {
  return (
    <section className="site-container mx-auto py-6 animate__animated animate__zoomIn">
      <div className="flex flex-wrap items-center justify-around py-18 font-poppins shadow-soft sm:px-14">
        <div className="w-1/2">
          <h1 className={heading}>Ready to get started?</h1>
          <p className="text-gray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque esse laborum unde
            temporibus doloremque maiores officia similique praesentium harum adipisci?
          </p>
        </div>
        <div className="py-6">
          <a href="#" className={`${btn} ${btnGradient} block text-center`}>
            <span className="text-body uppercase">Get started</span>
          </a>
        </div>
      </div>
    </section>
  );
}
