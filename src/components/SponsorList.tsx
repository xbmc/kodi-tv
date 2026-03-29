import React from "react";
import ReactMarkdown from "react-markdown";
import type { Sponsor } from "../hooks/Sponsors";
import { StarIcon } from "@heroicons/react/20/solid";

function SponsorTypeList(props: { title: string; sponsors: Sponsor[] }) {
  return (
    <>
      {props.sponsors.length > 0 ? (
        <>
          <div className="relative bg-white py-6">
            <div className="mx-auto max-w-3xl lg:max-w-7xl">
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-display">
                {props.title}
              </h2>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8">
                  {props.sponsors.map((sponsor, index) => (
                    <>
                      <div key={sponsor.name} className="pt-6">
                        <div className="flow-root bg-gray-50 rounded-2xl px-6 pb-8 border border-gray-100/80">
                          <div className="-mt-6">
                            <div>
                              <span className="inline-flex items-center justify-center p-3 bg-white border border-gray-100 rounded-xl shadow-glass">
                                <a
                                  href={sponsor.slug}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <img
                                    alt={sponsor.image.alt}
                                    title={sponsor.image.title}
                                    src={sponsor.image.src}
                                    loading="lazy"
                                    decoding="async"
                                  />
                                </a>
                              </span>
                            </div>
                            <p className="mt-5 text-base text-gray-500">
                              <ReactMarkdown className="prose max-w-none">
                                {sponsor.body}
                              </ReactMarkdown>
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

function SponsorFooterList(props: { sponsors: Sponsor[] }) {
  return (
    <>
      {props.sponsors.map((sponsor, index) => (
        <li key={sponsor.name}>
          <a
            target="_blank"
            rel="noreferrer"
            href={sponsor.slug}
            className="text-sm text-gray-400 hover:text-gray-50 flex gap-1 transition-colors duration-300"
          >
            {sponsor.sponsor_type === "Financial" && (
              <StarIcon className="size-4 text-kodi-castellina" />
            )}
            {sponsor.name}
          </a>
        </li>
      ))}
    </>
  );
}

export { SponsorTypeList, SponsorFooterList };
