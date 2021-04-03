import React from "react";
import ReactMarkdown from "react-markdown";
import { Sponsor } from "../hooks/Sponsors";

function SponsorLevelList(props: { title: string; sponsors: Sponsor[] }) {
  return (
    <>
      {props.sponsors.length > 0 ? (
        <>
          <div className="relative bg-white py-6">
            <div className="mx-auto max-w-3xl lg:max-w-7xl">
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                {props.title}
              </h2>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8">
                  {props.sponsors.map((sponsor, index) => (
                    <>
                      <div key={sponsor.name} className="pt-6">
                        <div className="flow-root bg-gray-100 rounded-lg px-6 pb-8">
                          <div className="-mt-6">
                            <div>
                              <span className="inline-flex items-center justify-center p-3 bg-white border rounded-md shadow-lg">
                                <a
                                  href={sponsor.slug}
                                  target="_blank"
                                  rel="noopener"
                                >
                                  <img
                                    alt={sponsor.image.alt}
                                    title={sponsor.image.title}
                                    src={sponsor.image.src}
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
            rel="noopener"
            href={sponsor.slug}
            className="text-base text-gray-600 hover:text-gray-900"
          >
            {sponsor.name}
          </a>
        </li>
      ))}
    </>
  );
}

export { SponsorLevelList, SponsorFooterList };
