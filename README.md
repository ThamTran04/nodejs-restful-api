# nodejs-restful-api

!!! local git repository: "C:\laragon\www\nodejs-restful-api"

### Database: mySQL - phpMyAdmin

<p align="center">
      <img src='https://imgur.com/ciXkYuV.png' alt="" width="900"/>
</p>

### Server: 

Apache + Nodejs => project route can dat trong root of laragon de co the sd duoc Apache server (vi co fichier test.php). Neu project chi co files js thi dat o dau cung duoc. 

<p align="center">
      <img src='https://imgur.com/Xv9lKHW.png' alt="" width="500"/>
</p>

### A. Install a new project

1. Create a repository 'nodejs-restful-api' in githup
2. Clone this repository on your local machine to get started developing
3. by using Visual Studio Code, work direct on this local repository
4. by using laragon terminal (preference), init the nodejs-restful-api projet: at 'C:\laragon\www\nodejs-restful-api': 

* npm init -> create package.json
* npm install express -> create folder node_modules & package-lock.json
* npm install morgan --save-dev -> gérer le middleware
* npm install nodemon --save-dev -> le server va se lancer et écouter les modification réalisées (sans faire npm app.js chaque fois qu’on veut voir le changement, only one time for start by run 'npm start')

https://viblo.asia/p/nodejs-bai-9-gioi-thieu-nodemon-package-3Q75wmyeZWb

   Then, in package.json -> debug -> script

<p align="center">
   <img src='https://user-images.githubusercontent.com/57065970/112743974-534a9900-8f9c-11eb-8446-09bc172b974a.PNG?raw=true' alt="" width="500"/>
</p>
  


* npm start -> lancer le server. Et depuis là, tous les changements dans IDE vont etre actualisés dans browser

### B. Recuperer old project: npm install 

Khi muon gui projet cho nguoi khac thi k can copie het toan bo projet, chi can copy nhung files de source code. Tuc là dossier node_modules & file package-lock.json thi k can.  

Khi khoi chay projet thi can run: npm install de khoi tao lai dossier node_modules & file package-lock.json 

### C. Run project: npm start

at 'C:\laragon\www\nodejs-restful-api'in laragon terminal, lancer "npm start"  

Testing: avec le navigateur ou logiciel Insomnia/Postman

<p align="center">
   <img src='https://imgur.com/QXouP4F.png' alt="" width="400"/>
</p>