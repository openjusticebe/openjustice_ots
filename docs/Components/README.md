# Components
## Overview
- the **upload interface** : web gui allowing users to upload files, in interaction with the upload API's:
    - **text extractor** : web service responsible for extracting text (and basic styling) for files in a diversity of formats
    - **metadata parser** : web service which will and enrich the metadata for the provided document, be it by text mining or by the use of external data sources
    - **anonymiser** : web service capable of censoring or pseudonymising textual content, be it through patterns, machine learning or any other open source or commercial service
    - **indexer** : web service which will start the indexation of the provided text
- a **backoffice** : web gui allowing users who uploaded content to modify, update or remove published content. This interface will interact will mostly use the same API's as the upload interface.
- the **search/publication interface** : user-orientend web gui allowing users to search, access, share, read, and download published content in multiple available formats. This service will depend on :
    - a **full-text search index**, in the likes of Solr or Elasticsearch
    - a **document publication service**, allowing publication of text documents in multiple formats, easily crawlable and documented. This service will offer a completely open and documented API, including Open Source clients in a selection of programming languages

Besides the functional description of these components, the Open Technical Specifiction is accompanied by :

- An infrastructural scaffolding (to be developed) allowing robust and reliant communication between components. In terms of functionality, this scaffolding acts as a **message broker**
- An **open source software library** (to be developed) containing the needed functionality to plug into the message broker

### Not yet considered
- the **upload/backoffice API** : API allowing for scripted and automated upload, update and deletion of contents 
- **Automated agents** to verify, check and handle possible exposure of personal data.
- **Automated protection rules** to detect and counter eventual adverse activity


## General considerations
Each component has to satisfy following deployment and security requirements :
- deployable in single and multiple instances in a docker environment
- work in complete isolation from each other, using only documentend paths and protocols to exchange information
- components can be stopped, rebooted and redeployed without loss of information or side effects
- the components don't store or otherwise persiste data outside of documented and planned protocols
- components are tested on functionality, regression and errors, and coding standards are enforced
- ...

> Make it work, then make it beautiful, then if you really, really have to, make it fast.
> Joe Armstrong

## [gui] Upload Interface
### Role
### Requirements
### Specifics
### Scaling
### Input / Output

## [api] Text extractor

## [api] metadata

## [api] anonymiser

## [api] indexer

## [gui] Backoffice

## [api] upload/backoffice

## [gui] Search/Publication

## [api] Text search

## [api] Document publishing service

# OpenJustice components
## Message Broker

## OpenJustice Library
