import React from "react";
import { graphql } from "gatsby";
import { DefaultLayout } from "../../components/Layout";
import Button from "../../components/Button";

export default function Page({ data, pageContext, location }) {
  let frontmatter = { title: "Donate via Patreon", breadcrumbs: "Donate | Patreon" };
  return (
    <>
      <DefaultLayout frontmatter={frontmatter}>
        You can now support Team Kodi on Patreon. If you do not see a tier you like
        below, you can{" "}
        <a className="underline text-blue-700" href="https://patreon.com/teamkodi">
          go directly to the Patreon site
        </a>{" "}
        and pick an amount.
        <div className="inline-flex spacing-x-3 pt-6">
          <div>
            <Button
              variant="primary"
              component="a"
              target="_blank"
              rel="noopener"
              href="https://www.patreon.com/join/teamkodi/checkout?rid=3395480"
              isLarge
            >
              Join the $10 Tier
            </Button>
          </div>

          <div>
            <Button
              variant="primary"
              component="a"
              target="_blank"
              rel="noopener"
              href="https://www.patreon.com/join/teamkodi/checkout?rid=3395485"
              isLarge
            >
              Join the $25 Tier
            </Button>
          </div>

          <div>
            <Button
              variant="primary"
              component="a"
              target="_blank"
              rel="noopener"
              href="https://www.patreon.com/join/teamkodi/checkout?rid=3395486"
              isLarge
            >
              Join the $50 Tier
            </Button>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
