import React from "react";
import { DefaultLayout } from "../../components/Layout";

const config = require("../../../gatsby-site-config");

export default class PagePayPal extends React.Component {
  constructor() {
    super();
    this.state = {
      dtype: "One-time",
      amount: "",
      a3: "",
      buttondisabled: true,
      currency_code: "USD",
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
      title: "Pay via PayPal",
      breadcrumbs: "PayPal | Donate",
    };

    this.state.buttondisabled =
      (this.state.dtype === "One-time" &&
        (parseInt(this.state.amount) <
          config.stripe.minCharge[this.state.currency_code] ||
          this.state.amount == "")) ||
      (this.state.dtype !== "One-time" &&
        (parseInt(this.state.a3) <
          config.stripe.minCharge[this.state.currency_code] ||
          this.state.a3 == ""));

    return (
      <>
        <DefaultLayout frontmatter={frontmatter}>
          <form
            id="paypal"
            action={process.env.GATSBY_PAYPAL_URL}
            method="post"
            acceptCharset="UTF-8"
          >
            <input
              type="hidden"
              name="business"
              value={process.env.GATSBY_PAYPAL_BUSINESS}
            />
            <input type="hidden" name="no_note" value="0" />
            <input type="hidden" name="no_shipping" value="1" />
            <input type="hidden" name="lc" value="en" />
            <input type="hidden" name="on0" value="Donor Name" />
            <input type="hidden" name="on1" value="Forum Name" />
            {this.state.dtype === "One-time" ? (
              <input type="hidden" name="cmd" value="_donations" />
            ) : (
              <>
                <input type="hidden" name="p3" value="1" />
                <input type="hidden" name="t3" value="M" />
                <input type="hidden" name="src" value="1" />
                <input type="hidden" name="sra" value="1" />
                <input type="hidden" name="cmd" value="_xclick-subscriptions" />
              </>
            )}

            <div className="grid grid-cols-1 divide-y-2">
              <div className="pt-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Donor information
                </h3>
                <div className="grid grid-cols-1 gap-y-6 gap-x-10 pb-8 pt-3 max-w-4xl md:grid-cols-2">
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="os0"
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
                        name="os0"
                        id="os0"
                        className="shadow-sm focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="os1"
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
                        name="os1"
                        id="os1"
                        className="shadow-sm focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-1 pt-8 max-w-lg">
                  <div>
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Donation Amount
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Use this form to make either a one-time or recurring
                        donation.
                        <br />
                        Your donation must be at least $5 USD (€5, £4, $7 CAD, $7
                        AUD, ¥500).
                      </p>
                    </div>
                    <div>
                      <div className="pt-4">
                        <div className="grid gap-x-4 gap-y-4 grid-cols-2">
                          <div className="col-span-2">
                            <div>
                              <label
                                htmlFor="dtype"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Donation Type
                              </label>
                              <div className="mt-1">
                                <select
                                  id="dtype"
                                  name="dtype"
                                  onChange={this.handleInputChange}
                                  className="shadow-sm focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
                                >
                                  <option>One-time</option>
                                  <option>Recurring</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div>
                            {this.state.dtype === "One-time" ? (
                              <>
                                <label
                                  htmlFor="amount"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Amount
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="number"
                                    name="amount"
                                    id="amount"
                                    onChange={this.handleInputChange}
                                    className="shadow-sm focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
                                  />
                                </div>
                              </>
                            ) : (
                              <>
                                <label
                                  htmlFor="a3"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Amount
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="number"
                                    name="a3"
                                    id="a3"
                                    onChange={this.handleInputChange}
                                    className="shadow-sm focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
                                  />
                                </div>
                              </>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="currency_code"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Currency
                            </label>
                            <div className="mt-1">
                              <select
                                id="currency_code"
                                name="currency_code"
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
                        {this.state.buttondisabled ? (
                          <>
                            <button
                              disabled
                              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-50 bg-gray-500 transition duration-500 ease select-none hover:bg-gray-500 focus:outline-none focus:shadow-outline"
                            >
                              Donate
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              type="submit"
                              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-50 bg-kodi-darker transition duration-500 ease select-none hover:bg-kodi focus:outline-none focus:shadow-outline"
                            >
                              Donate
                            </button>
                          </>
                        )}
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
