# Kubernetes application quick launch

Open `kubernetes-microservices-example` folder.

Run command to build docker images and push images them to local registry.
```
./build_image.sh
```
Result
```
++ minikube docker-env
+ eval export 'DOCKER_TLS_VERIFY="1"' export 'DOCKER_HOST="tcp://192.168.49.2:2376"' export 'DOCKER_CERT_PATH="/home/abhay/.minikube/certs"' export 'MINIKUBE_ACTIVE_DOCKERD="minikube"' '#' To point your shell to 'minikube'\''s' docker-daemon, run: '#' eval '$(minikube' -p minikube 'docker-env)'
++ export DOCKER_TLS_VERIFY=1 export DOCKER_HOST=tcp://192.168.49.2:2376 export DOCKER_CERT_PATH=/home/abhay/.minikube/certs export MINIKUBE_ACTIVE_DOCKERD=minikube
++ DOCKER_TLS_VERIFY=1
++ DOCKER_HOST=tcp://192.168.49.2:2376
++ DOCKER_CERT_PATH=/home/abhay/.minikube/certs
++ MINIKUBE_ACTIVE_DOCKERD=minikube
+ export DOCKER_REG=localhost:5000/
+ DOCKER_REG=localhost:5000/
+ export DOCKER_TAG=:latest
+ DOCKER_TAG=:latest
+ docker image rm localhost:5000/microservices/service-1 --force
Untagged: localhost:5000/microservices/service-1:latest
Untagged: localhost:5000/microservices/service-1@sha256:b854d5a0f91e9c6271513c18c9e66c63168a548cf71cb471bb61390d12f3d2b8
Deleted: sha256:a0e795578c0a7f6a40a02b1f10def21243e8662ee629535fa7615a35bcbd57c0
Deleted: sha256:cf8cc23ad7ac20fb0f144a0c1e3286003aa39fbf0c4d21b22099ae060f876192
Deleted: sha256:7706dcd505cec4c11940d242fbc03f3dbb146257fd2677d582e0aa4502bfde54
Deleted: sha256:2f2e7059d8df172b175346ad5a206d6c9d2448f16ce963e61dc335873fe6a38f
Deleted: sha256:a16e663c4ee5042404bdaa8f647f5fdcb5d3417dfc4ee49fcc2941b2824d7e35
Deleted: sha256:149934b8b0ad21425f138a176de3ca463ea65188ccbabe2bd7fa693c87a571c4
Deleted: sha256:80e6da9dcb0baa289b83cf867545b53fcbf9add137fec817277d0b349adc7872
Deleted: sha256:3bdce2c650bf823579ba56dc19d37337060ac0c1a28448807a275d1dbbf024de
Deleted: sha256:429c05607efb482ed065a255ef3483167c172743a738bb7e5c684419273ac559
Deleted: sha256:64b0dcd34eab32df8b974c5ded7709ab24120c0a69ec0d1bdd03fa351f1dc4b7
Deleted: sha256:1b2e8f6a7e007f71a8eb47b15b605e275853723127fb20f89e279cb2a1f6c18a
Deleted: sha256:14d4a808a448213426239b0230f096496f42858cf894452d1fc470cac7b980e5
Deleted: sha256:341a815ea843ac9c22aedc3e423a05bd0091f38b91401aada5cd0c6f4b3c7806
+ docker image rm localhost:5000/microservices/service-2 --force
Untagged: localhost:5000/microservices/service-2:latest
Untagged: localhost:5000/microservices/service-2@sha256:45b54ff2f91c495f8ab2845571674db566839c43e82bb362a267f19353b30497
Deleted: sha256:3a23767bf73d407f10be79372382ebb50597a03eb5c157df2dd0c20370e861a7
Deleted: sha256:ceb38bc845e7691a60d90628eae895f96eca1e673db1ff1796ced18231d0d443
Deleted: sha256:b949d89d9cc6cdcb4a4e345b7ad152d4ed143a1364c60bb1963754d4a5e05348
Deleted: sha256:f6e233d86b942369394b977ef2f328c041c4d8668540f24987e661595e55971d
Deleted: sha256:cbe13b89b9b3edc9c3d7df8df6c17713ca2861ee76678d5f453a3e38416f3971
Deleted: sha256:621bd79e9838c50f54d5ab93870831d1195fdce9ec1cb295a424f248679bc137
Deleted: sha256:a1cc4786a63c54859717fe39b4d516ae55e6c8f7d6588ea906c688ae9329cce8
Deleted: sha256:cf6252cf2f4c396063fc1392b32041c371af19476214abe3ffc0e2ee90cb8025
Deleted: sha256:92ac41c545ab7cc4acacd41d8869c934f43b1251ecc12fc1be976ebabaa7f5c3
Deleted: sha256:cbae44397876e9522e36b35f5d920e005dc76022ef4059e499b8a796eb038720
Deleted: sha256:9d7c90aad5a5332ed1e70546d87f037e668a019c465ec2fb0f9a391cca689122
Deleted: sha256:c19ce5bf4e01f0e11c43f6ad2941d4dcdfdf91160e6c16299c6ef32503c7a514
Deleted: sha256:0bdcfcc020ba449325bad0d3d0fc40861db35f791b894b0def1290df65a49836
Deleted: sha256:933dbe023dcc9d59e066c9d940c87cae1246b0ebc6cae690da493fdddad1ddba
+ docker-compose build --force-rm --pull
Building service-1
Step 1/10 : FROM node:8-alpine
8-alpine: Pulling from library/node
Digest: sha256:38f7bf07ffd72ac612ec8c829cb20ad416518dbb679768d7733c93175453f4d4
Status: Image is up to date for node:8-alpine
 ---> 2b8fcdc6230a
Step 2/10 : LABEL version="1.0.0"
 ---> Running in b629e3573794
Removing intermediate container b629e3573794
 ---> 8bdb146a365e
Step 3/10 : ARG basedir="services/service-1"
 ---> Running in 01aafdb0f6bf
Removing intermediate container 01aafdb0f6bf
 ---> 6db24c810013
Step 4/10 : WORKDIR ${basedir}/ .
 ---> Running in 729d4d10e570
Removing intermediate container 729d4d10e570
 ---> 2bc44f403987
Step 5/10 : COPY ${basedir}/package*.json ./
 ---> a9b72690ec2f
Step 6/10 : RUN npm install --silent
 ---> Running in 9e7b4f298ec0
added 56 packages from 41 contributors and audited 56 packages in 2.389s
found 0 vulnerabilities

Removing intermediate container 9e7b4f298ec0
 ---> 91f87334a8f9
Step 7/10 : COPY ${basedir}/ .
 ---> 0d88c3dd5811
Step 8/10 : RUN apk update && apk add bash
 ---> Running in bb21c9d30d22
fetch http://dl-cdn.alpinelinux.org/alpine/v3.11/main/x86_64/APKINDEX.tar.gz
fetch http://dl-cdn.alpinelinux.org/alpine/v3.11/community/x86_64/APKINDEX.tar.gz
v3.11.10-9-g278d4e0fd8 [http://dl-cdn.alpinelinux.org/alpine/v3.11/main]
v3.11.10-2-gc655f5d2f5 [http://dl-cdn.alpinelinux.org/alpine/v3.11/community]
OK: 11283 distinct packages available
(1/4) Installing ncurses-terminfo-base (6.1_p20200118-r4)
(2/4) Installing ncurses-libs (6.1_p20200118-r4)
(3/4) Installing readline (8.0.1-r0)
(4/4) Installing bash (5.0.11-r1)
Executing bash-5.0.11-r1.post-install
Executing busybox-1.31.1-r8.trigger
OK: 9 MiB in 20 packages
Removing intermediate container bb21c9d30d22
 ---> 9276c76715df
Step 9/10 : EXPOSE 9010
 ---> Running in 77b4399e487b
Removing intermediate container 77b4399e487b
 ---> f6e9cf37b29b
Step 10/10 : CMD npm start
 ---> Running in 7c190c40422d
Removing intermediate container 7c190c40422d
 ---> 8865be06b30a

[Warning] One or more build-args [build_info] were not consumed
Successfully built 8865be06b30a
Successfully tagged localhost:5000/microservices/service-1:latest
Building service-2
Step 1/10 : FROM node:8-alpine
8-alpine: Pulling from library/node
Digest: sha256:38f7bf07ffd72ac612ec8c829cb20ad416518dbb679768d7733c93175453f4d4
Status: Image is up to date for node:8-alpine
 ---> 2b8fcdc6230a
Step 2/10 : LABEL version="1.0.0"
 ---> Using cache
 ---> 8bdb146a365e
Step 3/10 : ARG basedir="services/service-2"
 ---> Running in 475603f9d6e2
Removing intermediate container 475603f9d6e2
 ---> 0ba18cb293eb
Step 4/10 : WORKDIR ${basedir}/
 ---> Running in 28a8bce9f07c
Removing intermediate container 28a8bce9f07c
 ---> 228a3568c640
Step 5/10 : COPY ${basedir}/package*.json ./
 ---> dedc024090cb
Step 6/10 : RUN npm install --silent
 ---> Running in 881a60caf2af
added 53 packages from 40 contributors and audited 53 packages in 1.615s
found 0 vulnerabilities

Removing intermediate container 881a60caf2af
 ---> 1d68471b3c38
Step 7/10 : COPY ${basedir}/ .
 ---> d0ae6b9b5b55
Step 8/10 : RUN apk update && apk add bash
 ---> Running in d7c44a7fca5e
fetch http://dl-cdn.alpinelinux.org/alpine/v3.11/main/x86_64/APKINDEX.tar.gz
fetch http://dl-cdn.alpinelinux.org/alpine/v3.11/community/x86_64/APKINDEX.tar.gz
v3.11.10-9-g278d4e0fd8 [http://dl-cdn.alpinelinux.org/alpine/v3.11/main]
v3.11.10-2-gc655f5d2f5 [http://dl-cdn.alpinelinux.org/alpine/v3.11/community]
OK: 11283 distinct packages available
(1/4) Installing ncurses-terminfo-base (6.1_p20200118-r4)
(2/4) Installing ncurses-libs (6.1_p20200118-r4)
(3/4) Installing readline (8.0.1-r0)
(4/4) Installing bash (5.0.11-r1)
Executing bash-5.0.11-r1.post-install
Executing busybox-1.31.1-r8.trigger
OK: 9 MiB in 20 packages
Removing intermediate container d7c44a7fca5e
 ---> 710af65ceed0
Step 9/10 : EXPOSE 3020
 ---> Running in b5b1f1ad53eb
Removing intermediate container b5b1f1ad53eb
 ---> afcc93b07845
Step 10/10 : CMD npm start
 ---> Running in 0f6ce141c605
Removing intermediate container 0f6ce141c605
 ---> b5b69bf50d81

[Warning] One or more build-args [build_info] were not consumed
Successfully built b5b69bf50d81
Successfully tagged localhost:5000/microservices/service-2:latest
+ docker tag localhost:5000/microservices/service-1 localhost:5000/microservices/service-1:latest
+ docker tag localhost:5000/microservices/service-2 localhost:5000/microservices/service-2:latest
```

