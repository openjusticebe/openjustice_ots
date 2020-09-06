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

Besides the functional description of these components, the Open Technical Specification is accompanied by :

- An infrastructural scaffolding (to be developed) allowing robust and reliant communication between components. In terms of functionality, this scaffolding acts as a **message broker**
- An **open source software library** (to be developed) containing the needed functionality to plug into the message broker

### Not yet considered
- the **upload/backoffice API** : API allowing for scripted and automated upload, update and deletion of contents
- **Automated agents** to verify, check and handle possible exposure of personal data.
- **Automated protection rules** to detect and counter eventual adverse activity


## General considerations
Each component has to satisfy following deployment and security requirements :
- deployable in single and multiple instances in a docker environment
- work in complete isolation from each other, using only documented paths and protocols to exchange information
- components can be stopped, rebooted and redeployed without loss of information or side effects
- the components don't store or otherwise persist data outside of documented and planned protocols
- components are tested on functionality, regression and errors, and coding standards are enforced
- ...

> Make it work, then make it beautiful, then if you really, really have to, make it fast.
> Joe Armstrong

## [gui] Upload Interface
### Role
Allows users to upload court decisions files. By integrating with other modules, the text is extracted from the files, and can be formatted by the user. The interface assists the user in the removal of protected data, and lets the user publish the document.

### Requirements
#### Functional
- File uploading
- Formatting of extracted text
- Assisted removal of protected data
- Review changes and end result before publishing the texts
#### Integration
##### Input
- Browser
##### Output
- Texts published by the user are sent to the internal message broker on the relevant "topic"
##### Backend
- access to user profile service (http)
- access to text extraction API (http)
- access to text anonymisation, pseudonymisation API (http)
- access to text pub
#### Specific
- The uploading process must be well explained and understood by the user, proper ergonomics have to be studied and implemented.
- Preferably static / client-rendered, software stacks like React or Vue
### Misc
- All server interactions, except user login/logout, are stateless : no information is saved during this process until proper publishing by the user
- all communication with the server must be encrypted (https)
- no third-party tracking or analytics code, some analytics may be added by OpenJustice but only with the intent to improve design, ergonomics and overall user satisfaction.



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

## User profile management
