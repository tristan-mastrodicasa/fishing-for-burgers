
/**
 * Burger model
 */
class BurgerModel {
	
	/**
	 * Create a burger
	 * @param {string} imageUrl Url of the burger image
	 */
	constructor(imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	/**
	 * Get a compiled burger object
	 * @return {object} The burger object
	 */
	getBurger() {
		return { 
			image: this.imageUrl
		}
	}
	
}

module.exports = BurgerModel;