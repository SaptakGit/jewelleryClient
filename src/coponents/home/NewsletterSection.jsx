import { NEWSLETTER_IMG } from '../../utlis/constant'

const NewsletterHero = () => {
    return (
      <section className="px-5 py-10">
        <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
          {/* Background Image */}
          <img
            src={NEWSLETTER_IMG}
            alt="Subscribe"
            className="absolute inset-0 w-full h-full object-cover"
          />
  
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-start px-6 sm:px-12">
            <div className="text-white max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
                Subscribe to our newsletter to <br /> get Everyday discounts
              </h2>
              <p className="mt-2 text-sm sm:text-base">
                Stay in the loop with our latest deals, offers. No spam, we promise!
              </p>
  
              {/* Email input */}
              <form className="mt-5 flex max-w-md">
                <input
                  type="email"
                  placeholder="Email"
                  className="input w-full rounded-l-full"
                />
                <button className="btn btn-primary rounded-r-full">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default NewsletterHero;
  
  