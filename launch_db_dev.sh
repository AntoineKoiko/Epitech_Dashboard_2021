#!/bin/bash
docker run -d -p 27017:27017 -v dashboard-db-data:/data/db -v dashboard-db-config:/data/configdb --name dashboard-db mongo:latest
