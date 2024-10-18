import PropTypes from 'prop-types';

import styles from './StepsList.module.css';

export const StepsList = ({ steps, activeIndex, setActiveIndex }) => {
	const onStepClick = event => {
		setActiveIndex(Number(event.target.innerText) - 1);
	};

	return (
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
	);
};

StepsList.propTypes = {
	steps: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string,
			content: PropTypes.string,
		}),
	),
	activeIndex: PropTypes.number,
	setActiveIndex: PropTypes.func,
};
