# Third Party Notices

This package includes Kubernetes CustomResourceDefinition YAML copied from
Knative Serving and Knative Eventing and TypeScript bindings generated from
those CRDs with `crd2pulumi`.

Upstream projects:

- https://github.com/knative/serving at `knative-v1.22.1`
- https://github.com/knative/eventing at `knative-v1.22.1`

Upstream license: Apache-2.0
License text: `THIRD_PARTY_LICENSES/APACHE-2.0.txt`

Bundled source files:

- `https://github.com/knative/serving/releases/download/knative-v1.22.1/serving-crds.yaml`
- `https://github.com/knative/eventing/releases/download/knative-v1.22.1/eventing-crds.yaml`

Changes made in this package:

- CRD YAML is copied into `crds/` with generated source/version headers.
- TypeScript Pulumi resources are generated from the CRD schemas.
- Generated TypeScript is normalized for provider tokens and trailing whitespace.

No upstream root `NOTICE` file was present in either pinned source tree when
this package was prepared.
