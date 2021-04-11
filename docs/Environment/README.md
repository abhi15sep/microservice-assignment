# Environment

Here are the dependencies (recommended latest version) needed to run this application
- Ubuntu 20
- Kubernetes
- VirtualBox Hypervisor
- Minikube
- Docker
### How to deploy and run application (all services)
Enable some of the following minikube addons
```bash
minikube addons enable dashboard
minikube addons enable ingress
minikube addons enable metrics-server
```
Run minikube with the command
```bash
minikube start --driver=docker
```
Add the following code to `/etc/hosts` so that the cluster can be accessed through the domains `myapi.com`
```
<minikube ip> myapp.com
```