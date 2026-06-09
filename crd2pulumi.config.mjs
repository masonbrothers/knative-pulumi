export default {
  cleanEntries: [
    "autoscaling",
    "caching",
    "eventing",
    "flows",
    "messaging",
    "networking",
    "serving",
    "sinks",
    "sources",
  ],
  downloadTimeoutMs: 30000,
  sources: [
    {
      name: "knative-serving",
      sha256: "469f019b54407f6b4362da8500e6ba343c6d2e3f2cb27c2c1cfcaaab4f6d5883",
      version: "knative-v1.22.1",
      url: "https://github.com/knative/serving/releases/download/knative-v1.22.1/serving-crds.yaml",
    },
    {
      name: "knative-eventing",
      sha256: "12eef4ec089dd820a900f2b979f0f86afbf4044e28114dc8f6a901abaa875473",
      version: "knative-v1.22.1",
      url: "https://github.com/knative/eventing/releases/download/knative-v1.22.1/eventing-crds.yaml",
    },
  ],
};
