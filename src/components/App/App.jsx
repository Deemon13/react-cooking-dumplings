import styles from './App.module.css';
import data from '../../data/data.json';
import { useState } from 'react';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	// Можно задать 2 состояния — steps и activeIndex
	// console.log(steps);
	// console.log(activeIndex);

	let firstStep = activeIndex === 0;
	let lastStep = activeIndex === steps.length - 1;

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	const onStepClick = event => {
		setActiveIndex(Number(event.target.innerText) - 1);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{/* Для получения активного контента использйте steps и activeIndex */}
						{/* Контент соответственный шагу. Сейчас активен шаг 3 */}
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
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
					</ul>
					<ul className={styles['steps-list']}>
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
						<li className={styles['steps-item'] + ' ' + styles.done}>
							{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
							<button className={styles['steps-item-button']}>1</button>
							{/* При клике на кнопку установка выбранного шага в качестве активного */}
							Шаг 1
						</li>
						<li className={styles['steps-item'] + ' ' + styles.done}>
							<button className={styles['steps-item-button']}>2</button>
							Шаг 2
						</li>
						<li
							className={
								styles['steps-item'] +
								' ' +
								styles.done +
								' ' +
								styles.active
							}
						>
							<button className={styles['steps-item-button']}>3</button>
							Шаг 3
						</li>
						<li className={styles['steps-item']}>
							<button className={styles['steps-item-button']}>4</button>
							Шаг 4
						</li>
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} disabled={firstStep}>
							Назад
						</button>
						<button className={styles.button}>
							{lastStep ? 'Начать сначала' : 'Далее'}
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
