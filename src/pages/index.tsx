import React from "react";
import * as Icons from "heroicons-react";
import { IconList } from "../components/IconList";
import { FullWidthHeroCarousel } from "../components/Carousel";
import { LandingPage } from "../components/Layout";
import { LatestNews } from "../hooks/LatestNews";
import { DistributionList } from "../hooks/DistributionList";
import { Sponsor, Sponsors } from "../hooks/Sponsors";
import { Stats } from "../hooks/Stats";
import {
  FullWidthCallOut,
  FullWidthFeaturesWithIcons,
  FullWidthTwoPaneIconsRight,
  FullWidthTwoPaneImageLeft,
  FullWidthSponsorList,
  FullWidthCTAImageLeft,
  FullWidthNews,
  FullWidthStats,
} from "../components/FullWidth";

function setUniqueDistributionIcons() {
  const distributions = DistributionList();
  let uniqueDistIcons = [];
  let distTextList = [];
  let didApple = false;
  let appleList = "";
  for (let i = 0; i < distributions.length; i++) {
    if (
      distributions[i].name === "iOS" ||
      distributions[i].name === "tvOS" ||
      distributions[i].name === "macOS"
    ) {
      if (appleList == "") {
        appleList = distributions[i].name;
      } else {
        appleList = appleList + ", " + distributions[i].name;
      }
      if (!didApple) {
        uniqueDistIcons.push({ icon: distributions[i].icon });
        didApple = true;
      }
    } else {
      uniqueDistIcons.push({ icon: distributions[i].icon });
      distTextList.push(distributions[i].name);
    }
  }
  distTextList.push(appleList);
  return { uniqueDistIcons, distTextList };
}

