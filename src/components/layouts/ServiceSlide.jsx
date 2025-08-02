import { useSwiperSlide } from "swiper/react";

function ServiceSlide({ service }) {
  const slide = useSwiperSlide();
  const isActive = slide?.isActive ?? false;

  return (
    <div className="h-[471px] flex flex-col-reverse bg-black/50 text-start justify-start p-2.5 rounded-[20px] transition-all duration-300 ease-in-out backdrop-blur-[10px] group">
      <div className="grid h-full place-items-start z-[1]">
        <div className="relative rounded-[20px] transition-all duration-300 ease-in-out h-full">
          <img
            src={service.img}
            alt={service.title}
            className={[
              "w-full object-cover rounded-[20px] origin-bottom",
              "will-change-[height] transition-all duration-300 ease-in-out",
              isActive
                ? "h-full"
                : "h-[calc(100%_+_101.5555px)] -translate-y-[101.5555px] group-hover:h-full group-hover:translate-y-0",
            ].join(" ")}
          />
        </div>
      </div>

      <div className="p-[clamp(1.25rem,1.1464rem_+_0.3467vw,1.5625rem)_clamp(1.25rem,1.0417rem_+_0.6944vw,1.875rem)_0] z-0">
        <div className="flex items-center justify-between gap-9 xl:gap-[50px] mb-[clamp(1.25rem,1.0417rem_+_0.6944vw,1.875rem)]">
          <div className="mr-5">
            <h5
              className="text-[clamp(1.25rem,1.0417rem_+_0.6944vw,1.875rem)] text-white"
              dangerouslySetInnerHTML={{ __html: service.title }}
            />
          </div>
          <div
            className={[
              " text-[50px] leading-none",
              "transition-all duration-300 ease-in-out",
              isActive
                ? "text-primary [filter:drop-shadow(0_0_18px_rgba(225,189,87,0.8))]"
                : "text-white group-hover:text-primary group-hover:[filter:drop-shadow(0_0_18px_rgba(225,189,87,0.8))]",
            ]}
          >
            <img
              src={service.icon}
              className={`size-[60px] object-contain ${
                isActive
                  ? ""
                  : "saturate-0 brightness-[500%] group-hover:saturate-100 group-hover:brightness-100"
              }`}
              alt=""
            />
          </div>
        </div>
        <div
          className={[
            "mb-[clamp(1.25rem,1.0417rem_+_0.6944vw,1.875rem)] pt-[clamp(1.25rem,1.0417rem_+_0.6944vw,1.875rem)]",
            "border-t bordert-[rgba(208,208,208,0.4)] text-white/70 text-sm",
            "transition-all duration-300 ease-in-out",
            isActive
              ? "translate-y-0"
              : "translate-y-[50px] group-hover:translate-y-0",
          ].join(" ")}
        >
          {service.text}
        </div>
      </div>
    </div>
  );
}

export default ServiceSlide;
