import { useForm } from "react-hook-form";
import NextHero from "../components/NextHero";
import Button from "../components/Button";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <NextHero title={"Contacts"} />
      <div
        className="bg-primary py-20"
        style={{ backgroundImage: "url('./dust.png)" }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 text-sm tracking-widest text-stone-700 mb-4">
            <span
              className="relative inline-block w-3 h-3 rounded-full bg-stone-800
            before:content-['']
            before:absolute
            before:w-2 before:h-2
            before:rounded-full
            before:bg-stone-800
            before:-left-4
            before:top-1/2
            before:-translate-y-1/2

            after:content-['']
            after:absolute
            after:w-2 after:h-2
            after:rounded-full
            after:bg-stone-800
            after:-right-4
            after:top-1/2
            after:-translate-y-1/2
            "
            ></span>
            <span
              className="relative flex-grow h-1 bg-stone-800 gap-1
          before:content-['']
          before:absolute
          before:left-0
          before:-top-1.5
          before:w-full
          before:h-0.5
          before:bg-black
          

          after:content-['']
          after:absolute
          after:right-0
          after:-bottom-1.5
          after:w-full
          after:h-0.5
          after:bg-black
        "
            ></span>

            <h2 className="text-md md:text-3xl text-xl font-semibold uppercase text-secondary">
              Have any question
            </h2>

            <span
              className="relative flex-grow h-1 bg-stone-800 gap-1
          before:content-['']
          before:absolute
          before:left-0
          before:-top-1.5
          before:w-full
          before:h-0.5
          before:bg-black
          

          after:content-['']
          after:absolute
          after:right-0
          after:-bottom-1.5
          after:w-full
          after:h-0.5
          after:bg-black
        "
            ></span>
            <span
              className="relative inline-block w-3 h-3 rounded-full bg-stone-800
            before:content-['']
            before:absolute
            before:w-2 before:h-2
            before:rounded-full
            before:bg-stone-800
            before:-left-4
            before:top-1/2
            before:-translate-y-1/2

            after:content-['']
            after:absolute
            after:w-2 after:h-2
            after:rounded-full
            after:bg-stone-800
            after:-right-4
            after:top-1/2
            after:-translate-y-1/2
            "
            ></span>
          </div>
          <div className="flex items-center justify-center ">
            <h3
              className="md:text-9xl text-4xl font-bold uppercase tracking-normal text-coffee
             drop-shadow-[4px_4px_0px_rgba(180,130,90,0.8)]"
            >
              Get in touch
            </h3>
          </div>
          <div className="grid grid-cols-3 py-15">
            <div className="px-6 text-center col-span-1 py-7">
              <h3 className="uppercase text-center text-3xl font-bold bg-coffee py-1 text-white bg-[url(./dust.png)]">
                Our Contacts
              </h3>

              <div
                className="w-full flex relative justify-center items-center border-b-5 py-5 border-coffee
                after:content-['']
                after:absolute
                after:-bottom-2.5
                after:w-full
                after:h-0.5
                after:bg-coffee"
              >
                <img
                  src="./dessert.png"
                  alt="dessert"
                  width={200}
                  height={200}
                  className="flex justify-center items-center"
                />
              </div>
              <p className="pt-4 text-2xl text-black/70">785 Carriage Drive,</p>
              <p className="pt-4 text-2xl text-black/70">
                Jacksonville Beach, FL
              </p>
              <p className="pt-4 text-2xl text-black/70">+1 203-284-2818</p>
              <p className="pt-4 text-2xl text-black/70">+1 203-284-2919</p>
              <p className="pt-4 text-2xl text-black/70">info@your-site.com</p>
              <p className="pt-4 text-2xl text-black/70">sales@your-site.com</p>
            </div>
            <div className="bg-[url('./contact-border.png')] bg-[length:100%_100%] h-[600px]  px-8 bg-no-repeat overflow-hidden mx-5 py-12 relative">
              {/* <img
                src="./blurbg.jpg"
                className="absolute top-0 left-0 -z-10"
                alt=""
              /> */}
              <h3 className="text-4xl bg-coffee text-white px-8 uppercase">
                Let us know
              </h3>
              <p className="pt-4 text-2xl text-black/70 font-normal">
                Pellentesque malesuada justo fringilla blandit orci nulla auctor
                quis
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 pt-10"
              >
                <div className="w-full h-10 bg-coffee/20">
                  <input
                    type="text"
                    id="name"
                    className="w-full h-full outline-none px-3 py-1 text-lg"
                    placeholder="Name*"
                    {...register("name", { required: "Name is required" })}
                  />
                  <p>{errors.name?.message}</p>
                </div>
                <div className="w-full h-10 bg-coffee/20">
                  <input
                    type="email"
                    id="email"
                    className="w-full h-full outline-none px-3 py-1 text-lg"
                    placeholder="Email*"
                    {...register("email", { required: "Email is required" })}
                  />
                  <p>{errors.email?.message}</p>
                </div>
                <div className="w-full h-30">
                  <textarea
                    name="message"
                    className="w-full h-full bg-coffee/20 px-2 py-1 outline-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </form>
              <button className="group border-t-4 border-b-4 py-2 px-5 border-orange hover:border-black mt-6">
                <span
                  className="md:text-xl text-lg uppercase relative font-bold text-orange 
                  group-hover:text-black

                  before:content-['']
                  before:absolute
                  before:w-2 before:h-2
                  before:rounded-full
                  before:bg-orange
                  before:top-2
                  before:-left-5
                  group-hover:before:bg-black

                  after:content-['']
                  after:absolute
                  after:w-2 after:h-2
                  after:rounded-full
                  after:bg-orange
                  after:top-2
                  after:-right-5
                  group-hover:after:bg-black
        "
                >
                  send
                </span>
              </button>
            </div>
            <div className="px-6 text-center col-span-1 py-7">
              <h3 className="uppercase text-center text-3xl py-1 font-bold bg-coffee text-white bg-[url(./dust.png)]">
                Opening hours
              </h3>

              <div
                className="w-full flex relative justify-center items-center border-b-5 py-5 border-coffee
                after:content-['']
                after:absolute
                after:-bottom-2.5
                after:w-full
                after:h-0.5
                after:bg-coffee"
              >
                <img
                  src="./hot-drinks.png"
                  alt="dessert"
                  width={100}
                  height={100}
                  className="flex justify-center items-center"
                />
              </div>
              <p className="pt-4 text-2xl text-black/70">Monday – Friday</p>
              <p className="pt-4 text-2xl text-black/70">08:00 – 17:30</p>
              <p className="pt-4 text-2xl text-black/70">Saturday</p>
              <p className="pt-4 text-2xl text-black/70">09:00 – 16:00</p>
              <p className="pt-4 text-2xl text-black/70">Sunday – CLOSED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
