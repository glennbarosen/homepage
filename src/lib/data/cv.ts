export interface Experience {
	title: string;
	company: string;
	period: string;
	type?: string;
	description?: string;
}

export interface Education {
	institution: string;
	degree: string;
	period: string;
	details?: string;
}

export const experience: Experience[] = [
	{
		title: 'Seniorutvikler',
		company: 'Fremtind',
		period: 'jun. 2025 - d.d.',
		description: ''
	},
	{
		title: 'Utvikler',
		company: 'Fremtind',
		period: 'mai 2024 - mai 2025',
		description: ''
	},
	{
		title: 'Web lead',
		company: 'Naeva AS',
		period: 'jan. 2024 - mai 2024',
		description: ''
	},
	{
		title: 'Utvikler',
		company: 'Fremtind',
		period: 'sep. 2022 - des. 2023',
		description: ''
	},
	{
		title: 'Webutvikler',
		company: 'Naeva AS',
		period: 'des. 2021 - aug. 2022',
		description: ''
	},
	{
		title: 'IT-konsulent',
		company: 'Wide Assessment AS',
		period: 'apr. 2021 - nov. 2021',
		description: ''
	},
	{
		title: 'Internship + Bachelor',
		company: 'Wide Assessment AS',
		period: 'sep. 2020 - jun. 2021',
		description: ''
	}
];

export const education: Education[] = [
	{
		degree: 'Bachelor i Informasjonsteknologi',
		institution: 'Høgskulen på Vestlandet',
		period: 'aug. 2018 - jun. 2021',
		details: 'Spesialisering i webapplikasjoner'
	},
	{
		degree: 'Bachelor i Økonomi og administrasjon',
		institution: 'BI Bergen',
		period: 'aug. 2015 - jun. 2018',
		details: 'Spesialisering i prosjektledelse'
	}
];
