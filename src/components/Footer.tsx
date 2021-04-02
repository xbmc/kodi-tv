import React from "react";
import { Sponsor, Sponsors } from "../hooks/Sponsors";
import { SponsorFooterList } from "./SponsorList";

function Footer() {
  const sponsors: Sponsor[] = Sponsors();
  const orderedSponsors: Sponsor[] = sponsors
    .filter(a => a.sponsor_level === "Diamond")
    .concat(sponsors.filter(a => a.sponsor_level === "Gold"))
    .concat(sponsors.filter(a => a.sponsor_level === "Silver"))
    .concat(sponsors.filter(a => a.sponsor_level === "Bronze"));
  let year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gray-200" aria-labelledby="footerHeading">
        <h2 id="footerHeading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <p className="text-gray-600 text-base">
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
                  <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                    About
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="/about/contact"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contribute"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        Get Involved
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about/gpl-violators"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        GPL Violators
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about/software"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        Kodi Software
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about/team"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        Kodi Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about/privacy-policy"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about/sponsors"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        Sponsorship
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about/foundation"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        Kodi Foundation
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                    Sponsors
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <SponsorFooterList sponsors={orderedSponsors} />
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                    Friends
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://fanart.tv"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        Fanart.TV
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://libreelec.tv"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        LibreELEC
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://osmc.tv"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        OSMC
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://musicbrainz.org"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        MusicBrainz.org
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://www.theaudiodb.com"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        TheAudioDB.com
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://thegamesdb.net"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        TheGamesDB.net
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://www.themoviedb.org"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        TheMovieDB.org
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://www.thetvdb.com"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        TVDB.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                    Social
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://www.facebook.com/KodiEntertainment"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://twitter.com/KodiTV"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://www.youtube.com/user/teamxbmc"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        YouTube
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://www.github.com/xbmc"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="/rss.xml"
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        RSS
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-600 xl:text-center">
              &copy;{year} The Kodi Foundation. All rights reserved. This web site is
              powered by{" "}
              <a target="_blank" rel="noopener" href={"https://www.netlify.com"}>
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
