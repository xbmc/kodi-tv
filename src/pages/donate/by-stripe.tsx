import React from "react";
import { DefaultLayout } from "../../components/Layout";
import { loadStripe } from "@stripe/stripe-js";
import ButtonStripe from "../../components/ButtonStripe";

const config = require("../../../gatsby-site-config");
const stripePromise = loadStripe(config.stripe.apikey);

export default class PageStripe extends React.Component {
  constructor() {
    super();
    this.state = {
      donor: null,
      forum: null,
      otPrice: "",
      otCurrency: "USD",
      recCurrency: "USD",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    var value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    let frontmatter = {
      title: "Pay via Credit Card",
      breadcrumbs: "Donate | Stripe",
    };

    const handleOneTimeClick = async event => {
      // When the customer clicks on the button, redirect them to Checkout.
      let sep = "\u2028";
      let donorname = "";
      if (this.state.otPrice === "" || !/^\d+$/.test(this.state.otPrice)) {
        return;
      }
      if (this.state.donor != "") {
        donorname = this.state.donor;
      }
      let forumname = "";
      if (this.state.otForum != "") {
        forumname = this.state.otForum;
      }
      let current_datetime = new Date();
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: config.stripe.oneTime[this.state.otCurrency],
            quantity: parseInt(this.state.otPrice),
          },
        ],
        mode: "payment",
        submitType: "donate",
        clientReferenceId: donorname + sep + forumname,
        successUrl: process.env.GATSBY_SITEURL + "/donate/success-stripe",
        cancelUrl: process.env.GATSBY_SITEURL + "/donate/by-stripe",
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
                        className="shadow-sm focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
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
                        className="shadow-sm focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
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
                                className="shadow-sm focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
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
                                className="shadow-sm focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
                              >
                                <option value="USD">$ USD</option>
                                <option value="EUR">€ EUR</option>
                                <option value="GBP">£ GBP</option>
                                <option value="CAD">$ CAD</option>
                                <option value="AUD">$ AUD</option>
                                <option value="JPY">¥ JPY</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5">
                      <div className="flex justify-end">
                        {this.state.otPrice !== "" ? (
                          <>
                            <button
                              type="submit"
                              onClick={handleOneTimeClick}
                              className="flex items-center justify-center px-8 py-3 mr-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-50 bg-kodi-darker transition duration-500 ease select-none hover:bg-kodi focus:outline-none focus:shadow-outline"
                            >
                              Donate
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              type="submit"
                              disabled
                              className="flex items-center justify-center px-8 py-3 mr-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-50 bg-gray-500 transition duration-500 ease select-none hover:bg-gray-500 focus:outline-none focus:shadow-outline"
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
                                className="shadow-sm text-sm focus:ring-kodi focus:border-kodi block w-full border-gray-300 rounded-md"
                              >
                                <option value="USD">$ USD</option>
                                <option value="EUR">€ EUR</option>
                                <option value="GBP">£ GBP</option>
                                <option value="CAD">$ CAD</option>
                                <option value="AUD">$ AUD</option>
                                <option value="JPY">¥ JPY</option>
                              </select>
                            </div>
                          </div>

                          <div className="pt-3">
                            <ButtonStripe
                              stripePromise={stripePromise}
                              amount={
                                config.stripe.monthly[this.state.recCurrency]
                                  .levelOne.amount
                              }
                              currency={this.state.recCurrency}
                              price_id={
                                config.stripe.monthly[this.state.recCurrency]
                                  .levelOne.price
                              }
                              button_text={
                                config.stripe.monthly[this.state.recCurrency]
                                  .levelOne.text
                              }
                              donorname={this.state.donor}
                              forumname={this.state.forum}
                            />
                          </div>
                          <div>
                            <ButtonStripe
                              stripePromise={stripePromise}
                              amount={
                                config.stripe.monthly[this.state.recCurrency]
                                  .levelTwo.amount
                              }
                              currency={this.state.recCurrency}
                              price_id={
                                config.stripe.monthly[this.state.recCurrency]
                                  .levelTwo.price
                              }
                              button_text={
                                config.stripe.monthly[this.state.recCurrency]
                                  .levelTwo.text
                              }
                              donorname={this.state.donor}
                              forumname={this.state.forum}
                            />
                          </div>
                          <div>
                            <ButtonStripe
                              stripePromise={stripePromise}
                              amount={
                                config.stripe.monthly[this.state.recCurrency]
                                  .levelThree.amount
                              }
                              currency={this.state.recCurrency}
                              price_id={
                                config.stripe.monthly[this.state.recCurrency]
                                  .levelThree.price
                              }
                              button_text={
                                config.stripe.monthly[this.state.recCurrency]
                                  .levelThree.text
                              }
                              donorname={this.state.donor}
                              forumname={this.state.forum}
                            />
                          </div>
                          <div>
                            <ButtonStripe
                              stripePromise={stripePromise}
                              amount={
                                config.stripe.monthly[this.state.recCurrency]
                                  .levelFour.amount
                              }
                              currency={this.state.recCurrency}
                              price_id={
                                config.stripe.monthly[this.state.recCurrency]
                                  .levelFour.price
                              }
                              button_text={
                                config.stripe.monthly[this.state.recCurrency]
                                  .levelFour.text
                              }
                              donorname={this.state.donor}
                              forumname={this.state.forum}
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
        </DefaultLayout>
      </>
    );
  }
}
