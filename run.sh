#!/usr/bin/env bash
docker stop dg
docker rm -f dg
docker build . -t datagen
docker run -d -p 5000:5000 -dit --name dg datagen