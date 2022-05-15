# Aplicație pentru vizualizarea cursurilor de IT destinate juniorilor

# Poinărescu Adriana Daniela
# SIMPRE, an 1

# Link video: https://www.youtube.com/watch?v=zRIdAkaBHgg&ab_channel=AdrianaPoinarescu

**Introducere**

De când trăim în ,,era informației”, unul dintre cele mai actuale domenii este domeniul IT (Information technology), ce continuă să prolifereze, făcând parte din viața noastră de zi cu zi. Digitalizarea a adus cu ea inovație, divertisment vast, descoperire socială de mare anvergură, comunicare îmbunătățită și globalizare a cunoștințelor. Lumea se schimbă, iar tinerii trebuie să fie capabili să mențină o strânsă legătură cu tehnologia actuală și să aibă o capacitate bună de a o stăpâni.
Aplicația are ca principal scop colectarea celor mai de actualitate și folositoare cursuri de IT pentru începători. Pot fi găsite atât cursuri gratuite, cât și lecții care se desfășoară pe o anumită perioadă și care sunt aprofundate prin intermediul mentorilor. Relația copiilor cu tehnologia trebuie să fie una constructivă, astfel încât să își ducă pasiunile la nivel de artă și să dezvolte abilități.

**Servicii cloud**

_1.	Firebase_

În cadrul proiectului am ales pentru realizarea interfeței, React.js fiind un framework JavaScript foarte popular și aflat în continuă evoluție, alături de biblioteca Redux. Pentru partea de backend am utilizat Node.js, iar informațiile au fost stocate atât într-o bază de date MongoDB, cât și într-o bază de date Firebase, aceasta reprezentând și unul dintre cloud-urile folosite în proiect.
Am ales pentru partea de autentificare și înregistrare să folosesc Firebase Realtime, deoarece este o modalitate ușoară pentru utilizator să sincronizeze datele, astfel acesta se poate autentifica fie cu contul Google, fie cu un cont ales de el (prin email și parolă). Pe lângă acest lucru, ajută la securitate, confirmarea pentru realizarea contului fiind trimisă sub formă de mail. 

