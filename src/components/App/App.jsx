import { useState } from 'react';

import { Title, Content, StepsList, Buttons } from '../../components';

import styles from './App.module.css';
import data from '../../data/data.json';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	// let firstStep = activeIndex === 0;
	// let lastStep = activeIndex === steps.length - 1;

	// const onStepClick = event => {
	// 	setActiveIndex(Number(event.target.innerText) - 1);
	// };

	// const onBackButtonClick = () => {
	// 	if (activeIndex === 0) {
	// 		return;
	// 	}
	// 	setActiveIndex(activeIndex - 1);
	// };

	// const onForwardButtonClick = () => {
	// 	if (activeIndex === steps.length - 1) {
	// 		return;
	// 	}
	// 	setActiveIndex(activeIndex + 1);
	// };

	// const onAgainButtonlick = () => {
	// 	setActiveIndex(0);
	// };

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				{/* Component - Title */}
				<Title title="Инструкция по готовке пельменей" />
				{/* <h1>Инструкция по готовке пельменей</h1> */}
				{/* End of component Title */}
				<div className={styles.steps}>
					{/* Component - Content */}
					<Content steps={steps} activeIndex={activeIndex} />
					{/* <div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div> */}
					{/* End of component Content */}
					{/* Component - StepsList */}
					<StepsList
						steps={steps}
						activeIndex={activeIndex}
						setActiveIndex={setActiveIndex}
					/>
					{/* <ul className={styles['steps-list']}>
						{steps.map((item, idx) => {
							return (
								<li
									key={item.id}
									className={
										styles['steps-item'] +
										' ' +
										(idx < activeIndex ? styles.done : '') +
										' ' +
										(idx === activeIndex ? styles.active : '')
									}
								>
									<button
										className={styles['steps-item-button']}
										onClick={onStepClick}
									>
										{Number(item.id)}
									</button>
									{item.title}
								</li>
							);
						})}
					</ul> */}
					{/* End of component StepsList */}
					{/* Component - Buttons */}
					<Buttons
						steps={steps}
						activeIndex={activeIndex}
						setActiveIndex={setActiveIndex}
					/>
					{/* <div className={styles['buttons-container']}>
						<button
							className={styles.button}
							disabled={firstStep}
							onClick={onBackButtonClick}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={lastStep ? onAgainButtonlick : onForwardButtonClick}
						>
							{lastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div> */}
					{/* End of component Buttons */}
				</div>
			</div>
		</div>
	);
};
