import React from 'react';

// Sample images
import art from '../assets/art.PNG';
import mbl from '../assets/mbl.PNG';
import hand from '../assets/hand.PNG';

const cards = [
  {
    title: 'Donate Your Art',
    description:
      'Duis aute irure reprehenderit voluptate velit esse cillum eu ea fugiat sint occaecat cupidatat.',
    image: art,
  },
  {
    title: 'Donate Funds',
    description:
      'Duis aute irure reprehenderit voluptate velit esse cillum eu ea fugiat sint occaecat cupidatat.',
    image: mbl,
  },
  {
    title: 'Join the Community and Donate',
    description:
      'Duis aute irure reprehenderit voluptate velit esse cillum eu ea fugiat sint occaecat cupidatat.',
    image: hand,
  },
];

const SupportCards = () => {
  return (
    <section className="bg-black py-12 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 ml-37 mt-10">
        Support the Museum
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 max-w-6xl ml-37">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#23262D] text-white   "
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-300">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportCards;
