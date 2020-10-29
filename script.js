const plannen = [
  `ga wandelen`,
  `trek een fles wijn open`,
  `bel zomaar een vriendin op`,
  `maak boerenkool`,
  `lees een boek`,
  `abonneer je op een tijdschrift`,
  `leg een legpuzzel`,
  `adopteer een kat`,
  `bestel iets voor jezelf van minstens 100 euro`,
  `maak een Japanse puzzel (nonogram in het Engels)`,
  `verf een muur in je huis`,
  `koop iets bij een kringloopwinkel`,
  `ruim je kledingkast op`,
  `koop bloemen, of een plant`,
  `stuur een compliment naar iemand`,
  `ga sporten`,
  `zoek je droombaan`,
  `mediteer`,
  `houd een Netflix-avond`,
  `plan een Monopoly-avond`,
  `bouw een dekenfort`,
  `app je telefoonnummerbuur (het nummer waarvan het laatste cijfer 1 hoger of lager is dan je eigen nummer)`,
  `schrijf een brief naar een familielid`,
  `stuur een ansichtkaart`
];


document.getElementById(`button`).onclick = function() {
  const random = Math.floor(Math.random() * plannen.length);
  document.getElementById(`weekendplan`).innerHTML = plannen[random];
}
