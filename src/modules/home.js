    import losPollosHermanosLogo from "../asset/logo/los-pollos-hermanos.svg";
    const hero = document.createElement('div');
    hero.classList.add('hero');
    const logo = document.createElement('img');
    logo.src = losPollosHermanosLogo;
    const description = document.createElement('div');

    const head = document.createElement('h2');
    head.textContent = 'Welcome to Los Pollos Hermanos – Where Flavor and Legacy Meet!';
    const body1 = document.createElement('p');
    body1.textContent = `Discover the perfection of our famous chicken, crafted with passion and precision. Founded by Gustavo "Gus" Fring, we serve more than meals — we deliver unforgettable experiences.`;
    const body2 = document.createElement('p');
    body2.textContent = "Whether it’s our mouthwatering recipes or the secrets behind the scenes, there’s always more cooking here than meets the eye.";
    const foot = document.createElement('h3');
    foot.textContent = "Taste the legacy. Join the family today!";

    description.append(head, body1, body2, foot);
    hero.append(logo, description);
    export default hero;