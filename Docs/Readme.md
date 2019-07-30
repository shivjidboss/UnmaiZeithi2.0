# Unmai Zeithi - 2.0

A simple Ethereum DApp for sharing and discovering credible and useful news articles.
---

## Testnet Deployments

- Ropsten:

    contract address: 0x3Eb5EA89f7Dc26B23Ec6aD3d5700b1cB1e8Da32D

    etherscan: https://ropsten.etherscan.io/address/0x3eb5ea89f7dc26b23ec6ad3d5700b1cb1e8da32d

- Rinkeby:

    contract address: 0x4C6F76db52fb8146A140aEfc09EcBcD0Ca32B055
    
    etherscan: https://rinkeby.etherscan.io/address/0x4C6F76db52fb8146A140aEfc09EcBcD0Ca32B055


## Deploy commands

Use the following commands to clone the project

```bash

git clone https://gitlab.com/shivjidboss/UnmaiZeithi2.0
                    or
git clone https://github.com/shivjidboss/UnmaiZeithi2.0

cd UnmaiZeithi2.0

sudo docker-compose build

sudo docker-compose up

```

The application should be available at `http://localhost:4200`

**NOTE**
- To deploy in other networks modify "docker-compose.yml"
- Currently only medium.com articles are supported

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

