# Containerization of personal portfolio site

This repository is for deploying a personal portfolio site made with HTML,CSS and JS in Docker and Podman.


## Portfolio site

This folder contains the required files to create a portfolio site with your details.

## DockerFile

It consists the instructions to build an dockerimage. it's simply looks like

FROM nginx:alpine (use of Nginx server image)


COPY . /usr/share/nginx/html (copies all files from current directory to default nginx folder)

EXPOSE 80 (application is accessible on this port)

## Docker

### For building Dockerimage use the below command

docker build -t hemanth-portfolio . ( hemanth-portfolio is the docker image which is going to built).

## For running Dockerimage use the below command

docker run -d -p 8080:80 hemanth-portfolio

## Podman


### For building Podmanimage use the below command

podman build -t hemanth-portfolio . ( hemanth-portfolio is the Podman image which is going to built).

## For running Podmanimage use the below command

podman run -d -p 8080:80 hemanth-portfolio


