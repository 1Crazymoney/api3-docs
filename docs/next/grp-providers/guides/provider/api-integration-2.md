---
title: API Integration (2)
---

# {{$frontmatter.title}}

<TocHeader />
[[TOC]]

A successful integration of an API with an Airnode requires the mapping of each other's interface. This is accomplished using an OIS ([Oracle Integration Specifications](../../../technology/specifications/ois.md)) json object that is designed to follow three basic steps.

- API operations are specified
- Airnode endpoints are specified
- Airnode endpoints are mapped to API operations

> ![api-integration-ois](../../../assets/images/api-integration-ois.png)

OIS is a mapping of API operations, such as  `GET /token/{id}`, to Airnode endpoints. When a client contract calls an AirnodeRRP contract request function, such as `makeRequest(..., callData)`, the callData is communicated to the off-chain Airnode which uses OIS mappings to translate the callData into a valid HTTP request for the appropriate API operation.

Therefore, only thing needed to integrate an API to Airnode is to create an OIS json object which lives in an Airnode's config.json file. This guide is an instructive approach to creating an OIS. As a point of reference, refer to [Oracle Integration Specifications (OIS)](../../../technology/specifications/ois.md) in the Technology section of these docs for additional input and understanding. It may be useful, but not necessary, to reference the [OAS 3.0.3 docs](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md) about fields related to API specifications.

::: tip Tips

- Refer to the [Oracle Integration Specifications (OIS)](../../../technology/specifications/ois.md) reference while using this guide.

