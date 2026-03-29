import React from "react";
import type { Sponsor } from "../hooks/Sponsors";
import { SponsorFooterList } from "./SponsorList";

function Footer({ sponsors }: { sponsors: Sponsor[] }) {
  const orderedSponsors: Sponsor[] = sponsors
    .filter(a => a.sponsor_type === "Financial")
    .concat(sponsors.filter(a => a.sponsor_type === "Infrastructure"));
  let year = new Date().getFullYear();

  return (
    <>
      <footer
        className="bg-kodibg-deep text-gray-400 relative"
        aria-labelledby="footerHeading"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
        <h2 id="footerHeading" className="sr-only">
          Footer
        </h2>
        <div className="relative max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <p className="text-gray-400 text-sm leading-relaxed">
                Kodi is a free and open source media player application developed by
                the Kodi Foundation, a non-profit technology consortium. Kodi is
                available for multiple operating-systems and hardware platforms,
                featuring a 10-foot user interface for use with televisions and
                remote controls. It allows users to play and view most videos, music,
                podcasts, and other digital media files from local and network
                storage media and the internet.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-xs font-semibold text-kodi-lighter tracking-widest uppercase font-display">
                    About
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li>
                      <a
                        href="/about/foundation"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        Kodi Foundation
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about/team"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        Kodi Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about/sponsors"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        Sponsorship
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about/terms-of-service"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about/privacy-policy"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about/dmca"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        DMCA Policy
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://status.kodi.tv/"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        Status
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-xs font-semibold text-kodi-lighter tracking-widest uppercase font-display">
                    Sponsors
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <SponsorFooterList sponsors={orderedSponsors} />
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-xs font-semibold text-kodi-lighter tracking-widest uppercase font-display">
                    Friends
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://fanart.tv"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        Fanart.TV
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://libreelec.tv"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        LibreELEC
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://musicbrainz.org"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        MusicBrainz.org
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://osmc.tv"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        OSMC
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.theaudiodb.com"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        TheAudioDB.com
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://thegamesdb.net"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        TheGamesDB.net
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.themoviedb.org"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        TheMovieDB.org
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.thetvdb.com"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        thetvdb.com
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://tvheadend.org/"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        Tvheadend
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.tvmaze.com"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        TVMaze
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-xs font-semibold text-kodi-lighter tracking-widest uppercase font-display">
                    Social
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/KodiEntertainment"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://mastodon.cloud/@Kodi"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        Mastodon
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="/rss.xml"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        RSS
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.youtube.com/user/teamxbmc"
                        className="text-sm text-gray-400 hover:text-gray-50 transition-colors duration-300"
                      >
                        YouTube
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-sm text-gray-500 xl:text-center">
              &copy;{year} The Kodi Foundation. All rights reserved. Powered by{" "}
              <a
                className="text-gray-400 hover:text-gray-50 underline underline-offset-2 transition-colors duration-300"
                target="_blank"
                rel="noreferrer"
                href={"https://www.netlify.com"}
              >
                Netlify
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
