import Heading from "./Heading";
import ImageSide from "./ImageSide";
import LoginForm from "./LoginForm";

export default function SplitLayout() {
  return (
    <>
      <section className="py-14">
        <div className="containerx p-5 mx-auto flex flex-col justify-center items-center gap-9">
          <Heading />
          <div className="flex justify-center items-center flex-wrap bg-[#1a1c23d3] p-1 lg:p-5 rounded-md gap-9">
            <LoginForm />
            <ImageSide />
          </div>
        </div>
      </section>
    </>
  );
}
