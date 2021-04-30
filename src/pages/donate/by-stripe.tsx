import React from "react";
import { DefaultLayout } from "../../components/Layout";
import { loadStripe } from "@stripe/stripe-js";
import ButtonStripe from "../../components/ButtonStripe";
import { stripe } from "../../../gatsby-site-config";

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

    let level_one = {};
    let level_two = {};
    let level_three = {};
    let level_four = {};

    switch (this.state.recCurrency) {
      case "USD":
        level_one = {
          price: "price_1HVP1ODOVUu6yhjNAUMDRlrr",
          text: "$5 a month",
          amount: "5",
        };
        level_two = {
          price: "price_1HVP3mDOVUu6yhjNL7qjHUyW",
          text: "$10 a month",
          amount: "10",
        };
        level_three = {
          price: "price_1HVP3kDOVUu6yhjN7kaQEJ8L",
          text: "$25 a month",
          amount: "25",
        };
        level_four = {
          price: "price_1HVP3lDOVUu6yhjN1Z1gYPNf",
          text: "$50 a month",
          amount: "50",
        };
        break;
      case "EUR":
        level_one = {
          price: "price_1HVTTwDOVUu6yhjNVOWyY3hy",
          text: "€5 a month",
          amount: "5",
        };
        level_two = {
          price: "price_1HVTU9DOVUu6yhjNQjBxH8mv",
          text: "€10 a month",
          amount: "10",
        };
        level_three = {
          price: "price_1HVTULDOVUu6yhjNAMa8cdQg",
          text: "€20 a month",
          amount: "20",
        };
        level_four = {
          price: "price_1HVTUWDOVUu6yhjNmtcktSi7",
          text: "€40 a month",
          amount: "40",
        };
        break;
      case "GBP":
        level_one = {
          price: "price_1HVTUuDOVUu6yhjNJr8FS5hm",
          text: "£5 a month",
          amount: "5",
        };
        level_two = {
          price: "price_1HVTV4DOVUu6yhjNXZemCrK0",
          text: "£10 a month",
          amount: "10",
        };
        level_three = {
          price: "price_1HVTVEDOVUu6yhjNg0MVZShG",
          text: "£20 a month",
          amount: "20",
        };
        level_four = {
          price: "price_1HVTVTDOVUu6yhjNOpg1jIfU",
          text: "£40 a month",
          amount: "40",
        };
        break;
      case "CAD":
        level_one = {
          price: "price_1HVTVpDOVUu6yhjNZjhMEWO2",
          text: "$10 a month",
          amount: "10",
        };
        level_two = {
          price: "price_1HVTW1DOVUu6yhjNg1TIoWum",
          text: "$15 a month",
          amount: "15",
        };
        level_three = {
          price: "price_1HVTWCDOVUu6yhjNBjXG9Fe9",
          text: "$35 a month",
          amount: "35",
        };
        level_four = {
          price: "price_1HVTWMDOVUu6yhjNDz4y9Jzt",
          text: "$65 a month",
          amount: "65",
        };
        break;
      case "AUD":
        level_one = {
          price: "price_1HVTWeDOVUu6yhjNWKXIu8WJ",
          text: "$10 a month",
          amount: "10",
        };
        level_two = {
          price: "price_1HVTWtDOVUu6yhjNMZRWL8bX",
          text: "$15 a month",
          amount: "15",
        };
        level_three = {
          price: "price_1HVTX4DOVUu6yhjNK21runP2",
          text: "$35 a month",
          amount: "35",
        };
        level_four = {
          price: "price_1HVTXJDOVUu6yhjNl3UvxLrr",
          text: "$70 a month",
          amount: "70",
        };
        break;
      case "JPY":
        level_one = {
          price: "price_1HVTXgDOVUu6yhjNhETVDMbW",
          text: "¥500 a month",
          amount: "500",
        };
        level_two = {
          price: "price_1HVTXtDOVUu6yhjNtDjMUo4W",
          text: "¥1000 a month",
          amount: "1000",
        };
        level_three = {
          price: "price_1HVTYADOVUu6yhjNJoEjtHcY",
          text: "¥2500 a month",
          amount: "2500",
        };
        level_four = {
          price: "price_1HVTYLDOVUu6yhjNziS2gXhj",
          text: "¥5000 a month",
          amount: "5000",
        };
        break;
    }

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
      let datetime_str =
        current_datetime.getFullYear() +
        (current_datetime.getMonth() + 1) +
        current_datetime.getDate() +
        current_datetime.getHours() +
        current_datetime.getMinutes() +
        current_datetime.getSeconds();
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
        cancelUrl: process.env.GATSBY_SITEURL + "/donate",
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
                              amount={level_one.amount}
                              currency={this.state.recCurrency}
                              price_id={level_one.price}
                              button_text={level_one.text}
                              donorname={this.state.donor}
                              forumname={this.state.forum}
                            />
                          </div>
                          <div>
                            <ButtonStripe
                              stripePromise={stripePromise}
                              amount={level_two.amount}
                              currency={this.state.recCurrency}
                              price_id={level_two.price}
                              button_text={level_two.text}
                              donorname={this.state.donor}
                              forumname={this.state.forum}
                            />
                          </div>
                          <div>
                            <ButtonStripe
                              stripePromise={stripePromise}
                              amount={level_three.amount}
                              currency={this.state.recCurrency}
                              price_id={level_three.price}
                              button_text={level_three.text}
                              donorname={this.state.donor}
                              forumname={this.state.forum}
                            />
                          </div>
                          <div>
                            <ButtonStripe
                              stripePromise={stripePromise}
                              amount={level_four.amount}
                              currency={this.state.recCurrency}
                              price_id={level_four.price}
                              button_text={level_four.text}
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
