#!/bin/bash
docker build -t "openjustice_ots" \
    --build-arg PORT=80 \
    --build-arg BASE_HREF="/" \
    ./ && \
docker run -it --rm \
    -p 127.0.0.1:80:80 \
    openjustice_ots
