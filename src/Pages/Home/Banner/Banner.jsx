import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full mt-12 rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full h-[600px]" />

        <div className="absolute h-full left-0 top-1/2 pt-24 pl-24 transform -translate-y-1/2 bg-gradient-to-r from-[rgba(21,21,21,1)] to-[rgba(21,21,21,0)]">
          <h2 className="max-w-[463px] text-white text-6xl font-bold leading-[75px]">
            Affordable Price For Car Servicing
          </h2>
          <p className="max-w-[522px] text-lg capitalize my-7 text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>

          <div>
            <button className="btn bg-[#FF3811] hover:text-[#ff3811] text-white border-none mr-5">
              Discover More
            </button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full lg:h-[600px]" />
        <div className="absolute h-full left-0 top-1/2 pt-24 pl-24 transform -translate-y-1/2 bg-gradient-to-r from-[rgba(21,21,21,1)] to-[rgba(21,21,21,0)]">
          <h2 className="max-w-[463px] text-white text-6xl font-bold leading-[75px]">
            Affordable Price For Car Servicing
          </h2>
          <p className="max-w-[522px] text-lg capitalize my-7 text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>

          <div>
            <button className="btn bg-[#FF3811] hover:text-[#ff3811] text-white border-none mr-5">
              Discover More
            </button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full lg:h-[600px]" />
        <div className="absolute h-full left-0 top-1/2 pt-24 pl-24 transform -translate-y-1/2 bg-gradient-to-r from-[rgba(21,21,21,1)] to-[rgba(21,21,21,0)]">
          <h2 className="max-w-[463px] text-white text-6xl font-bold leading-[75px]">
            Affordable Price For Car Servicing
          </h2>
          <p className="max-w-[522px] text-lg capitalize my-7 text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>

          <div>
            <button className="btn bg-[#FF3811] hover:text-[#ff3811] text-white border-none mr-5">
              Discover More
            </button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full lg:h-[600px]" />
        <div className="absolute h-full left-0 top-1/2 pt-24 pl-24 transform -translate-y-1/2 bg-gradient-to-r from-[rgba(21,21,21,1)] to-[rgba(21,21,21,0)]">
          <h2 className="max-w-[463px] text-white text-6xl font-bold leading-[75px]">
            Affordable Price For Car Servicing
          </h2>
          <p className="max-w-[522px] text-lg capitalize my-7 text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>

          <div>
            <button className="btn bg-[#FF3811] hover:text-[#ff3811] text-white border-none mr-5">
              Discover More
            </button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full lg:h-[600px]" />
        <div className="absolute h-full left-0 top-1/2 pt-24 pl-24 transform -translate-y-1/2 bg-gradient-to-r from-[rgba(21,21,21,1)] to-[rgba(21,21,21,0)]">
          <h2 className="max-w-[463px] text-white text-6xl font-bold leading-[75px]">
            Affordable Price For Car Servicing
          </h2>
          <p className="max-w-[522px] text-lg capitalize my-7 text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>

          <div>
            <button className="btn bg-[#FF3811] hover:text-[#ff3811] text-white border-none mr-5">
              Discover More
            </button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full lg:h-[600px]" />
        <div className="absolute h-full left-0 top-1/2 pt-24 pl-24 transform -translate-y-1/2 bg-gradient-to-r from-[rgba(21,21,21,1)] to-[rgba(21,21,21,0)]">
          <h2 className="max-w-[463px] text-white text-6xl font-bold leading-[75px]">
            Affordable Price For Car Servicing
          </h2>
          <p className="max-w-[522px] text-lg capitalize my-7 text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>

          <div>
            <button className="btn bg-[#FF3811] hover:text-[#ff3811] text-white border-none mr-5">
              Discover More
            </button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
