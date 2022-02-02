<div id="top"></div>




<!-- PROJECT SHIELDS -->

![issues][issues-shield]
[![Release&Deploy](https://github.com/tummalah/ts-rest-api-template/actions/workflows/build.yml/badge.svg?branch=server-setup)](https://github.com/tummalah/ts-rest-api-template/actions/workflows/build.yml)







<h3 align="center">Typescript,Express Rest API Template</h3>

  <p align="center">
    An opinionated minimal boilerplate for clean architecture
    <br />
    <a href="https://github.com/tummalah/ts-rest-api-template/issues">Report Bug</a>
    ·
    <a href="https://github.com/tummalah/ts-rest-api-template/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a></li>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
        <ul>
        <li><a href="#express">Express Server</a></li>
      </ul>
       <ul>
        <li><a href="#controller">Controller</a></li>
      </ul>
             <ul>
        <li><a href="#helpers">Custom Helpers</a></li>
      </ul>
             <ul>
        <li><a href="#domain">Domain</a></li>
      </ul>
    <li>Devops</li>
     <ul>
        <li><a href="#precommit">Pre-Commit</a></li>
      </ul>
      <ul>
        <li><a href="#commit">Commit</a></li>
      </ul>
      <ul>
        <li><a href="#postcommit">Post-Commit</a></li>
      </ul>
            <ul>
        <li><a href="#deploy">Deployments</a></li>
      </ul>
  </ol>
  
  
  
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

A minimal Rest API template trying to follow clean acrhitecture guidelines

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [TypeScript](https://www.typescriptlang.org/)
* [Express](http://expressjs.com/)



<p align="right">(<a href="#top">back to top</a>)</p>




### Express Server
    
  <p>  All the assets related to http server are all located in src/server. All the server related setup is happening in express.api.ts as a single source of truth. </p>

<p align="right">(<a href="#top">back to top</a>)</p>

### Controller
  <p>  Controllers which serves the http resources are located under server/controllers. Each controller is encouraged to find the down stream services using service locators using dependency injection </p>

<p align="right">(<a href="#top">back to top</a>)</p>

### Helpers

  <p>  The project uses custom helpers located in src/server/helpers to decrease the surface area of dependencies. Notably using custom decorators for controllers and custom logging utility.</p>

<p align="right">(<a href="#top">back to top</a>)</p>

### Domain
  <p>  The domain is where all your domain entities and business logic goes. Care should be taken so that the domain is clean and free of framework related assets and should be properly encapuslated using services or usecases.  </p>

  <p align="right">(<a href="#top">back to top</a>)</p>

### PreCommit
  <p>  The project is setup to run ESLint on precommit  </p>

  <p align="right">(<a href="#top">back to top</a>)</p>

### Commit
<p> The project is setup with commit zen utility to generate    conventional  commits <p>

<p align="right">(<a href="#top">back to top</a>)</p>

### PostCommit
<p> Commitlint will kick in on each commit message to prevent non conventional commits. Use the below command to invoke the commit message generator </p>

 ```
npm run commit
```
<p align="right">(<a href="#top">back to top</a>)</p>

### Deploy

<p>The project uses Kustomize to generate K8s Manifest  </p>

```
make deploy-dev
```
deploys to Dev cluster

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing


1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>







<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Clean Architecture](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164)
* [Kustomize](https://kustomize.io/)


<p align="right">(<a href="#top">back to top</a>)</p>




[issues-shield]: https://img.shields.io/github/issues/tummalah/ts-rest-api-template.svg



