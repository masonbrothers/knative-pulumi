const assert = require("node:assert/strict");
const pulumi = require("@pulumi/pulumi");
const knative = require("../dist/index.js");

pulumi.runtime.setMocks(
  {
    call: (args) => args.inputs,
    newResource: (args) => ({
      id: `${args.name}_id`,
      state: args.inputs,
    }),
  },
  "project",
  "stack",
  false,
);

async function main() {
  const service = new knative.serving.v1.Service("hello", {
    metadata: { name: "hello" },
    spec: {
      template: {
        spec: {
          containers: [{ image: "ghcr.io/example/hello:latest" }],
        },
      },
    },
  });

  assert.equal(knative.serving.v1.Service.isInstance(service), true);
  assert.equal(await service.apiVersion.promise(), "serving.knative.dev/v1");
  assert.equal(await service.kind.promise(), "Service");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
