const featuredSection = document.querySelector('.feature_cards');

const featuredCards = [
  {
    img: './assets/photo-1.jpg',
    fullName: 'Nusrat Fateh Ali Khan',
    profession:
      'Music Producer/ Composer/ Associate Music Professor at Harvard.',
    description:
      'Very Talented and Versatile producer. Recieved the Best Gospel Music Award in 2022.',
  },
  {
    img: './assets/photo-2.jpg',
    fullName: 'Leo Twin',
    profession:
      'Arranger and songwriter/ Bassist/ Music Director At Punjab University.',
    description:
      'VVery Talented, an elite Keyboardist and Bassist. Renowned for his tastful bass lines.',
  },
  {
    img: './assets/photo-3.jpg',
    fullName: 'Bloch Brothers',
    profession:
      'Arranger and songwriter/ Saxophonist/ Vocal and Choral Director Berklee.',
    description:
      'Recieved Singer and Artist of the year Award in GMA Awards 2020.',
  },
  {
    img: './assets/photo-4.jpg',
    fullName: 'Bilal Ahmed',
    profession: 'Music Producer/Music Director at Sydney University.',
    description:
      'Enjoys Music and Perfecting his craft. Widely known for his choral Arrangements and Reharms!',
  },
  {
    img: './assets/photo-5.jpg',
    fullName: 'Arslan Khan',
    profession: 'Business Man/Agent for HARMONIX MUSIC SYSTEMS.',
    description: 'A natural businessperson, and brilliant business mind.',
  },
  {
    img: './assets/photo-6.jpg',
    fullName: 'Qabeel Khan',
    profession: 'Youtube Streamer / Gamer',
    description: 'Known for his Problem solving mind, an Elite Gamer.',
  },
];

function createDynamicCard(featureCard) {
  const dynamicCardItem = document.createElement('div');
  dynamicCardItem.classList.add('dynamic_card_item');

  dynamicCardItem.innerHTML = `
      <img src="${featureCard.img}" alt="">
        <div class="dynamic_card_description">
            <h2 class="full_name">
                ${featureCard.fullName}
            </h2>
             <p class="dynamic_card_profession">
                ${featureCard.profession}
            </p>
            <div class="dynamic_card_sepreator">
            </div>
            <p class="dynamic_card_details">
                ${featureCard.description}
            </p>
  `;
  return dynamicCardItem;
}

featuredCards.forEach((featuredCard) => {
  const dynamicCardItem = createDynamicCard(featuredCard);

  featuredSection.appendChild(dynamicCardItem);
});

// mobile menu

const hamburger = document.querySelector('.fa-bars');
const menu = document.createElement('div');
menu.classList.add('menu');
menu.classList.add('hide');
const pages = [
  {
    href: 'index.html',
    label: 'Home',
  },
  {
    href: 'about.html',
    label: 'About',
  },
  {
    href: '#',
    label: 'Program',
  },
  {
    href: '#',
    label: 'Join',
  },
  {
    href: '#',
    label: 'Sponsor',
  },
  {
    href: '#',
    label: 'News',
  },
];

const pagesHtml = pages
  .map(
    ({ href, label }) => `
<a href = "${href}" class= "page_items" onclick = "closeMenu()">${label}</a>
`,
  )
  .join('');
menu.classList.add('menu', 'hide');
menu.innerHTML = `
  <div class = "cross">
  <i class="fas fa-times"></i>
  </div>
  <div class = "pages">
  ${pagesHtml}
  </div>
  `;
document.body.appendChild(menu);

function toggleMenu() {
  menu.classList.toggle('hide');
}

hamburger.addEventListener('click', toggleMenu);
menu.querySelector('.fa-times').addEventListener('click', toggleMenu);
