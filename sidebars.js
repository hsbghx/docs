/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  docs: [
    {
      type: "category",
      label: "Introduction",
      link: {
        type: "doc",
        id: "intro",
      },
      items: [
        "articles/what-is-zuplo",
        "articles/who-uses-and-why",
        "articles/zuplo-in-your-stack",
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "articles/step-1-setup-basic-gateway",
        "articles/step-2-add-api-key-auth",
        "articles/step-3-add-rate-limiting",
        "articles/step-4-deploying-to-the-edge",
        // TODO - coming after Open API
        // "articles/step-5-customizing-documentation",
      ],
    },
    // TODO - coming soon
    // {
    //   type: "category",
    //   label: "Popular Use Cases",
    //   items: [
    //     "articles/startup-launching-a-new-api",
    //     "articles/protecting-an-existing-api,
    //     "articles/enterprise-managing-many-apis",
    //     "articles/api-first-with-supabase",
    //     "articles/microservice-gateway",
    //   ],
    // },
    {
      type: "category",
      label: "Getting to Production",
      items: [
        "articles/environments",
        "articles/source-control",
        "articles/securing-your-backend",
        "articles/custom-domains",
        "articles/testing",
        // TODO - coming soon
        //"articles/monitoring",
        "articles/zuplo-in-your-stack",
        "articles/log-plugins",
        "articles/metrics-plugins",
      ],
    },
    {
      type: "category",
      label: "API Keys",
      items: [
        "articles/api-key-management",
        "articles/api-key-authentication",
        "articles/api-key-end-users",
        "articles/api-key-api",
        "articles/api-key-react-component",
        "articles/api-key-leak-detection",
        "articles/api-key-service-limits",
        "articles/api-key-buckets",
      ],
    },
    {
      type: "category",
      label: "OpenAPI",
      link: {
        type: "doc",
        id: "articles/open-api",
      },
      items: [],
    },
    {
      type: "category",
      label: "How to Guides",
      items: [
        {
          type: "category",
          label: "Local Development",
          items: [
            "articles/local-development",
            "articles/configure-ide-for-local-development",
          ],
        },
        "articles/custom-ci-cd",
        "articles/rename-or-move-project",
        "articles/add-project-collaborators",
        "articles/multiple-auth-policies",
        "articles/archiving-requests-to-storage",
        "articles/per-user-rate-limits-using-db",
        "articles/rick-and-morty-api-developer-portal-example",
        "articles/check-ip-address",
        "articles/custom-logging-example",
        "articles/custom-log-level",
        "articles/advanced-path-matching",
        "articles/lazy-load-configuration-into-cache",
        "articles/handling-form-data",
        "articles/testing-graphql",
        "articles/gke-with-upstream-auth-policy",
        "articles/graphql-security",
      ],
    },
    {
      type: "category",
      label: "Reference",
      items: [
        {
          type: "category",
          label: "Policies",
          link: {
            type: "doc",
            id: "policies/index",
          },
          items: [
            {
              type: "category",
              label: "Authentication",
              items: [
                "policies/api-key-inbound",
                "policies/auth0-jwt-auth-inbound",
                "policies/clerk-jwt-auth-inbound",
                "policies/cognito-jwt-auth-inbound",
                "policies/firebase-jwt-inbound",
                "policies/okta-jwt-auth-inbound",
                "policies/open-id-jwt-auth-inbound",
                "policies/propel-auth-jwt-inbound",
                "policies/supabase-jwt-auth-inbound",
                "policies/basic-auth-inbound",
                "policies/mtls-auth-inbound",
                "policies/ldap-auth-inbound",
                "policies/hmac-auth-inbound",
              ],
            },
            {
              type: "category",
              label: "Authorization",
              items: [
                "policies/acl-policy-inbound",
                "policies/rbac-policy-inbound",
                "policies/geo-filter-inbound",
                "policies/ip-restriction-inbound",
              ],
            },
            {
              type: "category",
              label: "Security & Validation",
              items: [
                "policies/rate-limit-inbound",
                "policies/audit-log-inbound",
                "policies/request-validation-inbound",
                "policies/bot-detection-inbound",
                "policies/require-origin-inbound",
                "policies/request-size-limit-inbound",
              ],
            },
            {
              type: "category",
              label: "Metrics, Billing & Quotas",
              items: [
                "policies/quota-inbound",
                "policies/moesif-inbound",
                "policies/amberflo-metering-inbound",
                "policies/readme-metrics-inbound",
              ],
            },
            {
              type: "category",
              label: "Testing",
              items: [
                "policies/ab-test-inbound",
                "policies/mock-api-inbound",
                "policies/sleep-inbound",
              ],
            },
            {
              type: "category",
              label: "Request Modification",
              items: [
                "policies/transform-body-inbound",
                "policies/remove-headers-inbound",
                "policies/clear-headers-inbound",
                "policies/change-method-inbound",
                "policies/formdata-to-json-inbound",
                "policies/remove-query-params-inbound",
                "policies/set-headers-inbound",
                "policies/set-body-inbound",
                "policies/set-query-params-inbound",
              ],
            },
            {
              type: "category",
              label: "Response Modification",
              items: [
                "policies/transform-body-outbound",
                "policies/remove-headers-outbound",
                "policies/clear-headers-outbound",
                "policies/set-headers-outbound",
                "policies/set-status-outbound",
              ],
            },
            {
              type: "category",
              label: "Upstream Authentication",
              items: [
                "policies/upstream-azure-ad-service-auth-inbound",
                "policies/upstream-gcp-service-auth-inbound",
                "policies/upstream-gcp-jwt-inbound",
                "policies/upstream-firebase-admin-auth-inbound",
                "policies/upstream-firebase-user-auth-inbound",
              ],
            },
            {
              type: "category",
              label: "Async & Archival",
              items: [
                "policies/archive-request-azure-storage-inbound",
                "policies/archive-request-aws-s3-inbound",
                "policies/archive-response-azure-storage-outbound",
                "policies/archive-response-aws-s3-outbound",
              ],
            },
            {
              type: "category",
              label: "Other",
              items: [
                "policies/composite-inbound",
                "policies/brownout-inbound",
                "policies/caching-inbound",
                "policies/custom-code-inbound",
                "policies/custom-code-outbound",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Handlers",
          link: {
            type: "doc",
            id: "handlers/index",
          },
          items: [
            "handlers/url-forward",
            "handlers/url-rewrite",
            "handlers/custom-handler",
            "handlers/aws-lambda",
            "handlers/redirect",
            "handlers/openapi",
            "handlers/system-handlers",
            "handlers/websocket-handler",
          ],
        },
        {
          type: "category",
          label: "Developer Portal",
          items: [
            "articles/developer-portal",
            "articles/dev-portal-setup",
            "articles/dev-portal-configuration",
            "articles/dev-portal-auth",
            "articles/dev-portal-supabase-auth",
            "articles/dev-portal-theme",
            "articles/dev-portal-adding-pages",
            "articles/dev-portal-configuring-sidebar",
            "articles/dev-portal-json",
            "articles/dev-portal-create-consumer-on-auth",
          ],
        },
        {
          type: "category",
          label: "Programming API",
          items: [
            "articles/zuplo-request",
            "articles/environment-variables",
            "articles/zuplo-context",
            "articles/context-data",
            "articles/route-raw",
            "articles/web-standard-apis",
            "articles/web-crypto-apis",
            "articles/node-modules",
            "articles/http-problems",
            "articles/reusing-code",
            "articles/zone-cache",
            "articles/safely-clone-a-request-or-response",
            // Usage discouraged
            // "articles/key-value-store",
            "articles/runtime-behaviors",
            "articles/zp-body-removed",
            "articles/audit-log",
            "articles/runtime-extensions",
            "articles/not-found-handler",
          ],
        },
        {
          type: "category",
          label: "Zuplo CLI",
          link: {
            type: "doc",
            id: "cli/index",
          },
          items: [
            "cli/installation",
            "cli/analytics",
            "cli/authentication",
            "cli/convert",
            "cli/deployments",
            "cli/project",
            "cli/test",
            "cli/tunnels",
            "cli/variables",
            "cli/local-development",
          ],
        },
      ],
    },
    {
      type: "html",
      value: "<hr />", // The HTML to be rendered
      defaultStyle: false, // Use the default menu item styling
    },
    {
      type: "doc",
      id: "articles/support",
    },
    {
      type: "link",
      label: "Changelog",
      href: "https://zuplo.com/changelog",
    },
    {
      type: "doc",
      id: "articles/security",
    },
    {
      type: "link",
      label: "Trust & Compliance",
      href: "https://trust.zuplo.com",
    },
  ],
};

module.exports = sidebars;
