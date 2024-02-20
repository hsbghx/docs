---
title: Clerk JWT Auth Policy
sidebar_label: Clerk JWT Auth
---

<!-- WARNING: This document is generated. DO NOT EDIT BY HAND -->

# Clerk JWT Auth






<!-- start: intro.md -->
Authenticate requests with JWT tokens issued by Clerk. This is a customized version of the [OpenId JWT Policy](https://zuplo.com/docs/policies/open-id-jwt-auth-inbound) specifically for Clerk.

<!-- end: intro.md -->

<PolicyStatus isBeta={false} isPaidAddOn={false} />



## Configuration 

The configuration shows how to configure the policy in the 'policies.json' document.

```json title="config/policies.json"
{
  "name": "my-clerk-jwt-auth-inbound-policy",
  "policyType": "clerk-jwt-auth-inbound",
  "handler": {
    "export": "ClerkJwtInboundPolicy",
    "module": "$import(@zuplo/runtime)",
    "options": {
      "allowUnauthenticatedRequests": false,
      "frontendApiUrl": "https://sensible-skunk-49.clerk.accounts.dev"
    }
  }
}
```

<div className="policy-options">
<div><h3 class="anchor anchorWithStickyNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module" id="policy-configuration">Policy Configuration<a href="#policy-configuration" class="hash-link" aria-label="Direct link to Policy Configuration" title="Direct link to Policy Configuration">​</a></h3><ul><li><code>name</code> <span class="type-option">&lt;string&gt;</span> - The name of your policy instance. This is used as a reference in your routes.</li><li><code>policyType</code> <span class="type-option">&lt;string&gt;</span> - The identifier of the policy. This is used by the Zuplo UI. Value should be <code>clerk-jwt-auth-inbound</code>.</li><li><code>handler.export</code> <span class="type-option">&lt;string&gt;</span> - The name of the exported type. Value should be <code>ClerkJwtInboundPolicy</code>.</li><li><code>handler.module</code> <span class="type-option">&lt;string&gt;</span> - The module containing the policy. Value should be <code>$import(@zuplo/runtime)</code>.</li><li><code>handler.options</code> <span class="type-option">&lt;object&gt;</span> - The options for this policy. <a href="#policy-options">See Policy Options</a> below.</li></ul><h3 class="anchor anchorWithStickyNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module" id="policy-options">Policy Options<a href="#policy-options" class="hash-link" aria-label="Direct link to Policy Options" title="Direct link to Policy Options">​</a></h3><p>The options for this policy are specified below. All properties are optional unless specifically marked as required.</p><ul><li><code>allowUnauthenticatedRequests</code><span class="type-option"> &lt;boolean&gt;</span> - <div><p>Allow unauthenticated requests to proceed. This is use useful if you want to use multiple authentication policies or if you want to allow both authenticated and non-authenticated traffic.</p></div></li><li><code>frontendApiUrl</code><span class="type-option"> &lt;string&gt;</span><span class="required-option"> (Required)</span> - <div><p>Your Clerk frontend api url, i.e. <code>https://sensible-skunk-49.clerk.accounts.dev</code>. Can be found in the Clerk portal: <a href="https://dashboard.clerk.com/last-active?path=api-keys">https://dashboard.clerk.com/last-active?path=api-keys</a>.</p></div></li></ul></div>
</div>

## Using the Policy
<!-- start: doc.md -->
Adding Clerk authentication to your route takes just a few steps. Follow the
instructions below to setup Clerk and the Clerk policy.

## Setup Clerk

If you haven't already done so, create a Clerk account and follow one of their
[Quickstarts](https://clerk.com/docs/quickstarts/overview) to create a client
app that can obtain an access token.

In order to setup your policy in the API, you'll need to navigate to the
[Clerk Dashboard](https://dashboard.clerk.com/) and Navigate to the
[API Keys](https://dashboard.clerk.com/last-active?path=api-keys) section. Click
**Advanced** at the bottom of the page and copy the value of the **Frontend API
URL**. You'll use this value later in your API policy configuration.

### Set Environment Variables

Before adding the policy, you'll need to create an environment variable to store
the Clerk Frontend API URL.

1. In the [Zuplo Portal](https://portal.zuplo.com) open the **Environment
   Variables** section in the <SettingsTabIcon /> **Settings** tab.

2. Click **Add new Variable** and enter the name `CLERK_FRONTEND_API_URL` in the
   name field. Set the value to the value you copied previously from the Clerk
   dashboard.

### Add the Clerk Policy

The next step is to add the Clerk JWT Auth policy to a route in your project.

1. In the [Zuplo Portal](https://portal.zuplo.com) open the **Route Designer**
   in the <CodeEditorTabIcon /> **Files** tab then click **routes.oas.json**.

2. Select or create a route that you want to authenticate with Clerk. Expand the
   **Policies** section and click **Add Policy**. Search for and select the
   Clerk JWT Auth policy.

   <Screenshot src="https://cdn.zuplo.com/assets/c4bab517-1e42-4f68-83ce-b0ee4adca713.png" />

3. With the policy selected, notice that there is a property `frontendApiUrl`
   that are pre-populated with environment variable names that you set in the
   previous section.

  <Screenshot src="https://cdn.zuplo.com/assets/85d90802-d919-47c6-b944-c6ec3574a714.png" size="md" />
 
4. Click **OK** to save the policy.

### Test the Policy

Finally, you'll make two API requests to your route to test that authentication
is working as expected.

1. In the route designer on the route you added the policy, click the **Test**
   button. In the dialog that opens, click **Test** to make a request.

2. The API Gateway should respond with a **401 Unauthorized** response.

  <Screenshot src="https://cdn.zuplo.com/assets/626e10a2-2350-439a-9081-1ccf1fe90cad.png" size="md" />

3. Now to make an authenticated request, add a header to the request called
   `Authorization`. Set the value of the header to `Bearer YOUR_ACCESS_TOKEN`
   replacing `YOUR_ACCESS_TOKEN` with the value of the Clerk access token
   retrieved from your client app.

  <Screenshot src="https://cdn.zuplo.com/assets/1486821b-cade-4041-b05b-80d3366327a5.png" size="lg" />

4. Click the **Test** button and a **200 OK** response should be returned.

  <Screenshot src="https://cdn.zuplo.com/assets/8182f932-8db6-4456-842f-f65158b174c0.png" size="md" />

You have now setup Clerk JWT Authentication on your API Gateway.

See [this document](/docs/articles/oauth-authentication) for more information
about OAuth authorization in Zuplo.

<!-- end: doc.md -->

Read more about [how policies work](/docs/articles/policies)