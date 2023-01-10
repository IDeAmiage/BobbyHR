# BobbyHR

![turbo](https://vercel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F2oCT6ewHNjBJPSmNHajtP7%2F5e567c84ab13885946aa23d383b63a05%2FFrame_427318999.png&w=3840&q=75)

## Requirements 
Install latest version of nodejs:
https://nodejs.org/en/download/

## Install
```shell
npm i  
```
## Run 
Run PocketBase:
```shell
pocketbase/pocketbase.exe serve
```
PocketBase available at: http://127.0.0.1:8090/_/ </br>
Full documentation: https://pocketbase.io/docs/

Run NextJS 13:
```shell
npm run dev
```
NextJS available at: http://localhost:3000 </br>
Full documentation: https://beta.nextjs.org/docs </br>
Be careful NextJS 13 is in beta, some features may not work.

## Sécurité des branches
### Branche Main
Pour la sécurité de la branche main, il est impossible de merge nos modifications directement sur cette branche sans passer par une branche auxiliaire permettant de tester les fonctionnalités. Seulement le responsable technique peut faire une merge request, c’est-à-dire de demander l’approbation de notre code à quelqu’un du projet de la branche test vers la branche main, afin de mettre à jour avec les dernières fonctionnalités.

### Branche Dev
Cette branche est une branche de test permettant de merge nos modifications afin de les tester au lieu de directement tester dans la branche main. Avant chaque merge entre notre branche et celle-ci, il est nécessaire de faire une merge request.

## Test
