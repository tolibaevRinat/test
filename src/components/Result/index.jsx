import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Result.module.scss'

const Result = ({ questions, correct, percentageCorrect }) => {
	const navigation = useNavigate()

	return (
		<div className={`${styles.result}`}>
			{percentageCorrect >= 50 ? (
				<img className={`${styles.img}`} src='/images/success.png' alt='success' />
			) : (
				''
			)}
			<h2>
				Siz {questions.length} savoldan {correct} tog'ri javob berdingiz
			</h2>

			<h2>
				{percentageCorrect >= 50 ? (
					'Tabriklaymiz !!! Siz yangi lavozimga tayinlandingiz. Kelgusi ishlaringizda omad yor bo‘lsin.'
				) : (
					<>
						<p>
							Siz topshiriqlardan o‘ta olmadingiz. Shu sababdan quyidagi tavsiyalarga amal qilgan
							holda oz ustingizda ishlang.
						</p>
						<p style={{ fontWeight: 700 }}>Tavsiyalar!</p>
						<p style={{ fontWeight: 700 }}>1. O‘zbekiston Respublikasining Mehnat kodeksi!</p>
						<p style={{ fontWeight: 700 }}>
							2. O‘zbekiston Respublikasining Qonuni, 08.08.2022 yildagi O‘RQ-788-son Davlat
							fuqarolik xizmati to‘g‘risida!
						</p>
						<p style={{ fontWeight: 700 }}>3. O‘zbekiston Respublikasi konstitutsiyasi!</p>
						<p>Berilgan hujjatlarni qaytadan ko‘rib chiqishingizni tavsiya qilamiz.</p>
					</>
				)}
			</h2>

			<button onClick={() => navigation(-1)} className={`${styles.button}`}>
				{percentageCorrect >= 50 ? 'Davom eting' : 'Yana urinib koring'}
			</button>
		</div>
	)
}

export default Result
