# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

### Screenshot

![](<./screenshots/advice-generator-liart.vercel.app(375px).png>)
![](<./screenshots/advice-generator-liart.vercel.app(1440px).png>)

### Links

- Live Site URL: [https://advice-generator-liart.vercel.app/](https://advice-generator-liart.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned how to use the `<picture>` tag and how I can switch between two images to determine screen resolution, before I used background image and media querie to determine what the image with picture would be makes it much easier and reduces the css lines. And I also remembered how the fetch api works. I'm going to do other projects to fix this learning even more

```html
<picture>
  <source
    srcset="/images/pattern-divider-desktop.svg"
    media="(min-width: 1024px)"
  />
  <img src="./images/pattern-divider-mobile.svg" alt="" />
</picture>
```

### Useful resources

- [Boas práticas para escrever um HTML profissional - Rocketseat](https://youtu.be/TBplwrsUj4s) - This helped me to use good html skills, plus it gave me an intro about accessibility attributes and using lighthouse to check page quality.
- [picture](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/picture) - This is an amazing article that helped me understand how to switch between two images for certain devices of different resolutions. I recommend it to anyone who is still learning this concept.
- [Buttons do not have an accessible name](https://web.dev/i18n/en/button-name/) - This is an amazing article that helped me understand how to label a button so that it is accessible to people using assistive technology.
