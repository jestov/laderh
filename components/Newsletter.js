import Image from "next/image";
import ArrowIcon from "../components/icons/ArrowIcon";

const Newsletter = () => {
  return (
    <section className="py-24 max-w-7xl w-full px-[30px] flex flex-col gap-6 md:gap-8 items-center text-white text-center bg-[url('/img/newsletter-bg.png')] bg-center bg-contain bg-no-repeat z-1 relative">
      <Image src="/img/newsletter.png" width={184} height={184} className="w-32 md:w-[180px]" alt="Dora Valdez"/>
      <h2 className="text-2xl md:text-3xl uppercase !leading-7">
        Suscríbete a<br />mi newsletter
      </h2>
      <p className="w-full md:w-2/4 font-medium !leading-5">
        Te invito a suscribirte a mi boletín para recibir recursos valiosos<br className="hidden md:inline" />y estar al tanto de mis programas y servicios.
      </p>
      <div id="mc_embed_shell" className="w-full">
        <div id="mc_embed_signup" className="w-full">
          <form
            action="https://laderh.us4.list-manage.com/subscribe/post?u=943600c6ffc391336640f6a67&amp;id=334da44e88&amp;f_id=009a07ebf0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate flex items-center w-full"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll" className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-center w-full">
              <div className="mc-field-group w-full md:w-auto">
                <input type="email" name="EMAIL" className="w-full required email px-8 py-6 rounded-full md:rounded-none md:rounded-l-full bg-transparent border border-white border-opacity-20 text-white placeholder-white font-medium tracking-wide font-belgro text-xs md:text-sm -mr-[1px] bg-white bg-opacity-0 focus:bg-opacity-15 !outline-none hover:bg-opacity-5" id="mce-EMAIL" placeholder="Tu correo electrónico" required="" />
              </div>
              <div hidden className="hidden">
                <input type="text" name="b_943600c6ffc391336640f6a67_334da44e88" tabIndex="-1" value="" />
              </div>
              <div className="clear relative">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button font-belgro text-xs md:text-sm bg-pinkcontrast pl-8 pr-24 py-6 rounded-full md:rounded-none md:rounded-r-full border border-pinkcontrast hover:bg-pinklight hover:border-pinklight transition duration-300 cursor-pointer" value="Subscribirse" />
                <span className="absolute right-7 top-0 bottom-0 flex items-center"><ArrowIcon className="w-5 h-5" /></span>
              </div>
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
              <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
