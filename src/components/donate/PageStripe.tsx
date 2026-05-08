import React from "react";
import { DefaultLayout } from "../Layout";
import ButtonStripe from "../ButtonStripe";
import siteConfig from "../../config/site";

const turnstileSiteKey =
  import.meta.env.PUBLIC_TURNSTILE_SITE_KEY ||
  import.meta.env.GATSBY_TURNSTILE_SITE_KEY;
const checkoutEndpoint = "/.netlify/functions/create-stripe-checkout";

export default class PageStripe extends React.Component {
  turnstileWidgetId = null;

  constructor() {
    super();
    this.state = {
      donor: null,
      forum: null,
      otPrice: "",
      otCurrency: "USD",
      recCurrency: "USD",
      turnstileToken: "",
      checkoutError: "",
      checkoutLoading: false,
      website: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  componentDidMount() {
    this.loadTurnstile();
  }

  componentWillUnmount() {
    const turnstile = (window as any).turnstile;
    if (turnstile && this.turnstileWidgetId !== null) {
      turnstile.remove(this.turnstileWidgetId);
    }
  }

  loadTurnstile() {
    if (!turnstileSiteKey) {
      return;
    }

    if ((window as any).turnstile) {
      this.renderTurnstile();
      return;
    }

    const existingScript = document.querySelector(
      'script[data-turnstile-script="true"]',
    );
    if (existingScript) {
      existingScript.addEventListener("load", () => this.renderTurnstile(), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    script.dataset.turnstileScript = "true";
    script.addEventListener("load", () => this.renderTurnstile());
    document.head.appendChild(script);
  }

  renderTurnstile() {
    if (!turnstileSiteKey || this.turnstileWidgetId !== null) {
      return;
    }

    const container = document.getElementById("stripe-turnstile");
    const turnstile = (window as any).turnstile;
    if (!container || !turnstile) {
      return;
    }

    this.turnstileWidgetId = turnstile.render(container, {
      sitekey: turnstileSiteKey,
      callback: token => {
        this.setState({ turnstileToken: token, checkoutError: "" });
      },
      "expired-callback": () => {
        this.setState({ turnstileToken: "" });
      },
      "error-callback": () => {
        this.setState({
          turnstileToken: "",
          checkoutError: "Bot check failed. Please try again.",
        });
      },
    });
  }

  render() {
    let frontmatter = {
      title: "Pay via Credit Card",
      breadcrumbs: "Stripe | Donate",
    };

    const checkoutDisabled =
      this.state.checkoutLoading ||
      !turnstileSiteKey ||
      !this.state.turnstileToken ||
      Boolean(this.state.website);

    const startCheckout = async payload => {
      this.setState({ checkoutError: "", checkoutLoading: true });

      try {
        const response = await fetch(checkoutEndpoint, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            ...payload,
            donor: this.state.donor || "",
            forum: this.state.forum || "",
            turnstileToken: this.state.turnstileToken,
            website: this.state.website,
          }),
        });
        const data = await response.json();

        if (!response.ok || !data.url) {
          throw new Error(data.error || "Unable to start checkout.");
        }

        window.location.assign(data.url);
      } catch (error) {
        this.setState({
          checkoutError:
            error instanceof Error
              ? error.message
              : "Unable to start checkout. Please try again.",
          checkoutLoading: false,
          turnstileToken: "",
        });

        const turnstile = (window as any).turnstile;
        if (turnstile && this.turnstileWidgetId !== null) {
          turnstile.reset(this.turnstileWidgetId);
        }
      }
    };

    const handleOneTimeClick = async () => {
      if (!Number.isInteger(Number(this.state.otPrice))) {
        return;
      }

      await startCheckout({
        type: "one_time",
        currency: this.state.otCurrency,
        amount: parseInt(this.state.otPrice),
      });
    };

    return (
      <>
        <DefaultLayout frontmatter={frontmatter}>
          <form
            id="stripe"
            onSubmit={e => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <div className="grid grid-cols-1 divide-y-2">
              <div className="pt-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Donor information
                </h3>
                <div className="grid grid-cols-1 gap-y-6 gap-x-10 pb-8 pt-3 max-w-4xl md:grid-cols-2">
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="donor"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name for Donor Wall
                      </label>
                      <span
                        className="text-xs pt-1 text-gray-500"
                        id="donor-optional"
                      >
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="donor"
                        id="donor"
                        onChange={this.handleInputChange}
                        className="shadow-xs focus:ring-3 focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1">
                    <div className="flex justify-between">
                      <label
                        htmlFor="forum"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Forum Username
                      </label>
                      <span
                        className="text-xs pt-1 text-gray-500"
                        id="forum-optional"
                      >
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="forum"
                        id="forum"
                        onChange={this.handleInputChange}
                        className="shadow-xs focus:ring-3 focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div
                    className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
                    aria-hidden="true"
                  >
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      tabIndex={-1}
                      autoComplete="off"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="py-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Security check
                </h3>
                <div className="mt-3">
                  {turnstileSiteKey ? (
                    <div id="stripe-turnstile"></div>
                  ) : (
                    <p className="text-sm text-red-700">
                      Credit card checkout is temporarily unavailable.
                    </p>
                  )}
                </div>
                {this.state.checkoutError ? (
                  <p className="mt-3 text-sm text-red-700">
                    {this.state.checkoutError}
                  </p>
                ) : null}
              </div>

              <div>
                <div className="grid grid-cols-1 divide-y-2 pt-8 md:divide-y-0 md:divide-x-2 md:grid-cols-2">
                  <div className="pb-8 md:pb-0 md:pr-8">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        One-Time Donation
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Use this form to make a one-time donation.
                        <br />
                        Your donation must be at least $5 USD (€5, £4, $7 CAD, $7
                        AUD, ¥500) and in whole dollar increments.
                      </p>
                    </div>
                    <div>
                      <div className="pt-4">
                        <div className="grid gap-x-4 grid-cols-2">
                          <div>
                            <label
                              htmlFor="price"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Amount
                            </label>
                            <div className="mt-1">
                              <input
                                type="number"
                                name="otPrice"
                                id="otPrice"
                                onChange={this.handleInputChange}
                                className="shadow-xs focus:ring-3 focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="currency"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Currency
                            </label>
                            <div className="mt-1">
                              <select
                                id="otCurrency"
                                name="otCurrency"
                                onChange={this.handleInputChange}
                                className="shadow-xs focus:ring-3 focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
                              >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                                <option value="CAD">CAD</option>
                                <option value="AUD">AUD</option>
                                <option value="JPY">JPY</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5">
                      <div className="flex justify-end">
                        {parseInt(this.state.otPrice) >=
                        siteConfig.stripe.minCharge[this.state.otCurrency] ? (
                          <>
                            <button
                              type="submit"
                              disabled={checkoutDisabled}
                              onClick={handleOneTimeClick}
                              className="flex items-center justify-center px-8 py-3 mr-2 border border-transparent text-base font-medium rounded-md shadow-xs text-gray-50 bg-kodi-darker transition duration-500 ease select-none hover:bg-kodi focus:outline-hidden focus:shadow-outline disabled:bg-gray-500 disabled:hover:bg-gray-500"
                            >
                              {this.state.checkoutLoading ? "Starting..." : "Donate"}
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              type="submit"
                              disabled
                              className="flex items-center justify-center px-8 py-3 mr-2 border border-transparent text-base font-medium rounded-md shadow-xs text-gray-50 bg-gray-500 transition duration-500 ease select-none hover:bg-gray-500 focus:outline-hidden focus:shadow-outline"
                            >
                              Donate
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 md:pt-0 md:pl-8">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Recurring Donation
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Pick your recurring donation.
                      </p>
                    </div>
                    <div className="divide-y divide-gray-200">
                      <div className="pt-4">
                        <div className="grid grid-cols-1 max-w-xs">
                          <div>
                            <label
                              htmlFor="currency"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Currency
                            </label>
                            <div className="mt-1">
                              <select
                                id="recCurrency"
                                name="recCurrency"
                                onChange={this.handleInputChange}
                                className="shadow-xs text-sm focus:ring-3 focus:ring-kodi focus:border-kodi block w-full border-gray-300 rounded-md"
                              >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                                <option value="CAD">CAD</option>
                                <option value="AUD">AUD</option>
                                <option value="JPY">JPY</option>
                              </select>
                            </div>
                          </div>

                          <div className="pt-3">
                            <ButtonStripe
                              button_text={
                                siteConfig.stripe.monthly[this.state.recCurrency]
                                  .levelOne.text
                              }
                              disabled={checkoutDisabled}
                              onClick={() =>
                                startCheckout({
                                  type: "subscription",
                                  currency: this.state.recCurrency,
                                  level: "levelOne",
                                })
                              }
                            />
                          </div>
                          <div>
                            <ButtonStripe
                              button_text={
                                siteConfig.stripe.monthly[this.state.recCurrency]
                                  .levelTwo.text
                              }
                              disabled={checkoutDisabled}
                              onClick={() =>
                                startCheckout({
                                  type: "subscription",
                                  currency: this.state.recCurrency,
                                  level: "levelTwo",
                                })
                              }
                            />
                          </div>
                          <div>
                            <ButtonStripe
                              button_text={
                                siteConfig.stripe.monthly[this.state.recCurrency]
                                  .levelThree.text
                              }
                              disabled={checkoutDisabled}
                              onClick={() =>
                                startCheckout({
                                  type: "subscription",
                                  currency: this.state.recCurrency,
                                  level: "levelThree",
                                })
                              }
                            />
                          </div>
                          <div>
                            <ButtonStripe
                              button_text={
                                siteConfig.stripe.monthly[this.state.recCurrency]
                                  .levelFour.text
                              }
                              disabled={checkoutDisabled}
                              onClick={() =>
                                startCheckout({
                                  type: "subscription",
                                  currency: this.state.recCurrency,
                                  level: "levelFour",
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div id="manage" className="mt-8 border-t-2 pt-8">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Manage Your Subscription
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Already a recurring donor? You can manage your subscription, update
              payment details, or view your invoices through our donor portal.
            </p>
            <div className="mt-4">
              <a
                href={siteConfig.stripe.donorPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-xs text-gray-50 bg-kodi-darker transition duration-500 ease select-none hover:bg-kodi focus:outline-hidden focus:shadow-outline"
              >
                Manage Subscription
              </a>
            </div>
          </div>
        </DefaultLayout>
      </>
    );
  }
}
