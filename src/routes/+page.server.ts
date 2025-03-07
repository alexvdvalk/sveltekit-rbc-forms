import type { PageServerLoad } from "./$types";

export const load = (async () => {
  return {
    form: {
      data: {
        id: "6c18acda-e86d-4e39-a988-20ab5abb9194",
        status: "published",
        name: "DDA Setup",
        type: "0",
        translations: [
          {
            id: 2,
            forms_id: "6c18acda-e86d-4e39-a988-20ab5abb9194",
            languages_code: "en-US",
            label: "Demand Deposit Account Setup",
            description: null,
            footer:
              "<ul>\n<li>Please note, but continuing with this account, you accept the terms listed in the Service Product Definition</li>\n<li>A minimum of $250,000 initial deposit is required in order to activate an account for your respective legal entity</li>\n<li>This account can not be used to conduct, or transact with any cannabis-related companies ir crypto / virtual asset service providers.</li>\n</ul>",
          },
        ],
        groups: [
          {
            id: "bf13cd05-54da-410f-810d-b2fa916d7ada",
            status: "published",
            name: "DDA View Account Features",
            type: "1",
            translations: [
              {
                id: 1,
                forms_id: "bf13cd05-54da-410f-810d-b2fa916d7ada",
                languages_code: "en-US",
                label: "View Account Features",
                description:
                  "Rendered when a new DDA is being configured by the user",
                footer: null,
              },
            ],
            fields: [],
          },
          {
            id: "cb3b5dc0-51cb-4621-8b29-420d8c455880",
            status: "published",
            name: "DDA Account Basics",
            type: "1",
            translations: [
              {
                id: 3,
                forms_id: "cb3b5dc0-51cb-4621-8b29-420d8c455880",
                languages_code: "en-US",
                label: "Account Basics",
                description: null,
                footer: null,
              },
            ],
            fields: [
              {
                form_fields_id: {
                  status: "active",
                  type: "text",
                  width: "33",
                  translations: [
                    {
                      id: 1,
                      form_fields_id: "6abbe8e7-75e1-4335-9b20-62f01c0b8eed",
                      languages_code: "en-US",
                      label: "Account Nickname",
                      placeholder: "Enter a nickname",
                      help: null,
                      options: null,
                      type: "text",
                    },
                  ],
                },
              },
              {
                form_fields_id: {
                  status: "active",
                  type: "select",
                  width: "33",
                  translations: [
                    {
                      id: 2,
                      form_fields_id: "edfcb52b-0136-472c-b2cd-451e44aca2e5",
                      languages_code: "en-US",
                      label: "Assign Entity",
                      placeholder: null,
                      help: "Select the assigned entity",
                      options: [
                        {
                          label: "Subsidiary A",
                          value: "subsidiary-a",
                        },
                        {
                          label: "Subsidiary B",
                          value: "subsidiary-b",
                        },
                      ],
                      type: "select",
                    },
                  ],
                },
              },
              {
                form_fields_id: {
                  status: "active",
                  type: "radio",
                  width: "50",
                  translations: [
                    {
                      id: 3,
                      form_fields_id: "a71d90bf-8f8b-4c27-9d23-8da84717782d",
                      languages_code: "en-US",
                      label: "Choose Account Type",
                      placeholder: null,
                      help: null,
                      options: [
                        {
                          label: "Interest-Bearing",
                          value: "interest-bearing",
                        },
                        {
                          label: "Non Interest-bearing",
                          value: "non-interest-bearing",
                        },
                      ],
                      type: "radio",
                    },
                  ],
                },
              },
            ],
          },
          {
            id: "a9f68f47-3290-4ca3-97c4-f048f720bd5b",
            status: "published",
            name: "DDA Anticipated Activity",
            type: "1",
            translations: [
              {
                id: 4,
                forms_id: "a9f68f47-3290-4ca3-97c4-f048f720bd5b",
                languages_code: "en-US",
                label: "Anticipated Activity",
                description: null,
                footer: null,
              },
            ],
            fields: [
              {
                form_fields_id: {
                  status: "active",
                  type: "checkbox",
                  width: "50",
                  translations: [
                    {
                      id: 4,
                      form_fields_id: "dbbc7b20-7d8c-432a-b13a-7a571c17dc2b",
                      languages_code: "en-US",
                      label: "Business Purpose of This Account",
                      placeholder: null,
                      help: null,
                      options: [
                        {
                          label:
                            "Payments to employees and contractors(Payroll)",
                          value: "payroll",
                        },
                        {
                          label:
                            "Payments to suppliers and vendors (Accounts payable)",
                          value: "account-payable",
                        },
                        {
                          label:
                            "Collections from customers (Accounts receivable)",
                          value: "account-receivable",
                        },
                        {
                          label: "General business purpose",
                          value: "general",
                        },
                        {
                          label: "Other",
                          value: "other",
                        },
                      ],
                      type: "checkbox",
                    },
                  ],
                },
              },
              {
                form_fields_id: {
                  status: "active",
                  type: "text",
                  width: null,
                  translations: [
                    {
                      id: 5,
                      form_fields_id: "5470a38e-e5e3-4c4e-b81f-8069138cefe3",
                      languages_code: "en-US",
                      label: "Specify Other",
                      placeholder: "Enter a business purpose",
                      help: null,
                      options: null,
                      type: "text",
                    },
                  ],
                },
              },
              {
                form_fields_id: {
                  status: "active",
                  type: "radio",
                  width: "100",
                  translations: [
                    {
                      id: 6,
                      form_fields_id: "fdf03395-be7b-464e-ad47-b0548424a1d5",
                      languages_code: "en-US",
                      label: "Monthly Estimated Transaction Volume",
                      placeholder: null,
                      help: null,
                      options: [
                        {
                          label: "Less than 50 Transactions",
                          value: "under-50",
                        },
                        {
                          label: "Between 50 to 100 Transactions",
                          value: "50-to-100",
                        },
                        {
                          label: "Greater than 100 Transactions",
                          value: "over-100",
                        },
                      ],
                      type: "radio",
                    },
                  ],
                },
              },
              {
                form_fields_id: {
                  status: "active",
                  type: "radio",
                  width: "100",
                  translations: [
                    {
                      id: 7,
                      form_fields_id: "702da61e-2c07-4013-9c6c-a75d0e918631",
                      languages_code: "en-US",
                      label: "Monthly Estimated Transaction Value",
                      placeholder: null,
                      help: null,
                      options: [
                        {
                          label: "Less than $50 million",
                          value: "under-50-million",
                        },
                        {
                          label: "Between $50 million to $100 million",
                          value: "50-to-100-million",
                        },
                        {
                          label: "Greater than $100 million",
                          value: "over-100-million",
                        },
                      ],
                      type: "radio",
                    },
                  ],
                },
              },
              {
                form_fields_id: {
                  status: "active",
                  type: "checkbox",
                  width: "50",
                  translations: [
                    {
                      id: 8,
                      form_fields_id: "2e0c84af-bdba-4dca-b1d6-b556cb0ef837",
                      languages_code: "en-US",
                      label: "Anticipated Spikes in Transaction Volume/Value",
                      placeholder: null,
                      help: null,
                      options: [
                        {
                          label: "Quarter-end",
                          value: "quarter-end",
                        },
                        {
                          label: "Month-end",
                          value: "month-end",
                        },
                        {
                          label: "None",
                          value: "none",
                        },
                        {
                          label: "Other",
                          value: "other",
                        },
                      ],
                      type: "checkbox",
                    },
                  ],
                },
              },
            ],
          },
          {
            id: "a0c39a02-5209-4656-8420-60157128c253",
            status: "published",
            name: "DDA FINCEN Attestations",
            type: "1",
            translations: [
              {
                id: 9,
                forms_id: "a0c39a02-5209-4656-8420-60157128c253",
                languages_code: "en-US",
                label: "FINCEN Attestations",
                description: null,
                footer: null,
              },
            ],
            fields: [
              {
                form_fields_id: {
                  status: "active",
                  type: "text",
                  width: "100",
                  translations: [
                    {
                      id: 9,
                      form_fields_id: "1e56f5ea-b0ea-4ce5-a47a-6c412b9d190f",
                      languages_code: "en-US",
                      label:
                        "Please review the following information for {{client_company}}:",
                      placeholder: null,
                      help: null,
                      options: null,
                      type: "text",
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    },
  };
}) satisfies PageServerLoad;
