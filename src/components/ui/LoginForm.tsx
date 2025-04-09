export default function LoginForm() {
  return (
    <>
      <section className="text-white flex flex-col gap-7 ">
        <div className="info">
          <h2 className="text-2xl">Let’s connect constellations</h2>
          <p className="text-sm">
            Let's align our constellations! Reach out and let the <br /> magic of collaboration illuminate our skies.
          </p>
        </div>
        <form className="flex flex-col gap-2">
          <div className="flex gap-2 flex-wrap md:flex-nowrap">
            <input className="w-[100%] md:w-[50%] p-0.5 md:p-1.5 rounded-sm outline-none bg-[#FFFFFF0D] border border-[#FFFFFF33]" type="text" autoFocus placeholder="Last Name" />
            <input className="w-[100%] md:w-[50%] p-0.5 md:p-1.5 rounded-sm  outline-none bg-[#FFFFFF0D] border border-[#FFFFFF33]" type="text" placeholder="First Name" />
          </div>
          <input className="rounded-sm p-0.5 md:p-1.5 outline-none bg-[#FFFFFF0D] border border-[#FFFFFF33]" type="email" name="email" id="email" placeholder="Email" />
          <input className="rounded-sm p-0.5 md:p-1.5 outline-none bg-[#FFFFFF0D] border border-[#FFFFFF33]" type="text" placeholder="Phone Number" />
          <textarea className="rounded-sm px-0.5 md:px-1.5 pt-1.5 pb-8 outline-none bg-[#FFFFFF0D] border border-[#FFFFFF33]" name="message" id="message" placeholder="Message"></textarea>
          <button className="border-none p-0.5 md:p-1.5 bg-[#763AF5] rounded-sm cursor-pointer">Send it to the moon</button>
        </form>
      </section>
    </>
  );
}
