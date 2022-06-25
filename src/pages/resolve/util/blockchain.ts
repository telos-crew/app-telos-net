export const validateName = (name: string) => {
	const validCharacters = 'abcdefghijklmnopqrstuvwxyz123456'
	const validCharacterList = validCharacters.split('')
	let isValid = true
	if (name.includes('.')) {
		if (name.length < 3 || name.length > 12) {
			isValid = false
		}
	} else {
		if (name.length !== 12) {
			isValid = false
		}
	}
	const nameCharacterList = name.split('')
	for (const character of nameCharacterList) {
		if (!validCharacterList.includes(character)) {
			isValid = false
		}
	}
	return isValid
}

export const validateIpfsHash = (url: string) => {
	if (url.length !== 46 && url.length !== 49) return false
	return true
}

export const fetchArbConfig = async (context) => {
	console.log('fetchArbConfig context: ', context)
	const { rows } = await context.$store.$api.getTableRows({
		code: 'testtelosarb',
		scope: 'testtelosarb',
		table: 'config'
	})
	const [config] = rows
	return config
}

export const fetchArbitrators = async (context) => {
	console.log('fetchArbitrators executing')
	const { rows } = await context.$store.$api.getTableRows({
		code: 'testtelosarb',
		scope: 'testtelosarb',
		table: 'arbitrators'
	})
	return rows
}

export const fetchElections = async (context) => {
	const { rows } = await context.$store.$api.getTableRows({
		code: 'testtelosarb',
		scope: 'testtelosarb',
		table: 'elections'
	})
	return rows
}

export const fetchNominees = async (context) => {
	const { rows } = await context.$store.$api.getTableRows({
		code: 'testtelosarb',
		scope: 'testtelosarb',
		table: 'nominees'
	})
	return rows
}

export const fetchCaseFiles = async (context) => {
	const { rows } = await context.$store.$api.getTableRows({
		code: 'testtelosarb',
		scope: 'testtelosarb',
		table: 'casefiles'
	})
	return rows
}


