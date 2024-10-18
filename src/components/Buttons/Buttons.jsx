import PropTypes from 'prop-types';

import styles from './Buttons.module.css';

export const Buttons = ({ steps, activeIndex, setActiveIndex }) => {
	let firstStep = activeIndex === 0;
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
		<div className={styles['buttons-container']}>
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
		</div>
	);
};

Buttons.propTypes = {
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
