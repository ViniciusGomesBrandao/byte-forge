
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


# Introduction

Byte Forge is a modern hacking and bug enumeration application.

Currently runs with:

- Angular v16.2.12
- Tauri 1.5.3

With this sample, you can:

- Run your app in a local development environment with Tauri & Hot reload
- Run your app in a production environment
- Package your app into an executable file for Linux, Windows & Mac

/!\ Angular CLI needs Node 16 or later to work correctly.



## Getting Started



*Install Tauri (Rust)*

https://tauri.studio/docs/getting-started/prerequisites

*Clone this repository locally:*

```bash
  git clone https://github.com/ViniciusGomesBrandao/byte-forge.git
  cd byte-forge
  npm install
```


## Project structure

| Folder    | Description                                   |
|-----------|-----------------------------------------------|
| src-tauri | Tauri main process folder (Rust)              |
| src       | Tauri renderer process folder (Web / Angular) |


## Running locally

Clone the project

```bash
  git clone https://github.com/ViniciusGomesBrandao/byte-forge.git
```

Enter the project directory

```bash
  cd byte-forge
```

Install dependencies

```bash
  npm install
```

**Run web development environment**

```bash
  npm run web:serve
```

**Run native development environment**

```bash
  npm run tauri:server
```

## Run Commands

| Command                 | Description                                                                                           |
|-------------------------|-------------------------------------------------------------------------------------------------------|
| `npm run web:serve`     | Execute the app in the web browser (DEV mode)                                                         |
| `npm run web:prod`      | Build the app that can be used directly in the web browser. Your built files are in the /dist folder. |
| `npm run tauri:bundle`  | Builds your application and creates an app consumable based on your operating system                  |
| `npm run tauri:server`  | Execute the app in native software (DEV mode) |

**Your application is optimised. Only /dist folder is included in the final bundle.**
## Running the tests

To run the tests, run the following command

```bash
  npm run test
```
## Build

To build this project, run

```bash
  npm run tauri:bundle
```


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Stack used

**UI:** Angular

**Native** Tauri, Rust


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Support

For support, email mobley.byteforge@gmail.com or join our Slack channel.
## Feedback

If you have any feedback, please let us know at mobley.byteforge@gmail.com


## Authors

- [@ViniciusGomesBrandao](https://github.com/ViniciusGomesBrandao)


## Reference

 - [Tauri](https://tauri.app/v1/guides/)
 - [Angular](https://angular.dev/overview)
 


#
# Hello, I'm Vinicius! 👋


## 🚀 About me
Full Stack Developer with experience in web, mobile, and native development. Passionate about information security and committed to delivering high-quality, secure solutions.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![instagram](https://img.shields.io/badge/instagram-1DA1F2?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/)