Open `Microservice-Asignment/kubernetes` folder.

Deploy application to kubernetes application with command
```
./kube_deploy.sh
```
Result
```
deployment.apps/service-1-deployment created
service/service-1 created
deployment.apps/service-2-deployment created
service/service-2 created
ingress.networking.k8s.io/ingress-srv created
```

Check kubernetes application status. Wait until you will see all pods in `Running` state and that ingress has external `Address`. Also see that pods does not have external access. Application is only accessible through ingress.
```
./status.sh
```
Result
```
NAME                                    READY   STATUS    RESTARTS   AGE
service-1-deployment-75f8bf8959-2chcl   1/1     Running   0          29s
service-1-deployment-75f8bf8959-gmsgn   1/1     Running   0          29s
service-1-deployment-75f8bf8959-j2zkj   1/1     Running   0          29s
service-2-deployment-6b6c49b87d-22c2d   1/1     Running   0          29s
service-2-deployment-6b6c49b87d-j2bzq   1/1     Running   0          29s
service-2-deployment-6b6c49b87d-smhk5   1/1     Running   0          29s
NAME          CLASS    HOSTS       ADDRESS        PORTS   AGE
ingress-srv   <none>   myapi.com   192.168.49.2   80      29s
NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP   20s
service-1    ClusterIP   10.97.150.243   <none>        80/TCP    29s
service-2    ClusterIP   10.99.234.133   <none>        80/TCP    29          ClusterIP   10.96.0.1        <none>        443/TCP   2m
```

## Test application
###### Verify that application is accessible via Ingress.
```
curl --header "Content-Type: application/json"   --request POST   --data '{ "message":"zxcvbnm" }' http://myapi.com/api
```
Result
```
{"message":"mnbvcxz","rand":0.938391986492787}
```