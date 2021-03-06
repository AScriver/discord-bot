module.exports = {
  name: 'wheretoland',
  description: 'Picks random location to land',
  args: false,
  execute(message, args) {
    const loc = [
      'Junk Junction',
      'Lazy Links',
      'Risky Reels',
      'Haunted Hills',
      'Pleasant Park',
      'Tomato Temple',
      'Wailing Woods',
      'Snobby Shores',
      'Leaky Lake',
      'Dusty Divot',
      'Retail Row',
      'Lonely Lodge',
      'Salty Springs',
      'Tilted Towers',
      'Greasy Grove',
      'Shifty Shafts',
      'Fatal Fields',
      'Paradise Palms',
      'Flush Factory',
      'Lucky Landing',
      'Motel',
      'Club',
      'Villain Lair',
      'Castle',
      'Containers',
      'Race Track',
      'RV Park',
      'Mansion',
      'Viking Outpost',
      'Stadium',
      'Robles',
      'Castle',
      'Junk 2'
    ];
    const random = loc[Math.floor(Math.random() * loc.length)];
    message.channel.send('Land at: ' + random);
  }
};
