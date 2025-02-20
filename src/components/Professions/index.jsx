import React from 'react'

import styles from './Positions.module.scss'

const positions = [
	{
		id: 1,
		name: 'Mutaxassis (kichik)',
		isAccessible: true,
	},
	{
		id: 2,
		name: 'Mutaxassis',
		isAccessible: true,
	},
	{
		id: 3,
		name: 'Yetakchi mutaxassis',
		isAccessible: false,
	},
	{
		id: 4,
		name: 'Bosh mutaxassis',
		isAccessible: false,
	},
	{
		id: 5,
		name: "Bo'lim (sektor, guruh) boshlig'i",
		isAccessible: false,
	},
	{
		id: 6,
		name: "Bo'lim (sektor) boshlig'ining o'rinbosari",
		isAccessible: false,
	},
	{
		id: 7,
		name: "Boshqarma boshlig'i",
		isAccessible: false,
	},
	{
		id: 8,
		name: "Boshqarma boshlig'ining o'rinbosari",
		isAccessible: false,
	},
	{
		id: 9,
		name: "Bosh boshqarma boshlig'i",
		isAccessible: false,
	},
	{
		id: 10,
		name: "Bosh boshqarma boshlig'ining o'rinbosari",
		isAccessible: false,
	},
	{
		id: 11,
		name: 'Maslahatchi (konsultant)',
		isAccessible: false,
	},
	{
		id: 12,
		name: 'Apparat rahbari',
		isAccessible: false,
	},
	{
		id: 13,
		name: "Apparat rahbari o'rinbosari",
		isAccessible: false,
	},
	{
		id: 14,
		name: 'Kotibiyat mudiri',
		isAccessible: false,
	},
	{
		id: 15,
		name: "Vazirning (qo'mitaning) o'rinbosari",
		isAccessible: false,
	},
	{
		id: 16,
		name: "Vazirning (qo'mitaning) birinchi o'rinbosari",
		isAccessible: false,
	},
	{
		id: 17,
		name: "Vazir (qo'mita, agentlik raisi)",
		isAccessible: false,
	},
	{
		id: 18,
		name: 'Bosh vazir',
		isAccessible: false,
	},
	{
		id: 19,
		name: 'Senat raisi',
		isAccessible: false,
	},
	{
		id: 20,
		name: 'Prezident',
		isAccessible: false,
	},
]

const Positions = () => {
	const [maxWidth, setMaxWidth] = React.useState(0)

	React.useEffect(() => {
		// Find the widest button on mount
		let maxWidthCalculated = 0
		const buttons = document.querySelectorAll(`.${styles.button}`)

		buttons.forEach(button => {
			maxWidthCalculated = Math.max(maxWidthCalculated, button.offsetWidth)
		})

		setMaxWidth(maxWidthCalculated)
	}, [positions])

	return (
		<ul className={styles.root}>
			{positions.map(value => (
				<li key={value.id} className={`${styles.item}`}>
					<button
						onClick={() => console.log('click')}
						disabled={!value.isAccessible}
						className={`${styles.button}`}
						style={{ minWidth: `${maxWidth}px` }}
						type='button'
					>
						{value.name}
					</button>
				</li>
			))}
		</ul>
	)
}

export default Positions
