	var heroHealth = 10;
	var slimeHealth = 2;
	var slimes = 1;
	var weaponDmg = 2;

function attackHero(slimes){
    heroHealth = heroHealth - slimes;
	document.getElementById("heroHealth").innerHTML = heroHealth;
};

function heroAttack(weaponDmg){
    slimeHealth = slimeHealth - weaponDmg;
	document.getElementById("slimeHealth").innerHTML = slimeHealth;
};

function buySlime(){
    var slimeCost = Math.floor(10 * Math.pow(1.1,slimes));
    if(gold >= slimeCost){
        slimes = slimes + 1;
    	gold = gold - slimeCost;
        document.getElementById('slimes').innerHTML = slimes;
        document.getElementById('gold').innerHTML = gold;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,slimes));
    document.getElementById('slimeCost').innerHTML = nextCost;
};

window.setInterval(function(){
	if(heroHealth>0)
	{
		attackHero(slimes);
	}
	
	if(slimeHealth>0)
	{
		heroAttack(weaponDmg);
	}

}, 2000);

function save(){
	var save = {
    slimes: slimes,
	heroHealth: heroHealth,
    slimeHealth: slimeHealth,
}
localStorage.setItem("save",JSON.stringify(save));
};

function load(){
var savegame = JSON.parse(localStorage.getItem("save"));
if (typeof savegame.slimes !== "undefined") slimes = savegame.slimes;
if (typeof savegame.heroHealth !== "undefined") heroHealth = savegame.heroHealth;
if (typeof savegame.slimeHealth !== "undefined") slimeHealth = savegame.slimeHealth;
};

function restart(){
	localStorage.removeItem("save")
};
