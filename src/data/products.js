const products = [
  { id: 'kanelbulle', name: 'Kanelbulle', category: 'bakverk', price: 38, image: '/images/products/kanelbulle.png', description: 'Klassisk kanelbulle bakad på smördeg med mycket kanel och pärlsocker. Bakas varje morgon i vårt eget bageri.', allergens: ['gluten', 'mjölk', 'ägg'], popular: true },
  { id: 'kardemummabulle', name: 'Kardemummabulle', category: 'bakverk', price: 40, image: '/images/products/kardemummabulle.png', description: 'Knuten bulle med nymald kardemumma och en glaze av smör och socker.', allergens: ['gluten', 'mjölk', 'ägg'], popular: true },
  { id: 'prinsesstarta', name: 'Prinsessbakelse', category: 'tartor', price: 65, image: '/images/products/prinsesstarta.png', description: 'Sockerkaksbotten, hallonsylt, vaniljkräm och vispad grädde under ett lock av grön marsipan.', allergens: ['gluten', 'mjölk', 'ägg', 'mandel'], popular: true },
  { id: 'semla', name: 'Semla', category: 'bakverk', price: 55, image: '/images/products/semla.png', description: 'Vetebulle fylld med mandelmassa och vispgrädde. Finns året runt hos oss!', allergens: ['gluten', 'mjölk', 'mandel'], popular: false },
  { id: 'chokladboll', name: 'Chokladboll', category: 'smakakor', price: 25, image: '/images/products/chokladboll.png', description: 'Havre, kakao, smör och kaffe rullad i pärlsocker eller kokos.', allergens: ['havre', 'mjölk'], popular: true },
  { id: 'kladdkaka', name: 'Kladdkaka', category: 'tartor', price: 48, image: '/images/products/kladdkaka.png', description: 'Seg chokladkaka serverad med lättvispad grädde.', allergens: ['gluten', 'mjölk', 'ägg'], popular: false },
  { id: 'mazarin', name: 'Mazarin', category: 'smakakor', price: 32, image: '/images/products/mazarin.png', description: 'Mördegsform med mandelfyllning och en tunn glasyr.', allergens: ['gluten', 'mjölk', 'ägg', 'mandel'], popular: false },
  { id: 'dammsugare', name: 'Punschrulle', category: 'smakakor', price: 30, image: '/images/products/dammsugare.png', description: 'Kakfyllning smaksatt med arrak, inslagen i grön marsipan och doppad i choklad.', allergens: ['gluten', 'mjölk'], popular: true },
  { id: 'bryggkaffe', name: 'Bryggkaffe', category: 'drycker', price: 32, image: '/images/products/bryggkaffe.png', description: 'Mellanrostat kaffe från vårt lokala rosteri. Påtår ingår.', allergens: [], popular: true },
  { id: 'cafe-latte', name: 'Caffè latte', category: 'drycker', price: 48, image: '/images/products/cafe-latte.png', description: 'Dubbel espresso med ångad mjölk. Välj havre- eller laktosfri mjölk utan extra kostnad.', allergens: ['mjölk'], popular: false },
  { id: 'chai-te', name: 'Chai latte', category: 'drycker', price: 52, image: '/images/products/chai-te.png', description: 'Kryddigt svart te med kanel, ingefära och kardemumma, toppat med mjölkskum.', allergens: ['mjölk'], popular: false },
  { id: 'raksmorgas', name: 'Räksmörgås', category: 'smorgasar', price: 135, image: '/images/products/raksmorgas.png', description: 'Surdegsbröd med ägg, majonnäs, handskalade räkor, dill och citron.', allergens: ['gluten', 'ägg', 'skaldjur'], popular: false },
]

export const categories = {
  bakverk: 'Bakverk',
  tartor: 'Tårtor & bakelser',
  smakakor: 'Småkakor',
  drycker: 'Drycker',
  smorgasar: 'Smörgåsar',
}

export default products