function Page() {
  const news = LatestNews();
  const { uniqueDistIcons, distTextList } = setUniqueDistributionIcons();
  const sponsors: Sponsor[] = Sponsors();
  const orderedSponsors: Sponsor[] = sponsors
    .filter(a => a.sponsor_level === "Diamond")
    .concat(sponsors.filter(a => a.sponsor_level === "Gold"))
    .concat(sponsors.filter(a => a.sponsor_level === "Silver"))
    .concat(sponsors.filter(a => a.sponsor_level === "Bronze"));
  const stats = Stats();

  return (
    <LandingPage>
      <FullWidthHeroCarousel
        slides={[
          {
            image: "/images/heroes/ultimate-mediacenter.webp",
            title: "Kodi is the ultimate",
            subtitle: "entertainment center",
            description:
              "Kodi brings your media to life with endless features, a beautiful interface, and ease of use.",
            url: "/about",
            buttontext: "Tell Me More",
          },
          {
            image: "/images/heroes/addons.webp",
            title: "There is an",
            subtitle: "Add-on for that",
            description:
              "Kodi has a giant catalog of community add-ons available for you to customize and tweak your perfect entertainment setup.",
            url: "/addons",
            buttontext: "Browse Add-ons",
          },
          {
            image: "/images/heroes/community.webp",
            title: "Kodi has a community",
            subtitle: "like no other",
            description:
              "Our forum is overflowing with questions, answers, tips, and guides from people all over the globe.",
            url: "https://forum.kodi.tv",
            buttontext: "Get Help",
          },
          {
            image: "/images/kodi-wallpaper-32a-samfisher.webp",
            title: "Are you a developer?",
            subtitle: "Join the team!",
            description:
              "We would welcome anyone who is willing to do their part on any improvement that is needed.",
            url: "/contribute/developers",
            buttontext: "Contribute",
          },
        ]}
      />

      <FullWidthCallOut title="Kodi does it all">
        Got a smart TV? You ain't seen nothin’ yet! Kodi puts your smart TV to shame.
      </FullWidthCallOut>

      <FullWidthFeaturesWithIcons
        title="Kodi is the ultimate entertainment center software"
        description="It plays almost every kind of media you can find and it looks great while doing it! Here are just a few things Kodi excels at:"
        items={[
          {
            icon: <Icons.MusicNoteOutline className="h-6 w-6 text-white" />,
            title: "Music",
            description: `Your music collection has never looked this good! Support for
                    almost every format, playlists, party mixes and more.`,
          },
          {
            icon: <Icons.FilmOutline className="h-6 w-6 text-white" />,
            title: "Movies",
            description: `So much better than a pile of DVDs on a shelf. Kodi brings your
                    movie collection to life with artwork, cast genres and more.`,
          },
          {
            icon: <Icons.VideoCameraOutline className="h-6 w-6 text-white" />,
            title: "TV Shows",
            description: `Perfect for binge watching or the occasional catch up on your
                    favourite show. Kodi keeps all your tv organised like nothing
                    else.`,
          },
          {
            icon: <Icons.PhotographOutline className="h-6 w-6 text-white" />,
            title: "Photos",
            description: `Kodi is the best way to share your photos on the biggest screen
                    in the house with a personal slideshow.`,
          },
          {
            icon: <Icons.ClockOutline className="h-6 w-6 text-white" />,
            title: "PVR",
            description: `Kodi allows you to watch and record live TV all from an easy to
                    use interface. It works with a number of popular backends
                    including MediaPortal, MythTV, NextPVR, Tvheadend and many more.`,
          },
          {
            icon: <Icons.PuzzleOutline className="h-6 w-6 text-white" />,
            title: "Games",
            description: `Kodi isn"t just for passive entertainment media. You can also
                    play games on Kodi. Pick from a large number of emulators, or
                    even play a stand-alone game. There"s even extensive support for
                    game controllers.`,
          },
        ]}
      />

      <FullWidthTwoPaneIconsRight
        icon={<Icons.DownloadOutline className="h-6 w-6 text-white" />}
        title="Kodi runs on just about anything"
        url="/download"
        buttontext="Download Now"
        iconlist={
          <IconList
            items={uniqueDistIcons}
            linkroot="/download"
            iconwidth="150"
            className="grid grid-cols-2 lg:pt-6 gap-8"
          />
        }
      >
        Kodi runs on a huge range of devices and operating systems, including:
        <ul className="pl-10 pt-4">
          {distTextList.map((item, index) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </FullWidthTwoPaneIconsRight>

      <FullWidthTwoPaneImageLeft
        backgroundColor="bg-gray-100"
        icon={<Icons.SparklesOutline className="h-6 w-6 text-white" />}
        title="But wait, there's more!"
        url="/about"
        buttontext="Show me all the good bits"
        image={{
          src: "/images/skin-estuary-example.webp",
          title: "Estuary Skin",
          alt: "Estuary Skin showing music artists",
        }}
      >
        You can get a new skin to change the look of Kodi, or maybe you want to
        stream your favourite internet radio station and control it all with your web
        browser or mobile phone? This and so much more is all possible and easy with
        Kodi.
      </FullWidthTwoPaneImageLeft>

      <FullWidthSponsorList
        title="A big thanks to our sponsors. They help to keep Kodi free."
        sponsors={orderedSponsors}
      />

      <FullWidthNews
        backgroundColor="bg-gray-100"
        title="News"
        subtitle="What's new in the world of Kodi"
        edges={news}
      />

      <FullWidthCTAImageLeft
        title="We need your help"
        url="/contribute"
        buttontext="Find Ways to Help"
        image={{
          src: "/images/people-working.webp",
          title: "three people working at a computer",
          alt: "three people working at a computer",
        }}
      >
        You can help in so many different ways, as you may or may not know, Kodi is
        maintained completely by volunteers and we need and value any contributions
        to the project. If you can code, we are always on the lookout for new team
        members to assist with development. If you are good with your words then you
        can help others in the forum, with QA or translations. If you are time poor
        but still want to give back, then you can donate or purchase some great Kodi
        merch. Visit our contribute page for all the other ways you can help.
      </FullWidthCTAImageLeft>

      <FullWidthCallOut title="100% Open Source!">
        Yes, you read that right! Kodi is software that is built and run for the
        community, by the community.
        <br />
        You can organize media you own and have rights to with no extra cost.
      </FullWidthCallOut>

      <FullWidthStats
        backgroundColor="bg-kodi-darker"
        titleTextColor="text-white"
        subtitleTextColor="text-gray-700"
        title="Vital statistics"
        subtitle="Users and members of the community contribute to Kodi in so many different ways."
        stats={stats}
      />
    </LandingPage>
  );
}

export default Page;