![1](https://user-images.githubusercontent.com/72390524/168484176-7080e86c-7bb1-49a0-bac9-53e3275757e2.png)
Figura 1. Baza de date Firebase si prezența a doi utilizatori logați diferit

_2.	Cloudinary_

Un alt cloud folosit este Cloudinary, de tip SaaS, care oferă servicii de gestionare a imaginilor și video bazate pe cloud. Acesta permite utilizatorilor să încarce, să stocheze, să gestioneze, să manipuleze și să livreze imagini și videoclipuri pentru site-uri web și aplicații. Cloudinary este folosit de 1 milion de dezvoltatori de aplicații web și mobile la peste 8.000 de companii, inclusiv Condé Nast , Dropbox , Forbes , Outbrain , Taboola și Answers.com. Magazine a numit Cloudinary „standardul de aur” al managementului imaginilor pe web.
![2](https://user-images.githubusercontent.com/72390524/168484177-88e3ebff-a62e-42ce-b7c0-5cf929836cc3.png)
Figura 2. Metodă de autentificare Cloudinary

![3](https://user-images.githubusercontent.com/72390524/168484178-daeb0644-9977-4019-a293-84e5c808ecfc.png)
Figura 3. Imaginile disponibile in Cloud

**Cloudinary API**

API Upload este un API cu tarif nelimitat, care permite încărcarea activelor media (resurse) și oferă o gamă largă de funcționalități, inclusiv gestionarea de bază și avansată a activelor. Punctele finale API Upload sunt accesate folosind HTTPS. Toate metodele din acest API necesită și o semnătură, pentru care este nevoie de Secretul API, pentru a permite autentificarea cererii pe serverele Cloudinary. SDK-urile Cloudinary generează automat această semnătură, așa că trebuie să o adăugați doar atunci când utilizați apelurile API REST direct la punctul final.

 ![4](https://user-images.githubusercontent.com/72390524/168484179-bf0a26b0-d238-4200-ac83-27a8a19067ec.png)

Figura 4. Configurare Cloudinary

Stocarea cheilor folosite pentru a decupla configurația aplicației noastre de codul acesteia, este realizată prin crearea fișierul .env în care sunt stocate API KEY-urile sub formă de cheie valoare.

**Flux de date**

În ceea ce privește dependențele, cloudinary oferă o soluție pentru gestionarea imaginilor, fără a fi nevoie de instalarea unui software complex, body-parser pentru a gestiona cererile HTTP POST, cors pentru a permite accesul în mod normal la resurse din alte origini, express pentru a construi API-urile de tip REST, mongoose ajută la stabilirea conexiunii între MongoDB și aplicația Express, nodemon ajută la menținerea serverului în funcțiune și permite rularea acestuia imediat ce sunt detectate orice modificări, fără a fi nevoie de repornire, firebase-admin permite accesul la serviciile Firebase. Esența vieții backend-lui se află în fișierul server.js  unde este creat serverul Express. Aici se realizeză toate importurile necesare ale diferitelor biblioteci, este setată utilizarea în aplicație, configurarea pentru conectarea prin mongoose la baza de date MongoDB și este setat portul de rulare (8000) pentru a asculta solicitările utilizatorilor.
În ceea ce priveste fluxurile de date, putem vorbi din doua perspective, ținând cont de faptul ca sunt prezente doua baze de date.
Pentru utilizatori:
Pentru autentificarea prin Firebase, apelarea unor API-uri dintr-un mediu de încredere este realizată prin descărcarea unei chei de cont a proiectului. Logica care se ocupă de crearea de noi utilizatori este realizată într-un director separat, numit middlewares, ce conține fișierul auth.js (Figura 33). Aici este verificat dacă solicitările primite sunt de la utilizatori autentificați și specializați (administrator, client). Prin intermediul acestui middleware, utilizatorul primește o eroare de fiecare dată când încearcă să acceseze o resursă privată fără a fi autentificat corespunzător.
 ![5](https://user-images.githubusercontent.com/72390524/168484180-f1a77f26-4f3a-40d3-9787-25e44304cb80.png)
 

Figura 5. Autentificare prin Firebase

Pentru realizarea schemei bazei de date și a modelelor bazate pe schema respectivă  moongoose este alegerea ideală. Astfel directorul models conține fișiere pentru modelele aplicației.
Pentru exemplificarea principiului pe care a fost creat fiecare model, am ales modelul  user.js, care stochează datele utilizatorilor aplicației. Schema prezintă diverse câmpuri (nume, email, rol), aceștia fiind parametrii pe care le are fiecare utilizator. După construirea schemei, construim modelul User și îl exportăm, iar în baza de date, MongoDB, va fi pluralizat și salvat cu numele de colecție Users.

 ![6](https://user-images.githubusercontent.com/72390524/168484182-7cfebcf7-1108-4611-be29-bdef9205bcdb.png)

Figura 6. Creare schemă User în MongoDB

Rutele sunt conținute în directorul routes, unde punctele finale ale aplicației (URI) răspund la solicitările clientului care sunt transmise, apoi, către funcțiile corespunzătoare ale controlerelor. Pentru rutele de autentificare, evident este nevoie de tipul utilizatorului (administrator, client), crearea și modificarea contului. Inițial trebuie solicitată ruta de la Express în fișier, funcțiile personalizate din directorul middleware (authCheck, adminCheck) și createOrUpdateUser, currentUser din fișierul controlerelor. După toate importurile necesare, sunt implementate rutele propriu-zise, care răspund la solicitări de tip POST.
 ![7](https://user-images.githubusercontent.com/72390524/168484183-edc72558-699c-487b-84cc-3dcf276ae31a.png)

Figura 7. Rute autentificare

Pentru produse:
Logica pentru implementarea funcțiilor necesare în rute se află în controlere. Aici sunt validate date, indiferent dacă au fost trimise de pe frontend sau nu. Pentru fiecare tip de rută, există un controler, pentru a nu avea o clasă comună care să realizeze mai multe acțiuni
În cadrul unul produs sunt integrate mai multe modele, acesta facând parte dintr-o categorie și o subcategorie. 
Având drepturi de admin, utilizatorul poate crea atât noi produse, cât și noi categorii/subcategorii.
Asupra categoriilor și subcategoriilor se pot realiza operațiuni de bază ale stocării persistente (CRUD).
 ![8](https://user-images.githubusercontent.com/72390524/168484184-23d440ac-c68d-44e3-aa4f-79e3b2a45ddb.png)

Figura 8. Rute pentru Categorii

 ![9](https://user-images.githubusercontent.com/72390524/168484185-f255b27c-b4bb-4ffe-8dcc-71335e15ceb4.png)

Figura 9. Controler categorii

**Prezentare aplicatie**

JuniorVision este o aplicație ușor de utilizat, cu o navigare clară, bine definită, care îi ajută pe vizitatori să găsească ce doresc și ce au nevoie într-un mod rapid. Aplicația poate fi prezentată din mai multe perspective, în funcție de tipul de utilizator (neautentificat, autentificat, administrator), dar toate au o bază comună, cu excepția administratorului ce prezintă anumite sarcini speciale. Pentru început, înainte de a descrie întreaga aplicație, de menționat este faptul că meniul de navigare (Figura 34) este păstrat la un nivel superior. Acesta este vizibil întotdeauna în partea de sus a ecranului, indiferent de pagina accesată.

Paginile de înregistrare și autentificare Etapa de înregistrare se poate realiza în două moduri și prezintă mai mulți pași. O primă variantă este crearea unui cont cu ajutorul unei adrese de email valide și introducerea unei parole alese de utilizator. Pagina principală a acestei etape (Figura 35), are un aspect simplu, fără a pune în dificultate clientul. Pentru început acesta trebuie să completeze un singur câmp (1). După introducerea unui email valid, va fi trimis un mesaj de confirmare (2), unde prin accesarea adresei primite (3), se va deschide din nou pagina de înregistrare, cu email-ul setat implicit și câmpul pentru introducerea parolei (4). 
O a doua variantă este conectarea prin intermediul unui cont Google. Acest lucru se poate realiza direct din pagina de autentificare, fără a fi nevoie de alți pași.
 ![10](https://user-images.githubusercontent.com/72390524/168484186-14f32a54-8a9c-472c-913f-92a868ef0d3b.png)

Figura 10. Pagina autentificare
 ![11](https://user-images.githubusercontent.com/72390524/168484188-2e9b1453-9db4-4a35-baa3-4931cb74963f.png)

Figura 11. Pagină înregistrare![10](https://user-images.githubusercontent.com/72390524/168484186-14f32a54-8a9c-472c-913f-92a868ef0d3b.png)
Pagina de admin permite mai multe activități, cum ar fi crearea de produse, categorii și subcategorii.
 ![12](https://user-images.githubusercontent.com/72390524/168484189-edcbebc0-e87d-4958-a3a6-f0e6ba0a45e7.png)

Figura 12. Pagina creare produs
 ![13](https://user-images.githubusercontent.com/72390524/168484190-6d7d35eb-4aef-48b0-98fc-40a2b8dfb0cc.png)

Figura 13. Pagina creare categorie
De asemenea, orice tip de utilizator își poate reactualiza parola în cazul in care deține un cont.

 ![14](https://user-images.githubusercontent.com/72390524/168484191-8c976ef3-3d3a-4651-9632-7d456c40c5cc.png)

Figura 14. Pagina modificare parolă
Pagina de Home este identică pentru orice tip de utilizator.

 ![15](https://user-images.githubusercontent.com/72390524/168484192-3d6aeb8e-3597-44ff-8e36-97cf4af9eafc.png)

Figura 15. Pagina principală

De asemenea, se pot vizualiza în detaliu informațiile despre un anumit curs.

![16](https://user-images.githubusercontent.com/72390524/168484193-ac17d0d3-4974-4347-a092-b94608a20fc8.png) 

Figura 16. Pagină vizualizare detaliată produs


Pentru un design placut am folosit librării precum Ant Design și Bootstrap. 

**Listă figuri**
Figura 1. Baza de date Firebase si prezența a doi utilizatori logați diferit	
Figura 2. Metodă de autentificare Cloudinary	
Figura 3. Imaginile disponibile in Cloud	
Figura 4. Configurare Cloudinary	
Figura 5. Autentificare prin Firebase	
Figura 6. Creare schemă User în MongoDB	
Figura 7. Rute autentificare	
Figura 8. Rute pentru Categorii	
Figura 9. Contoler categorii	
Figura 10. Pagina autentificare	
Figura 11. Pagină înregistrare	
Figura 12. Pagina creare produs	
Figura 13. Pagina creare categorie	
Figura 14. Pagina modificare parolă	
Figura 15. Pagina principală	
Figura 16. Pagină vizualizare detaliată produs	




