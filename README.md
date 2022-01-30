<div id="top"></div>




<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]

[![LinkedIn][linkedin-shield]][linkedin-url]





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
    All the assets related to http server are all located in src/server. All the server related setup is happening in express.api.ts as a single source of truth. 

<p align="right">(<a href="#top">back to top</a>)</p>

### Controller
    Controllers which serves the http resources are located under server/controllers. Each controller is encouraged to find the down stream services using service locators using dependency injection

<p align="right">(<a href="#top">back to top</a>)</p>

### Helpers

    The project uses custom helpers located in src/server/helpers to decrease the surface area of dependencies. Notably using custom decorators for controllers and custom logging utility.

<p align="right">(<a href="#top">back to top</a>)</p>

### Domain
    The domain is where all your domain entities and business logic goes. Care should be taken so that the domain is clean and free of framework related assets and should be properly encapuslated using services or usecases.  

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


<p align="right">(<a href="#top">back to top</a>)</p>




[contributors-shield]: https://img.shields.io/github/contributors/tummalah/ts-rest-api-template.svg?style=for-the-badge
[contributors-url]: https://github.com/tummalah/ts-rest-api-template/graphs/contributors

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/hemanth-tummala-b6490715
