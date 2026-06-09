# knative-pulumi

Pulumi TypeScript bindings for Knative CRDs generated with `crd2pulumi`.

This package is generated from pinned Knative Serving and Eventing release CRD
bundles. It is intended for code that creates Knative resources directly from
Pulumi, such as `serving.knative.dev/v1` `Service` resources, Eventing
`Broker`/`Trigger` resources, and Knative source resources.

## Install

```sh
npm install knative-pulumi @pulumi/kubernetes @pulumi/pulumi
```

## Example

```ts
import { serving } from "knative-pulumi";

new serving.v1.Service("hello", {
  metadata: {
    name: "hello",
    namespace: "default",
  },
  spec: {
    template: {
      spec: {
        containers: [
          {
            image: "ghcr.io/knative/helloworld-go",
          },
        ],
      },
    },
  },
});
```

## Generate

```sh
pnpm generate:crds
```

The CRDs currently come from Knative Serving `knative-v1.22.1` and Knative
Eventing `knative-v1.22.1`.

Local regeneration uses the shared `crd2pulumi-package-tools` package installed
by `pnpm install`; `crd2pulumi` must also be available on `PATH`.

## Publish

GitHub Actions runs install, CRD regeneration, typecheck, and build. Publishing
runs from GitHub Releases with npm provenance and requires an `NPM_TOKEN`
repository secret.
