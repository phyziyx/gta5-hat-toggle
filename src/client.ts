export const toggleHat = (sync = false) => {
	const hatPropIndex = mp.players.local.getPropIndex(0);
	const hatPropTexture = mp.players.local.getPropTextureIndex(0);

	if (hatPropIndex === 11) return false;

	const hatMapping: {
		Male: Record<number, number>;
		Female: Record<number, number>;
	} = {
		Male: {
			[9]: 10,
			[18]: 67,
			[82]: 67,
			[44]: 45,
			[50]: 68,
			[51]: 69,
			[52]: 70,
			[53]: 71,
			[62]: 72,
			[65]: 66,
			[73]: 74,
			[76]: 77,
			[79]: 78,
			[80]: 81,
			[91]: 92,
			[104]: 105,
			[109]: 110,
			[116]: 117,
			[118]: 119,
			[123]: 124,
			[125]: 126,
			[127]: 128,
			[130]: 131,
			[135]: 136,
			[139]: 140,
			[142]: 143,
			[151]: 152,
			[154]: 155,
			[156]: 157,
			[158]: 160,
			[159]: 161,
			[162]: 163
		},
		Female: {
			[43]: 44,
			[49]: 67,
			[64]: 65,
			[65]: 64,
			[51]: 69,
			[50]: 68,
			[52]: 70,
			[62]: 71,
			[72]: 73,
			[75]: 76,
			[78]: 77,
			[79]: 80,
			[18]: 66,
			[66]: 81,
			[81]: 66,
			[86]: 84,
			[90]: 91,
			[103]: 104,
			[108]: 109,
			[115]: 116,
			[117]: 118,
			[122]: 123,
			[124]: 125,
			[126]: 127,
			[129]: 130,
			[134]: 135,
			[138]: 139,
			[141]: 142,
			[150]: 151,
			[153]: 154,
			[155]: 155,
			[157]: 159,
			[158]: 160,
			[161]: 162
		}
	};

	let newPropIndex: number | undefined;

	for (const [key, value] of Object.entries(mp.players.local.model === mp.game.joaat('mp_m_freemode_01') ? hatMapping.Male : hatMapping.Female)) {
		if (Number(key) === hatPropIndex) {
			newPropIndex = value;
			break;
		}
		if (value === hatPropIndex) {
			newPropIndex = Number(key);
			break;
		}
	}

	if (!newPropIndex) return false;

	if (sync) {
		mp.events.callRemote("clothing:hatToggle", newPropIndex, hatPropTexture);
	} else {
		mp.players.local.setPropIndex(0, newPropIndex, hatPropTexture, true);
	}

	return true;
};
