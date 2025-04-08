export default function ImageSide() {
  return (
    <>
      <section>
        <div className="relative">
          <img className="relative" src="/images/Image.webp" alt="image" />
          <p className="text-white text-sm absolute bottom-14 left-1/2 transform -translate-x-1/2 text-center w-full">
            “Two lunar months revealed Earth's fragile beauty against vast <br /> silence, transforming my view of our place in the universe.
          </p>
        </div>
      </section>
    </>
  );
}
