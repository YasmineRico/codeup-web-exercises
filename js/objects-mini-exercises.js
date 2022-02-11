/*Create a few beverage objects and assign values to each object for the following properties:
	- brandName
	- type
	- volumeInLiters
	- priceInCents
	- expirationDate
	- datesOfPreviousSips (use an array of strings)
- isOpen
Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements using the dot notation.
 */

var soda = {
	brandName:'Dr. Pepper',
	type: 'fizzy drink',
	volumeInLiters: 2,
	priceInCents: 50,
	expirationDate: '12/01/2019',
	datesOfPreviousSips: ['01/03/2020', '01/06/2020', '02/10/2020'],
	isOpen: '01/02/2020'
}
console.log(soda)

var sweetDrink = {}
	sweetDrink.brandName= 'Nesquick',
	sweetDrink.type= 'Chocolate Milk',
	sweetDrink.volumeInLiters= 1,
	sweetDrink.priceInCents= 20,
	sweetDrink.expirationDate= '01/02/2022',
	sweetDrink.datesOfPreviousSips= ['12/01/2021', '12/20/2021', '12/31/2021']
	sweetDrink.isOpen= '01/01/2010'

console.log(sweetDrink)

//

