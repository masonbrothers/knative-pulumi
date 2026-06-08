import * as pulumi from "@pulumi/pulumi";
import { Service } from "../serving/v1/service";
import { describe, expect, it } from "vitest";

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

describe("generated Knative CRD resources", () => {
  it("constructs a typed Knative Service with generated API defaults", async () => {
    const service = new Service("hello", {
      metadata: {
        name: "hello",
      },
      spec: {
        template: {
          spec: {
            containers: [
              {
                image: "ghcr.io/example/hello:latest",
              },
            ],
          },
        },
      },
    });

    expect(Service.isInstance(service)).toBe(true);
    expect(Service.__pulumiType).toBe("kubernetes:serving.knative.dev/v1:Service");
    await expect(outputValue(service.apiVersion)).resolves.toBe("serving.knative.dev/v1");
    await expect(outputValue(service.kind)).resolves.toBe("Service");
    await expect(outputValue(service.metadata)).resolves.toMatchObject({
      name: "hello",
    });
  });
});

async function outputValue<T>(output: pulumi.Output<T>): Promise<T> {
  return (output as unknown as { promise: () => Promise<T> }).promise();
}
