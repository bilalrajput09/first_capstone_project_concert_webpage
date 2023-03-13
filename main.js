const featuredSection = document.querySelector('.feature_cards');

const featuredCards = [
  {
    img: './assets/Versatile.jpg',
    fullName: 'Nusrat Fateh Ali Khan',
    profession: 'Music Producer/ Composer/ Associate Music Professor at Harvard.',
    description: 'Very Talented and Versatile producer. Recieved the Best Gospel Music Award in 2022.',
  },
  {
    img: './assets/Versatile.jpg',
    fullName: 'Leo Twin',
    profession: 'Arranger and songwriter/ Bassist/ Music Director At Punjab University.',
    description: 'VVery Talented, an elite Keyboardist and Bassist. Renowned for his tastful bass lines.',
  },
  {
    img: './assets/Versatile.jpg',
    fullName: 'Bloch Brothers',
    profession: 'Arranger and songwriter/ Saxophonist/ Vocal and Choral Director Berklee.',
    description: 'Recieved Singer and Artist of the year Award in GMA Awards 2020.',
  },
  {
    img: './assets/Versatile.jpg',
    fullName: 'Bilal Ahmed',
    profession: 'Music Producer/Music Director at Sydney University.',
    description: 'Enjoys Music and Perfecting his craft. Widely known for his choral Arrangements and Reharms!',
  },
  {
    img: './assets/Versatile.jpg',
    fullName: 'Arslan Khan',
    profession: 'Business Man/Agent for HARMONIX MUSIC SYSTEMS.',
    description: 'A natural businessperson, and brilliant business mind.',
  },
  {
    img: './assets/Versatile.jpg',
    fullName: 'Qabeel Khan',
    profession: 'Youtube Streamer / Gamer',
    description: 'Known for his Problem solving mind, an Elite Gamer.',
  },

];

featuredCards.forEach((featureCard) => {
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
  featuredSection.appendChild(dynamicCardItem);
});

// mobile menu

const hamburger = document.querySelector('.fa-bars');
const menu = document.createElement('div');
menu.classList.add('menu');
menu.classList.add('hide');
menu.innerHTML = `<div class="cross">
            <i class="fas fa-times"></i>
        </div>
        <div class="pages">
            <a href="index.html" class="page_items" onclick="closeMenu()">Home</a>
            <a href="about.html" class="page_items" onclick="closeMenu()">About</a>
            <a href="#" class="page_items" onclick="closeMenu()">Program</a>
            <a href="#" class="page_items" onclick="closeMenu()">Join</a>
            <a href="#" class="page_items" onclick="closeMenu()">Sponsor</a>
            <a href="#" class="page_items" onclick="closeMenu()">News</a>
        </div>`;
document.body.appendChild(menu);
const closeBtn = document.querySelector('.fa-times');

function showMenu() {
  return menu.classList.remove('hide');
}
function closeMenu() {
  return menu.classList.add('hide');
}

hamburger.addEventListener('click', showMenu);
closeBtn.addEventListener('click', closeMenu);
