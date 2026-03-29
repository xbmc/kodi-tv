import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Button from "./Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface Props {
  slides: { src: string; alt: string }[];
}
interface FullWidthProps {
  slides: {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    url: string;
    buttontext: string;
  }[];
}

function useDotButtons(emblaApi: ReturnType<typeof useEmblaCarousel>[1]) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotClick = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onInit();
    onSelect();
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
    return () => {
      emblaApi.off("reInit", onInit).off("reInit", onSelect).off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, onDotClick };
}

function usePrevNextButtons(emblaApi: ReturnType<typeof useEmblaCarousel>[1]) {
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const onPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("reInit", onSelect).on("select", onSelect);
    return () => {
      emblaApi.off("reInit", onSelect).off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return { prevDisabled, nextDisabled, onPrev, onNext };
}

function Carousel({ slides }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const { prevDisabled, nextDisabled, onPrev, onNext } =
    usePrevNextButtons(emblaApi);
  const { selectedIndex, scrollSnaps, onDotClick } = useDotButtons(emblaApi);

  return (
    <div className="relative group w-full">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {slides.map(element => (
            <div key={element.src} className="shrink-0 grow-0 basis-full min-w-0">
              <img
                className="w-full h-auto object-contain"
                src={element.src}
                loading="lazy"
                decoding="async"
                alt={element.alt}
              />
            </div>
          ))}
        </div>
      </div>
      {slides.length > 1 && (
        <>
          <button
            onClick={onPrev}
            disabled={prevDisabled}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-opacity duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            onClick={onNext}
            disabled={nextDisabled}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-opacity duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-1.5 z-10">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => onDotClick(index)}
                className={`size-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-kodi scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function FullWidthHeroCarousel({ slides }: FullWidthProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const { selectedIndex, scrollSnaps, onDotClick } = useDotButtons(emblaApi);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {slides.map((element, index) => (
            <div
              key={element.url}
              className="relative min-w-0 w-full overflow-hidden"
              style={{ flex: "0 0 100%" }}
            >
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover object-center scale-105"
                  src={element.image}
                  alt={element.title + " - " + element.subtitle}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding={index === 0 ? "sync" : "async"}
                  fetchPriority={index === 0 ? "high" : undefined}
                  width={1920}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kodibg-deep via-kodibg/80 to-kodibg/90"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-kodibg-deep/40 to-transparent"></div>
              </div>
              <div className="relative px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
                <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-6xl font-display">
                  <span className="block text-gray-50 drop-shadow-lg">
                    {element.title}
                  </span>
                  <span className="block text-transparent bg-clip-text bg-kodi-gradient mt-1">
                    {element.subtitle}
                  </span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-lg lg:text-xl text-kodi-lighter/90 leading-relaxed">
                  {element.description}
                </p>
                <div className="mt-10 mx-auto max-w-none flex justify-center">
                  <div className="space-y-0 mx-auto grid-cols-1 gap-5">
                    <Button href={element.url} variant="secondary">
                      {element.buttontext}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2.5 z-20">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 shadow-xs ${
              index === selectedIndex
                ? "bg-kodi scale-125 shadow-glow"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export { Carousel, FullWidthHeroCarousel };
