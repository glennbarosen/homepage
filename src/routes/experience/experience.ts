type ExperienceType = 'work' | 'education';

export type Experience = {
	title: string;
	company: string;
	additionalInfo?: string;
	startDate: string;
	endDate: string;
};

export const experience: Record<ExperienceType, Experience[]> = {
	work: [
		
		{
			title: 'Utvikler',
			company: 'Fremtind',
			startDate: 'Mai 24',
			endDate: 'd.d.'
		},
		{
			title: 'Web lead',
			company: 'Naeva AS',
			startDate: 'Jan. 24',
			endDate: 'Mai 24'
		},
		{
			title: 'Utvikler',
			company: 'Fremtind',
			startDate: 'Sep. 22',
			endDate: 'Des. 23'
		},
		{
			title: 'Webutvikler',
			company: 'Naeva AS',
			startDate: 'Des. 21',
			endDate: 'Aug. 22'
		},
		{
			title: 'IT-konsulent',
			company: 'Wide Assessment AS',
			startDate: 'Apr. 21',
			endDate: 'Nov. 21'
		},
		{
			title: 'Internship + Bachelor',
			company: 'Wide Assessment AS',
			startDate: 'Sep. 20',
			endDate: 'Jun. 21'
		}
	],
	education: [
		{
			title: 'Bachelor i Informasjonsteknologi',
			additionalInfo: 'Spesialisering i webapplikasjoner',
			company: 'Høgskulen på Vestlandet',
			startDate: 'Aug. 2018',
			endDate: 'Jun. 2021'
		},
		{
			title: 'Bachelor i Økonomi og administrasjon',
			additionalInfo: 'Spesialisering i prosjektledelse',
			company: 'BI Bergen',
			startDate: 'Aug. 15',
			endDate: 'Jun. 18'
		}
	]
};
