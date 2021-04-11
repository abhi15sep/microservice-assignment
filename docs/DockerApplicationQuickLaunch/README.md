# Docker application quick launch

Open `kubernetes-microservices-example` folder.

Run command to build and run application in docker.
```
docker-compose up --build
```
Result
```
Creating network "microservice-asignment_microservice-network" with the default driver
Building service-1
Step 1/10 : FROM node:8-alpine
 ---> 2b8fcdc6230a
Step 2/10 : LABEL version="1.0.0"
 ---> Using cache
 ---> ba012301a941
Step 3/10 : ARG basedir="services/service-1"
 ---> Using cache
 ---> f4fd99740132
Step 4/10 : WORKDIR ${basedir}/ .
 ---> Using cache
 ---> 85a1f723c194
Step 5/10 : COPY ${basedir}/package*.json ./
 ---> Using cache
 ---> 257933ba0d45
Step 6/10 : RUN npm install --silent
 ---> Using cache
 ---> 2efb80731663
Step 7/10 : COPY ${basedir}/ .
 ---> Using cache
 ---> 36b45a574107
Step 8/10 : RUN apk update && apk add bash
 ---> Using cache
 ---> c1eb98d10d6e
Step 9/10 : EXPOSE 9010
 ---> Using cache
 ---> 3971c4ae1ea1
Step 10/10 : CMD npm start
 ---> Using cache
 ---> d1e2b9e14763

[Warning] One or more build-args [build_info] were not consumed
Successfully built d1e2b9e14763
Successfully tagged microservices/service-1:latest
Building service-2
Step 1/10 : FROM node:8-alpine
 ---> 2b8fcdc6230a
Step 2/10 : LABEL version="1.0.0"
 ---> Using cache
 ---> ba012301a941
Step 3/10 : ARG basedir="services/service-2"
 ---> Using cache
 ---> fe9ef7c4a49e
Step 4/10 : WORKDIR ${basedir}/
 ---> Using cache
 ---> b2cbd60a75ec
Step 5/10 : COPY ${basedir}/package*.json ./
 ---> Using cache
 ---> 5c5b9811a523
Step 6/10 : RUN npm install --silent
 ---> Using cache
 ---> 60af39a7dc70
Step 7/10 : COPY ${basedir}/ .
 ---> Using cache
 ---> bdef9ce04e14
Step 8/10 : RUN apk update && apk add bash
 ---> Using cache
 ---> 537607485ab5
Step 9/10 : EXPOSE 3020
 ---> Using cache
 ---> cda0d67a0ade
Step 10/10 : CMD npm start
 ---> Using cache
 ---> 190fcdbad3c0

[Warning] One or more build-args [build_info] were not consumed
Successfully built 190fcdbad3c0
Successfully tagged microservices/service-2:latest
Recreating microservice-asignment_service-1_1 ... done
microservice-asignment_service-2_1 is up-to-date
Attaching to microservice-asignment_service-1_1, microservice-asignment_service-2_1
service-2_1  | 
service-2_1  | > service-2@1.0.0 start /services/service-2
service-2_1  | > node server.js
service-2_1  | 
service-2_1  | ### Server listening on 3020
service-2_1  | Service 2 was called.
service-2_1  | Service 2 was called.
service-2_1  | Service 2 was called.
service-2_1  | Service 2 was called.
service-2_1  | Service 2 was called.
service-1_1  | 
service-1_1  | > service-1@1.0.0 start /services/service-1/ .
service-1_1  | > node server.js
service-1_1  | 
service-1_1  | ### Server listening on 9010
```

## Test application
###### Verify that /api POST is returning correct result.
```
curl --header "Content-Type: application/json"   --request POST   --data '{ "message":"zxcvbnm" }'   http://localhost:9010/api
```
Result
```
{"message":"mnbvcxz","rand":0.8837260639475066}
```