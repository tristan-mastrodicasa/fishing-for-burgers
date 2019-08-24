
/**
 * Burger model
 */
class BurgerModel {
	
	/**
	 * Create a burger
	 * @param {string} imageUrl Url of the burger image
	 */
	constructor(name, imageUrl) {
		this.imageUrl = imageUrl;
		this.name = name;
	}
	
	/**
	 * Get a compiled burger object
	 * @return {object} The burger object
	 */
	getBurger() {
		return { 
			image: this.imageUrl,
			name: this.name
		}
	}
	
}

module.exports = BurgerModel;