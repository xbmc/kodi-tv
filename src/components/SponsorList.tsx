import React from "react";
import ReactMarkdown from "react-markdown";

function SponsorLevelList(props: { title: string; sponsors: any[] }) {
  return (
    <>
      {props.sponsors.length > 0 ? (
        <>
          <div className="relative bg-white py-6">
            <div className="mx-auto max-w-3xl px-6 lg:px-8 lg:max-w-7xl">
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                {props.title}
              </h2>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8">
                  {props.sponsors.map((sponsor, index) => (
                    <>
                      <div key={sponsor.node.name} className="pt-6">
                        <div className="flow-root bg-gray-100 rounded-lg px-6 pb-8">
                          <div className="-mt-6">
                            <div>
                              <span className="inline-flex items-center justify-center p-3 bg-white border rounded-md shadow-lg">
                                <img
                                  alt={sponsor.node.image.alt}
                                  title={sponsor.node.image.title}
                                  src={sponsor.node.image.src}
                                />
                              </span>
                            </div>
                            <p className="mt-5 text-base text-gray-500">
                              <ReactMarkdown className="prose max-w-none">
                                {sponsor.node.body}
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

function SponsorFooterList(props: { sponsors: any[] }) {
  return (
    <>
      {props.sponsors.map((sponsor, index) => (
        <>
          <li key={sponsor.node.title}>
            <a
              target="_blank"
              rel="noopener"
              href={sponsor.node.slug}
              className="text-base text-gray-500 hover:text-gray-900"
            >
              {sponsor.node.name}
            </a>
          </li>
        </>
      ))}
    </>
  );
}

export { SponsorLevelList, SponsorFooterList };
