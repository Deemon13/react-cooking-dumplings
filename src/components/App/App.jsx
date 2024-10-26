import { useState } from 'react';

import { Title, Content, StepsList, Button } from '../../components';

import styles from './App.module.css';
import data from '../../data/data.json';

export const App = () => {
	// eslint-disable-next-line no-unused-vars
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	let lastStep = activeIndex === steps.length - 1;

	const onBackButtonClick = () => {
		if (activeIndex === 0) {
			return;
		}
		setActiveIndex(activeIndex - 1);
	};

	const onForwardButtonClick = () => {
		if (activeIndex === steps.length - 1) {
			return;
		}
		setActiveIndex(activeIndex + 1);
	};

	const onAgainButtonlick = () => {
		setActiveIndex(0);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<Title title="Инструкция по готовке пельменей" />

				<div className={styles.steps}>
					<Content steps={steps} activeIndex={activeIndex} />

					<StepsList
						steps={steps}
						activeIndex={activeIndex}
						setActiveIndex={setActiveIndex}
					/>

					<div className={styles['buttons-container']}>
						<Button
							condition={false}
							activeIndex={activeIndex}
							onButtonClick={onBackButtonClick}
							content="Назад"
						/>
						<Button
							condition={true}
							onButtonClick={
								lastStep ? onAgainButtonlick : onForwardButtonClick
							}
							content={lastStep ? 'Начать сначала' : 'Далее'}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
