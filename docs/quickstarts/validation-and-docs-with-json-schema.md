---
title: Validate and Document your API with JSON Schema
---

Zuplo is an API gateway that helps any business offer a Stripe-quality experience to developers. You can quickly set up a gateway for your any API, and add validation and documentation in minutes using JSON Schema.

Follow this guide to have a developer portal up and running in no time!

:::note

**How is this different to JSONSchema.net?**

[JSONSchema.net](https://jsonschema.net/) is online tool that helps you write JSON Schema specifications. We recommend it as the fastest way to create your JSON Schema specifications based on example JSON documents. You can then paste them into Zuplo, where the gateway can generate your documentation and validate incoming request bodies.

:::

## Overview

Zuplo uses a `routes.json` file to configure all the routes in the gateway, including any policies applied (like validation).

Get your free developer account at [portal.zuplo.com](https://portal.zuplo.com), sign in to Zuplo, and follow these simple steps to see the developer portal in action.

## Step 1 - Create a new Zuplo Project

Once you've signed into the portal you'll be prompted to create a new project. Enter a name and click create - in a matter of seconds you'll be able to edit the configuration of your new gateway (and developer portal).

## Step 2 - Create a route

:::tip

You can also import an OpenAPI specification to setup your gateway and `routes.json` quickly. This feature is in private beta - e-mail us at [whatzup@zuplo.com](mailto:whatzup@zuplo.com) to request access.

:::

Your project will open on the **Route Designer** which helps you edit the `routes.json` file. Let's add a route with the following properties:

- Method: `POST`
- Path: `/products`
- URL Rewrite: `https://ecommerce-api.zuplo.io/products`

This route will create a proxy where the gateway will forward traffic to our demo API at `https://ecommerce-api.zuplo.io/`.

## Step 3 - Add a JSON Schema

Go to [JSONSchema.net](https://jsonschema.net) and sign in (or **continue as guest**) and paste the following example JSON (a product) in the left window:

```
{
    "name" : "Intelligent Metal Salad",
    "description" : "A slim & simple Metal Gaming Keyboard",
    "material" : "Metal",
    "price" : 894.26
}
```

Click **submit** button to generate your JSON Schema specification in the right window. Click the copy button at the top right to copy the generated JSON Schema specification.

Now, in the [Zuplo portal](https://portal.zuplo.com) make sure you're on the Files tab and click the **[+]** button next to the schemas folder. Choose **New Empty Schema** and enter the file name `product.json`. Paste your JSON Schema definition into the empty file and save your changes.

## Step 4 - Add JSON Schema validation to specify a request body

Zuplo can automatically validate the body of incoming requests using your new JSON Schema. To add this to your route, open **routes.json** again and expand the **Policies** section of your route. Click **Add Policy** to the request pipeline. Choose the JSON Body Validation schema and change the policy configuration as follows (note that it specifies your new file):

```
{
  "export": "ValidateJsonSchemaInbound",
  "module": "$import(@zuplo/runtime)",
  "options": {
    "validator": "$import(./schemas/product.json)"
  }
}
```

Save your changes - your API is now live with validation. Test it out using the **API Test Console** tab. Also, check out your developer portal by clicking the **Open your Developer Portal** link at the top left of the screen. Note that the documentation contains information about the request body (and you can add much more metadata in the `routes.json` file too to enhance your docs).

## What next?

If you haven't already, why not try the [Getting Started guide](https://www.zuplo.com/docs/overview/) and set up a gateway with Rate-Limiting and API-Key authentication. It's easy!