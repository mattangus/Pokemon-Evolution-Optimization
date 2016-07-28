// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

angular.module('pokemon',[

])
.controller('MainCtrl', function($scope) {
		$scope.pokemonList = [
			{"id": 1, "name": "Bulbasaur", "candies": 25, "evolution": 2},
			{"id": 2, "name": "Ivysaur", "candies": 100, "evolution": 3},
			{"id": 3, "name": "Venusaur"},
			{"id": 4, "name": "Charmander", "candies": 25, "evolution": 5},
			{"id": 5, "name": "Charmeleon", "candies": 100, "evolution": 6},
			{"id": 6, "name": "Charizard"},
			{"id": 7, "name": "Squirtle", "candies": 25, "evolution": 8},
			{"id": 8, "name": "Wartortle", "candies": 100, "evolution": 9},
			{"id": 9, "name": "Blastoise"},
			{"id": 10, "name": "Caterpie", "candies": 12, "evolution": 11},
			{"id": 11, "name": "Metapod", "candies": 50, "evolution": 12},
			{"id": 12, "name": "Butterfree"},
			{"id": 13, "name": "Weedle", "candies": 12, "evolution": 14},
			{"id": 14, "name": "Kakuna", "candies": 50, "evolution": 15},
			{"id": 15, "name": "Beedrill"},
			{"id": 16, "name": "Pidgey", "candies": 12, "evolution": 17},
			{"id": 17, "name": "Pidgeotto", "candies": 50, "evolution": 18},
			{"id": 18, "name": "Pidgeot"},
			{"id": 19, "name": "Rattata", "candies": 25, "evolution": 20},
			{"id": 20, "name": "Raticate"},
			{"id": 21, "name": "Spearow", "candies": 50, "evolution": 22},
			{"id": 22, "name": "Fearow"},
			{"id": 23, "name": "Ekans", "candies": 50, "evolution": 24},
			{"id": 24, "name": "Arbok"},
			{"id": 25, "name": "Pikachu", "candies": 50, "evolution": 26},
			{"id": 26, "name": "Raichu"},
			{"id": 27, "name": "Sandshrew", "candies": 50, "evolution": 28},
			{"id": 28, "name": "Sandslash"},
			{"id": 29, "name": "Nidoran♀", "candies": 25, "evolution": 30},
			{"id": 30, "name": "Nidorina", "candies": 100, "evolution": 31},
			{"id": 31, "name": "Nidoqueen"},
			{"id": 32, "name": "Nidoran♂", "candies": 25, "evolution": 33},
			{"id": 33, "name": "Nidorino", "candies": 100, "evolution": 34},
			{"id": 34, "name": "Nidoking"},
			{"id": 35, "name": "Clefairy", "candies": 50, "evolution": 36},
			{"id": 36, "name": "Clefable"},
			{"id": 37, "name": "Vulpix", "candies": 50, "evolution": 38},
			{"id": 38, "name": "Ninetales"},
			{"id": 39, "name": "Jigglypuff", "candies": 50, "evolution": 40},
			{"id": 40, "name": "Wigglytuff"},
			{"id": 41, "name": "Zubat", "candies": 50, "evolution": 42},
			{"id": 42, "name": "Golbat"},
			{"id": 43, "name": "Oddish", "candies": 25, "evolution": 44},
			{"id": 44, "name": "Gloom", "candies": 100, "evolution": 45},
			{"id": 45, "name": "Vileplume"},
			{"id": 46, "name": "Paras", "candies": 50, "evolution": 47},
			{"id": 47, "name": "Parasect"},
			{"id": 48, "name": "Venonat", "candies": 50, "evolution": 49},
			{"id": 49, "name": "Venomoth"},
			{"id": 50, "name": "Diglett", "candies": 50, "evolution": 51},
			{"id": 51, "name": "Dugtrio"},
			{"id": 52, "name": "Meowth", "candies": 50, "evolution": 53},
			{"id": 53, "name": "Persian"},
			{"id": 54, "name": "Psyduck", "candies": 50, "evolution": 55},
			{"id": 55, "name": "Golduck"},
			{"id": 56, "name": "Mankey", "candies": 50, "evolution": 57},
			{"id": 57, "name": "Primeape"},
			{"id": 58, "name": "Growlithe", "candies": 50, "evolution": 59},
			{"id": 59, "name": "Arcanine"},
			{"id": 60, "name": "Poliwag", "candies": 25, "evolution": 61},
			{"id": 61, "name": "Poliwhirl", "candies": 100, "evolution": 62},
			{"id": 62, "name": "Poliwrath"},
			{"id": 63, "name": "Abra", "candies": 25, "evolution": 64},
			{"id": 64, "name": "Kadabra", "candies": 100, "evolution": 65},
			{"id": 65, "name": "Alakazam"},
			{"id": 66, "name": "Machop", "candies": 25, "evolution": 67},
			{"id": 67, "name": "Machoke", "candies": 100, "evolution": 68},
			{"id": 68, "name": "Machamp"},
			{"id": 69, "name": "Bellsprout", "candies": 25, "evolution": 70},
			{"id": 70, "name": "Weepinbell", "candies": 100, "evolution": 71},
			{"id": 71, "name": "Victreebel"},
			{"id": 72, "name": "Tentacool", "candies": 50, "evolution": 73},
			{"id": 73, "name": "Tentacruel"},
			{"id": 74, "name": "Geodude", "candies": 25, "evolution": 75},
			{"id": 75, "name": "Graveler", "candies": 100, "evolution": 76},
			{"id": 76, "name": "Golem"},
			{"id": 77, "name": "Ponyta", "candies": 50, "evolution": 78},
			{"id": 78, "name": "Rapidash"},
			{"id": 79, "name": "Slowpoke", "candies": 50, "evolution": 80},
			{"id": 80, "name": "Slowbro"},
			{"id": 81, "name": "Magnemite", "candies": 50, "evolution": 82},
			{"id": 82, "name": "Magneton"},
			{"id": 83, "name": "Farfetch'd"},
			{"id": 84, "name": "Doduo", "candies": 50, "evolution": 85},
			{"id": 85, "name": "Dodrio"},
			{"id": 86, "name": "Seel", "candies": 50, "evolution": 87},
			{"id": 87, "name": "Dewgong"},
			{"id": 88, "name": "Grimer", "candies": 50, "evolution": 89},
			{"id": 89, "name": "Muk"},
			{"id": 90, "name": "Shellder", "candies": 50, "evolution": 91},
			{"id": 91, "name": "Cloyster"},
			{"id": 92, "name": "Gastly", "candies": 25, "evolution": 93},
			{"id": 93, "name": "Haunter", "candies": 100, "evolution": 94},
			{"id": 94, "name": "Gengar"},
			{"id": 95, "name": "Onix"},
			{"id": 96, "name": "Drowzee", "candies": 50, "evolution": 97},
			{"id": 97, "name": "Hypno"},
			{"id": 98, "name": "Krabby", "candies": 50, "evolution": 99},
			{"id": 99, "name": "Kingler"},
			{"id": 100, "name": "Voltorb", "candies": 50, "evolution": 101},
			{"id": 101, "name": "Electrode"},
			{"id": 102, "name": "Exeggcute", "candies": 50, "evolution": 103},
			{"id": 103, "name": "Exeggutor"},
			{"id": 104, "name": "Cubone", "candies": 50, "evolution": 105},
			{"id": 105, "name": "Marowak"},
			{"id": 106, "name": "Hitmonlee"},
			{"id": 107, "name": "Hitmonchan"},
			{"id": 108, "name": "Lickitung"},
			{"id": 109, "name": "Koffing", "candies": 50, "evolution": 110},
			{"id": 110, "name": "Weezing"},
			{"id": 111, "name": "Rhyhorn", "candies": 50, "evolution": 112},
			{"id": 112, "name": "Rhydon"},
			{"id": 113, "name": "Chansey"},
			{"id": 114, "name": "Tangela"},
			{"id": 115, "name": "Kangaskhan"},
			{"id": 116, "name": "Horsea", "candies": 50, "evolution": 117},
			{"id": 117, "name": "Seadra"},
			{"id": 118, "name": "Goldeen", "candies": 50, "evolution": 119},
			{"id": 119, "name": "Seaking"},
			{"id": 120, "name": "Staryu", "candies": 50, "evolution": 121},
			{"id": 121, "name": "Starmie"},
			{"id": 122, "name": "Mr. Mime"},
			{"id": 123, "name": "Scyther"},
			{"id": 124, "name": "Jynx"},
			{"id": 125, "name": "Electabuzz"},
			{"id": 126, "name": "Magmar"},
			{"id": 127, "name": "Pinsir"},
			{"id": 128, "name": "Tauros"},
			{"id": 129, "name": "Magikarp", "candies": 400, "evolution": 130},
			{"id": 130, "name": "Gyarados"},
			{"id": 131, "name": "Lapras"},
			{"id": 132, "name": "Ditto"},
			{"id": 133, "name": "Eevee", "candies": 25, "evolution": 134},
			{"id": 134, "name": "Vaporeon"},
			{"id": 135, "name": "Jolteon"},
			{"id": 136, "name": "Flareon"},
			{"id": 137, "name": "Porygon"},
			{"id": 138, "name": "Omanyte", "candies": 50, "evolution": 139},
			{"id": 139, "name": "Omastar"},
			{"id": 140, "name": "Kabuto", "candies": 50, "evolution": 141},
			{"id": 141, "name": "Kabutops"},
			{"id": 142, "name": "Aerodactyl"},
			{"id": 143, "name": "Snorlax"},
			{"id": 144, "name": "Articuno"},
			{"id": 145, "name": "Zapdos"},
			{"id": 146, "name": "Moltres"},
			{"id": 147, "name": "Dratini", "candies": 25, "evolution": 148},
			{"id": 148, "name": "Dragonair", "candies": 100, "evolution": 149},
			{"id": 149, "name": "Dragonite"},
			{"id": 150, "name": "Mewtwo"},
			{"id": 151, "name": "Mew"},
		];
		
		$scope.inventory = [];
		
		$scope.transfers = [];
		$scope.notes = [];
		$scope.evolutions = [];
		
		$scope.addPokemonClick = function () {
			if($scope.selectedPokemon && $scope.selectedPokemon > 0
			&& $scope.numSelectedCandies && $scope.numSelectedCandies > 0
			&& $scope.numSelectedPokemon && $scope.numSelectedPokemon > 0)
			{
				var selected = $scope.getPokemon($scope.selectedPokemon);
				var updated = false;
				
				for(i=0; i < $scope.inventory.length; i++)
				{
					var current = $scope.inventory[i];
					if(current.pokemon.id == selected.id)
					{
						$scope.inventory[i].numcandies += $scope.numSelectedCandies;
						$scope.inventory[i].numpokemon += $scope.numSelectedPokemon;
						updated = true;
						break;
					}
				}
				
				if(!updated)
					$scope.inventory.push({"pokemon":selected, "numcandies":$scope.numSelectedCandies, "numpokemon":$scope.numSelectedPokemon});
				
				$scope.numSelectedPokemon = 0;
				$scope.numSelectedCandies = 0;
			}
		}
		
		$scope.getPokemon = function (id) {
			return $scope.pokemonList[id-1];
		}
		
		$scope.CreatePlan = function () {
			$scope.transfers.length = 0;
			$scope.evolutions.length = 0;
			$scope.notes.length = 0;
			
			var totalEvos = 0;
			
			for(i=0; i < $scope.inventory.length; i++)
			{
				var cur = $scope.inventory[i];
				
				var numCandies = cur.numcandies;
				var numpokemon = cur.numpokemon;
				var cost = cur.pokemon.candies;
				var numEvos = 0;
				var numTransfer = 0;
				
				while(true)
				{
					while(numCandies >= cost && numpokemon > 0)
					{
						numCandies -= cost - 1;
						numpokemon--;
						numEvos++;
					}
					
					if(numpokemon > 1)
					{
						numpokemon--;
						numTransfer++;
						numCandies++;
					}
					else
					{
						break;
					}
				}
				
				$scope.transfers.push("Transfer " + numTransfer + " " + cur.pokemon.name);
				$scope.evolutions.push("Evolve and transfer " + numEvos + " " + cur.pokemon.name);
				totalEvos += numEvos;
			}
			
			$scope.notes.push("To gain " + (totalEvos * 1000) + " exp");
			$scope.notes.push("This will take approximatly " + (totalEvos*0.5) + " minutes");
		}
		
	}
);
