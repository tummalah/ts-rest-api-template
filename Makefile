VERSION ?= 0.0.2


IMAGE_TAG_BASE ?= registry.com/rest-api-template


# Image URL to use all building/pushing image targets
IMG ?= $(IMAGE_TAG_BASE):$(VERSION)



##@ Deployments


deploy-dev: kustomize 
	cd k8s/overlays/dev && $(KUSTOMIZE) edit set image ${IMG} 
	 $(KUSTOMIZE) build k8s/overlays/dev
# uncomment when ready to deploy	 kubectl apply -k build k8s/overlays/dev

deploy-prod: kustomize
	cd k8s/overlays/dev && $(KUSTOMIZE) edit set image ${IMG}
	$(KUSTOMIZE) build k8s/overlays/prod
  

	


OS := $(shell uname -s | tr '[:upper:]' '[:lower:]')
ARCH := $(shell uname -m | sed 's/x86_64/amd64/')

.PHONY: kustomize
KUSTOMIZE = $(shell pwd)/bin/kustomize
kustomize: ## Download kustomize locally if necessary.
ifeq (,$(wildcard $(KUSTOMIZE)))
ifeq (,$(shell which kustomize 2>/dev/null))
	@{ \
	set -e ;\
	mkdir -p $(dir $(KUSTOMIZE)) ;\
	curl -sSLo - https://github.com/kubernetes-sigs/kustomize/releases/download/kustomize/v3.8.7/kustomize_v3.8.7_$(OS)_$(ARCH).tar.gz | \
	tar xzf - -C bin/ ;\
	}
else
KUSTOMIZE = $(shell which kustomize)
endif
endif