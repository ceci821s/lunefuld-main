# Installation (trin-for-trin)

💡 **Sådan kommer du i gang med lunefuld**

---

**Trin:**

Metode A:
1. Download/klon alle filer fra Github repoet https://github.com/stefangrage/lunefuld.git, helt som du plejer 

Metode B - med terminalen:
1. Download alle filer fra Github
2. Placer filerne et sted, der ikke synces med iCloud mm. og åbn projektet i VS Code
3. Åbn Terminalen i VS Code og kør et par kodestumper
4. Kør dev-server via Terminalen for at checke at det hele virker- og sluk igen:-)
5. Git halløj 
6. Byg videre på sitet:-)

---

#Metode B

## 1. Download alle filer fra Github

Download filer fra: [https://github.com/stefangrage/lunefuld.git ]https://github.com/stefangrage/lunefuld.git )  

---

## 2. Placer filerne et sted, der ikke synces med iCloud mm. og åbn projektet i VS Code


---

## 3. Åbn Terminalen i VS Code og kør et par kodestumper

Åbn terminalen via **View** i VS Code, og kopier derefter følgende kode ind i terminal-vinduet og tryk _Enter_

```
npm install
```

---

## 4. Kør dev-server via Terminalen - og sluk igen:-)

Setuppet virker ikke med den traditionelle Live-Sever. Så derfor skal vi køre vores egen dev-server. Det gør du ved at kopiere følgende ind i terminal-vinduet efterfulgt af _Enter_

```
npm run dev
```

Check at alt ser ud som det skal - du skulle gerne kunne navigere rundt på sitet, og se nogen forskellige templates.

💡 **OBS!** — Nogle gange er det nødvendigt at stoppe serveren, hvilket gøres ved at indtaste `ctrl+c` i terminal-vinduet.
Hvis du skal starte serveren igen, brug da `npm run dev` igen.

Sluk terminalen igen med `ctrl+c`

---

## 5. Git halløj

Opret et repo på github. Kopier adressen dertil, og kør derefter følgende kommandoer via terminalen:

```
    Git init 
```
Det initialiserer dit git repo i din mappe


```
    git add --all
    git commit -m “beskrivelse af dit commit”
    git branch -M main
```
Her klargør du dit første commit - skift teksten "beskrivelse af dit commit ud med din egen tekst"


```
     git remote add origin https://github.com/ditbrugernavn/lunefuldlykke.git
```
Skift https://github.com/ditbrugernavn/lunefuldlykke.git ud med navnet på dit repo - så får du forbundet det hele korrekt


```
     git push -u origin main
```
Her pusher du dit nye projekt til dit tomme repo

Check at alt fungerer som det skal på github 

Derefter kan du pushe og pulle til git som normalt:-)

Begynd at bruge Tailwinds hjælpeklasser til at style dit indhold. Find `index.html` under mappen `src`.


## 6. Byg videre på sitet

Herefter kan du bare arbejde løs på sitet - med eller uden tailwind, alt efter hvad du foretrækker.