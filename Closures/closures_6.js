const BOOLEAN_VALUE = true
let ANSWER = ''

if (BOOLEAN_VALUE) {
	function create () {
		return 'Всё получится'
	}
}

ANSWER += create()

if (ANSWER) {
	console.log(ANSWER)
} else {
	console.log('Не получится')
}