# Unmai Zeithi - 2.0

A simple Ethereum DApp for determining authenticity of information
---


## Deploy commands

Use the following commands to clone the project

```bash

git clone https://gitlab.com/shivjidboss/unmaizeithi2.0

cd UZ

sudo docker-compose build

sudo docker-compose up

```

The application should be available at `http://localhost:4200`

---


## Introduction

---

Establishing the reliability of online information is a daunting but critical current challenge. Fake news detection is defined as the prediction of the chances of a particular news article to be intentionally deceiving.  We propose decentralised platform aiming to authenticate the genuinity of news, making it easier to spot  trusted and useful information, preventing the spreading of misinformation. Spreading genuine knowledge to make life better. An attempt to fight fake news.We intend to use *blockchain* for keeping track of ‘*votes*’ garnered by each article .

---

## Components

---

The project contains 4 parts :

1. A Go-Ethereum server 
2. A node.js  Express server
3. A fastify  node.js Server
4. An angular nginx server

---

## Docker Usage

---

### Prerequisites

This project uses docker-compose and Docker containers. If you do not have these installed please follow the instructions here: <https://docs.docker.com/install/>

---

**NOTE**

Any Linux distributions which support Docker should work.

---

### Building Docker containers

Before starting the project make sure the Docker service is up and running.

To start up the environment, perform the following tasks:

a)Open a terminal window.

b)Change your working directory to the same directory where you saved the Docker Compose file.
 
c)Run the following commands:

```bash
sudo docker-compose up --build
#The `docker-compose.yml` file creates the required containers
```

To stop the validator and destroy the containers, type `^c` in the docker-compose window, wait for it to stop, then type

```bash
sudo docker-compose down
```

