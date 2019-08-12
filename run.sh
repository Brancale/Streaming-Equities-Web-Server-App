#!/usr/bin/env bash
docker stop hw
docker rm -f hw
docker build . -t helloworld
docker run -d -p 5000:5000 -dit --name hw helloworld