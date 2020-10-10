# OpenJustice.be
Open Technical Specification
![Image](hero.png)
::: warning Information
- :construction: Under Redaction, v0.2 :construction:
- Created on: 08/2020
- Last Update: 10/10/2020
:::

On this page:
[[toc]]

## Introduction

This document contains the open technical specification for the [OpenJustice.be](https://openjustice.be) platform, a tool used to collect and publish belgian court decisions in an open, free, neutral, robust, secure and respectful manner.

We know the problem before us is complex: this is why OpenJustice.be intends to use known development approaches (iterative development, user-centricity, lean and agile methods) to experiment and discover the best possible solutions available under current circumstances. 

### Goal
This Open Technical Specification details [users](/users/#overview), [functionalities](/functionalities/#overview) and [components](/components/#overview) needed to create a court decision collecting and publishing service. 

On a high level, these are:
#### Users
- The public : access and information
- Law professionals : access, information, collabore, share
- Technical users : collabore, build, experiment, research

#### Functionalities
- Profile management
- Text upload, extraction, anonymisation
- Document indexing
- Document search
- Document access (read, navigate, ...)
- API access (navigation)
- Data Quality & Privacy control points (Peer reviews, notification, boosts, ...)
- Collaboration

#### Components
- User interface frontoffice (main interface)
- User interface backoffice (uploading documents)
- Authentication module
- Anonymisation API
- Text extraction API
- Search platform (specialized full-text search database)
- SQL Database
- Service API

Most components plug into provided infrastructure responsible for communication between components (the [broker](/broker/)), which can be done by using OpenJustice.be provided software libraries.

::: warning Important
This document is subject to evolution, and may be partialy or completely revised during the iterative development of the service.
:::

### Out of scope
Aspects of the service which are not documented here, which have to be solved separately :
- hosting
- storage
- backup
- high service availibility


### Future goals
- API for automated upload and management of content
- Automated agents
- High operational security
- Enhanced collaboration functionalities (annotation, compilation, ...)

### Assumptions
For the service to work, this specification assumes:
- Users willing to upload, verify and validate content they have legal access to
- The publication of court decisions in Belgium probably won't be ready by september 1st, 2021

### Existing technology, inspirations
- Current [test benches](https://anon-ui.openjustice.be/) implemented by OpenJustice.be have allowed to explore and implement text extraction, anonymisation and pseudonymisation technologies
- Open-Source software packages such as [ElasticSearch](https://www.elastic.co/) and [Solr](https://lucene.apache.org/solr/) provide highly reliable, scalable and fault tolerant indexing, powering the search and navigation features of many of the world's largest internet sites
- Open-Source highly performant and reliable message brokering software such as [Kafka](https://kafka.apache.org/) or [RabbitMQ](https://www.rabbitmq.com/) allow for high-scale, high-availibility software services to be extremely modular, scalable and updatable

## Software stack
The software backend is to be written in Python, though the modular architecture of the service allows for other software stacks to integrate should the need arise. Currently considered framework for the Frontend is React. The application is intended to be heavily containerized and configureable.


## How to edit
The documentation is [hosted on github](https://github.com/openjusticebe/openjustice_ots), built on [VuePress](https://vuepress.vuejs.org/guide/#how-it-works), and hosted through docker on our server: [https://spec.openjustice.be](https://spec.openjustice.be)

::: tip
VuePress is, just like Docsify or Gitbook, a static site generator who parses MarkDown files and a documentation-oriented theme to render static documentation websites, such as this one
:::

Advanced text formatting (diagrams, UML, flowcharts, math expressions) are possible : check the [demonstration](/demonstration) page.

## Glossary
message broker
: A message broker is an architectural pattern for message validation, transformation, and routing. It mediates communication among applications, minimizing the mutual awareness that applications should have of each other in order to be able to exchange messages, effectively implementing decoupling ([Wikipedia](https://en.wikipedia.org/wiki/Message_broker))

software library
: Collection of implementations provided for use and reuse by multiple independent programs, allowing easy integration of standard functionality without having to re-implement said functionality.

api
: Application Programming Interface, a way for computer applications to exchange information by interrogation and response

gui
: Graphical User Interface, allowing users to interact with the service

anonymisation
: Removal or censoring of personal data

pseudonymisation
: Replacement of personal data by pseudonyms in a way the logical link between occurences remains, without exposing the real identity of the person or organisation.