- Open the [OIS template](https://docs.api3.org/next/grp-providers/guides/templates/ois-json.html) in another browser window to follow along. 

- View an example of an [Airnode config.json file](../../tutorials/config-examples/config-example-json.md) from the Airnode Starter tutorial.

:::

## OIS Template

An _OIS_ is a json object that is added to an Airnode's [config.json](../templates/config-json.md) file as the (`ois`) _key_, sometimes called a _field_. Try using the [OIS template](../templates/ois-json.md) to construct an OIS and add it to the Airnode's config.json file later.

In the OIS template, there are some fields that contain `{FILL_*}`. This means that the value added is independent from other fields. On the other hand, if two fields contain the same expression  (e.g., `{FILL_OPERATION_PARAMETER_1_NAME}`), you must use the same value in them, because they are referencing each other.

OIS uses a simplified version of the [OpenAPI Specification (OAS)](https://github.com/OAI/OpenAPI-Specification). This means that if you have the OpenAPI/Swagger specifications of the API that you are going to integrate, you are about 80% done, because you can copy paste entire sections (but make sure that you make the necessary modifications to conform to the OIS format). Currently there is no tool that converts OAS to OIS automatically. If you would like to help build this, please join the conversation in [this issue](https://github.com/api3dao/airnode/issues/152). 

This guide will assume you do not have the OpenAPI specifications of the API that you will be integrating.


<!--------------- STEP 1 ---------------->

## Step 1: Specify OIS Definitions

Start building an OIS by adding three descriptive fields to the root of the OIS json object.

```json
{
  "oisFormat": "1.0.0",
  "title": "myOisTitle",
  "version": "0.1.0",
  ...
}
```

### oisFormat

Leave this as `1.0.0`, which is the current OIS format version.

### title

This is a unique title of the OIS. Note that an Airnode can be configured with more than one OIS and uses the title as the OIS identifier.

### version

This is the version of the OIS which allows for version-control of the OIS integration. It is recommended to use [semver](https://semver.org/) versioning. The initial version could be <`0.1.0`>.

<!--------------- STEP 2 ---------------->

## Step 2: Specifying the API

The `apiSpecifications` field is used to describe the API and its operations.

```json
"apiSpecifications": {
  "servers": [...],
  "paths": {...},
  "components": {...},
  "security": {...}
}
```

### Servers

The first step of specifying your API is to enter its _baseURL_ in the `apiSpecifications.servers[0].url` field. Only one object (i.e., url) is allowed in the `apiSpecifications.servers` array. A warning is raised during conversion if servers has multiple elements. This baseURL will apply to all operations.

#### Choosing a Base URL

Consider the following full URL to execute an API operation that returns all know tokens.

> https://www.myapi.com/v1/tokens


There are two ways to segment this.

> **baseURL:** https://www.myapi.com
>
> **path:**     /v1/data

or

> **baseURL**: https://www.myapi.com/v1
>
> **path:** /data

Because the call will be made to <`baseURL+path`> both will result in the same full URL.

Set the baseURL as the section of the full URL that you expect to be shared by all operations. From the examples above it is recommended to use `https://www.myapi.com`, in case additional paths starting with `/v2` get added to the API in the future. As you can tell, API integration requires many subjective choices, and is more art than science.

```json
"apiSpecifications": {
  "servers": [ // Only one element is allowed in the servers array.
    {
      "url": "https://www.myapi.com"
    }
  ],
  ...
}
```

### Paths

The _paths_ field defines all the API operations much like an OpenAPI Specification file.

_What is an API operation?_
> An API operation is specified as a unique combination of a _**path**_ and an HTTP _**method**_. `GET /token/{id}`

#### Operations

In the examples below, `GET` refers to an [HTTP request method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods). This implies that we could have another API operation that can be specified using a different method but the same path.


> path:     /data
>
> method:   GET

> path:     /data
> 
> method:   POST

Therefore, a path is not enough to specify an API operation by itself, we must also provide a method. If a new path is needed then it must start a new object in paths with its own methods. Currently only the GET and POST methods are supported by Airnode.

With regards to the [OIS template](../templates/ois-json.md), the name of the element (denoted as `{FILL_PATH}`) should be replaced with the path (e.g., `/data`). Similarly, `{FILL_METHOD}` should be replaced with the method of the operation you want to integrate (e.g., `get`). The method must be lowercase.

The following example illustrates three operations, `GET /data`, `POST /data`, `GET /tokens`.

```json
"paths": {
  "/data": {   // path    {FILL_PATH}
    "get": {   // method  {FILL_METHOD}
      ...      // parameters
    },
    "post": {  // method  {FILL_METHOD}
      ...      // parameters
    }
  },
  "/tokens": { // path    {FILL_PATH}
    "get": {   // method  {FILL_METHOD}
      ...      // parameters
    }
  }
}
```

#### Parameters (operation)

After specifying the path and method of an API operation, the final step is to specify its parameters.
Each parameter is an object in the `apiSpecifications.paths.{PATH}.{METHOD}.parameters` array, with the fields `in` and `name`.
`in` tells where the parameter goes in the HTTP request, and `name` tells the name that the parameter value will be sent under.

It is not necessary to specify all API operation parameters, but only the ones the on-chain requester will need to be able to provide (see Airnode endpoint [parameters](#parameters)), and the ones that you want to hard-code a value for (see Airnode endpoint [fixed operation parameters](#fixedoperationparameters)).

Currently Airnode supports the following parameter types. For POST methods use the type `query` for requestBody parameters, Airnode will convert all `query` types to `requestBody` when calling the API operation.

> path, query, header, cookie

```json
"paths": {
  "/data/{id}": {   
    "get": {
      "parameters": [
        {
          "in": "path",
          "name": "id"
        },
        {
          "in": "header",
          "name": "Accept"
        }
      ]
    }
  }
}
```

_Example: Get a token_

The `GET /token/{id}` returns a token using the token's `id` which is a `path` parameter.

| Method | Path      | in    |  name         |
|--------|-----------|-------|---------------|
| GET    |/token/{id}| path  | id            |

_Example: Create a token_

The `POST /token` operation accepts three parameters. The name and description of the token are placed in the type `query` and will be moved by Airnode to the requestBody upon calling the API operation. The third is a `header` parameter that describes the Content-Type of the request such as `application/json` or `application/x-www-form-urlencoded`.

| Method | Path      | in    |  name         |
|--------|-----------|-------|---------------|
| POST   |/token     | query | name          |
|        |           | query | description   |
|        |           | header| Accept        |

_Example: Get all tokens_

The `GET /tokens` returns a list of all tokens. The list count can be limited using the `limit' parameter which the API operation considers as optional since it will not return an error if omitted.

> `GET /tokens` returns all tokens.
> 
> `GET /tokens?limit=10` returns the first ten tokens.

| Method | Path      | in     |  name            |
|--------|-----------|--------|------------------|
| GET    |/tokens    | query  | limit            |

### Security schemes

<Todo>

Need to work on this. Need to rely less on OAS.

</Todo>

<!-- markdown-link-check-disable -->
<!-- Once fixed, remove the link-check-disable. -->
As a final step, we need to specify the security schemes of the API.
Usually, this means telling Airnode where the API key goes, and under what name. Note that we will not be entering the API key itself in the OIS, because the OIS is not meant to include any user-specific information. Security credentials such as API keys go in [secrets.env](../../../technology/deployment-files/secrets-env.md) file.

First, name the security scheme by replacing `{FILL_SECURITY_SCHEME_NAME}` under `apiSpecifications.components.securitySchemes`.
Note that you will also need to use the same name under `apiSpecifications.security`.
Make sure to choose a descriptive name, such as `myapi_apikey`.
This name will also be referred to in the [secrets.env](../../../technology/deployment-files/secrets-env.md) file.
<!-- markdown-link-check-enable -->
Next, fill in `type`, `name` and `in` by referring to the [`components` section of OIS](../../../technology/specifications/ois.md#_4-2-components).
[OAS 3.0.3 docs](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#securitySchemeObject) is also a good source for further details.

As noted above, make sure to insert the name of your security scheme under `apiSpecifications.security`.
Furthermore, similar to API operations, you can use multiple security schemes simply by duplicating the one provided in the OIS template (e.g., an API key goes in the header, and an additional user ID goes in the query).
Similarly, if the API you are integrating is publicly accessible, you can remove all security schemes.

Congratulations, you have just specified your API operations!
Now let us move on to the part that will be exposed to the chain.

<!--------------- STEP 3 ---------------->

## Step 3: Specifying Airnode Endpoints

An Airnode endpoint is a service that Airnode exposes to on-chain clients. It maps to an API operation, but the nature of this mapping is customizable. It is the integrator's job to define what this service is.

For example, if your API operation returns an asset price given its ticker (e.g., `BTC`), you can specify the endpoint such that the requester provides the ticker as a parameter. The resulting endpoint would be a general one that returns prices for any kind of asset. On the other hand, you can hardcode `BTC` as the asset whose price will be returned (using [fixed operation parameters](./api-integration.md#fixedoperationparameters)), which would make your endpoint a specific one that only returns the BTC price.

The recommended endpoint definition pattern is to create an Airnode endpoint for each API operation, and allow the requesters to provide all operation parameters themselves. This results in optimal flexibility, and essentially allows the requesters to use the entire API functionality on-chain. Normally, oracle integrations strive to hard-code as many API parameters as possible because passing these parameters on-chain results in a gas cost overhead. However, the Airnode protocol uses [templates](../../../technology/protocols/request-response/template.md) (not to be confused with the OIS template we are using for this guide), which allow requesters to specify a large number of endpoint parameters at no additional gas cost.

Note that there are some cases where you may not want to map endpoints to API operations one-to-one. For example, an API operation can have a `header` parameter, `Accept`, that can take the values `application/json` or `applicatino/xml` to determine how to  format the data that the API will respond to the call.
Airnode expects responses to be in JSON format, and thus hard-coding this parameter as `JSON` would be more suitable than letting the requester decide, as there is only one valid choice.
Again, the integrator's job is to be aware of these subtleties and use judgement.

After this brief detour, let us get back to filling in our OIS template.

### Endpoints

The field `endpoints` is a array, with each row representing an Airnode endpoint. The first field you need to fill in is `name`. Make sure that it is descriptive and unique from other endpoint names. If you are integrating API operations to Airnode endpoints one-to-one, using the API operation path as the endpoint name is a decent choice (i.e., `/token`). Note that you would also add the method to this name if there were multiple operations with different methods for a single path (i.e., `GET/token`).

The next step is to fill in `operation` object. Here, you need to enter the `path` and `method` of an API operation you have defined in `apiSpecifications.paths`, resulting in the Airnode endpoint calling the now linked API operation.

#### fixedOperationParameters

It is not uncommon to hard-code API parameters (recall the `Accept` operation parameter in the above example). Such hard-coded parameters are called `fixedOperationParameters`.

In the OIS template there is a fixed operation parameter under `endpoints.*.fixedOperationParameters`, and it refers to the first API operation parameter. This means that whenever the Airnode receives a request for this endpoint, the respective API call will be made with that API operation parameter set to `endpoints.*.fixedOperationParameters.*.value`. The requester does not supply a value for `fixedOperationParameters`.

An Airnode endpoint can have multiple `fixedOperationParameters`. An API operation parameter cannot be in both `endpoints.*.fixedOperationParameters` and `endpoints.*.parameters`.

#### reservedParameters

<Todo>

The explanation of reservedParameters needs work. It jumps the user around. At least explain what they are in detail before making the jumps.

</Todo>

The requester can provide some parameters that are not mapped to API operation parameters.
These parameters are called "reserved parameters", and their names start with an underscore.
See the [related OIS docs](../../../technology/specifications/ois.md#_5-4-reservedparameters) for more information.

The current list of reserved parameters are `_type`, `_path` and `_times`.
See the [reserved parameters guide](../../../technology/specifications/reserved-parameters.md) to see what each of these parameters are for.
In most cases, all three should be defined as reserved parameters with no fixed/default values, as doing so provides the requester with the most flexibility.

#### parameters

Airnode endpoint parameters map to API operation parameters that the requester is allowed to provide values for. It refers to an API operation through its field `operationParameter`. You can also provide `default` values for endpoint parameters, though this is not recommended in most cases.

Endpoint parameters have a `name` field, which does not have to be the same as the API operation parameter that they map to. As a separate note, an Airnode endpoint can have multiple parameters.

## Conclusion

This was all!
We specified the API operations and Airnode endpoints. Each Airnode endpoint maps to an API operation, and each Airnode endpoint parameter or fixedOperationParameter maps to an API operation parameter. The resulting OIS includes no user-specific information, which means that you can share it for others to easily provide the same services (for example, to set up a third-party oracle network).

Note that there was some subjectivity while defining the Airnode endpoints. This means that two different OISes can exist for the same exact API, differing based on how the integrators designed the interface that the requester will use. However, in most cases, one would simply map API operations to Airnode endpoints directly, and let the requester provide all API operation parameters through the Airnode endpoint parameters.

Currently there is no tool that generates an `endpoints` list that maps to `apiSpecifications.paths` one-to-one. If you would like to help build this, please join the conversation in [this issue](https://github.com/api3dao/airnode/issues/153).

Now that we have our OIS object, the next step is [Configuring Airnode](configuring-airnode.md).