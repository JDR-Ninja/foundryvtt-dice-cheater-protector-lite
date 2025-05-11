Hooks.once('ready', () => {
	// Freeze the Dice class for players to avoid modification (harder to cheat)
	Object.freeze(CONFIG.Dice);
	Object.freeze(CONFIG.Dice.fulfillment.methods.mersenne.handler);
});