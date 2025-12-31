# My 2025 Wrapped

Un site web interactif présentant les moments marquants de l'année 2025 sous forme de timeline.

## Technologies
- HTML5
- CSS3 (Vanilla)
- JavaScript (Vanilla)
- GSAP + ScrollTrigger (Animations)

## Comment lancer le projet
Ouvrez simplement le fichier `index.html` dans votre navigateur.
Pour une meilleure expérience (chargement des modules JS ou assets), il est recommandé d'utiliser une extension comme "Live Server" sur VS Code ou de lancer un petit serveur local :
```bash
npx serve .
```

## Comment modifier le contenu
Tout le contenu se trouve dans le fichier `script.js` au début du fichier, dans la variable `timelineData`.

### Ajouter une image ou une vidéo
Modifiez les objets dans le tableau `timelineData` :
```javascript
{
    date: "Date",
    title: "Titre",
    description: "Description...",
    image: "./chemin/vers/image.jpg", // Remplacez "#" par le chemin réel
    type: "image" // ou "video" si vous implémentez le support vidéo
}
```
Les images doivent être placées dans un dossier (ex: `assets/`) à la racine du projet.

## Personnalisation
- **Couleurs/Style** : Variables CSS dans `style.css` (`:root`).
- **Animations** : Fonction `initAnimations()` dans `script.js`.
