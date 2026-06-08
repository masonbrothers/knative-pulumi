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
  sources: [
    {
      name: "knative-serving",
      version: "knative-v1.22.1",
      url: "https://github.com/knative/serving/releases/download/knative-v1.22.1/serving-crds.yaml",
    },
    {
      name: "knative-eventing",
      version: "knative-v1.22.1",
      url: "https://github.com/knative/eventing/releases/download/knative-v1.22.1/eventing-crds.yaml",
    },
  ],
};
