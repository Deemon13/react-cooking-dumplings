import PropTypes from 'prop-types';

import styles from './Button.module.css';

export const Button = ({ condition, activeIndex, onButtonClick, content }) => {
	const state = { condition: !condition };
	let firstStep = activeIndex === 0;

	return (
		<button
			className={styles.button}
			{...(state.condition ? { disabled: firstStep } : {})}
			// disabled={firstStep}
			onClick={onButtonClick}
		>
			{content}
		</button>
	);
};

Button.propTypes = {
	condition: PropTypes.bool,
	activeIndex: PropTypes.number,
	onButtonClick: PropTypes.func,
	content: PropTypes.string,
};
